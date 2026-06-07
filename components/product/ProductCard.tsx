import Image from 'next/image'
import Link from 'next/link'
import type { ProductModel, ProductImageModel } from '@/app/generated/prisma/models'
import { formatPrice } from '@/lib/utils'

type ProductWithImages = ProductModel & { images: ProductImageModel[] }

export default function ProductCard({ product }: { product: ProductWithImages }) {
  const primaryImage = product.images[0]

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        {primaryImage && (
          <Image
            src={primaryImage.url}
            alt={primaryImage.alt}
            fill
            sizes="(max-width: 768px) 280px, 320px"
            style={{ objectFit: 'cover' }}
            className="group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>
      <div className="px-3 pt-3 pb-4">
        <h3 className="text-sm font-medium leading-snug">{product.name}</h3>
        <p className="text-sm text-gray-700 mt-1">{formatPrice(product.price)} ZAR</p>
      </div>
    </Link>
  )
}
