import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProductBySlug, getAllProductSlugs } from '@/lib/products'
import ProductImageGallery from '@/components/product/ProductImageGallery'
import ProductInfo from '@/components/product/ProductInfo'

// Pages are rendered dynamically — data is always fresh from the database
export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllProductSlugs()
    return slugs.map((slug) => ({ slug }))
  } catch {
    // DB not available at build time — pages will render dynamically
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) return {}
  const description = product.description
    ? product.description.split('.')[0] + '.'
    : `${product.name} — Lid & Ladle infusion mix.`
  return {
    title: product.name,
    description,
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description ?? product.ingredients,
    brand: { '@type': 'Brand', name: 'Lid & Ladle' },
    offers: {
      '@type': 'Offer',
      price: product.price.toFixed(2),
      priceCurrency: 'ZAR',
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-5xl mx-auto px-6 lg:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ProductImageGallery images={product.images} />
          <ProductInfo product={product} />
        </div>
      </div>
    </>
  )
}
