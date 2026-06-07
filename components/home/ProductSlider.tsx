'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import type { ProductModel, ProductImageModel } from '@/app/generated/prisma/models'

type ProductWithImages = ProductModel & { images: ProductImageModel[] }

interface ProductSliderProps {
  products: ProductWithImages[]
}

export default function ProductSlider({ products }: ProductSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(direction: 'left' | 'right') {
    if (!scrollRef.current) return
    const amount = 340
    scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="py-16 px-6 lg:px-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-normal mb-6">Our Infusion Mix Range</h2>
          <p className="font-bold text-sm mb-1">Our Online Store Stock will be available soon!</p>
          <p className="text-sm text-gray-600">
            Visit one of our stockists or contact us for private orders.
          </p>
          <p className="text-sm text-gray-600">
            (Resellers @ discounted price, private orders min x6 items)
          </p>
        </div>

        <div className="relative mt-10">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:shadow-md transition-shadow hidden md:flex items-center justify-center"
            aria-label="Slide left"
          >
            <ChevronLeft size={18} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-none w-[280px] md:w-[320px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:shadow-md transition-shadow hidden md:flex items-center justify-center"
            aria-label="Slide right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
