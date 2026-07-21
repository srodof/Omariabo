import { site } from '../data/site'
import type { CartItem } from './CartContext'

export function buildOrderMessage(items: CartItem[], subtotal: number) {
  const lines = items.map(
    (it, i) => `${i + 1}. ${it.line} — ${it.colorway} — Talla ${it.size} ×${it.qty} — Bs ${it.price * it.qty}`,
  )
  return [
    'Hola OMARIA, quiero hacer este pedido:',
    '',
    ...lines,
    '',
    `Total: Bs ${subtotal}`,
    '',
    'Nombre:',
    'Ciudad y dirección de entrega:',
  ].join('\n')
}

export function whatsappOrderUrl(items: CartItem[], subtotal: number) {
  const text = encodeURIComponent(buildOrderMessage(items, subtotal))
  return `https://wa.me/${site.whatsapp}?text=${text}`
}
