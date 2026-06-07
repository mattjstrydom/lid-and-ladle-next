import { PrismaClient } from '../app/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

const IMG = '/images/'

const STANDARD_TIPS =
  "For better infusion, add ice first, then liquid. It helps anchor the fruit, spices, and botanicals so they don't all float to the top. If you prefer a drink without the bits and pieces, simply use a strainer when serving."

const CARAFE_INSTRUCTIONS =
  'Add still or sparkling water, tonic, gin, lemonade, tea, wine, or any other drink of your choice. Steep for at least 10–15 minutes in the fridge or at room temperature. Serve chilled or over ice. Refill the bottle 1–2 times with fresh liquid for additional infusions. Use our refill packs in your bottle next time. Re-use your bottle as a flower vase, carafe, or dry product storage.'

const REFILL_INSTRUCTIONS =
  'Add the contents of this packet to a Lid & Ladle bottle or any other jar/carafe you have at home (approximately 1 Litre). Fill it up with still or sparkling water, tonic, gin, lemonade, wine, whiskey, tea, or any other drink of your choice. Steep for at least 10–15 minutes in the fridge or at room temperature. Serve chilled or over ice.'

const BB_INGREDIENTS =
  'Approximately 30g of dehydrated berries (strawberry/blueberry/cherry), flowers (hibiscus/rose/blue pea flower/lavender), and rosemary. May contain allergens.'
const CS_INGREDIENTS =
  'Approximately 30g of dehydrated citrus slices (orange/blood orange), star anise, and cinnamon. May contain allergens.'
const PZ_INGREDIENTS =
  'Approximately 30g of dehydrated citrus slices (lemon/lime/other), and flowers (lavender/rose/hibiscus/other). May contain allergens.'

