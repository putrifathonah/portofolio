# ANTIGRAVITY MASTER PROMPT

# PUTRI FATHONAH — INTERACTIVE PERSONAL PORTFOLIO

---

## ROLE

You are a senior frontend engineer, UI/UX designer, interaction designer, and creative developer.

Your task is to design and build a high-quality personal portfolio website for:

**Putri Fathonah**

The website must demonstrate strong:

- UI/UX design
- Frontend development
- Interaction design
- Visual storytelling
- Responsive design
- Clean Code
- Clean Structure
- Component architecture

Do not create a generic portfolio template.

Create a portfolio that feels like a carefully designed digital experience.

---

# 01. PROJECT OBJECTIVE

Build a modern, interactive, responsive personal portfolio website that presents Putri Fathonah as an Information Systems student who enjoys:

- Building digital products
- UI/UX design
- Web development
- Software development
- Exploring technology
- Solving real-world problems

The website should communicate:

> "I build digital experiences by combining technology, design, and curiosity."

The website will initially use dummy images and a dummy CV.

Real assets can be replaced later without changing the application architecture.

---

# 02. MANDATORY TECHNOLOGY STACK

The project MUST use:

- React
- Vite
- JavaScript
- Tailwind CSS
- Framer Motion / Motion
- Lucide React

React + Vite is mandatory.

---

## DO NOT USE

Do NOT use:

- Next.js
- Vue
- Angular
- Nuxt
- Svelte
- Astro

Do not migrate the project to another framework.

Do not introduce another frontend framework.

---

# 03. CLEAN CODE REQUIREMENTS

The entire codebase must follow Clean Code principles.

Rules:

- Use meaningful variable names.
- Use meaningful function names.
- Use meaningful component names.
- Keep components small and focused.
- Keep functions small.
- Avoid duplicated code.
- Avoid unnecessary abstractions.
- Avoid giant components.
- Avoid giant JSX files.
- Separate data from UI.
- Reuse components.
- Reuse animation variants.
- Remove unused imports.
- Remove unused variables.
- Avoid unnecessary dependencies.
- Avoid deeply nested JSX.
- Avoid magic numbers where possible.
- Keep logic readable.
- Keep responsibilities separated.

The code should be easy for another developer to understand and modify.

---

# 04. CLEAN PROJECT STRUCTURE

Use a clean, scalable React architecture.

Recommended structure:

```text
src/
│
├── components/
│   ├── common/
│   │   ├── GlassCard.jsx
│   │   ├── MagneticButton.jsx
│   │   ├── Reveal.jsx
│   │   └── SectionHeading.jsx
│   │
│   ├── navigation/
│   │   ├── Navbar.jsx
│   │   ├── MobileMenu.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── cursor/
│   │   └── CustomCursor.jsx
│   │
│   ├── projects/
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectGallery.jsx
│   │   ├── ProjectModal.jsx
│   │   └── ProjectTags.jsx
│   │
│   ├── experience/
│   │   ├── ExperienceCard.jsx
│   │   └── ExperienceTimeline.jsx
│   │
│   └── technologies/
│       ├── TechnologyCard.jsx
│       └── TechnologyMarquee.jsx
│
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Technologies.jsx
│   └── Contact.jsx
│
├── data/
│   ├── projects.js
│   ├── experiences.js
│   ├── skills.js
│   ├── technologies.js
│   └── socials.js
│
├── hooks/
│   ├── useMousePosition.js
│   ├── useScrollProgress.js
│   └── useMediaQuery.js
│
├── utils/
│   └── constants.js
│
├── App.jsx
├── main.jsx
└── index.css

public/
└── assets/
    ├── profile/
    ├── projects/
    ├── technologies/
    └── cv/
```

You may adjust the structure if necessary, but preserve the principles of separation, reusability, and maintainability.

---

# 05. COMPONENT ARCHITECTURE

Every component should have a clear responsibility.

For example:

`ProjectCard`

Responsibilities:

- Display project information.
- Handle project card interaction.
- Trigger project details.

It should NOT handle:

- Global navigation.
- Theme management.
- Contact form logic.
- Experience rendering.

Likewise:

`ProjectGallery`

should handle gallery interaction.

`ProjectModal`

should handle project detail presentation.

`TechnologyMarquee`

should handle technology marquee animation.

---

# 06. DATA-DRIVEN ARCHITECTURE

Do not hardcode repeated content directly inside JSX.

Use data files:

```text
src/data/projects.js
src/data/experiences.js
src/data/skills.js
src/data/technologies.js
src/data/socials.js
```

