import isotipoWhite from '../assets/photos/isotipo_white.png'
import { site, siteUrls } from '../data/site'
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
              <h3>Redes sociales</h3>
              <ul>
                <li>
                  Instagram
                  <span>
                    <a href={siteUrls.instagram} target="_blank" rel="noopener noreferrer">
                      {site.instagram}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <div className="contact__col">
              <h3>Comercial</h3>
              <ul>
                <li>
                  Sitio web
                  <span>
                    <a href={siteUrls.website} target="_blank" rel="noopener noreferrer">
                      {site.website}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact__bottom will-reveal" data-delay="0.15">
          <div className="contact__legal">
            © {new Date().getFullYear()} OMARIA Sportswear. Catálogo conceptual — precios y datos de
            contacto de referencia.
          </div>
        </div>
      </div>
    </section>
  )
}
