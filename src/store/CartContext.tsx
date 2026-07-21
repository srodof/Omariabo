import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Product } from '../data/products'

export type CartItem = {
  key: string
  line: string
  colorway: string
  size: string
  price: number
  hero: string
  qty: number
}

const STORAGE_KEY = 'omaria-cart'

function readStoredCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as CartItem[]) : []
  } catch {
    return []
  }
}

type CartContextValue = {
  items: CartItem[]
  count: number
  subtotal: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (product: Product, size: string, qty?: number) => void
  removeItem: (key: string) => void
  setQty: (key: string, qty: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(readStoredCart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product: Product, size: string, qty = 1) => {
    const key = `${product.line}-${product.colorway}-${size}`
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
  }

  const removeItem = (key: string) => setItems((prev) => prev.filter((it) => it.key !== key))

  const setQty = (key: string, qty: number) =>
    setItems((prev) =>
      qty <= 0 ? prev.filter((it) => it.key !== key) : prev.map((it) => (it.key === key ? { ...it, qty } : it)),
    )

  const clear = () => setItems([])

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, it) => sum + it.qty, 0)
    const subtotal = items.reduce((sum, it) => sum + it.qty * it.price, 0)
    return {
      items,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      removeItem,
      setQty,
      clear,
    }
  }, [items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>')
  return ctx
}
