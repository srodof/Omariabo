import { LOOKS } from '../data/looks'
import { useRevealRef } from '../lib/gsap'

function LookCard({ look, index }: { look: (typeof LOOKS)[number]; index: number }) {
  const ref = useRevealRef<HTMLElement>()
  return (
    <article className="look" ref={ref}>
      <div className="look__frame will-reveal tilt">
        <img src={look.img} alt={`Look ${look.title}`} loading="lazy" />
      </div>
      <div className="will-reveal" data-delay="0.1">
        <div className="eyebrow accent look__eyebrow">Look {String(index + 1).padStart(2, '0')}</div>
        <h3 className="display">{look.title}</h3>
        <p className="desc">{look.desc}</p>
        <div className="look__pieces">
          {look.pieces.map((p) => (
            <div className="look__piece" key={p.line}>
              <span className="swatch" style={{ ['--c' as string]: p.hex }} />
              <span>
                <b>{p.line}</b> {p.colorway}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Looks() {
  const headRef = useRevealRef<HTMLDivElement>()
  return (
    <section className="section-pad" id="looks" style={{ background: 'var(--paper-deep)' }}>
      <div className="wrap">
        <div className="section-head" ref={headRef}>
          <div className="eyebrow accent will-reveal">Looks completos</div>
          <h2 className="display will-reveal" data-delay="0.05">
            Combina la colección
          </h2>
          <p className="will-reveal" data-delay="0.1">
            Cuatro formas de llevar OMARIA de principio a fin, combinando piezas de las tres
            líneas.
          </p>
        </div>
        <div className="looks-wrap">
          {LOOKS.map((look, i) => (
            <LookCard key={look.title} look={look} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
