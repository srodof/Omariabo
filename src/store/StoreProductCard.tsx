import { useEffect, useRef, useState } from 'react'
import type { Product } from '../data/products'
import { sizesFor } from '../data/products'
import { useCart } from './cart'

export default function StoreProductCard({ product, siblings }: { product: Product; siblings: Product[] }) {
  const [active, setActive] = useState(product)
  const [size, setSize] = useState<string | null>(null)
  const [needsSize, setNeedsSize] = useState(false)
  const [justAdded, setJustAdded] = useState(false)
  const addedTimer = useRef(0)
  const { addItem } = useCart()

  // Al filtrar por categoría la tarjeta se desmonta; sin esto el timer seguía
  // vivo e intentaba actualizar el estado de un componente ya desmontado.
  useEffect(() => () => window.clearTimeout(addedTimer.current), [])

  const handleAdd = () => {
    if (!size) {
      setNeedsSize(true)
      return
    }
    addItem(active, size)
    setJustAdded(true)
    window.clearTimeout(addedTimer.current)
    addedTimer.current = window.setTimeout(() => setJustAdded(false), 1400)
  }

  return (
    <article className="s-product tilt">
      <div className="s-product__frame">
        <img className="s-product__img s-product__img--hero" src={active.hero} alt={`${active.line} ${active.colorway}`} loading="lazy" />
        <img className="s-product__img s-product__img--sec" src={active.sec} alt="" loading="lazy" aria-hidden="true" />
        <span className="s-product__price">Bs {active.price}</span>
      </div>
      <div className="s-product__info">
        <div className="s-product__line">{active.line}</div>
        <h4 className="s-product__name">{active.colorway}</h4>

        <div className="s-product__colors" role="group" aria-label={`Colores de ${product.line}`}>
          {siblings.map((p) => (
            <button
              key={p.colorway}
              type="button"
              className={`swatch${p.colorway === active.colorway ? ' is-active' : ''}`}
              style={{ ['--c' as string]: p.hex }}
              title={p.colorway}
              aria-label={p.colorway}
              aria-pressed={p.colorway === active.colorway}
              onClick={() => setActive(p)}
            />
          ))}
        </div>

        <div
          className={`s-product__sizes${needsSize ? ' is-warning' : ''}`}
          role="group"
          aria-label={`Tallas de ${product.line}`}
        >
          {sizesFor(product.line).map((s) => (
            <button
              key={s}
              type="button"
              className={`s-size${size === s ? ' is-active' : ''}`}
              aria-pressed={size === s}
              onClick={() => {
                setSize(s)
                setNeedsSize(false)
              }}
            >
              {s}
            </button>
          ))}
        </div>
        {needsSize && (
          <div className="s-product__hint" role="alert">
            Elegí tu talla ✦
          </div>
        )}

        <button type="button" className={`s-add magnetic${justAdded ? ' is-added' : ''}`} onClick={handleAdd}>
          {justAdded ? 'Agregado ✓' : 'Añadir a la bolsa ✦'}
        </button>
      </div>
    </article>
  )
}
