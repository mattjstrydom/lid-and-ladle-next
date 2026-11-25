import { PrismaClient } from '@/app/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

function hyperdriveConnectionString(): string | undefined {
  try {
    // OpenNext request context. Missing at build/seed time — that's fine.
    // Never log this value.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { getCloudflareContext } = require('@opennextjs/cloudflare') as {
      getCloudflareContext: () => { env?: { HYPERDRIVE?: { connectionString?: string } } }
    }
    return getCloudflareContext()?.env?.HYPERDRIVE?.connectionString
  } catch {
    return undefined
  }
}

function createPrismaClient() {
  // Workers cannot open raw Postgres TCP. Prefer a Hyperdrive binding
  // (free on Workers Free, 100k queries/day) or HYPERDRIVE_CONNECTION_STRING,
  // then DATABASE_URL. The Hyperdrive resource itself is pending until
  // DATABASE_URL exists on this Worker and can be created in the dashboard
  // (this connector cannot read the secret or call the Hyperdrive API).
  const connectionString =
    hyperdriveConnectionString() ||
    process.env.HYPERDRIVE_CONNECTION_STRING ||
    process.env.DATABASE_URL
  if (!connectionString) {
    throw new Error('DATABASE_URL is not configured')
  }
  const adapter = new PrismaPg({ connectionString })
  return new PrismaClient({ adapter })
}

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
