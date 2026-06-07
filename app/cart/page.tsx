export default function CartPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 py-32 text-center">
      <h1 className="text-3xl font-normal mb-4">Your Cart</h1>
      <p className="text-gray-500">
        Online purchasing coming soon. Visit one of our{' '}
        <a href="/pages/stockists" className="text-brand-primary hover:underline">
          stockists
        </a>{' '}
        or{' '}
        <a href="/pages/contact" className="text-brand-primary hover:underline">
          contact us
        </a>{' '}
        to order.
      </p>
    </div>
  )
}
