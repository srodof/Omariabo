import { useCart } from './CartContext'

export default function StoreHeader() {
  const { count, openCart } = useCart()
  return (
    <header className="s-header">
      <div className="wrap s-header__row">
        <a className="s-header__mark" href="/">
          <div className="s-header__wordmark">
            Omaria
            <span>Sportswear</span>
          </div>
        </a>
        <nav className="s-header__nav">
          <a href="/">← Catálogo</a>
        </nav>
        <button type="button" className="s-header__bag magnetic" onClick={openCart}>
          Bolsa
          <span className="s-header__count">{count}</span>
        </button>
      </div>
    </header>
  )
}
