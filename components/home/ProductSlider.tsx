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
    <section className="py-16">
      {/* Heading — constrained width */}
      <div className="max-w-5xl mx-auto px-6 lg:px-16 text-center mb-10">
        <h2 className="text-2xl font-normal mb-4">Our Infusion Mix Range</h2>
        <p className="text-sm text-gray-600">
          Click any product to learn more, or{' '}
          <a href="/pages/contact" className="text-brand-primary hover:underline">
            contact us
          </a>{' '}
          to place an order.
        </p>
      </div>

      {/* Scrollable cards — full width with side padding so cards don't clip */}
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:shadow-md transition-shadow hidden md:flex items-center justify-center"
          aria-label="Slide left"
        >
          <ChevronLeft size={18} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-6 lg:px-16 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-none w-[260px] md:w-[300px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:shadow-md transition-shadow hidden md:flex items-center justify-center"
          aria-label="Slide right"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  )
}
