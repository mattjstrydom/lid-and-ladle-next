/**
 * AddToCartButton — Payment-Ready Architecture
 *
 * STRIPE INTEGRATION STEPS (when ready):
 * 1. Install: npm install @stripe/stripe-js @stripe/react-stripe-js
 * 2. Add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY and STRIPE_SECRET_KEY to .env.local
 * 3. Create /api/cart/add route to manage server-side cart session
 * 4. Replace the onAddToCart stub with a real cart mutation
 * 5. Wire CartContext to persist cart state (localStorage + server session)
 * 6. Create /api/checkout route using Stripe Checkout Sessions
 * 7. Wire "Buy it now" button to create a Stripe Checkout Session directly
 */

interface AddToCartButtonProps {
  inStock: boolean
  onAddToCart: () => void
}

export default function AddToCartButton({ inStock, onAddToCart }: AddToCartButtonProps) {
  return (
    <button
      onClick={onAddToCart}
      disabled={!inStock}
      className="w-full border border-gray-300 rounded-full py-3 text-sm font-medium hover:border-brand-primary hover:text-brand-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {inStock ? 'Add to cart' : 'Sold out'}
    </button>
  )
}
