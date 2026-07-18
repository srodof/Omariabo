import { useRevealRef } from '../lib/gsap'

export default function Manifesto() {
  const ref = useRevealRef<HTMLElement>()
  return (
    <section className="manifesto wrap" id="manifesto" ref={ref}>
      <div className="eyebrow accent will-reveal">Nuestra filosofía</div>
      <p className="display will-reveal" data-delay="0.1">
        Diseñamos para el cuerpo en movimiento — un ajuste que se siente propio y un carácter que
        no pasa desapercibido.
      </p>
    </section>
  )
}
