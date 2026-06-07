// Rendered dynamically so product data is always fresh
export const dynamic = 'force-dynamic'

import HeroBanner from '@/components/home/HeroBanner'
import ProductSlider from '@/components/home/ProductSlider'
import BrandStory from '@/components/home/BrandStory'
import RecipeGrid from '@/components/home/RecipeGrid'
import ClosingNote from '@/components/home/ClosingNote'
import { getAllProducts } from '@/lib/products'

export default async function HomePage() {
  const products = await getAllProducts()

  return (
    <>
      <HeroBanner />
      <ProductSlider products={products} />
      <BrandStory />
      <RecipeGrid />
      <ClosingNote />
    </>
  )
}
