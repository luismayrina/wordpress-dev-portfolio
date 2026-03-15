import { Project, Experience, Skill, SocialLink, AITool } from './types';

export const DEVELOPER_INFO = {
  name: "Elijah Luis Mayrina",
  role: "WordPress Developer",
  about: "I specialize in custom WordPress builds, plugin optimization, and full-stack development. I have a proven track record of delivering high-performance web solutions and mobile applications.",
  email: "luismayrinaa@gmail.com",
  resumeUrl: "/Resume WP ElijahLuisMayrina.pdf",
  profileImage: "/image000012.jpg",
  phone: "0961-779-4522",
  education: "B.S. in Computer Science, Lyceum of the Philippines University - Cavite"
};

export const SKILLS: Skill[] = [
  { name: "WordPress", category: "Core", icon: "layout" },
  { name: "Shopify", category: "Core", icon: "shopping-bag" },
  { name: "Wix", category: "Core", icon: "globe" },
  { name: "PHP", category: "Core", icon: "code" },
  { name: "JavaScript", category: "Core", icon: "zap" },
  { name: "Laravel", category: "Core", icon: "terminal" },
  { name: "MySQL", category: "Core", icon: "database" },
  { name: "Firebase", category: "Core", icon: "flame" },
];

export const AI_TOOLS: AITool[] = [
  { name: "Antigravity", useCase: "Coding & Dev", category: "Development" },
  { name: "Cursor", useCase: "Coding & Dev", category: "Development" },
  { name: "GitHub Copilot", useCase: "Coding & Dev", category: "Development" },
  { name: "ChatGPT", useCase: "Content Creation", category: "Content" },
  { name: "Gemini", useCase: "Content Creation", category: "Content" },
  { name: "Midjourney", useCase: "Content Creation", category: "Content" },
  { name: "Adobe Firefly", useCase: "Content Creation", category: "Content" },
  { name: "Figma AI", useCase: "Design & UI", category: "Design" },
  { name: "Relume AI", useCase: "Design & UI", category: "Design" },
  { name: "Uizard", useCase: "Design & UI", category: "Design" },
  { name: "Framer", useCase: "Design & UI", category: "Design" },
  { name: "ChatGPT", useCase: "SEO & Growth", category: "SEO" },
  { name: "Gemini", useCase: "SEO & Growth", category: "SEO" },
  { name: "RankMath", useCase: "SEO & Growth", category: "SEO" },
  { name: "Surfer SEO", useCase: "SEO & Growth", category: "SEO" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Coffee Tonya PH",
    category: "E-Commerce",
    description: "A premium e-commerce platform for a specialty coffee roastery, featuring a seamless shopping experience and custom product filtering.",
    image: "/coffeetonyaph.com.png",
    tags: ["Wix", "Payment", "PHP"],
    link: "https://coffeetonyaph.com"
  },
  {
    id: "2",
    title: "Duck Donuts",
    category: "Brand Marketing",
    description: "A vibrant brand marketing website for a popular donut franchise, focusing on visual storytelling and customer engagement.",
    image: "/www.duckdonutsph.com.png",
    tags: ["WordPress", "Elementor", "Design"],
    link: "https://www.duckdonutsph.com"
  },
  {
    id: "3",
    title: "Al Nakheel",
    category: "Corporate",
    description: "A professional corporate website for Al Nakheel, showcasing their services and portfolio with a modern, high-performance interface.",
    image: "/al-nakheel.vercel.app.png",
    tags: ["WordPress", "Elementor", "Corporate"],
    link: "https://al-nakheel.vercel.app"
  },
  {
    id: "4",
    title: "U-BIX Colleges",
    category: "Educational Institution",
    description: "A comprehensive educational portal for U-BIX Colleges, providing students and faculty with easy access to information and resources.",
    image: "/ubixcollegesinc.edu.ph.png",
    tags: ["WordPress", "Elementor", "Contact Form 7"],
    link: "https://ubixcollegesinc.edu.ph"
  },
  {
    id: "5",
    title: "Bravo Hotel",
    category: "Booking",
    description: "An integrated booking and management system for Bravo Hotel, streamlining the reservation process for guests.",
    image: "/bravohotelsph.com.png",
    tags: ["WordPress", "Booking System", "UI/UX"],
    link: "https://bravohotelsph.com"
  },
  {
    id: "6",
    title: "Pocket Friendly Shop",
    category: "E-Commerce",
    description: "A user-friendly e-commerce store focused on affordability and accessibility, built for high conversion and performance.",
    image: "/pocketfriendlyshop.com.png",
    tags: ["WordPress", "WooCommerce", "Marketing"],
    link: "https://pocketfriendlyshop.com"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    company: "U-BIX Corporation",
    role: "Software Developer",
    period: "Oct 2025 - Present",
    description: [
      "Delivered custom WordPress website builds for several clients.",
      "Redesigned flagship website resulting in a 118% increase in traffic through performance and SEO optimization."
    ]
  },
  {
    id: "exp2",
    company: "Supernova Innovations Inc.",
    role: "Software Developer",
    period: "Jan 2025 - Oct 2025",
    description: [
      "Developed an EV charging mobile app using Dart and Flutter.",
      "Built and maintained Laravel MVC-based backend systems with MySQL and REST APIs.",
      "Built full-featured websites using WordPress and Elementor."
    ]
  },
  {
    id: "exp3",
    company: "Streamsoft Consulting Inc.",
    role: "WordPress Developer",
    period: "July 2024 - Jan 2025",
    description: [
      "Designed and maintained responsive WordPress websites for multiple clients.",
      "Reduced plugin usage by 50% and enhanced website security measures."
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://linkedin.com/in/luismayrina", icon: "linkedin" },
  { platform: "GitHub", url: "https://github.com/luismayrina", icon: "github" },
  { platform: "Email", url: "/Resume WP ElijahLuisMayrina.pdf", icon: "mail" },
];
