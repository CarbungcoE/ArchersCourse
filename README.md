# ArchersCourse
STSWENG MCO project

## Local setup

From the repository root:

```bash
cd archers-course
npm install
```

Create `archers-course/.env.local` and set the public Supabase project values used by the application:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Start the app:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). In the Supabase authentication settings, add `http://localhost:3000/auth/callback` as an allowed redirect URL for local Google sign-in.

Do not commit `.env.local` or real Supabase credentials.

## Home page preview

Run the frontend preview in PowerShell from the repository root.

```powershell
cd archers-course
npm.cmd install
$env:NEXT_PUBLIC_GITHUB_PAGES = 'true'
npm.cmd run dev -- --port 3001
```

Open [localhost:3001/home/](http://localhost:3001/home/). With Supabase unset, the development preview shows the regular user view and loads mock data. Votes reset on reload.

To test account roles, follow **Local setup** in a fresh terminal and sign in through Google. A project administrator can set `app_metadata.role` to `admin` on the admin test account using the [Supabase Auth Admin API](https://supabase.com/docs/reference/javascript/auth-admin-updateuserbyid). Open `/home/` with that account and confirm **Admin Management** appears in the sidebar or mobile drawer. Sign in with an account without the admin role in a separate browser profile and confirm the item is absent.

The shared palette and Inter type scale live in `archers-course/app/globals.css`. The Home Page layout and smaller display sizes live in `archers-course/app/home/home.module.css`. At 1440px wide the wordmark is 30px, course and review headings are 24px and 21px, and review body copy is 16px. Tags and course metadata stay at 13px and 12px. The fill uses `#6B83E2` from the Home Page, the active borders and icons use `#6C84E4` from the button and icon sheets, and the active label uses `#8282FF`. Focus and pressed votes use the palette accent `#3B5BDB`.

The base colors are `#18181B` for primary text, `#52525B` for secondary surfaces' text, `#71717A` for muted text, `#FAFAF9` for the page, `#FFFFFF` for cards, `#E4E4E7` for borders, and `#F4F4F5` for vote pills. The mockups also supply `#F7F7F6` for ghost controls, `#D6D6D6` for dividers, `#D9D9D9` for avatars, and `#B40000` for the difficulty icon.

`archers-course/data/mock-reviews.ts` exports the review type and six sample reviews. The `/home` route passes that collection to the feed, so a future data source can supply the same shape. **New Course Review**, **Courses**, **Add a Course**, and **Admin Management** are placeholders.

## GitHub Pages

The Pages workflow uploads a static Next.js export from `archers-course/out`.
To enable Google sign-in on Pages, set `NEXT_PUBLIC_SUPABASE_URL` and
`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` as GitHub Actions repository variables. In
Supabase Authentication, add the deployed callback URL
`https://carbungcoe.github.io/ArchersCourse/auth/callback/` to the redirect allowlist.

Figma design draft:

Typography, Color Palette, & Icons
https://www.figma.com/design/ZThjH8rOtor7LgjoofZpRF/stsweng-s40-02-frontend?node-id=0-1&p=f&t=uX

Page Design look
https://www.figma.com/design/ZThjH8rOtor7LgjoofZpRF/stsweng-s40-02-frontend?node-id=1-2&p=f&t=QUGWsVf8ylczVY9o-0