Example:

```javascript
{
  id: "magang-pln",
  title: "MagangPLNS2JB",
  category: "Web Application",
  year: "2026",
  description: "...",
  image: "/assets/projects/magang-pln.jpg",
  technologies: [],
  github: "",
  demo: ""
}
```

Adding a project should only require editing the data file.

Do not modify `ProjectCard.jsx` to add a new project.

---

# 07. DESIGN DIRECTION

The visual design must be:

- Modern
- Premium
- Minimal
- Interactive
- Creative
- Futuristic
- Elegant
- Personal
- Motion-rich

Visual keywords:

`creative developer`
`digital experience`
`editorial portfolio`
`minimal interface`
`interactive portfolio`
`premium web design`

Avoid generic student portfolio aesthetics.

Avoid:

- Bootstrap-like layouts
- Excessive cards
- Excessive gradients
- Excessive glassmorphism
- Generic template sections
- Fake statistics
- Fake testimonials
- Fake achievements
- Excessive shadows
- Excessive animations

---

# 08. TYPOGRAPHY

Use:

**Poppins**

Create strong typographic hierarchy.

Hero heading:

Very large.

Section headings:

Large and bold.

Body text:

Readable with generous line height.

Labels:

Small uppercase typography with letter spacing.

Use whitespace intentionally.

---

# 09. COLOR SYSTEM

## LIGHT MODE

Background:

Warm white / off-white.

Text:

Near black.

Secondary:

Muted gray.

Accent:

Pink
Purple
Blue

## DARK MODE

Background:

Near black.

Text:

White / off-white.

Accent:

Pink
Purple
Blue

Primary accents:

```text
Pink   #F472B6
Purple #A78BFA
Blue   #3B82F6
```

Do not use all accents aggressively.

Use them as subtle visual highlights.

---

# 10. GLASSMORPHISM

Use glassmorphism selectively.

Good locations:

- Navbar
- Floating badges
- Skill cards
- Experience cards
- Project overlays
- Technology cards
- CTA elements

Glass style:

- Backdrop blur
- Semi-transparent background
- Subtle border
- Soft shadow

Do not make every element glass.

---

# 11. BACKGROUND

Create a subtle dynamic background.

Possible elements:

- Grain texture
- Soft gradient blobs
- Radial gradients
- Minimal grid
- Floating particles

Background must remain subtle.

The content must remain the visual priority.

---

# 12. CUSTOM CURSOR

Create a custom cursor for desktop.

Default:

Small circular cursor.

Follower:

Soft larger circle that follows the pointer.

Context-sensitive states:

Button:

`→`

Project:

`VIEW`

Gallery:

`DRAG`

Image:

`EXPLORE`

Transitions must be smooth.

Disable custom cursor on mobile and touch devices.

---

# 13. GLOBAL ANIMATION SYSTEM

Animation is a core part of the website.

Use:

- Fade
- Slide
- Scale
- Stagger
- Reveal
- Parallax
- Floating
- Magnetic hover
- Image zoom
- Scroll animation
- Horizontal drag
- Modal transition
- Theme transition
- Marquee

Animations should feel:

- Smooth
- Intentional
- Premium
- Natural

Avoid:

- Excessive bouncing
- Random movement
- Long delays
- Distracting effects
- Heavy continuous JavaScript animation

Respect:

`prefers-reduced-motion`

When reduced motion is enabled, significantly reduce decorative animation.

---

# 14. NAVIGATION

Create a floating sticky navbar.

Navigation:

```text
HOME
ABOUT
SKILLS
EXPERIENCE
PROJECTS
CONTACT
```

Include:

Light / Dark toggle.

Desktop:

- Rounded container
- Glass effect
- Backdrop blur
- Subtle border

Mobile:

- Hamburger menu
- Animated menu
- Full-screen or floating menu

Active section:

Use a subtle visual indicator.

Scrolling:

Use smooth scrolling.

---

# 15. HERO SECTION

Label:

`HELLO, I'M PUTRI`

Main heading:

```text
BUILDING DIGITAL EXPERIENCES
WITH CODE & CREATIVITY.
```

Supporting text:

```text
Information Systems student passionate about technology, digital products, UI/UX, and building meaningful experiences through code.
```

---

# 16. HERO VISUAL

Use a dummy profile image.

Do not wait for a real photo.

The profile image should:

- Be large
- Be visually dominant
- Float subtly
- React to mouse movement
- Have a soft glow
- Have a subtle gradient aura
- Have parallax movement
- Scale slightly on interaction

