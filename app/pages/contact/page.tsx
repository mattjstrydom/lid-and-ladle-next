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
      <div className="max-w-xl mx-auto">
        <ContactForm />
      </div>
    </div>
  )
}
