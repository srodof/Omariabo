import onyxTopHero from '../assets/photos/onyx_top_hero.jpg'
import onyxTopSec from '../assets/photos/onyx_top_sec.jpg'
import onyxCropHero from '../assets/photos/onyx_crop_hero.jpg'
import onyxCropSec from '../assets/photos/onyx_crop_sec.jpg'
import onyxBikersHero from '../assets/photos/onyx_bikers_hero.jpg'
import onyxBikersSec from '../assets/photos/onyx_bikers_sec.jpg'
import cloudTopHero from '../assets/photos/cloud_top_hero.jpg'
import cloudTopSec from '../assets/photos/cloud_top_sec.jpg'
import orchidCropHero from '../assets/photos/orchid_crop_hero.jpg'
import orchidCropSec from '../assets/photos/orchid_crop_sec.jpg'
import orchidBikersHero from '../assets/photos/orchid_bikers_hero.jpg'
import orchidBikersSec from '../assets/photos/orchid_bikers_sec.jpg'
import mintCropHero from '../assets/photos/mint_crop_hero.jpg'
import mintCropSec from '../assets/photos/mint_crop_sec.jpg'
import mintBikersHero from '../assets/photos/mint_bikers_hero.jpg'
import mintBikersSec from '../assets/photos/mint_bikers_sec.jpg'
import fucsiaCropHero from '../assets/photos/fucsia_crop_hero.jpg'
import fucsiaCropSec from '../assets/photos/fucsia_crop_sec.jpg'
import fucsiaBikersHero from '../assets/photos/fucsia_bikers_hero.jpg'
import fucsiaBikersSec from '../assets/photos/fucsia_bikers_sec.jpg'
import cacaoCropHero from '../assets/photos/cacao_crop_hero.jpg'
import cacaoCropSec from '../assets/photos/cacao_crop_sec.jpg'
import cacaoBikersHero from '../assets/photos/cacao_bikers_hero.jpg'
import cobaltoCropHero from '../assets/photos/cobalto_crop_hero.jpg'
import cobaltoCropSec from '../assets/photos/cobalto_crop_sec.jpg'
import cobaltoBikersHero from '../assets/photos/cobalto_bikers_hero.jpg'
import cobaltoBikersSec from '../assets/photos/cobalto_bikers_sec.jpg'

export type Product = {
  line: string
  colorway: string
  hex: string
  hero: string
  sec: string
  price: number
}

export const SIZES = 'XS · S · M · L · XL'

export const TOPS: Product[] = [
  { line: 'Top Essential', colorway: 'Onyx', hex: '#1b1a18', hero: onyxTopHero, sec: onyxTopSec, price: 145 },
  { line: 'Top Essential', colorway: 'Cloud', hex: '#f3efe6', hero: cloudTopHero, sec: cloudTopSec, price: 145 },
]

export const CROPTOPS: Product[] = [
  { line: 'Croptop Aura', colorway: 'Onyx', hex: '#1b1a18', hero: onyxCropHero, sec: onyxCropSec, price: 175 },
  { line: 'Croptop Aura', colorway: 'Orquídea', hex: '#b47bc7', hero: orchidCropHero, sec: orchidCropSec, price: 175 },
  { line: 'Croptop Aura', colorway: 'Menta', hex: '#cfe7dc', hero: mintCropHero, sec: mintCropSec, price: 175 },
  { line: 'Croptop Aura', colorway: 'Fucsia', hex: '#ee1c79', hero: fucsiaCropHero, sec: fucsiaCropSec, price: 175 },
  { line: 'Croptop Aura', colorway: 'Cacao', hex: '#b48f78', hero: cacaoCropHero, sec: cacaoCropSec, price: 175 },
  { line: 'Croptop Aura', colorway: 'Cobalto', hex: '#2b3aa0', hero: cobaltoCropHero, sec: cobaltoCropSec, price: 175 },
]

export const BIKERS: Product[] = [
  { line: 'Bikers Flow', colorway: 'Onyx', hex: '#1b1a18', hero: onyxBikersHero, sec: onyxBikersSec, price: 185 },
  { line: 'Bikers Flow', colorway: 'Orquídea', hex: '#b47bc7', hero: orchidBikersHero, sec: orchidBikersSec, price: 185 },
  { line: 'Bikers Flow', colorway: 'Menta', hex: '#cfe7dc', hero: mintBikersHero, sec: mintBikersSec, price: 185 },
  { line: 'Bikers Flow', colorway: 'Fucsia', hex: '#ee1c79', hero: fucsiaBikersHero, sec: fucsiaBikersSec, price: 185 },
  { line: 'Bikers Flow', colorway: 'Cacao', hex: '#b48f78', hero: cacaoBikersHero, sec: cacaoCropSec, price: 185 },
  { line: 'Bikers Flow', colorway: 'Cobalto', hex: '#2b3aa0', hero: cobaltoBikersHero, sec: cobaltoBikersSec, price: 185 },
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
