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

Figma design draft:

Typography, Color Palette, & Icons
https://www.figma.com/design/ZThjH8rOtor7LgjoofZpRF/stsweng-s40-02-frontend?node-id=0-1&p=f&t=uX

Page Design look
https://www.figma.com/design/ZThjH8rOtor7LgjoofZpRF/stsweng-s40-02-frontend?node-id=1-2&p=f&t=QUGWsVf8ylczVY9o-0
