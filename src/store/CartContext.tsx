import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { ALL_PRODUCTS } from '../data/catalog'
import { sizesFor, type Product } from '../data/products'
import { CartContext, type CartContextValue, type CartItem } from './cart'

const STORAGE_KEY = 'omaria-cart'

const itemKey = (product: Pick<Product, 'line' | 'colorway'>, size: string) =>
  `${product.line}-${product.colorway}-${size}`

/**
 * Rehidrata un item guardado contra el catálogo actual: la foto (`hero`) es una
 * URL con hash que cambia en cada build y el precio puede haber subido, así que
 * ambos se vuelven a resolver desde los datos. Si la prenda o la talla ya no
 * existen, el item se descarta en vez de quedar roto en la bolsa.
 */
function reviveItem(raw: unknown): CartItem | null {
  if (typeof raw !== 'object' || raw === null) return null
  const { line, colorway, size, qty } = raw as Record<string, unknown>
  if (typeof line !== 'string' || typeof colorway !== 'string' || typeof size !== 'string') {
    return null
  }
  const product = ALL_PRODUCTS.find((p) => p.line === line && p.colorway === colorway)
  if (!product) return null
  // La talla se valida contra la línea: cada prenda tiene su propio rango.
  if (!sizesFor(product.line).includes(size)) return null

  const parsedQty = Math.floor(Number(qty))
  if (!Number.isFinite(parsedQty) || parsedQty <= 0) return null

  return {
    key: itemKey(product, size),
    line: product.line,
    colorway: product.colorway,
    size,
    price: product.price,
    hero: product.hero,
    qty: Math.min(parsedQty, 99),
  }
}

function readStoredCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.map(reviveItem).filter((it): it is CartItem => it !== null)
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(readStoredCart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // Modo privado o cuota llena: la bolsa sigue funcionando en memoria.
    }
  }, [items])

  const addItem = useCallback((product: Product, size: string, qty = 1) => {
    const key = itemKey(product, size)
    setItems((prev) => {
      const existing = prev.find((it) => it.key === key)
      if (existing) {
        return prev.map((it) => (it.key === key ? { ...it, qty: it.qty + qty } : it))
      }
      return [
        ...prev,
        {
          key,
          line: product.line,
          colorway: product.colorway,
          size,
          price: product.price,
          hero: product.hero,
          qty,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback(
    (key: string) => setItems((prev) => prev.filter((it) => it.key !== key)),
    [],
  )

  const setQty = useCallback(
    (key: string, qty: number) =>
      setItems((prev) =>
        qty <= 0
          ? prev.filter((it) => it.key !== key)
          : prev.map((it) => (it.key === key ? { ...it, qty } : it)),
      ),
    [],
  )

  const clear = useCallback(() => setItems([]), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, it) => sum + it.qty, 0)
    const subtotal = items.reduce((sum, it) => sum + it.qty * it.price, 0)
    return {
      items,
      count,
      subtotal,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      setQty,
      clear,
    }
  }, [items, isOpen, openCart, closeCart, addItem, removeItem, setQty, clear])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
