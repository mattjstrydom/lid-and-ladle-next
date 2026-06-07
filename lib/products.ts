import { prisma } from './prisma'

export async function getAllProducts() {
  return prisma.product.findMany({
    include: { images: { orderBy: { order: 'asc' } } },
    orderBy: { createdAt: 'asc' },
  })
}

export async function getProductBySlug(slug: string) {
  return prisma.product.findUnique({
    where: { slug },
    include: { images: { orderBy: { order: 'asc' } } },
  })
}

export async function getAllProductSlugs() {
  const products = await prisma.product.findMany({ select: { slug: true } })
  return products.map((p) => p.slug)
}