The animation must feel elegant.

Do not make the image aggressively bounce.

---

# 17. HERO FLOATING ELEMENTS

Create floating glass badges around the image:

```text
UI/UX
DEVELOPER
PROBLEM SOLVER
CREATIVE THINKER
```

Each badge should have:

- Different movement speed
- Slight rotation
- Subtle parallax

---

# 18. HERO ENTRY ANIMATION

When the page loads:

1. Background fades in.
2. Hero label appears.
3. Main heading reveals line by line.
4. Supporting text appears.
5. CTA appears.
6. Profile image scales in.
7. Floating badges appear sequentially.
8. Floating animation begins.

The complete intro animation should not feel slow.

---

# 19. HERO CTA

Primary:

`EXPLORE MY WORK →`

Secondary:

`ABOUT ME`

Interactions:

- Magnetic movement
- Arrow animation
- Scale
- Subtle glow

---

# 20. SCROLL INDICATOR

At the bottom:

```text
SCROLL TO EXPLORE
↓
```

Animate subtly.

---

# 21. ABOUT SECTION

Label:

`ABOUT ME`

Heading:

```text
A LITTLE BIT
ABOUT ME.
```

Layout:

Two columns.

Left:

Profile image.

Right:

Personal introduction.

Use this copy:

> I'm an Information Systems student who enjoys turning ideas and real-world problems into digital experiences.
>
> I'm interested in UI/UX, web development, software systems, and exploring how technology can make everyday processes simpler and more meaningful.
>
> I enjoy learning by building — from digital products and management systems to creative experiments with technology.

---

# 22. ABOUT INFORMATION

Display:

```text
NAME
Putri Fathonah

FIELD
Information Systems

FOCUS
UI/UX • Web Development • Digital Products

UNIVERSITY
Universitas Multi Data Palembang

LOCATION
Indonesia
```

Use compact glass cards.

---

# 23. DOWNLOAD CV

Button:

`DOWNLOAD CV →`

Use dummy file:

```text
public/assets/cv/cv-demo.pdf
```

The button must download the PDF.

The dummy CV should clearly state:

`DEMO CV — REPLACE WITH YOUR REAL CV`

Later the user should only need to replace the PDF file.

---

# 24. SKILLS SECTION

Label:

`SKILLS`

Heading:

```text
TOOLS, SKILLS &
THINGS I LOVE BUILDING.
```

Categories:

## DEVELOPMENT

- React
- JavaScript
- HTML
- CSS
- Tailwind CSS
- Laravel
- PHP
- Node.js
- Express.js
- Flutter

## DATABASE

- MySQL
- MongoDB
- Firebase
- Firestore

## UI / UX

- Figma
- Wireframing
- Prototyping
- Design Systems
- User Interface Design

## TOOLS

- Git
- GitHub
- VS Code
- Postman

---

# 25. SKILLS INTERACTION

Do NOT use percentage progress bars.

Instead:

Create interactive skill cards.

Hover:

- Card moves upward
- Icon animates
- Border highlights
- Subtle gradient appears
- Supporting information appears

---

# 26. PROJECT SECTION

Label:

`SELECTED WORK`

Heading:

```text
BUILDING DIGITAL
EXPERIENCES
```

Supporting:

```text
A collection of projects where I turn ideas, problems, and curiosity into digital experiences.
```

This section should be one of the visual highlights of the portfolio.

---

# 27. PROJECT GALLERY

Projects MUST be presented horizontally.

Users should be able to:

- Drag with mouse
- Horizontal scroll
- Use mouse wheel
- Use arrow buttons
- Swipe on mobile

Do NOT present projects only as a standard vertical grid.

---

# 28. PROJECT GALLERY CONTROLS

Display:

```text
←

DRAG TO EXPLORE

→
```

Progress indicator:

```text
01 ━━━━━━━━━ 04
```

Update progress according to gallery position.

---

# 29. PROJECT DATA

Create:

```text
src/data/projects.js
```

Initial projects:

---

## PROJECT 01

Title:

`MagangPLNS2JB`

Category:

`Web Application / Attendance System`

Year:

`2026`

Description:

```text
A digital attendance and participant management system designed for internship participants and guests at PLN S2JB.
```

Technologies:

- Laravel
- PHP
- MySQL
- GPS
- Face Recognition

---

## PROJECT 02

Title:

`KAI e-Dokumen`

Category:

`Document Management System`

Year:

`2026`

