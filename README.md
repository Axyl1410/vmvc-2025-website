# Viet My Vibe Code 2025 Website

Landing site for the Viet My Vibe Code 2025 student programming contest. Built with Next.js (App Router) and Tailwind CSS, it highlights competition details, showcases partner logos, timelines, pricing/prize info, and now features a public list of teams that qualified for the next round.

## Features
- Animated hero with GSAP-driven motion and CTA that links to the registration flow.
- Sections for highlights, partner logos, prize tiers, and competition timeline.
- Qualified Teams section (table preview on the landing page plus a dedicated page with the full list).
- Reusable UI primitives via a custom component library (shadcn-inspired).
- SEO-friendly metadata and JSON-LD structured data for search engines.

## Tech Stack
- **Framework:** Next.js 14+, React, TypeScript.
- **Styling:** Tailwind CSS, CSS utility modules (liquid-glass, StarBorder).
- **Animation:** GSAP via `@gsap/react`.
- **Tooling:** pnpm, Biome/Ultracite for linting/formatting.

## Getting Started

```bash
pnpm install
pnpm dev
```

Then visit <http://localhost:3000>.

### Environment Variables
Create a `.env.local` file if needed:

```
NEXT_PUBLIC_REGISTRATION_URL=https://example.com/form
```

When this URL points to an external domain the CTA button opens in a new tab; otherwise it anchors to the on-site registration section.

## Project Structure (Partial)
```
app/
  page.tsx                # Landing page
  qualified-teams/page.tsx# Full qualified teams listing
components/
  hero.tsx                # Animated hero
  timeline.tsx            # Competition timeline
  qualified-teams-section # Landing page preview table
lib/
  qualified-teams.ts      # Data source for qualified teams
```

## Scripts
- `pnpm dev` – start the local dev server.
- `pnpm build` – production build.
- `pnpm start` – run the built app.
- `pnpm lint` – run Biome/Ultracite checks (if configured).

## Updating Qualified Teams
Teams are stored in `lib/qualified-teams.ts`. Update the `QUALIFIED_TEAMS` array to reflect new results; both the landing section and the dedicated page consume this shared data source.

## Deployment
Deploy as a standard Next.js App Router project (e.g., Vercel, Netlify, or any Node-capable host). Ensure environment variables are configured in the deployment platform.

## Contributing
1. Create a branch for your change.
2. Run `pnpm lint` and `pnpm build` before opening a PR.
3. Describe UI changes and include screenshots when relevant.

## License
This project is proprietary to Cao Đẳng Việt Mỹ. Contact the organizing committee for reuse permissions.

