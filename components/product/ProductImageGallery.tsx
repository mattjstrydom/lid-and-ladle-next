'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { ProductImageModel } from '@/app/generated/prisma/models'

export default function ProductImageGallery({ images }: { images: ProductImageModel[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex]

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-50">
        {activeImage && (
          <Image
            src={activeImage.url}
            alt={activeImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setActiveIndex(i)}
              className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                i === activeIndex ? 'border-brand-primary' : 'border-transparent hover:border-gray-300'
              }`}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                sizes="80px"
                style={{ objectFit: 'cover' }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