Description:

```text
A web-based document management system designed to centralize, organize, search, and monitor documents.
```

Technologies:

- Laravel
- PHP
- MySQL
- Bootstrap
- JavaScript
- REST API

---

## PROJECT 03

Title:

`Learnify`

Category:

`Learning Platform / UI UX`

Year:

`2026`

Description:

```text
A microlearning platform concept designed to create a more engaging and interactive learning experience.
```

Technologies:

- Flutter
- Firebase
- UI/UX
- Figma

---

## PROJECT 04

Title:

`Foto Kita Blur`

Category:

`Computer Vision`

Year:

`2026`

Description:

```text
An interactive computer vision project using hand gesture recognition to control image blur.
```

Technologies:

- Python
- OpenCV
- MediaPipe
- Computer Vision

---

# 30. PROJECT CARD

Each project card must contain:

- Project image
- Category
- Title
- Description
- Technology tags
- Year
- View Project

Hover:

- Image zoom
- Card moves slightly upward
- Overlay appears
- Gradient appears
- Cursor becomes `VIEW`
- Arrow animates

---

# 31. PROJECT MODAL

Clicking a project opens an animated detail modal.

Display:

- Project title
- Category
- Year
- Overview
- Problem
- Solution
- Role
- Technologies
- Features
- Screenshots
- GitHub
- Demo

If information is unavailable:

Use placeholder text.

Do NOT invent fake achievements or metrics.

Modal animation:

- Fade
- Scale
- Background blur
- Image reveal

---

# 32. EXPERIENCE SECTION

Label:

`EXPERIENCE`

Large heading:

```text
MY JOURNEY THROUGH
WORK & LEADERSHIP
```

Create a visual timeline.

---

# 33. EXPERIENCE DATA

Create:

```text
src/data/experiences.js
```

Experience 01:

Company:

`PT Kereta Api Indonesia (Persero) — Divre III Palembang`

Role:

`Information Systems Intern`

Description:

```text
Worked on digital system development initiatives and document management, including the development of KAI e-Dokumen to help centralize and organize documents.
```

Technologies:

- Laravel
- PHP
- MySQL
- JavaScript
- REST API

Experience 02:

Company:

`PLN S2JB`

Role:

`Internship / System Development`

Description:

```text
Worked on the development concept of MagangPLNS2JB, a digital attendance and participant management system designed to improve attendance efficiency and monitoring.
```

Technologies:

- Laravel
- PHP
- MySQL
- GPS
- Face Recognition

---

# 34. EXPERIENCE ANIMATION

As the visitor scrolls:

- Timeline line grows
- Year appears
- Card slides in
- Description fades in
- Technology tags stagger in

---

# 35. TECHNOLOGIES SECTION

Label:

`TECHNOLOGIES`

Heading:

```text
TECHNOLOGIES
I USE.
```

Supporting:

```text
Some of the tools and technologies I use to turn ideas into real products.
```

Technologies:

- React
- JavaScript
- Laravel
- PHP
- Node.js
- Express
- MySQL
- MongoDB
- Firebase
- Flutter
- Python
- OpenCV
- MediaPipe
- Figma
- Git
- GitHub
- Tailwind CSS

---

# 36. TECHNOLOGY MARQUEE

Create two infinite marquee rows.

Row 1:

Move left.

Row 2:

Move right.

The marquee must:

- Loop infinitely
- Be smooth
- Pause on hover
- Resume smoothly

---

# 37. TECHNOLOGY INTERACTION

Hover:

- Logo scales
- Slight rotation
- Subtle glow
- Technology name becomes more prominent

---

# 38. CONTACT SECTION

Label:

`LET'S CONNECT`

Large heading:

```text
HAVE AN IDEA?

LET'S BUILD
SOMETHING MEANINGFUL.
```

Supporting:

```text
Whether it's a digital product, creative experiment, or simply a conversation about technology, I'd love to hear from you.
```

---

# 39. CONTACT LINKS

Include:

- Email
- GitHub
- LinkedIn
- Instagram

Do NOT invent real accounts.

Use placeholders.

Store links in:

```text
src/data/socials.js
```

---

# 40. CONTACT FORM

Fields:

- Name
- Email
- Message

Button:

`SEND MESSAGE →`

Version 1 is frontend-only.

Implement:

- Input validation
- Loading state
- Success state
- Error state

Do NOT claim the message was actually delivered without a backend.

---

# 41. FINAL CTA

Create a large typography section:

