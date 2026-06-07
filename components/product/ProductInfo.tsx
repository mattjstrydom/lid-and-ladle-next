'use client'

import { useState } from 'react'
import type { ProductModel, ProductImageModel } from '@/app/generated/prisma/models'
import { formatPrice } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

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
  return (
    <div className="space-y-6">
      {/* Vendor */}
      <p className="text-xs uppercase tracking-widest text-gray-400">LID &amp; LADLE</p>

      {/* Name */}
      <h1 className="text-2xl font-normal leading-snug">{product.name}</h1>

      {/* Price */}
      <p className="text-xl">{formatPrice(product.price)} ZAR</p>

      {/* Description */}
      {product.description && (
        <p className="text-sm leading-relaxed text-gray-700">{product.description}</p>
      )}

      {/* Accordions */}
      <div>
        <Accordion title="Ingredients">{product.ingredients}</Accordion>
        <Accordion title="Instructions">{product.instructions}</Accordion>
        {product.tips && <Accordion title="Tips &amp; Tricks">{product.tips}</Accordion>}
      </div>

      {/* Contact CTA */}
      <div className="rounded-lg border border-gray-200 bg-brand-card p-5 space-y-3">
        <p className="text-sm font-semibold">Interested in this product?</p>
        <p className="text-sm text-gray-600 leading-relaxed">
          Online ordering is coming soon. In the meantime, get in touch to place an order, ask about
          stockists near you, or enquire about reseller pricing.
        </p>
        <Link
          href="/pages/contact"
          className="inline-flex items-center justify-center bg-brand-primary text-white rounded-full px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Contact us
        </Link>
      </div>

      {/* Closing note */}
      <p className="text-xs italic text-gray-500">
        Sometimes, some ingredients are out of season, so we replace them with something new — always enhancing
        and complementing the experience, never diminishing it!
      </p>
    </div>
  )
}
