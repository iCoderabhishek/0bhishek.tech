import uptime24 from "@/assets/images/uptime24.png";
import clandr from "@/assets/images/clandr.png";
import todlerrui from "@/assets/images/todlerrui.png";
import { Project } from "@/types";
import jurn from "@/assets/images/jurn.png";
import reactstarterplus from "@/assets/images/react-starter-plus.png";


export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Uptime24",
    date: "July 2025 - Present",
    description:
      "A decentralized uptime monitoring platform where users validate website status. Combines Web3 incentives with transparent reliability tracking.",
    tags: ["Next.js", "TypeScript", "Web3", "TailwindCSS"],
    videoSrc: "/assets/videos/uptime24.mp4",
    imageSrc: uptime24,
    liveUrl: "https://www.uptime24.online/",
    githubUrl: "https://github.com/iCoderabhishek/uptime-24.git",
  },

  {
    id: 2,
    title: "Todlerr UI",
    date: "Oct 2024 - Nov 2024",
    description:
      "A component library and UI framework to help developers quickly add polished components, themes, and responsive layouts to their apps at scale.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    videoSrc: "/assets/videos/atomix.mp4",
    imageSrc: todlerrui,
    liveUrl: "https://github.com/0bhishek/todlerrui",
    githubUrl: "https://github.com/0bhishek/todlerrui",
  },
    {
    id: 3,
    title: "Clandr",
    date: "July 2025",
    description:
      "Cross-platform scheduling app with Google Calendar integration. Built to support both web and native platforms seamlessly.",
    tags: ["React Native", "Expo", "Next.js", "PostgreSQL"],
    videoSrc: "/assets/videos/clandr.mp4",
    imageSrc: clandr,
    liveUrl: "https://github.com/iCoderabhishek/clandr-mobile-app.git",
    githubUrl: "https://github.com/iCoderabhishek/clandr-mobile-app.git",
  },
  {
      
    id: 4,
    title: 'Jurn - Minimalist Journal Native App ',
    date: "July 2025",
    description:
      "A minimalist journal app built with React Native. It allows users to create, edit, and delete journal entries, as well as view and search through them.",
    tags: ["React Native", "Expo", "NativeWind", "AsyncStorage"],
    videoSrc: "/assets/videos/jurn.mp4",
    imageSrc: jurn,
    liveUrl: "https://github.com/iCoderabhishek/Jurn-minimalistic-journal-app.git",
    githubUrl: "https://github.com/iCoderabhishek/Jurn-minimalistic-journal-app.git",
  },
  {
    id: 5,
    title: "React Starter Plus",
    date: "August 2025",
    description: "A npm starter template that lets you scaffold React apps with JS/TS, TailwindCSS V4, CICD and more.",
    tags: ["NPM", "React19", "CLI", "CI/CD", "Zustand", "Vercel"],
    videoSrc: "/assets/videos/react-starter-plus.mp4",
    imageSrc: reactstarterplus,
    liveUrl: "https://npmjs.com/package/react-starter-plus",
    githubUrl: "https://github.com/iCoderabhishek/npm-package.git",
  }
];