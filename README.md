# Personal Portfolio

## 🚀 About the Project

This is my personal portfolio website built using **NextJS 16** along with **Tailwind CSS**. It showcases my skills, projects, and experiences in an interactive and modern UI.

---

## 🛠️ Tech Stack

- **Frontend:** NextJS 16, Tailwind
- **Email Sender Service:** EmailJS
- **Deployment:** Vercel, Docker (with your own config)

---

## ✨ Features

- Fully responsive design with Tailwind CSS
- Smooth animations and transitions
- Dynamic project showcase with images and descriptions
- Contact form integrated with EmailJS for email submissions

---

## 📁 Project Structure

```sh
personal-portfolio/
│
├── public/
│   ├── icons/
│   │   ├── coding-camp.jpeg
│   │   ├── Gamatechno.jpg
│   │   ├── icon.png
│   │   ├── Karawitan-Stembayo.png
│   │   └── PAKS-Stembayo.png
│   │
│   ├── images/
│   │   ├── profile/
│   │   │   ├── profile_1.jpg
│   │   │   ├── profile_2.jpg
│   │   │   └── profile_3.jpg
│   │   │
│   │   ├── projects/
│   │   │   ├── Facts_Club.png
│   │   │   ├── Inventory_System.png
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
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── experience/
│   │   │   └── page.tsx
│   │   ├── project/
│   │   │   └── page.tsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
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

To run this project locally, follow these steps:

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

    NEXT_PUBLIC_CV_LINK='https://drive.google.com/xxxx'
    NEXT_PUBLIC_PORTFOLIO_LINK='https://drive.google.com/xxxx'

    NEXT_PUBLIC_GITHUB_LINK='https://github.com/xxxxxxxxx'
    NEXT_PUBLIC_LINKEDIN_LINK='https://www.linkedin.com/in/xxxxxxxxx'
    NEXT_PUBLIC_INSTAGRAM_LINK='https://instagram.com/xxxxxxxxxxxxxxx'
    NEXT_PUBLIC_DISCORD_ID='https://discord.com/users/xxxxxxxxxxxxxxxxxx'
    NEXT_PUBLIC_EMAIL_ADDRESS='mailto:xxxxxxxxxxxxxxxxx@gmail.com'
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

4. **Run the development server:**

   ```sh
   npm run dev
   ```

5. Open http://localhost:3000 in your browser.

---

## 🚀 Deployment

To deploy the project, use one of these services:

- **Vercel:** `vercel --prod`, or you can connect your repo and deploy.
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
