import { useState } from 'react'
import type { Product } from '../data/products'
import { SIZE_LIST } from '../data/products'
import { useCart } from './CartContext'

export default function StoreProductCard({ product, siblings }: { product: Product; siblings: Product[] }) {
  const [active, setActive] = useState(product)
  const [size, setSize] = useState<string | null>(null)
  const [needsSize, setNeedsSize] = useState(false)
  const [justAdded, setJustAdded] = useState(false)
  const { addItem } = useCart()

  const handleAdd = () => {
    if (!size) {
      setNeedsSize(true)
      return
    }
    addItem(active, size)
    setJustAdded(true)
    window.setTimeout(() => setJustAdded(false), 1400)
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

        <div className="s-product__colors" aria-label="Colores disponibles">
          {siblings.map((p) => (
            <button
              key={p.colorway}
              type="button"
              className={`swatch${p.colorway === active.colorway ? ' is-active' : ''}`}
              style={{ ['--c' as string]: p.hex }}
              title={p.colorway}
              onClick={() => setActive(p)}
            />
          ))}
        </div>

        <div className={`s-product__sizes${needsSize ? ' is-warning' : ''}`}>
          {SIZE_LIST.map((s) => (
            <button
              key={s}
              type="button"
              className={`s-size${size === s ? ' is-active' : ''}`}
              onClick={() => {
                setSize(s)
                setNeedsSize(false)
              }}
            >
              {s}
            </button>
          ))}
        </div>
        {needsSize && <div className="s-product__hint">Elegí tu talla ✦</div>}

        <button type="button" className={`s-add magnetic${justAdded ? ' is-added' : ''}`} onClick={handleAdd}>
          {justAdded ? 'Agregado ✓' : 'Añadir a la bolsa ✦'}
        </button>
      </div>
    </article>
  )
}
