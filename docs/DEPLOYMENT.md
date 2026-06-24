# Chronical 5 Deployment Guide

## Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Git
- Vercel account

## Environment Setup

1. Copy `.env.example` to `.env.local`
2. Fill in all required credentials
3. Run migrations: `npm run prisma:migrate`

## Local Development

```bash
npm install
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

## Vercel Deployment

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy

## Database Setup

- Use PostgreSQL (Supabase, Railway, or AWS RDS)
- Update `DATABASE_URL`
- Run migrations in production

## Monitoring

- Vercel Analytics
- Error tracking (Sentry)
- Database monitoring