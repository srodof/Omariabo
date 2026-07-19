import { useRef } from 'react'
import coverImg from '../assets/photos/cover.jpg'
import isotipoWhite from '../assets/photos/isotipo_white.png'
import { useMouseParallax, useMagnetic } from '../lib/interactions'
import { useGsap, gsap } from '../lib/gsap'

export default function Cover() {
  const scope = useRef<HTMLElement>(null)
  useMouseParallax(scope, 1200)
  useMagnetic(scope)

  useGsap(scope, () => {
    const tl = gsap.timeline({ delay: 0.2 })
    tl.fromTo(scope.current!.querySelectorAll('.cover-in'), { opacity: 0, y: 24 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.12,
    })
    tl.fromTo(
      scope.current!.querySelector('.cover__img'),
      { scale: 1.08 },
      { scale: 1, duration: 1.6, ease: 'power2.out' },
      0,
    )
  })

  const scrollToCollection = () => {
    document.getElementById('coleccion')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="cover" id="cover" ref={scope}>
      <img className="cover__img" src={coverImg} alt="Modelo usando crop top blanco y calza lila OMARIA" />
      <div className="cover__scrim" />
      <div className="cover__top cover-in">
        <div className="cover__mark" data-depth="0.4">
          <img src={isotipoWhite} alt="Isotipo OMARIA" />
          <div className="cover__wordmark">
            Omaria
            <span>Sportswear</span>
          </div>
        </div>
        <div className="eyebrow on-dark">Catálogo digital</div>
      </div>
      <div className="cover__bottom wrap">
        <div className="eyebrow on-dark cover-in" data-depth="0.6">
          Colección 2026
        </div>
        <h1 className="cover__title display cover-in" data-depth="1">
          Esencia
        </h1>
        <p className="cover__slogan cover-in" data-depth="0.8">
          Fuerza que se mueve contigo. Prendas deportivas diseñadas para acompañar cada versión de
          ti.
        </p>
        <button className="cover__scroll cover-in magnetic" onClick={scrollToCollection}>
          Descubre la colección
        </button>
      </div>
    </section>
  )
}
