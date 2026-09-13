export const projectsData = [
  {
    id: "magang-pln-s2jb",
    title: "MagangPLNS2JB",
    category: "Web Application / Attendance System",
    year: "2026",
    description: "A digital attendance and participant management system designed for internship participants and guests at PLN S2JB to improve efficiency, verification, and monitoring.",
    fullDescription: "MagangPLNS2JB is a comprehensive digital transformation initiative built for PLN S2JB. The system digitizes internship attendance verification, guest logbook recording, real-time location check-ins, and participant reporting.",
    problem: "Manual attendance records and physical guest logbooks led to data inaccuracies, lack of real-time monitoring, and slow monthly report generation.",
    solution: "Developed a central web application integrating automated location verification, facial identification checks, structured admin dashboards, and downloadable analytics reports.",
    role: "Full-stack Web Developer & System Designer",
    image: "/assets/projects/magang-pln.jpg",
    technologies: ["Laravel", "PHP", "MySQL", "GPS Location", "Face Recognition", "Tailwind CSS"],
    features: [
      "Real-time GPS Location Geofencing",
      "Facial Verification Check-in",
      "Interactive Participant & Admin Dashboard",
      "Automated Monthly Attendance Export (PDF/Excel)",
      "Role-based Access Control (Admin, Mentor, Intern)"
    ],
    github: "https://github.com/putrifathonah",
    demo: "#"
  },
  {
    id: "kai-e-dokumen",
    title: "KAI e-Dokumen",
    category: "Document Management System",
    year: "2026",
    description: "A web-based document management system designed to centralize, organize, search, and monitor official documents for PT Kereta Api Indonesia (Persero) Divre III Palembang.",
    fullDescription: "KAI e-Dokumen provides a secure digital repository for official correspondence, internal memos, operational guidelines, and archival files across divisions in PT KAI Divre III Palembang.",
    problem: "Physical document filing caused delays in document retrieval, risk of lost paperwork, and difficulty tracking document revision histories.",
    solution: "Created a searchable digital archive with metadata tagging, instant text search, document versioning, and encrypted file access.",
    role: "Information Systems Intern & Developer",
    image: "/assets/projects/kai-edokumen.jpg",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "REST API"],
    features: [
      "Centralized Document Repository & Tagging",
      "Instant Full-Text Search & Filters",
      "Document Revision & Version History",
      "Granular Departmental Permission Control",
      "Audit Trail & Document Access Logging"
    ],
    github: "https://github.com/putrifathonah",
    demo: "#"
  },
  {
    id: "learnify",
    title: "Learnify",
    category: "Learning Platform / UI UX",
    year: "2026",
    description: "A microlearning platform concept designed to create a more engaging, gamified, and interactive mobile learning experience for modern students.",
    fullDescription: "Learnify reimagines mobile education by breaking down complex subjects into bite-sized interactive cards, quick quizzes, daily progress streaks, and collaborative study spaces.",
    problem: "Traditional online learning platforms often suffer from low completion rates due to lengthy video lectures and uninspiring user interfaces.",
    solution: "Designed and prototyped a mobile app focusing on micro-learning, clean visual feedback, dark mode aesthetics, and gamified progress milestones.",
    role: "UI/UX Designer & Mobile Developer",
    image: "/assets/projects/learnify.jpg",
    technologies: ["Flutter", "Firebase", "UI/UX Design", "Figma", "Framer Motion"],
    features: [
      "Bite-sized Microlearning Cards",
      "Interactive Quiz & Flashcard Modes",
      "Gamified Streaks & Badges System",
      "Figma Prototype & Design System",
      "Cross-platform Mobile UI (iOS & Android)"
    ],
    github: "https://github.com/putrifathonah",
    demo: "#"
  },
  {
    id: "foto-kita-blur",
    title: "Foto Kita Blur",
    category: "Computer Vision",
    year: "2026",
    description: "An interactive computer vision project utilizing real-time hand gesture recognition to privacy-blur sensitive image regions dynamic with webcam feedback.",
    fullDescription: "Foto Kita Blur explores human-computer interaction by combining MediaPipe hand tracking with OpenCV image processing to let users control camera privacy blur using natural hand gestures.",
    problem: "Standard photo blurring tools rely on tedious manual brush tools or complex software interfaces.",
    solution: "Built a Python-based computer vision application that detects hand pinches and palm gestures to dynamically select and blur focal zones in real-time.",
    role: "Computer Vision Developer",
    image: "/assets/projects/foto-kita-blur.jpg",
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "Computer Vision"],
    features: [
      "Real-time Hand Landmark Tracking",
      "Gesture-driven Blur Radius Adjustment",
      "Privacy Focal Zone Selection",
      "High FPS Video Stream Processing",
      "Custom UI Gesture Indicators"
    ],
    github: "https://github.com/putrifathonah",
    demo: "#"
  }
];
