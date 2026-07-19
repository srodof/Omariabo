import auraAzulHero from '../assets/photos/aura_azul_hero.jpg'
import auraAzulSec from '../assets/photos/aura_azul_sec.jpg'
import auraCacaoHero from '../assets/photos/aura_cacao_hero.jpg'
import auraCacaoSec from '../assets/photos/aura_cacao_sec.jpg'
import auraFucsiaHero from '../assets/photos/aura_fucsia_hero.jpg'
import auraFucsiaSec from '../assets/photos/aura_fucsia_sec.jpg'
import auraLilaHero from '../assets/photos/aura_lila_hero.jpg'
import auraMentaHero from '../assets/photos/aura_menta_hero.jpg'
import auraMentaSec from '../assets/photos/aura_menta_sec.jpg'
import auraNegroHero from '../assets/photos/aura_negro_hero.jpg'
import auraNegroSec from '../assets/photos/aura_negro_sec.jpg'

import novaAzulHero from '../assets/photos/nova_azul_hero.jpg'
import novaAzulSec from '../assets/photos/nova_azul_sec.jpg'
import novaCacaoHero from '../assets/photos/nova_cacao_hero.jpg'
import novaCacaoSec from '../assets/photos/nova_cacao_sec.jpg'
import novaLilaHero from '../assets/photos/nova_lila_hero.jpg'
import novaLilaSec from '../assets/photos/nova_lila_sec.jpg'
import novaMentaHero from '../assets/photos/nova_menta_hero.jpg'
import novaMentaSec from '../assets/photos/nova_menta_sec.jpg'
import novaNegroHero from '../assets/photos/nova_negro_hero.jpg'

import croptopBlancoHero from '../assets/photos/croptop_blanco_hero.jpg'
import croptopBlancoSec from '../assets/photos/croptop_blanco_sec.jpg'
import croptopNegroHero from '../assets/photos/croptop_negro_hero.jpg'
import croptopNegroSec from '../assets/photos/croptop_negro_sec.jpg'

import bikerFucsiaHero from '../assets/photos/biker_fucsia_hero.jpg'
import bikerAzulHero from '../assets/photos/biker_azul_hero.jpg'
import bikerMentaHero from '../assets/photos/biker_menta_hero.jpg'
import bikerNegroHero from '../assets/photos/biker_negro_hero.jpg'

import cortasAzulHero from '../assets/photos/cortas_azul_hero.jpg'
import cortasAzulSec from '../assets/photos/cortas_azul_sec.jpg'
import cortasCacaoHero from '../assets/photos/cortas_cacao_hero.jpg'
import cortasCacaoSec from '../assets/photos/cortas_cacao_sec.jpg'
import cortasFucsiaHero from '../assets/photos/cortas_fucsia_hero.jpg'
import cortasFucsiaSec from '../assets/photos/cortas_fucsia_sec.jpg'
import cortasLilaHero from '../assets/photos/cortas_lila_hero.jpg'
import cortasLilaSec from '../assets/photos/cortas_lila_sec.jpg'
import cortasMentaHero from '../assets/photos/cortas_menta_hero.jpg'
import cortasMentaSec from '../assets/photos/cortas_menta_sec.jpg'
import cortasNegroHero from '../assets/photos/cortas_negro_hero.jpg'
import cortasNegroSec from '../assets/photos/cortas_negro_sec.jpg'

export type Product = {
  line: string
  colorway: string
  hex: string
  hero: string
  sec: string
  price: number
}

export const SIZES = 'XS · S · M · L · XL'

