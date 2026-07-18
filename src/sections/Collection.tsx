import ProductCard from '../components/ProductCard'
import { TOPS, CROPTOPS, BIKERS } from '../data/products'
import { useRevealRef } from '../lib/gsap'

function Category({ id, title, desc, items }: { id: string; title: string; desc: string; items: typeof TOPS }) {
  const ref = useRevealRef<HTMLDivElement>()
  return (
    <div className="category" id={id} ref={ref}>
      <div className="category__head">
        <h3 className="display will-reveal">{title}</h3>
        <p className="will-reveal" data-delay="0.05">
          {desc}
        </p>
      </div>
      <div className="grid">
        {items.map((product) => (
          <ProductCard key={`${product.line}-${product.colorway}`} product={product} siblings={items} />
        ))}
      </div>
    </div>
  )
}

export default function Collection() {
  const headRef = useRevealRef<HTMLDivElement>()
  return (
    <section className="section-pad" id="coleccion">
      <div className="wrap">
        <div className="section-head" ref={headRef}>
          <div className="eyebrow accent will-reveal">Colección principal</div>
          <h2 className="display will-reveal" data-delay="0.05">
            La colección
          </h2>
          <p className="will-reveal" data-delay="0.1">
            Tres líneas pensadas para moverse juntas: bases en algodón suave, tops deportivos de
            soporte y bikers de tiro alto — todas con el mismo ajuste OMARIA en siete colores.
          </p>
        </div>

        <Category
          id="cat-tops"
          title="Tops"
          desc="Crop tops de algodón suave, silueta relajada y cuello redondo — la base perfecta para capas o para lucir solos."
          items={TOPS}
        />
        <Category
          id="cat-croptops"
          title="Croptops"
          desc="Tops deportivos de tiro ajustado, espalda cruzada y detalles asimétricos — soporte con estilo para cualquier entrenamiento."
          items={CROPTOPS}
        />
        <Category
          id="cat-bikers"
          title="Calzas Bikers"
          desc="Shorts biker de tiro alto, silueta ceñida y cintura ancha sin costuras visibles."
          items={BIKERS}
        />
      </div>
    </section>
  )
}
