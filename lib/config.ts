// Single place to edit personal links. Empty string = not set yet (the UI hides or disables it).
export const site = {
  name: "Mariam Mohammed Elbendary",
  role: "Frontend Developer",
  url: "https://mariam-elbendary.github.io",
  email: "mariam.elbendary.els@gmail.com",
  phone: "01099675801",
  location: "Cairo, Egypt",
  github: "https://github.com/Mariam-Elbendary",
  linkedin: "", // TODO: paste your exact LinkedIn profile URL here
};

export type Project = {
  title: string; badge: string; context?: string; summary: string;
  tech: string[]; features: string[]; github: string; live: string; // TODO: add real URLs
};

export const projects: Project[] = [
  {
    title: "E-Commerce Web Application", badge: "100/100", context: "Route Graduation Project",
    summary: "A full shopping experience built with Next.js: browse and search products, manage a cart and wishlist, and check out with Cash on Delivery or Stripe.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query", "NextAuth.js", "React Hook Form", "Zod", "shadcn/ui", "REST APIs", "Stripe"],
    features: ["User authentication and account management", "Product browsing, search and category filtering", "Shopping cart with dynamic updates", "Wishlist", "Address management", "Checkout with Cash on Delivery or Stripe", "Order placement and order management", "Form validation and error handling", "Responsive, reusable components"],
    github: "", live: "",
  },
  {
    title: "Social Media Web Application", badge: "50/50",
    summary: "A React social app with a dynamic feed, posts, comments and user profiles, fully integrated with a REST API.",
    tech: ["React.js", "JavaScript", "React Router", "TanStack Query", "Axios", "Tailwind CSS", "React Hook Form", "Zod", "REST APIs"],
    features: ["User registration, login and password management", "Dynamic home feed", "Post and comment CRUD", "Post details page", "User profiles", "Image uploads", "Form validation and API error handling", "Loading states and interactive notifications", "Responsive UI"],
    github: "", live: "",
  },
];

export const skills = [
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Redux / State Management"] },
  { group: "Core Concepts", items: ["Responsive Web Design", "REST API Integration", "Asynchronous Programming", "Fetch / Axios", "Component Architecture", "DOM Manipulation", "OOP", "Form Validation", "Authentication", "Client-side State Management"] },
  { group: "Libraries", items: ["TanStack Query", "React Hook Form", "Zod", "NextAuth.js", "shadcn/ui", "React Router", "Axios"] },
  { group: "Tools", items: ["Git", "GitHub", "GitHub Pages", "VS Code", "Figma"] },
  { group: "Additional (basic)", items: ["Node.js", "MongoDB", "SQL", "Python"] },
];

export const experience = [
  { org: "Route Academy", title: "Front-End Web Development Diploma", dates: "Mar 2026 – Sep 2026",
    points: ["Modern JavaScript, React.js, Next.js and TypeScript", "Component architecture, React Hooks and state management", "SSR / client-side rendering concepts and REST API integration", "Responsive UI with Tailwind CSS and Bootstrap; Git/GitHub workflow", "Practical project development"],
    highlight: "100/100 — Practical JavaScript Assessment" },
  { org: "Digital Egypt Pioneers Initiative (DEPI)", title: "Front-End Track", dates: "Jan 2024 – Jun 2024",
    points: ["6-month intensive web development training", "React, Next.js and Tailwind CSS", "Backend/API integration and MongoDB basics", "Git/GitHub collaboration while building practical web applications"] },
  { org: "Digitera Program | iCareer", title: "Product Development, AI Tools & Career Readiness", dates: "",
    points: ["PRD documentation, requirements analysis, user stories and acceptance criteria", "Agile planning: Jira backlog and sprint planning", "AI-assisted development, debugging, testing and Git/GitHub collaboration", "Technical documentation and project presentation"] },
];
