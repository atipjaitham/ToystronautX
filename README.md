# ToystronautX

ToystronautX is a production-like B2C e-commerce QA test lab built as a modular full-stack application.

## Architecture
- Frontend: Next.js + TypeScript + TailwindCSS
- Backend: NestJS + TypeScript + REST API
- Database: PostgreSQL + Prisma ORM
- Container: Docker Compose for PostgreSQL

## Workspace Structure
- apps/web: storefront UI and marketing pages
- apps/api: NestJS REST API and Prisma schema
- docker-compose.yml: local PostgreSQL container

## Run locally
1. Start PostgreSQL:
   docker compose up -d
2. Start the API:
   npm --prefix apps/api run start:dev
3. Start the storefront:
   npm --prefix apps/web run dev

## Prisma foundation
- The API now includes a Prisma schema for Category, Product, and ProductImage.
- Use the following commands from apps/api:
  - npx prisma generate
  - npx prisma migrate dev --name init
  - npx prisma db seed
  - npx prisma studio

## Notes
- The storefront is designed as a premium dark experience for QA testing.
- The API includes product catalog endpoints and a Prisma schema ready for future cart, checkout, review, and admin modules.
