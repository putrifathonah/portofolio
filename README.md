# Putri Fathonah — Interactive Personal Portfolio

A modern, highly interactive, responsive personal portfolio website built for **Putri Fathonah**, Information Systems student and digital product developer.

---

## 🚀 Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Animations & Motion**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Poppins (Google Fonts)

---

## 💻 Getting Started

### 1. Installation

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 3. Build for Production

```bash
npm run build
```

---

## 🎨 How to Customize Content

All website data is completely separated from the UI component code inside `src/data/`:

### 📸 Replace Profile Photo
- Replace the image file at `public/assets/profile/profile-placeholder.jpg` with your own photo.

### 📄 Replace CV PDF
- Replace the PDF file at `public/assets/cv/cv-demo.pdf` with your real CV PDF file.

### 🖼️ Replace Project Covers & Images
- Place project cover images inside `public/assets/projects/`.
- Edit `src/data/projects.js` to update titles, descriptions, tags, and links.

### 💼 Add or Edit Experiences
- Edit `src/data/experiences.js` to update internship roles, company names, periods, and descriptions.

### 🛠️ Edit Skills & Technologies
- Edit `src/data/skills.js` to update skill categories and levels.
- Edit `src/data/technologies.js` to customize items in the dual-row marquee.

### 🌐 Edit Social Media Links
- Edit `src/data/socials.js` to update email, GitHub, LinkedIn, and Instagram URLs.

---

## 📄 License

Designed & built for **Putri Fathonah**.
