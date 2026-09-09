# Snagged

Snagged is currently an authenticated Next.js application foundation with a dashboard, Better Auth, Prisma persistence, and transactional-email tooling.

The repository has moved beyond the default T3 README, but the current code does not yet expose enough domain-specific functionality to accurately describe Snagged as a particular marketplace, booking system, or other product. This README therefore documents the implemented application architecture without inventing a product story.

## Current application areas

```text
/                 Snagged landing page
/(auth)            authentication routes
/dashboard         authenticated dashboard
/api               server/API routes
```

## Tech stack

- Next.js 15 + React 19
- TypeScript
- Better Auth
- Prisma 6
- TanStack Query
- React Hook Form + Zod
- React Email + Resend
- Tailwind CSS 4
- Radix/shadcn-style UI primitives

## Engineering foundation

The repository currently provides:

- sign-in/authentication route group;
- server-side session helpers;
- authenticated dashboard route;
- Prisma database tooling;
- reusable UI components;
- form/validation dependencies;
- email component/provider infrastructure;
- Next.js server/API boundary.

## Getting started

```bash
npm install
npm run dev
```

Prisma client generation runs after install.

Database helpers:

```bash
npm run db:generate
npm run db:push
npm run db:migrate
npm run db:studio
```

Quality checks:

```bash
npm run typecheck
npm run format:check
npm run build
```

Configure the database, Better Auth, and Resend/email environment values before exercising those integrations.

## Project status

Snagged is an application scaffold with authentication and dashboard foundations. Once domain-specific features are implemented, the README should be expanded around those real workflows rather than retaining generic framework documentation.
