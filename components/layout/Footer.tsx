import Link from 'next/link'
import SubscribeForm from '@/components/ui/SubscribeForm'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Subscribe */}
          <div className="w-full md:w-auto">
            <h3 className="text-sm font-semibold mb-3">Subscribe to our emails</h3>
            <SubscribeForm />
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/lidandladle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-brand-text hover:text-brand-primary transition-colors"
            >
              {/* Facebook icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© 2026, Lid &amp; Ladle</p>
          <div className="flex items-center gap-4">
            <Link
              href="/policies/privacy-policy"
              className="hover:text-brand-primary transition-colors"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
