import Image from 'next/image'

export default function HeroBanner() {
  return (
    <section className="w-full relative overflow-hidden" style={{ height: 'clamp(180px, 25vw, 360px)' }}>
      {/*
        NOTE: Original image (Website_Banner.png) is only 576×144px.
        It renders at up to 1425×356px via object-fit: cover — looks acceptable
        due to the line-art style, but for best quality the owner should supply
        a high-resolution source file (vector or 2000px+ wide).
      */}
      <Image
        src="/images/Website_Banner.png"
        alt="Botanical illustration banner — herbs, citrus, spices, and berries"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
        sizes="100vw"
      />
    </section>
  )
}
