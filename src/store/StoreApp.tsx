import { useMemo, useState } from 'react'
import coverImg from '../assets/photos/cover.jpg'
import { CATEGORIES } from '../data/catalog'
import { CartProvider } from './CartContext'
import StoreHeader from './StoreHeader'
import CategoryTabs from './CategoryTabs'
import StoreProductCard from './StoreProductCard'
import CartDrawer from './CartDrawer'

function StorePage() {
  const [category, setCategory] = useState('todas')

  const visible = useMemo(
    () => (category === 'todas' ? CATEGORIES : CATEGORIES.filter((c) => c.id === category)),
    [category],
  )

  return (
    <>
      <StoreHeader />
      <section className="s-hero">
        <img className="s-hero__img" src={coverImg} alt="Modelo usando ropa deportiva OMARIA" />
        <div className="s-hero__scrim" />
        <div className="wrap s-hero__content">
          <div className="eyebrow on-dark">La tienda</div>
          <h1 className="display s-hero__title">Elegí, armá tu bolsa y pedila por WhatsApp.</h1>
        </div>
      </section>

      <main className="wrap s-main">
        <CategoryTabs active={category} onChange={setCategory} />

        {visible.map((cat) => (
          <div className="s-category" key={cat.id}>
            <h3 className="s-category__title display">{cat.label}</h3>
            <div className="s-grid">
              {cat.items.map((product) => (
                <StoreProductCard
                  key={`${product.line}-${product.colorway}`}
                  product={product}
                  siblings={cat.items}
                />
              ))}
            </div>
          </div>
        ))}
      </main>

      <CartDrawer />
    </>
  )
}

export default function StoreApp() {
  return (
    <CartProvider>
      <StorePage />
    </CartProvider>
  )
}
