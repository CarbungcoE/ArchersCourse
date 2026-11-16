<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project instructions

This project is a Next.js 16 app using the App Router, React 19, TypeScript, and a lightweight Vite/Vitest test setup. Keep changes aligned with the generated project structure and avoid treating it as a generic older Next.js codebase.

## Environment and workflow

- Use npm for package management and project scripts.
- If dependencies are missing, run `npm install` from this directory before validating or editing the project.
- Validate with the smallest targeted command that checks the changed behavior.
- Preferred project checks:
  - `npm run test:backend:ci`
  - `npm run lint`
  - `npm run build` when a change affects routing, metadata, or deployment assumptions

## Code conventions

- Use TypeScript for new code.
- Keep app-level UI in `app/` and follow App Router conventions.
- Prefer server components by default; add `"use client"` only when browser interactivity is required.
- Use the existing Tailwind-based styling patterns in `app/globals.css` and component classes rather than adding ad hoc CSS systems.
- Keep changes surgical and avoid introducing unrelated dependencies or framework churn.
- Preserve accessibility and semantic HTML in UI updates.

## Testing expectations

- Add or update Vitest tests in `__tests__/` for behavior changes.
- When a change affects browser behavior or flows beyond unit-level logic, consider the existing Cypress setup in `cypress/` for end-to-end validation.
- Do not add broad suites or unrelated test cases when a focused check will validate the changed behavior.

## Notes for agents

- Read the closest relevant files before editing (for example `app/page.tsx`, `app/layout.tsx`, and configs near the affected area).
- If you need to change routes, layout, or metadata, keep the App Router structure intact and update any impacted tests.
- Avoid rewriting generated starter code unless the task clearly requires it.
