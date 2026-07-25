import auraNegroHero from '../assets/photos/aura_negro_hero.jpg'
import auraFucsiaHero from '../assets/photos/aura_fucsia_hero.jpg'
import combinacion3 from '../assets/photos/Combinación 3.jpg'
import combinacion4 from '../assets/photos/Combinación 4.jpg'
import combinacion5 from '../assets/photos/Combinación 5.jpg'

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
    title: 'Pastel Crush',
    desc: 'Top Aura Lila + Calzas Biker Menta — el mix de pasteles que combina fuerza y frescura en un mismo look.',
    img: combinacion3,
    pieces: [
      { line: 'Top Aura', colorway: 'Lila', hex: '#b98ee0' },
      { line: 'Calzas Biker', colorway: 'Menta', hex: '#8fe0d4' },
    ],
  },
  {
    title: 'Suede Mint',
    desc: 'Top Nova Menta + Calzas Biker Cacao — el contraste suave entre menta y cacao para un training con estilo.',
    img: combinacion4,
    pieces: [
      { line: 'Top Nova', colorway: 'Menta', hex: '#8fe0d4' },
      { line: 'Calzas Biker', colorway: 'Cacao', hex: '#a98a95' },
    ],
  },
  {
    title: 'Cacao Noir',
    desc: 'Top Aura Cacao + Calzas Biker Negro — la combinación neutra y elegante para cualquier rutina.',
    img: combinacion5,
    pieces: [
      { line: 'Top Aura', colorway: 'Cacao', hex: '#a98a95' },
      { line: 'Calzas Biker', colorway: 'Negro', hex: '#1a1a1a' },
    ],
  },
]
