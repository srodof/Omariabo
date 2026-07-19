import ProductCard from '../components/ProductCard'
import { TOP_AURA, TOP_NOVA, CROP_TOPS, CALZAS_BIKER } from '../data/products'
import { useRevealRef } from '../lib/gsap'

function Category({
  id,
  title,
  desc,
  items,
}: {
  id: string
  title: string
  desc: string
  items: typeof TOP_AURA
}) {
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

function ComingSoon({ id, title, desc }: { id: string; title: string; desc: string }) {
  const ref = useRevealRef<HTMLDivElement>()
  return (
    <div className="category" id={id} ref={ref}>
      <div className="category__head">
        <h3 className="display will-reveal">{title}</h3>
        <p className="will-reveal" data-delay="0.05">
          {desc}
        </p>
      </div>
      <div className="coming-soon will-reveal" data-delay="0.1">
        Próximamente
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
            Cuatro líneas pensadas para moverse juntas: dos siluetas de top deportivo, un crop top
            de algodón y calzas biker de tiro alto — con el mismo ajuste OMARIA en cada color.
          </p>
        </div>

        <Category
          id="cat-top-aura"
          title="Top Aura"
          desc="Top deportivo con espalda cruzada y tiras dobles — soporte con estilo para cualquier entrenamiento."
          items={TOP_AURA}
        />
        <Category
          id="cat-top-nova"
          title="Top Nova"
          desc="Top deportivo racerback con recorte trasero — silueta más deportiva, ajuste igual de cómodo."
          items={TOP_NOVA}
        />
        <Category
          id="cat-croptops"
          title="Crop Tops"
          desc="Crop tops de algodón suave, silueta relajada y cuello redondo — la base perfecta para capas o para lucir solos."
          items={CROP_TOPS}
        />
        <Category
          id="cat-bikers"
          title="Calzas Biker"
          desc="Shorts biker de tiro alto, silueta ceñida y cintura ancha sin costuras visibles."
          items={CALZAS_BIKER}
        />
        <ComingSoon
          id="cat-cortas"
          title="Calzas Cortas"
          desc="Nueva silueta de calza corta, disponible muy pronto en los mismos colores de la colección."
        />
      </div>
    </section>
  )
}
