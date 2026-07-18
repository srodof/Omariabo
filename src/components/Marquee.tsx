import { useRef } from 'react'
import { useLayoutEffect } from 'react'
import { gsap, prefersReducedMotion } from '../lib/gsap'

const WORDS = ['FUERZA', 'MOVIMIENTO', 'ESTILO', 'EMPODERAMIENTO', 'RENDIMIENTO']

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null)
  const words = [...WORDS, ...WORDS]

  useLayoutEffect(() => {
    if (!trackRef.current || prefersReducedMotion()) return
    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      repeat: -1,
      ease: 'none',
      duration: 26,
    })
    return () => {
      tween.kill()
    }
  }, [])

  return (
    <div className="marquee">
      <div className="marquee__track" ref={trackRef}>
        {words.map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </div>
    </div>
  )
}
