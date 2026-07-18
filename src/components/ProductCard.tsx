import type { Product } from '../data/products'
import { linePalette, SIZES } from '../data/products'

export default function ProductCard({ product, siblings }: { product: Product; siblings: Product[] }) {
  const palette = linePalette(siblings)
  return (
    <article className="product will-reveal tilt">
      <div className="product__frame">
        <img
          className="product__img product__img--hero"
          src={product.hero}
          alt={`${product.line} ${product.colorway} — fotografía principal`}
          loading="lazy"
        />
        <img
          className="product__img product__img--sec"
          src={product.sec}
          alt={`${product.line} ${product.colorway} — detalle secundario`}
          loading="lazy"
        />
        <span className="product__price">Bs {product.price}</span>
      </div>
      <div className="product__info">
        <div className="product__line">{product.line}</div>
        <h4 className="product__name">{product.colorway}</h4>
        <div className="product__meta">
          <div className="product__colors" aria-label="Colores disponibles">
            {palette.map(({ colorway, hex }) => (
              <span
                key={colorway}
                className={`swatch${colorway === product.colorway ? ' is-active' : ''}`}
                style={{ ['--c' as string]: hex }}
                title={colorway}
              />
            ))}
          </div>
          <div className="product__sizes">{SIZES}</div>
        </div>
      </div>
    </article>
  )
}
