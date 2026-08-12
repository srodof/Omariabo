import { createContext, useContext } from 'react'
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

export type CartContextValue = {
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

export const CartContext = createContext<CartContextValue | null>(null)

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>')
  return ctx
}
