import path from 'path'
import { loadEnvConfig } from '@next/env'
import { defineConfig } from 'prisma/config'

// Load .env.local so Prisma CLI picks up DATABASE_URL
const projectDir = path.resolve(__dirname)
loadEnvConfig(projectDir)

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
})
