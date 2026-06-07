'use client'

import { useState } from 'react'
import type { ProductModel, ProductImageModel } from '@/app/generated/prisma/models'
import Badge from '@/components/ui/Badge'
import AddToCartButton from './AddToCartButton'
import { formatPrice } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

type ProductWithImages = ProductModel & { images: ProductImageModel[] }

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-3 text-sm font-semibold text-left"
      >
        {title}
        <ChevronDown size={16} className={`transition-transform flex-shrink-0 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 text-sm text-gray-700 leading-relaxed whitespace-pre-line">{children}</div>
      )}
    </div>
  )
}

export default function ProductInfo({ product }: { product: ProductWithImages }) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="space-y-6">
      {/* Vendor */}
      <p className="text-xs uppercase tracking-widest text-gray-400">LID &amp; LADLE</p>

      {/* Name */}
      <h1 className="text-2xl font-normal leading-snug">{product.name}</h1>

      {/* Price + Stock */}
      <div className="flex items-center gap-3">
        <span className="text-xl">{formatPrice(product.price)} ZAR</span>
        {!product.inStock && <Badge variant="sold-out">Sold out</Badge>}
      </div>

      {/* Quantity */}
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Quantity</p>
        <div className="flex items-center border border-gray-300 rounded-lg w-28">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            disabled={!product.inStock}
            className="px-3 py-2 text-lg disabled:opacity-40"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="flex-1 text-center text-sm">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            disabled={!product.inStock}
            className="px-3 py-2 text-lg disabled:opacity-40"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        <AddToCartButton inStock={product.inStock} onAddToCart={() => {}} />
        <button
          disabled={!product.inStock}
          className="w-full bg-brand-primary text-white rounded-full py-3 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Buy it now
        </button>
      </div>

      {/* Description */}
      {product.description && (
        <p className="text-sm leading-relaxed text-gray-700">{product.description}</p>
      )}

      {/* Accordions */}
      <div className="mt-4">
        <Accordion title="Ingredients">{product.ingredients}</Accordion>
        <Accordion title="Instructions">{product.instructions}</Accordion>
        {product.tips && <Accordion title="Tips &amp; Tricks">{product.tips}</Accordion>}
      </div>

      {/* Closing note */}
      <p className="text-xs italic text-gray-500 mt-4">
        Sometimes, some ingredients are out of season, so we replace them with something new — always enhancing
        and complementing the experience, never diminishing it!
      </p>
    </div>
  )
}