const products = [
  {
    slug: 'berry-bloom-infusion-mix',
    name: 'Berry & Bloom Infusion Mix - Carafe',
    flavour: 'berry-bloom',
    format: 'carafe',
    price: 245.0,
    description:
      'Vibrant in colour, bold in flavour, and just a little wild. Strawberries and blueberries provide a rich burst of fruit, lifted by the floral sharpness of hibiscus, blue pea flower, rose, and grounded with a sprig of rosemary. Deep reds and purples swirl in the glass, releasing layers of aroma as the infusion opens. Lively, refreshing, and full of character.',
    ingredients: BB_INGREDIENTS,
    instructions: CARAFE_INSTRUCTIONS,
    tips: STANDARD_TIPS,
    images: [
      { url: IMG + 'Berry_Bloom_Outside_table.png', alt: 'Berry & Bloom Infusion Mix in a glass carafe outdoors', order: 0 },
      { url: IMG + 'Berry_Bloom.png', alt: 'Berry & Bloom Infusion Mix close up', order: 1 },
      { url: IMG + 'Deli_Shelf.png', alt: 'Lid & Ladle products displayed on a deli shelf', order: 2 },
    ],
  },
  {
    slug: 'berry-bloom-refill-pack',
    name: 'Berry & Bloom Infusion Mix - Refill Pack',
    flavour: 'berry-bloom',
    format: 'refill-pack',
    price: 85.0,
    description: null,
    ingredients: BB_INGREDIENTS,
    instructions: REFILL_INSTRUCTIONS,
    tips: STANDARD_TIPS,
    images: [
      { url: IMG + 'RefillPacks1.png', alt: 'Berry & Bloom Infusion Mix refill pack pouches', order: 0 },
      { url: IMG + 'Berry_Bloom.png', alt: 'Berry & Bloom ingredients close up', order: 1 },
    ],
  },
  {
    slug: 'berry-bloom-infusion-mix-jar',
    name: 'Berry & Bloom Infusion Mix - Steep Jar',
    flavour: 'berry-bloom',
    format: 'steep-jar',
    price: 185.0,
    description:
      'Vibrant in colour, bold in flavour, and just a little wild. Strawberries, blue pea flowers, and blueberries provide a rich burst of fruit, lifted by the floral sharpness of hibiscus and rose, and grounded with a sprig of rosemary. Deep reds and purples swirl in the glass, releasing layers of aroma as the infusion opens. Lively, refreshing, and full of character.',
    ingredients: BB_INGREDIENTS,
    instructions: CARAFE_INSTRUCTIONS,
    tips: STANDARD_TIPS,
    images: [
      { url: IMG + '3.jpg', alt: 'Berry & Bloom Infusion Mix in a steep jar', order: 0 },
      { url: IMG + 'BB.jpg', alt: 'Berry & Bloom Infusion Mix steep jar detail', order: 1 },
      { url: IMG + '43_838f70cd-869e-419e-80af-8360f846573c.jpg', alt: 'Berry & Bloom Steep Jar lifestyle photo', order: 2 },
    ],
  },
  {
    slug: 'citrus-spice-infusion-mix',
    name: 'Citrus & Spice Infusion Mix - Carafe',
    flavour: 'citrus-spice',
    format: 'carafe',
    price: 245.0,
    description:
      "A jar that captures the glow of late afternoon. Orange and blood orange slices mingle with cinnamon bark and whole star anise, creating an infusion that's both bright and warming. The first sip is citrus — zesty, sunlit, refreshing. Then the spice unfolds, soft and aromatic, giving the drink depth.",
    ingredients: CS_INGREDIENTS,
    instructions: CARAFE_INSTRUCTIONS,
    tips: null,
    images: [
      { url: IMG + 'Citrus_Spice_Inside.png', alt: 'Citrus & Spice Infusion Mix carafe on kitchen counter', order: 0 },
      { url: IMG + 'Citrus_Spice.png', alt: 'Citrus & Spice Infusion Mix close up', order: 1 },
      { url: IMG + 'Deli_Shelf.png', alt: 'Lid & Ladle products on a deli shelf', order: 2 },
    ],
  },
  {
    slug: 'citrus-spice-refill-pack',
    name: 'Citrus & Spice Infusion Mix - Refill Pack',
    flavour: 'citrus-spice',
    format: 'refill-pack',
    price: 85.0,
    description: null,
    ingredients: CS_INGREDIENTS,
    instructions: REFILL_INSTRUCTIONS,
    tips: STANDARD_TIPS,
    images: [
      { url: IMG + 'RefillPacks1.png', alt: 'Citrus & Spice Infusion Mix refill pack pouches', order: 0 },
      { url: IMG + 'Citrus_Spice.png', alt: 'Citrus & Spice ingredients close up', order: 1 },
    ],
  },
  {
    slug: 'citrus-spice-infusion-mix-steep-jar',
    name: 'Citrus & Spice Infusion Mix - Steep Jar',
    flavour: 'citrus-spice',
    format: 'steep-jar',
    price: 185.0,
    description:
      "A jar that captures the glow of late afternoon. Orange and blood orange slices mingle with cinnamon bark and whole star anise, creating an infusion that's both bright and warming. The first sip is citrus — zesty, sunlit, refreshing. Then the spice unfolds, soft and aromatic, giving the drink depth.",
    ingredients: CS_INGREDIENTS,
    instructions: CARAFE_INSTRUCTIONS,
    tips: 'For better infusion, add ice first, then liquid. If you prefer a drink without the bits and pieces, simply use a strainer when serving.',
    images: [
      { url: IMG + '3.jpg', alt: 'Citrus & Spice Infusion Mix steep jar', order: 0 },
      { url: IMG + 'CS.jpg', alt: 'Citrus & Spice steep jar detail', order: 1 },
      { url: IMG + '11.jpg', alt: 'Citrus & Spice Steep Jar lifestyle photo', order: 2 },
    ],
  },
  {
    slug: 'petal-zest-infusion-mix',
    name: 'Petal & Zest Infusion Mix - Carafe',
    flavour: 'petal-zest',
    format: 'carafe',
    price: 245.0,
    description:
      'Delicate, fragrant, and quietly captivating. Lemon and lime bring clean brightness, while blossoms — lavender, rose, and hibiscus — add soft floral notes that linger in the air and on the palate. The result is an infusion that feels like stepping into a garden at golden hour: fresh, calm, and lightly perfumed.',
    ingredients: PZ_INGREDIENTS,
    instructions: CARAFE_INSTRUCTIONS,
    tips: STANDARD_TIPS,
    images: [
      { url: IMG + 'Petal_Zest_Outside.png', alt: 'Petal & Zest Infusion Mix carafe outdoors', order: 0 },
      { url: IMG + 'Petal_Zest.png', alt: 'Petal & Zest Infusion Mix close up', order: 1 },
      { url: IMG + 'Deli_Shelf.png', alt: 'Lid & Ladle products on a deli shelf', order: 2 },
    ],
  },
  {
    slug: 'petal-zest-infusion-mix-refill-pack',
    name: 'Petal & Zest Infusion Mix - Refill Pack',
    flavour: 'petal-zest',
    format: 'refill-pack',
    price: 85.0,
    description: null,
    ingredients: PZ_INGREDIENTS,
    instructions: REFILL_INSTRUCTIONS,
    tips: STANDARD_TIPS,
    images: [
      { url: IMG + 'RefillPacks1.png', alt: 'Petal & Zest Infusion Mix refill pack pouches', order: 0 },
      { url: IMG + 'Petal_Zest.png', alt: 'Petal & Zest ingredients close up', order: 1 },
    ],
  },
  {
    slug: 'petal-zest-infusion-mix-steep-jar',
    name: 'Petal & Zest Infusion Mix - Steep Jar',
    flavour: 'petal-zest',
    format: 'steep-jar',
    price: 185.0,
    description:
      'Delicate, fragrant, and quietly captivating. Lemon and lime bring clean brightness, while blossoms — lavender, rose, and hibiscus — add soft floral notes that linger in the air and on the palate. The result is an infusion that feels like stepping into a garden at golden hour: fresh, calm, and lightly perfumed.',
    ingredients: PZ_INGREDIENTS,
    instructions: CARAFE_INSTRUCTIONS,
    tips: STANDARD_TIPS,
    images: [
      { url: IMG + '3_59388da7-2ccb-4699-adc4-47ca782b8cbf.jpg', alt: 'Petal & Zest Infusion Mix steep jar', order: 0 },
      { url: IMG + 'PZ.jpg', alt: 'Petal & Zest steep jar detail', order: 1 },
      { url: IMG + '28.jpg', alt: 'Petal & Zest Steep Jar lifestyle photo', order: 2 },
    ],
  },
]

async function main() {
  console.log('Seeding database...')
  await prisma.productImage.deleteMany()
  await prisma.product.deleteMany()

  for (const { images, ...productData } of products) {
    const product = await prisma.product.create({
      data: {
        ...productData,
        images: {
          create: images,
        },
      },
    })
    console.log(`✓ Created: ${product.name}`)
  }

  console.log(`\nSeeded ${products.length} products successfully.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
