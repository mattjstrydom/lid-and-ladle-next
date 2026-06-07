import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    "Meet Annél Strydom, founder of Lid & Ladle — a South African botanical infusion brand crafted with care.",
}

export default function AboutPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 py-16">
      <h1 className="text-3xl font-normal text-center mb-10">About</h1>
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="flex justify-center mb-8">
          <div className="relative w-44 h-44 rounded-full overflow-hidden">
            <Image
              src="/images/Annel_Strydom_Author_Circle.png"
              alt="Annél Strydom, founder of Lid & Ladle"
              fill
              style={{ objectFit: 'cover' }}
              sizes="176px"
            />
          </div>
        </div>
        <p className="text-base leading-relaxed">
          I&apos;m Annél Strydom, founder of Lid &amp; Ladle.
        </p>
        <p className="text-base leading-relaxed">
          I started this business from my deep love for things that look beautiful, taste delicious, and bring
          people together. I&apos;m constantly in awe of the extraordinary ingredients God created — the colours,
          the shapes, the fragrances, the flavours.
        </p>
        <p className="text-base leading-relaxed">
          For me, companionship is one of life&apos;s greatest gifts. Sharing a drink, a story, or a moment with
          someone has a way of turning the ordinary into something unforgettable. That&apos;s why Lid &amp; Ladle
          exists: to help you celebrate the small, meaningful moments.
        </p>
        <p className="text-base leading-relaxed">
          Every infusion is crafted to elevate your experience, gently encouraging you to slow down, appreciate the
          beauty around you, and enjoy the people beside you. Because moments matter.
        </p>
        <p className="text-base leading-relaxed font-medium">Let&apos;s connect.</p>
        <p className="text-base leading-relaxed">
          Whether you&apos;re curious about our infusions, hoping to stock them, or simply want to share your
          experience, I&apos;d genuinely love to hear from you.
        </p>
        <p className="text-base leading-relaxed">
          Here&apos;s to beauty, togetherness, and making every moment something worth celebrating.
        </p>
      </div>
    </div>
  )
}
