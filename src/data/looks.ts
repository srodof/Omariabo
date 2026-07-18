import lookOnyx from '../assets/photos/look_onyx.jpg'
import lookOrchid from '../assets/photos/look_orchid.jpg'
import cloudTopHero from '../assets/photos/cloud_top_hero.jpg'
import cacaoBikersHero from '../assets/photos/cacao_bikers_hero.jpg'

export type Look = {
  title: string
  desc: string
  img: string
  pieces: { line: string; colorway: string; hex: string }[]
}

export const LOOKS: Look[] = [
  {
    title: 'Mood Onyx',
    desc: 'Croptop Aura Onyx + Bikers Flow Onyx — el total black para entrenar con actitud, de la sala de pesas al after.',
    img: lookOnyx,
    pieces: [
      { line: 'Croptop Aura', colorway: 'Onyx', hex: '#1b1a18' },
      { line: 'Bikers Flow', colorway: 'Onyx', hex: '#1b1a18' },
    ],
  },
  {
    title: 'Cloud & Orquídea',
    desc: 'Top Essential Cloud + Bikers Flow Orquídea — contraste suave entre algodón y color para un look casual-activo.',
    img: cloudTopHero,
    pieces: [
      { line: 'Top Essential', colorway: 'Cloud', hex: '#f3efe6' },
      { line: 'Bikers Flow', colorway: 'Orquídea', hex: '#b47bc7' },
    ],
  },
  {
    title: 'Bloom Orquídea',
    desc: 'Croptop Aura Orquídea + Bikers Flow Orquídea — el set monocromático para destacar en cualquier clase.',
    img: lookOrchid,
    pieces: [
      { line: 'Croptop Aura', colorway: 'Orquídea', hex: '#b47bc7' },
      { line: 'Bikers Flow', colorway: 'Orquídea', hex: '#b47bc7' },
    ],
  },
  {
    title: 'Golden Cacao',
    desc: 'Croptop Aura Cacao + Bikers Flow Cacao — un tono cálido y versátil, de la esterilla de yoga a la calle.',
    img: cacaoBikersHero,
    pieces: [
      { line: 'Croptop Aura', colorway: 'Cacao', hex: '#b48f78' },
      { line: 'Bikers Flow', colorway: 'Cacao', hex: '#b48f78' },
    ],
  },
]
