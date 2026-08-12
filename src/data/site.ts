export const site = {
  instagram: '@omaria.bo',
  website: 'omaria.shop',
  // Número de WhatsApp que recibe los pedidos de la tienda (formato internacional, sin +).
  whatsapp: '59176464140',
}

/** URLs derivadas de los datos de contacto, para no repetirlas por ahí. */
export const siteUrls = {
  instagram: `https://instagram.com/${site.instagram.replace(/^@/, '')}`,
  website: `https://${site.website}`,
}
