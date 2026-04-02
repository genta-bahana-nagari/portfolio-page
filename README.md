# Personal Portfolio

## 🚀 About the Project

This is my personal portfolio website built using **NextJS 16** along with **Tailwind CSS**. It showcases my skills, projects, and experiences in an interactive and modern UI.

---

## ✨ Features

- Fully responsive design with Tailwind CSS
- Smooth animations and optimized transitions
- Dynamic project showcase with images and descriptions
- Contact form integrated with EmailJS for email submissions
- Guestbook with OAuth using GitHub, Google, or Discord account

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS

### Backend

- **Runtime**: Node.js
- **Database**: Supabase as PostgreSQL provider
- **Authentication**: OAuth 2.0 (Google, GitHub, Discord)

### Deployment Options

- **Vercel**: Integrate your GitHub repo with Vercel
- **Web Server**: Nginx with reverse proxy
- **Process Manager**: PM2 for Node.js applications
- **CDN**: Cloudflare for performance and security
- **Docker**: Docker deployment is supported for this project with your own configs

### Development Tools

- **Version Control**: Git with GitHub
- **Package Manager**: npm/yarn
- **Code Quality**: ESLint, TypeScript
- **Build Tool**: Next.js built-in bundler

---

## 📁 Project Structure

```sh
personal-portfolio/
│
├── public
│   ├── icons
│   │   ├── coding-camp.jpeg
│   │   ├── Gamatechno.jpg
│   │   ├── Karawitan-Stembayo.png
│   │   └── PAKS-Stembayo.png
│   │
│   ├── images
│   │   ├── profile
│   │   │   ├── profile_1.jpg
│   │   │   ├── profile_2.jpg
│   │   │   └── profile_3.jpg
│   │   │
│   │   ├── projects
│   │   │   ├── Inventory_System.png
│   │   │   ├── SIJA_Kerja.png
│   │   │   └── SIJA_Phone.png
│   │   │
│   │   └── og-image.png
│   │
│   ├── favicon-16x16.png
│   ├── favicon-180x180.png
│   ├── favicon-192x192.png
│   ├── favicon-32x32.png
│   ├── favicon-512x512.png
│   ├── favicon.png
│   └── manifest.json
│
├── src/
│   ├── app
│   │   ├── (main)
│   │   │   ├── about
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── contact
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── experience
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── guestbook
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── project
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── container.tsx
│   │   │   ├── footer.tsx
│   │   │   └── navbar.tsx
│   │   │
│   │   └── sections/
│   │       ├── about.tsx
│   │       ├── contact.tsx
│   │       ├── experience.tsx
│   │       ├── hero.tsx
│   │       └── project.tsx
│   │
│   ├── content
│   │   ├── experiences.ts
│   │   └── projects.ts
│   │
│   ├── lib
│   │   ├── document.ts
│   │   ├── email.ts
│   │   ├── links.ts
│   │   ├── site.ts
│   │   └── supabase.ts
│   │
│   └── types
│       ├── experienceType.ts
│       └── projectType.ts
│
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── LICENSE
├── next-sitemap.config.js
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## 📦 Installation & Setup

### Prerequisites

- Node.js (22 or newer)
- npm or yarn
- Git (with GitHub)
- Supabase PostgreSQL

### Environment Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/genta-bahana-nagari/portfolio-page.git
   cd portfolio-page
   ```

2. **Set environment:**

   ```sh
   cp .env.example .env
   ```
   You will see this configuration and adjust them with your keys and links:

   ```sh
   NEXT_PUBLIC_SITE_URL='your_site_url'

   NEXT_PUBLIC_EMAILJS_SERVICE_ID='your_emailjs_service_id'
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID='your_emailjs_template_id'
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY='your_emailjs_public_key'

   NEXT_PUBLIC_SUPABASE_URL='your_public_supabase_url'
   NEXT_PUBLIC_SUPABASE_ANON_KEY='your_public_supabase_anon_key'

   NEXT_PUBLIC_CV_LINK='https://drive.google.com/your_cv_link'
   NEXT_PUBLIC_PORTFOLIO_LINK='https://drive.google.com/your_portfolio_link'

   NEXT_PUBLIC_GITHUB_LINK='https://github.com/your_github_username'
   NEXT_PUBLIC_LINKEDIN_LINK='https://www.linkedin.com/in/your_linkedin_username'
   NEXT_PUBLIC_INSTAGRAM_LINK='https://instagram.com/your_instagram_username'
   NEXT_PUBLIC_DISCORD_ID='https://discord.com/users/your_discord_id'
   NEXT_PUBLIC_EMAIL_ADDRESS='mailto:your_email_account@gmail.com'
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

4. **Configure OAuth applications:**
   - **Google**: Create OAuth client in Google Cloud Console
   - **GitHub**: Create OAuth app in GitHub Developer Settings
   - **Discord**: Create application in Discord Developer Portal

5. **Run the development server:**

   ```sh
   npm run dev
   ```

6. Open http://localhost:3000 in your browser.

---

## 🔧 Configuration

### OAuth Setup

1. **Google OAuth**:
   - Go to Google Cloud Console
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs
   - Enable People API

2. **GitHub OAuth**:
   - Go to GitHub Developer Settings
   - Create new OAuth App
   - Set authorization callback URL

3. **Discord OAuth**:
   - Go to Discord Developer Portal
   - Create new application
   - Set redirect URIs in OAuth2 settings

### Database Schema

The application uses Supabase with single table, e.g. ```guestbook```. Queries to execute:

   ```sh
      # Create table schema
      create table guestbook (
         id uuid primary key default uuid_generate_v4(),
         user_id uuid references auth.users(id),
         user_name_ text,
         user_avatar text,
         message text
         created_at timestamp with time zone default now(),
      );

      # Add security policy
      create policy "Allow insert for authenticated users"
         on guestbook
         for insert
         to authenticated
         with check (auth.uid() = user_id);

      create policy "Allow read for all"
         on guestbook
         for select
         to public
         using (true);
   ```

### Environment Variables

Ensure all required environment variables are set in production:

- Database connection strings
- OAuth client credentials
- EmailJS Key and ID's
- All of your social links

## 🚀 Deployment

To deploy the project, use one of these services:

- **Vercel:** `vercel --prod`, or you can connect your repo and deploy.
- **Nginx & PM2:** config your own Nginx and PM2 service along with other related configurations.
- **Docker:** config your own Dockerfile along with other related configurations.

---

## 👤 Author

- **Genta Bahana Nagari** – [LinkedIn](https://www.linkedin.com/in/genta-bahana-nagari/) | [GitHub](https://github.com/genta-bahana-nagari)

---

## 🌟 Show Your Support

If you find this script helpful, feel free to ⭐ the repository and share it with others!

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---
