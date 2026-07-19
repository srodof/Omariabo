import auraNegroHero from '../assets/photos/aura_negro_hero.jpg'
import auraFucsiaHero from '../assets/photos/aura_fucsia_hero.jpg'
import novaMentaHero from '../assets/photos/nova_menta_hero.jpg'
import novaLilaHero from '../assets/photos/nova_lila_hero.jpg'

export type Look = {
  title: string
  desc: string
  img: string
  pieces: { line: string; colorway: string; hex: string }[]
}

export const LOOKS: Look[] = [
  {
    title: 'Mood Onyx',
    desc: 'Top Aura Negro + Calzas Biker Negro — el total black para entrenar con actitud, de la sala de pesas al after.',
    img: auraNegroHero,
    pieces: [
      { line: 'Top Aura', colorway: 'Negro', hex: '#1a1a1a' },
      { line: 'Calzas Biker', colorway: 'Negro', hex: '#1a1a1a' },
    ],
  },
  {
    title: 'Fucsia Energy',
    desc: 'Top Aura Fucsia + Calzas Biker Fucsia — el color que no pasa desapercibido, ideal para clases de alta intensidad.',
    img: auraFucsiaHero,
    pieces: [
      { line: 'Top Aura', colorway: 'Fucsia', hex: '#ec1f8f' },
      { line: 'Calzas Biker', colorway: 'Fucsia', hex: '#ec1f8f' },
    ],
  },
  {
    title: 'Menta Fresh',
    desc: 'Top Nova Menta + Calzas Biker Menta — un tono suave y versátil para yoga, pilates o el día a día.',
    img: novaMentaHero,
    pieces: [
      { line: 'Top Nova', colorway: 'Menta', hex: '#8fe0d4' },
      { line: 'Calzas Biker', colorway: 'Menta', hex: '#8fe0d4' },
    ],
  },
  {
    title: 'Bloom Lila',
    desc: 'Top Nova Lila — silueta racerback en un tono lila que combina con básicos negros o blancos.',
    img: novaLilaHero,
    pieces: [{ line: 'Top Nova', colorway: 'Lila', hex: '#b98ee0' }],
  },
]
