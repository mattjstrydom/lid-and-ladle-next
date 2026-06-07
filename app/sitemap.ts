import { MetadataRoute } from 'next'
import { getAllProductSlugs } from '@/lib/products'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let slugs: string[] = []
  try {
    slugs = await getAllProductSlugs()
  } catch {
    // DB not available at build time — product URLs omitted from sitemap
  }
  const productUrls = slugs.map((slug) => ({
    url: `https://lidandladle.co.za/products/${slug}`,
    lastModified: new Date(),
  }))

  return [
    { url: 'https://lidandladle.co.za', lastModified: new Date() },
    { url: 'https://lidandladle.co.za/pages/stockists', lastModified: new Date() },
    { url: 'https://lidandladle.co.za/pages/about', lastModified: new Date() },
    { url: 'https://lidandladle.co.za/pages/contact', lastModified: new Date() },
    { url: 'https://lidandladle.co.za/policies/privacy-policy', lastModified: new Date() },
    ...productUrls,
  ]
}
