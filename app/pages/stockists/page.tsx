import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stockists',
  description: 'Find Lid & Ladle products near you across the Western Cape.',
}

const stockists = [
  { name: 'Vendange Hermanus', address: '104 Main Road, Hermanus' },
  { name: 'Vendange Plettenberg Bay', address: '16 Main Street, Plettenberg Bay' },
  { name: "Mariaan's", address: 'Harbour Road, Kleinmond' },
  { name: 'Mooi', address: 'Spar Centre, Kleinmond' },
  { name: 'Perron 25', address: 'Main Road, Kleinmond' },
]

export default function StockistsPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 py-16">
      <h1 className="text-3xl font-normal mb-4">Stockists</h1>
      <p className="text-gray-600 mb-10">
        Find Lid &amp; Ladle at these locations, or{' '}
        <a href="/pages/contact" className="text-brand-primary hover:underline">
          contact us
        </a>{' '}
        to place a private order (minimum 6 items).
      </p>
      <ul className="space-y-4">
        {stockists.map((s) => (
          <li key={s.name} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span className="font-semibold">{s.name}</span>
            <span className="hidden sm:inline text-gray-300">—</span>
            <span className="text-gray-600">{s.address}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
