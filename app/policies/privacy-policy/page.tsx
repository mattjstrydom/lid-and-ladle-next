import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Lid & Ladle.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-16 py-16">
      <h1 className="text-3xl font-normal mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: April 7, 2026</p>

      <div className="space-y-8 text-gray-700 text-sm leading-relaxed">
        <section>
          <p>
            Lid &amp; Ladle (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates this website to
            provide you with information about our botanical infusion products and to enable you to contact us
            directly. This Privacy Policy explains what personal information we collect, why we collect it, and how
            it is used.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3 text-brand-text">Information We Collect</h2>
          <p>We may collect the following personal information:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Contact form:</strong> name, email address, phone number, and message content.
            </li>
            <li>
              <strong>Email subscription:</strong> email address only.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3 text-brand-text">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To respond to enquiries submitted via the contact form.</li>
            <li>To send occasional email updates if you have subscribed.</li>
            <li>To improve our website and services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3 text-brand-text">Data Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to any third parties. Your data is stored
            securely and accessed only by Lid &amp; Ladle.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3 text-brand-text">Data Retention</h2>
          <p>
            Contact submissions and email subscriptions are retained for as long as necessary to fulfil the purpose
            for which they were collected. You may request deletion at any time by contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3 text-brand-text">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Request access to the personal information we hold about you.</li>
            <li>Request correction or deletion of your personal information.</li>
            <li>Unsubscribe from our email list at any time.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3 text-brand-text">Cookies</h2>
          <p>
            This website may use essential cookies for basic functionality. No tracking or advertising cookies are
            used without your consent.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3 text-brand-text">Contact</h2>
          <p>
            For any privacy-related requests, please contact us at:{' '}
            <a href="mailto:hello@lidandladle.co.za" className="text-brand-primary hover:underline">
              hello@lidandladle.co.za
            </a>
          </p>
          <p className="mt-2">6th Street, Kleinmond, WC, 7195, South Africa</p>
        </section>
      </div>
    </div>
  )
}
