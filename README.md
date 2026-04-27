# Muinol Islam — Personal Portfolio

A premium, dark-and-gold cinematic portfolio for **Muinol Islam** — Software Developer, AI Expert and Entrepreneur (Founder of **KinetiMart**).

Built with **React + Vite + TailwindCSS + Framer Motion**, with **Supabase** as the backend for the contact form.

---

## ✨ Features

- **Cinematic dark + gold theme** with glassmorphism, gradients and ambient lighting
- **Smooth Framer Motion** animations and on-scroll reveals
- **Fully responsive** — designed mobile-first, perfected on desktop
- **Hero with photo upload** (replace your portrait in seconds)
- **About / Services / Projects** sections with animated cards
- **Contact form** that stores submissions in **Supabase**
- **Floating WhatsApp button** with pulse animation
- **SEO-ready** meta tags, Open Graph, Twitter cards
- **Smooth scrolling**, custom scrollbar, premium typography (Playfair + Inter)

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Supabase (optional for local preview)

1. Create a free project at [supabase.com](https://supabase.com).
2. In your project's **SQL editor**, run the schema in [`supabase/schema.sql`](./supabase/schema.sql). It creates the `contact_messages` table and the proper RLS policies.
3. Copy `.env.example` to `.env` and fill in your project credentials:

   ```env
   VITE_SUPABASE_URL=https://YOUR-PROJECT-REF.supabase.co
   VITE_SUPABASE_ANON_KEY=YOUR-PUBLIC-ANON-KEY
   ```

> If you skip this step, the website still runs — but the contact form will show a configuration notice instead of saving submissions.

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### 4. Build for production

```bash
npm run build
npm run preview
```

---

## 🖼 Replacing the Portrait

You have two options:

1. **Quick (no code)**: open the site, click the **Upload Photo** button on the hero portrait, choose your image. (This is preview-only — for production you should use option 2.)
2. **Permanent**: drop a JPG/PNG into `public/images/portrait.jpg` and update `Hero.jsx`:

   ```jsx
   const [portrait, setPortrait] = useState('/images/portrait.jpg')
   ```

A placeholder SVG is provided at `public/images/portrait-placeholder.svg`.

---

## 🛠 Editing Content

All content lives in plain JSX files inside `src/components/`, easy to edit in VS Code:

| File | Section |
| --- | --- |
| `src/components/Hero.jsx` | Headline, subtext, CTA buttons, stats |
| `src/components/About.jsx` | Intro and the 4 expertise highlights |
| `src/components/Services.jsx` | The 5 services + descriptions |
| `src/components/Projects.jsx` | Portfolio grid (edit the `projects` array) |
| `src/components/Contact.jsx` | Email / phone / location, form copy |
| `src/components/Footer.jsx` | Social links, footer columns |
| `src/components/WhatsAppButton.jsx` | WhatsApp number / pre-filled message |
| `src/components/Navbar.jsx` | Nav links |
| `index.html` | Page title, meta description, SEO tags |

### Tweak colors / theme

Edit `tailwind.config.js` (the `colors.gold` / `colors.ink` palettes) and `src/index.css` (component utilities like `.btn-primary`, `.gold-text`, `.card`).

### Update WhatsApp number

In `src/components/WhatsAppButton.jsx`:

```js
const PHONE = '447449705501' // international format, no '+' or spaces
```

---

## 🗄 Supabase Schema

Located at [`supabase/schema.sql`](./supabase/schema.sql):

```sql
create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- + RLS policies that:
--   • allow anonymous INSERT from the website (anon key)
--   • allow only authenticated users to SELECT (you, in the dashboard)
```

You can view submissions in **Supabase → Table Editor → contact_messages**.

---

## 📂 Project Structure

```
muinol/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── portrait-placeholder.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── WhatsAppButton.jsx
│   ├── lib/
│   │   └── supabase.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── supabase/
│   └── schema.sql
├── .env.example
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🌍 Deployment

This is a static Vite build. It deploys cleanly to **Vercel**, **Netlify**, **Cloudflare Pages** or any static host.

Common settings:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Environment variables:** `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`

---

## 📞 Contact

- **Email:** kinetimart@gmail.com
- **Phone / WhatsApp:** +44 7449 705501
- **Company:** KinetiMart

---

Made with ❤️ and a lot of ☕ by **Muinol Islam**.
