# Omaria

Catálogo digital de la colección "Esencia" de Omaria Sportswear, más los assets de marca.

## Stack

- **React 19 + TypeScript + Vite** (multi-página: `index.html` + `tienda.html`)
- **GSAP + ScrollTrigger** — reveal al hacer scroll, parallax de mouse en el hero, botones/CTA magnéticos, tilt 3D en tarjetas, marquee infinito
- Sin backend: todo el contenido vive en `src/data/`, el carrito de la tienda vive en `localStorage` del navegador

## Páginas

- **`index.html`** — catálogo de scroll (Cover, Manifesto, Colección, Looks, Contacto). Código en `src/App.tsx` y `src/sections/`.
- **`tienda.html`** — versión tipo tienda: filtro por categoría, selección de color y talla, carrito y checkout que arma el pedido y lo abre en WhatsApp. Código en `src/store/` (`StoreApp.tsx`, `CartContext.tsx`, `CartDrawer.tsx`, `StoreProductCard.tsx`, `whatsapp.ts`). El número de WhatsApp que recibe los pedidos está en `src/data/site.ts` (`site.whatsapp`).

## Correr en local

```bash
npm install
npm run dev              # http://localhost:5173 (catálogo) y http://localhost:5173/tienda.html (tienda)
npm run build             # genera dist/ con ambas páginas, para desplegar (Vercel u otro hosting estático)
```

## Contenido

- **[src](src)** — código de la app (secciones, componentes, datos del catálogo, hooks de animación).
- **[Logos](Logos)** — Isotipos, isologotipos y logotipos en distintas variantes de color y formato (`.ai`, `.pdf`, `.png`, `.jpg`), incluyendo la guía de colores corporativos.
- **[Imágenes prendas](Imágenes prendas)** — Fotografías de producto originales, organizadas por categoría (`Tops/Top Aura`, `Tops/Top Nova`, `Crop Tops`, `Calzas Biker`, `Calzas Cortas`).
- **[Referencias](Referencias)** — Imágenes de referencia recopiladas para el desarrollo de la marca y producto.

`Logos/`, `Imágenes prendas/` y `Referencias/` son material fuente: la app no los usa directamente (las fotos optimizadas viven en `src/assets/photos/`), así que se excluyen del despliegue en Vercel vía `.vercelignore`.

## Dónde editar el contenido

Todo el contenido del catálogo vive en `src/data/`:

- **`products.ts`** — las líneas de la colección (Top Aura, Top Nova, Crop Tops, Calzas Biker, Calzas Cortas, Set Nira, Set Ziba), sus colores, precios y fotos.
- **`catalog.ts`** — agrupa las líneas de `products.ts` en las categorías que se muestran en el catálogo y la tienda.
- **`looks.ts`** — los looks completos de la sección "Combina la colección".
- **`site.ts`** — datos de contacto (Instagram, sitio web, número de WhatsApp para pedidos).

## Uso

Ver [LICENSE](LICENSE) para condiciones de uso de los assets de marca.