```text
KEEP BUILDING.
KEEP LEARNING.
KEEP EXPLORING.
```

Reveal each line during scrolling.

---

# 42. FOOTER

Display:

```text
PUTRI FATHONAH
```

Navigation:

- About
- Skills
- Experience
- Projects
- Contact

Social:

- GitHub
- LinkedIn
- Instagram

Bottom:

```text
© 2026 Putri Fathonah

Designed & built with curiosity.
```

Add:

`BACK TO TOP ↑`

---

# 43. DUMMY ASSETS

The website MUST work without real personal assets.

Do NOT wait for the user to upload anything.

---

## PROFILE IMAGE

Use:

```text
public/assets/profile/profile-placeholder.jpg
```

The image should be:

- Generic
- Professional
- Non-identifiable
- Suitable for a developer portfolio

Do NOT use celebrities or recognizable real people.

---

## PROJECT IMAGES

Use:

```text
public/assets/projects/
```

Files:

```text
magang-pln.jpg
kai-edokumen.jpg
learnify.jpg
foto-kita-blur.jpg
```

Use abstract UI or digital product visuals.

Do not present them as actual screenshots.

---

# 44. DUMMY CV

Create:

```text
public/assets/cv/cv-demo.pdf
```

The PDF must clearly state:

`DEMO CV — REPLACE WITH YOUR REAL CV`

The Download CV button must work.

---

# 45. RESPONSIVE DESIGN

The website must be responsive.

## DESKTOP

- Large hero
- Custom cursor
- Horizontal project gallery
- Floating elements
- Large typography

## TABLET

Adjust:

- Spacing
- Typography
- Gallery dimensions
- Floating elements

## MOBILE

Use:

- Hamburger navigation
- Single-column layouts
- Swipeable projects
- Touch-friendly buttons
- No custom cursor
- Reduced decorative animation

Mobile must not look like a compressed desktop layout.

---

# 46. ACCESSIBILITY

Implement:

- Semantic HTML
- Alt text
- Keyboard navigation
- Focus states
- Accessible buttons
- Accessible navigation
- Good color contrast
- Reduced-motion support

---

# 47. PERFORMANCE

The website contains many animations.

Keep performance high.

Prefer:

- CSS transforms
- Opacity animations
- GPU-friendly animation
- Lazy-loaded images
- Optimized images

Avoid:

- Heavy video backgrounds
- Huge assets
- Excessive DOM animation
- Expensive continuous calculations

Target a smooth experience.

---

# 48. NO BACKEND

Version 1 is frontend-only.

Do NOT build:

- Database
- Authentication
- Admin dashboard
- CMS
- API
- Contact backend

---

# 49. NO FAKE INFORMATION

Do NOT create:

- Fake statistics
- Fake achievements
- Fake awards
- Fake testimonials
- Fake clients
- Fake companies
- Fake metrics
- Fake project results

When information is unavailable:

Use placeholders.

---

# 50. CONTENT STYLE

Copy should feel:

- Human
- Confident
- Curious
- Professional
- Authentic

Avoid:

- Overly corporate language
- Generic AI phrases
- Exaggerated claims
- Empty marketing language

The portfolio should sound like a real person.

---

# 51. VISUAL STORY

The page should follow this narrative:

```text
WHO I AM
    ↓
WHAT I CAN DO
    ↓
WHAT I HAVE BUILT
    ↓
WHERE I HAVE LEARNED
    ↓
WHAT I USE
    ↓
LET'S CONNECT
```

Sections should transition naturally.

---

# 52. INTERACTION PRIORITY

Priority:

1. Usability
2. Visual hierarchy
3. Content clarity
4. Animation
5. Decorative effects

Never sacrifice usability for animation.

---

# 53. MOBILE INTERACTION

Desktop:

Full interaction experience.

Mobile:

- Touch-friendly
- Reduced decorative animation
- Swipe project gallery
- No custom cursor
- No hover-dependent information

Every important interaction must remain accessible without hover.

---

# 54. FILE NAMING

React components:

PascalCase.

Examples:

```text
ProjectCard.jsx
ExperienceCard.jsx
CustomCursor.jsx
```

Hooks:

```text
useMousePosition.js
useScrollProgress.js
```

Data:

```text
projects.js
experiences.js
skills.js
technologies.js
socials.js
```

---

# 55. IMPORT RULES

Keep imports organized.

Avoid:

- Circular dependencies
- Unused imports
- Unnecessary deep imports

Use consistent import patterns.

---

# 56. REUSABLE ANIMATIONS

