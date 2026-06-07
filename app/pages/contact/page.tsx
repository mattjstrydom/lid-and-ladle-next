import type { Metadata } from 'next'
import ContactForm from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Lid & Ladle.',
}

export default function ContactPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 py-16">
      <h1 className="text-3xl font-normal text-center mb-12">Contact</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left — contact details */}
        <div>
          <h2 className="text-lg font-semibold mb-6">Let&apos;s Connect</h2>
          <div className="space-y-4 text-sm text-gray-700">
            <p className="flex items-center gap-2">
              <span>📧</span>
              <a
                href="mailto:annelstrydom85@gmail.com"
                className="hover:text-brand-primary transition-colors"
              >
                annelstrydom85@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span>📍</span>
              <span>Based in Kleinmond, Western Cape, South Africa</span>
            </p>
            <p className="mt-4 leading-relaxed">
              You&apos;ll also find us on Facebook where we share recipes, pairing ideas, and glimpses of
              what&apos;s coming next.
            </p>
            <a
              href="https://www.facebook.com/lidandladle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-primary hover:opacity-80 transition-opacity font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              facebook.com/lidandladle
            </a>
          </div>
        </div>

        {/* Right — contact form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