// Colores reales disponibles en las fotos entregadas (2026-07-18).
export const TOP_AURA: Product[] = [
  { line: 'Top Aura', colorway: 'Negro', hex: '#1a1a1a', hero: auraNegroHero, sec: auraNegroSec, price: 175 },
  { line: 'Top Aura', colorway: 'Azul', hex: '#2f4fd6', hero: auraAzulHero, sec: auraAzulSec, price: 175 },
  { line: 'Top Aura', colorway: 'Fucsia', hex: '#ec1f8f', hero: auraFucsiaHero, sec: auraFucsiaSec, price: 175 },
  { line: 'Top Aura', colorway: 'Menta', hex: '#8fe0d4', hero: auraMentaHero, sec: auraMentaSec, price: 175 },
  { line: 'Top Aura', colorway: 'Lila', hex: '#b98ee0', hero: auraLilaHero, sec: auraLilaHero, price: 175 },
  { line: 'Top Aura', colorway: 'Cacao', hex: '#a98a95', hero: auraCacaoHero, sec: auraCacaoSec, price: 175 },
]

export const TOP_NOVA: Product[] = [
  { line: 'Top Nova', colorway: 'Negro', hex: '#1a1a1a', hero: novaNegroHero, sec: novaNegroHero, price: 175 },
  { line: 'Top Nova', colorway: 'Azul', hex: '#2f4fd6', hero: novaAzulHero, sec: novaAzulSec, price: 175 },
  { line: 'Top Nova', colorway: 'Menta', hex: '#8fe0d4', hero: novaMentaHero, sec: novaMentaSec, price: 175 },
  { line: 'Top Nova', colorway: 'Lila', hex: '#b98ee0', hero: novaLilaHero, sec: novaLilaSec, price: 175 },
  { line: 'Top Nova', colorway: 'Cacao', hex: '#a98a95', hero: novaCacaoHero, sec: novaCacaoSec, price: 175 },
]

export const CROP_TOPS: Product[] = [
  { line: 'Crop Top', colorway: 'Blanco', hex: '#f5f4f0', hero: croptopBlancoHero, sec: croptopBlancoSec, price: 145 },
  { line: 'Crop Top', colorway: 'Negro', hex: '#1a1a1a', hero: croptopNegroHero, sec: croptopNegroSec, price: 145 },
]

export const CALZAS_BIKER: Product[] = [
  { line: 'Calzas Biker', colorway: 'Negro', hex: '#1a1a1a', hero: bikerNegroHero, sec: bikerNegroHero, price: 185 },
  { line: 'Calzas Biker', colorway: 'Azul', hex: '#2f4fd6', hero: bikerAzulHero, sec: bikerAzulHero, price: 185 },
  { line: 'Calzas Biker', colorway: 'Fucsia', hex: '#ec1f8f', hero: bikerFucsiaHero, sec: bikerFucsiaHero, price: 185 },
  { line: 'Calzas Biker', colorway: 'Menta', hex: '#8fe0d4', hero: bikerMentaHero, sec: bikerMentaHero, price: 185 },
]

export const CALZAS_CORTAS: Product[] = [
  { line: 'Calzas Cortas', colorway: 'Negro', hex: '#1a1a1a', hero: cortasNegroHero, sec: cortasNegroSec, price: 175 },
  { line: 'Calzas Cortas', colorway: 'Azul', hex: '#2f4fd6', hero: cortasAzulHero, sec: cortasAzulSec, price: 175 },
  { line: 'Calzas Cortas', colorway: 'Fucsia', hex: '#ec1f8f', hero: cortasFucsiaHero, sec: cortasFucsiaSec, price: 175 },
  { line: 'Calzas Cortas', colorway: 'Menta', hex: '#8fe0d4', hero: cortasMentaHero, sec: cortasMentaSec, price: 175 },
  { line: 'Calzas Cortas', colorway: 'Lila', hex: '#b98ee0', hero: cortasLilaHero, sec: cortasLilaSec, price: 175 },
  { line: 'Calzas Cortas', colorway: 'Cacao', hex: '#a98a95', hero: cortasCacaoHero, sec: cortasCacaoSec, price: 175 },
]

export function linePalette(items: Product[]) {
  const seen = new Set<string>()
  const out: { colorway: string; hex: string }[] = []
  for (const { colorway, hex } of items) {
    if (!seen.has(colorway)) {
      seen.add(colorway)
      out.push({ colorway, hex })
    }
  }
  return out
}
