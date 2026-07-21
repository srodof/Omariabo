import { useCart } from './CartContext'
import { whatsappOrderUrl } from './whatsapp'

export default function CartDrawer() {
  const { items, count, subtotal, isOpen, closeCart, removeItem, setQty } = useCart()

  return (
    <>
      <div className={`s-scrim${isOpen ? ' is-open' : ''}`} onClick={closeCart} />
      <aside className={`s-drawer${isOpen ? ' is-open' : ''}`} aria-hidden={!isOpen}>
        <div className="s-drawer__head">
          <h3>Tu bolsa {count > 0 && <span>({count})</span>}</h3>
          <button type="button" className="s-drawer__close" onClick={closeCart} aria-label="Cerrar bolsa">
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="s-drawer__empty">Tu bolsa está vacía. Elegí tus prendas y volvé por acá.</div>
        ) : (
          <>
            <div className="s-drawer__list">
              {items.map((it) => (
                <div className="s-drawer__item" key={it.key}>
                  <img src={it.hero} alt={`${it.line} ${it.colorway}`} />
                  <div className="s-drawer__item-info">
                    <div className="s-drawer__item-line">{it.line}</div>
                    <div className="s-drawer__item-name">{it.colorway}</div>
                    <div className="s-drawer__item-size">Talla {it.size}</div>
                    <div className="s-drawer__item-qty">
                      <button type="button" onClick={() => setQty(it.key, it.qty - 1)} aria-label="Restar">
                        −
                      </button>
                      <span>{it.qty}</span>
                      <button type="button" onClick={() => setQty(it.key, it.qty + 1)} aria-label="Sumar">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="s-drawer__item-right">
                    <span className="s-drawer__item-price">Bs {it.price * it.qty}</span>
                    <button type="button" className="s-drawer__remove" onClick={() => removeItem(it.key)}>
                      Quitar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="s-drawer__foot">
              <div className="s-drawer__total">
                <span>Total</span>
                <span>Bs {subtotal}</span>
              </div>
              <a
                className="s-checkout magnetic"
                href={whatsappOrderUrl(items, subtotal)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar pedido por WhatsApp ✦
              </a>
              <p className="s-drawer__note">
                Al enviar, se abre WhatsApp con tu pedido armado. Confirmamos disponibilidad, talla y
                entrega por chat.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
