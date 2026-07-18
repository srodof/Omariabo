import { useEffect, useRef, useState } from 'react'

const ITEMS = [
  { id: 'cover', label: 'Portada' },
  { id: 'coleccion', label: 'Colección' },
  { id: 'looks', label: 'Looks' },
  { id: 'contacto', label: 'Contacto' },
]

const DARK_SECTIONS = new Set(['contacto'])

export default function RailNav() {
  const [active, setActive] = useState('cover')
  const [onDark, setOnDark] = useState(false)
  const offsets = useRef<number[]>([])
  const ticking = useRef(false)

  useEffect(() => {
    const sections = ITEMS.map(({ id }) => document.getElementById(id))

    const measure = () => {
      offsets.current = sections.map((s) => s?.offsetTop ?? 0)
    }

    const apply = () => {
      const pos = window.scrollY + window.innerHeight * 0.4
      let idx = 0
      for (let i = 0; i < offsets.current.length; i++) {
        if (offsets.current[i] <= pos) idx = i
      }
      const current = ITEMS[idx].id
      setActive(current)
      setOnDark(DARK_SECTIONS.has(current))
      ticking.current = false
    }

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(apply)
        ticking.current = true
      }
    }

    measure()
    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    window.addEventListener('load', measure)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      window.removeEventListener('load', measure)
    }
  }, [])

  return (
    <nav className={`railnav${onDark ? ' on-dark' : ''}`}>
      {ITEMS.map(({ id, label }) => (
        <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''}>
          <span className="dot" />
          {label}
        </a>
      ))}
    </nav>
  )
}
