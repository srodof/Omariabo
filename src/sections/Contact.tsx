import isotipoWhite from '../assets/photos/isotipo_white.png'
import QrPlaceholder from '../components/QrPlaceholder'
import { site } from '../data/site'
import { useRevealRef } from '../lib/gsap'

export default function Contact() {
  const ref = useRevealRef<HTMLElement>()
  return (
    <section className="contact" id="contacto" ref={ref}>
      <div className="wrap">
        <div className="contact__top">
          <div className="will-reveal">
            <div className="contact__mark">
              <img src={isotipoWhite} alt="Isotipo OMARIA" />
            </div>
            <h2 className="display">Hablemos</h2>
            <p className="contact__lead">
              Para pedidos al por mayor, distribución o alianzas comerciales, este es un espacio
              listo para tu información de contacto real.
            </p>
          </div>
          <div className="contact__cols will-reveal" data-delay="0.1">
            <div className="contact__col">
              <h4>Redes sociales</h4>
              <ul>
                <li>
                  Instagram
                  <span>{site.instagram}</span>
                </li>
                <li>
                  TikTok
                  <span>{site.tiktok}</span>
                </li>
              </ul>
            </div>
            <div className="contact__col">
              <h4>Comercial</h4>
              <ul>
                <li>
                  Sitio web
                  <span>{site.website}</span>
                </li>
                <li>
                  Mayoreo y distribución
                  <span>{site.wholesaleEmail}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact__bottom will-reveal" data-delay="0.15">
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div className="qr">
              <QrPlaceholder />
            </div>
            <div className="contact__bottom-note">
              Código QR de ejemplo — enlazar a la tienda o catálogo oficial antes de distribuir.
            </div>
          </div>
          <div className="contact__legal">
            © 2026 OMARIA Sportswear. Catálogo conceptual — precios y datos de contacto de
            referencia.
          </div>
        </div>
      </div>
    </section>
  )
}
