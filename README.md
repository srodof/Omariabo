# Omaria

Catálogo digital de la colección "Esencia" de Omaria Sportswear, más los assets de marca.

## Stack

- **React 19 + TypeScript + Vite**
- **GSAP + ScrollTrigger** — reveal al hacer scroll, parallax de mouse en el hero, botones/CTA magnéticos, tilt 3D en tarjetas, marquee infinito
- Sin backend: todo el contenido vive en `src/data/`

## Correr en local

```bash
npm install
npm run dev              # http://localhost:5173
npm run build             # genera dist/ para desplegar (Vercel u otro hosting estático)
npm run build:portable    # genera dist-portable/index.html: un único .html sin dependencias externas
```

## Contenido

- **[src](src)** — código de la app (secciones, componentes, datos del catálogo, hooks de animación).
- **[Catalogo](Catalogo)** — copia "portable" del catálogo (`omaria-coleccion-esencia.html`), generada con `npm run build:portable`. Un solo archivo, se puede abrir sin internet o compartir por WhatsApp/email. Regenerarla tras cualquier cambio de contenido.
- **[Logos](Logos)** — Isotipos, isologotipos y logotipos en distintas variantes de color y formato (`.ai`, `.pdf`, `.png`, `.jpg`), incluyendo la guía de colores corporativos.
- **[Imágenes prendas](Imágenes prendas)** — Fotografías de producto originales, organizadas por categoría (`Tops/Top Aura`, `Tops/Top Nova`, `Crop Tops`, `Calzas Biker`, `Calzas Cortas`).
- **[Referencias](Referencias)** — Imágenes de referencia recopiladas para el desarrollo de la marca y producto.

`Logos/`, `Imágenes prendas/` y `Referencias/` son material fuente: la app no los usa directamente (las fotos optimizadas viven en `src/assets/photos/`), así que se excluyen del despliegue en Vercel vía `.vercelignore`.

## Dónde editar el contenido

Todo el contenido del catálogo vive en `src/data/`:

- **`products.ts`** — las 3 líneas (Top Essential, Croptop Aura, Bikers Flow), sus colores, precios y fotos.
- **`looks.ts`** — los looks completos de la sección "Combina la colección".
- **`site.ts`** — ⚠️ datos de contacto PLACEHOLDER (Instagram, TikTok, web, email de mayoreo). **Reemplazar antes de publicar.**

Precios (en Bs), tallas y el código QR de contacto son de referencia — ver notas en el propio catálogo.

## Uso

Ver [LICENSE](LICENSE) para condiciones de uso de los assets de marca.