Create reusable animation variants where appropriate.

Examples:

```text
fadeUp
fadeIn
scaleIn
staggerContainer
```

Do not recreate the same animation configuration repeatedly.

---

# 57. ERROR HANDLING

Handle UI errors gracefully.

Broken image:

Use fallback.

Missing project link:

Do not display a fake clickable link.

Missing CV:

Display a clear fallback.

Contact form:

Validate fields.

---

# 58. DEVELOPMENT WORKFLOW

Follow this order:

### STEP 1

Read this entire file.

### STEP 2

Inspect the existing project.

If no React project exists:

Initialize React + Vite.

### STEP 3

Install only required dependencies.

### STEP 4

Create clean project structure.

### STEP 5

Create data files.

### STEP 6

Create reusable components.

### STEP 7

Create sections.

### STEP 8

Implement responsive layout.

### STEP 9

Implement theme system.

### STEP 10

Implement animation system.

### STEP 11

Implement project interactions.

### STEP 12

Implement accessibility.

### STEP 13

Run the application.

### STEP 14

Fix errors.

### STEP 15

Perform visual polish.

---

# 59. QUALITY CONTROL

Before declaring the project complete, verify:

```text
[ ] npm install works
[ ] npm run dev works
[ ] npm run build works
[ ] No console errors
[ ] Navbar works
[ ] Smooth scrolling works
[ ] Light mode works
[ ] Dark mode works
[ ] Theme transition works
[ ] Hero animation works
[ ] Custom cursor works
[ ] Custom cursor disabled on mobile
[ ] About works
[ ] Skills work
[ ] Project gallery works
[ ] Project gallery supports drag
[ ] Project gallery supports mobile swipe
[ ] Project modal works
[ ] Experience timeline works
[ ] Technology marquee works
[ ] Marquee pauses on hover
[ ] Contact form validation works
[ ] CV download works
[ ] Back-to-top works
[ ] Responsive layout works
[ ] Reduced-motion support works
[ ] No broken images
[ ] No fake links
[ ] Dummy assets work
[ ] No unused imports
[ ] No unnecessary dependencies
[ ] Code structure is clean
```

---

# 60. README

Create a README containing:

- Project overview
- Tech stack
- Installation
- Development
- Build
- Replace profile image
- Replace CV
- Add project
- Add experience
- Edit skills
- Edit technologies
- Edit social links
- Deployment

Keep the README simple and understandable.

---

# 61. FINAL DESIGN TEST

Before finishing, evaluate the website as if you were reviewing a portfolio for a competitive technology program.

Ask:

### Does it look personal?

### Does it communicate Putri's abilities?

### Does it demonstrate frontend skills?

### Does it demonstrate UI/UX understanding?

### Are the interactions intentional?

### Is the animation polished?

### Is the typography strong?

### Is the responsive behavior good?

### Is the code maintainable?

### Is the website memorable?

If the answer is no, improve the implementation.

---

# 62. FINAL IMPLEMENTATION RULE

This is NOT a simple portfolio template.

Do not reduce the project into:

```text
Hero
About
Skills
Projects
Contact
```

with basic cards.

The website must feel like a complete digital experience.

The combination of:

**React**

- **Clean Code**

- **Clean Structure**

- **UI/UX**

- **Animation**

- **Interaction**

- **Personal Story**

is the core of this project.

---

# 63. FINAL COMMAND

READ THIS FILE COMPLETELY BEFORE CODING.

Treat this file as the project's SOURCE OF TRUTH.

Build the website using:

**React + Vite + Tailwind CSS + Framer Motion + Lucide React**

Follow Clean Code.

Follow Clean Structure.

Use reusable components.

Separate data from UI.

Use dummy assets.

Do not wait for real assets.

Do not use Next.js.

Do not build a backend.

Do not invent personal information.

Do not remove the animation system.

Do not remove the horizontal project gallery.

Do not remove the custom cursor.

Do not remove light/dark mode.

Do not remove glass elements.

Do not simplify the portfolio into a generic template.

Build a polished, responsive, interactive portfolio that demonstrates:

**DESIGN THINKING**

and

**FRONTEND DEVELOPMENT SKILLS.**

After implementation, inspect the entire application and fix:

- Console errors
- Build errors
- Broken assets
- Layout issues
- Responsive issues
- Animation issues
- Accessibility issues
- Poor spacing
- Typography inconsistencies
- Duplicate code
- Unnecessary dependencies
- Poor component boundaries

The final result should be production-quality frontend code with a polished visual experience.
