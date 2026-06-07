# Lid & Ladle — Next.js Website

Botanical infusion brand website rebuilt from the original Shopify store. Built with Next.js 16, TypeScript, Tailwind CSS v4, Prisma ORM, and PostgreSQL.

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

3. Fill in `.env.local`:
   ```
   DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/lidandladle
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```

4. Run database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Seed the database with all 9 products:
   ```bash
   npm run db:seed
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000).

---

## Site Structure

```
/                         Homepage — hero, product slider, brand story, recipes
/products/[slug]          Individual product pages (9 total)
/pages/stockists          Where to buy in-store
/pages/about              Founder bio
/pages/contact            Contact form
/policies/privacy-policy  Privacy policy
/cart                     Cart stub (ready for Stripe)
```

## Database Commands

| Command | Description |
|---|---|
| `npx prisma migrate dev` | Run pending migrations |
| `npm run db:seed` | Seed 9 products into the database |
| `npx prisma studio` | Open visual database browser |
| `npx prisma generate` | Regenerate Prisma client |

## Payments (Future)

The site is payment-ready but payments are not yet active. See `components/product/AddToCartButton.tsx` and `app/context/CartContext.tsx` for the integration steps. When ready:

1. `npm install @stripe/stripe-js @stripe/react-stripe-js stripe`
2. Add `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY` to `.env.local`
3. Follow the step-by-step comments in `AddToCartButton.tsx`

## Resend Email Setup

Contact form submissions are emailed to `annelstrydom85@gmail.com` via Resend.

1. Create a free account at [resend.com](https://resend.com)
2. Verify your sending domain (or use `onboarding@resend.dev` for testing)
3. Copy your API key into `.env.local` as `RESEND_API_KEY`

## Production Deployment (VPS + CloudPanel)

```bash
# Build for production
npm run build

# Start with PM2
npm install -g pm2
pm2 start npm --name "lid-and-ladle" -- start
pm2 save && pm2 startup
```

Configure CloudPanel with a reverse proxy pointing to port 3000, then enable Let's Encrypt SSL.

## Image Note

> The hero banner (`public/images/Website_Banner.png`) was captured at **576x144px** from the original Shopify store.
> It renders up to ~1425x356px on wide screens via `object-fit: cover`. The line-art style makes this look acceptable,
> but for best quality ask Annel for the original high-resolution file (vector or 2000px+ wide).

## Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `RESEND_API_KEY` | Resend API key for contact form emails |
