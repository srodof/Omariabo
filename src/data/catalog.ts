import type { Product } from './products'
import { TOP_AURA, TOP_NOVA, CROP_TOPS, CALZAS_BIKER, CALZAS_CORTAS } from './products'

export type Category = {
  id: string
  label: string
  items: Product[]
}

export const CATEGORIES: Category[] = [
  { id: 'top-aura', label: 'Top Aura', items: TOP_AURA },
  { id: 'top-nova', label: 'Top Nova', items: TOP_NOVA },
  { id: 'crop-tops', label: 'Crop Tops', items: CROP_TOPS },
  { id: 'calzas-biker', label: 'Calzas Biker', items: CALZAS_BIKER },
  { id: 'calzas-cortas', label: 'Calzas Cortas', items: CALZAS_CORTAS },
]

export const ALL_PRODUCTS: Product[] = CATEGORIES.flatMap((c) => c.items)
