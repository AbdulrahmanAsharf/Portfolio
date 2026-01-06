import { Project } from "./types";


const services = [
  { title: "Full Stack Developer", icon: "/about/fullstack.png" },
  { title: "Frontend (React / Next.js)", icon: "/about/web.png" },
  { title: "Backend (Node.js / Prisma)", icon: "/about/backend.png" },
];



const technologies = [
  { name: "HTML 5", icon: "/icons/html.png" },
  { name: "CSS 3", icon: "/icons/css.png" },
  { name: "JavaScript", icon: "/icons/javascript.png" },
  { name: "TypeScript", icon: "/icons/typescript.png" },
  { name: "React JS", icon: "/icons/reactjs.png" },
  { name: "Redux Toolkit", icon: "/icons/redux.png" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
  { name: "Node JS", icon: "/icons/nodejs.png" },
  { name: "Three JS", icon: "/icons/threejs.svg" },
  { name: "git", icon: "/icons/github.svg" },
  { name: "postgresql", icon: "/icons/postgresql.svg" },
  { name: "cloudinary", icon: "/icons/cloudinary.svg" },
    { name: "clerk", icon: "/icons/clerk.ico" },

];


const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: "/company/starbucks.png",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: "/company/tesla.png",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: "/company/shopify.png",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: "/company/meta.png",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects: Project[] = [
  {
    name: "Starbuks coffee",
    description:
      "A modern Starbucks landing page featuring product highlights, smooth animations, and clean UI interactions — fully built using HTML, CSS, and JavaScript for a polished user experience.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "js", color: "pink-text-gradient" },
    ],
    image: "/products/starbuks.jpg",
    source_code_link: "https://github.com/AbdulrahmanAsharf/preject-Starbuks",
    live_demo_link: "https://preject-starbuks.vercel.app/",
  },

  {
    name: "Computer Machine",
    description:
      "A responsive landing page for a computer and electronics brand, designed with modern layouts, smooth animations, and interactive elements using HTML, CSS, and JavaScript.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "js", color: "pink-text-gradient" },
    ],
    image: "/products/computer-machine.jpg",
    source_code_link: "https://github.com/AbdulrahmanAsharf/Computer-machine",
    live_demo_link:"https://computer-machine.vercel.app/",
  },

  {
    name: "Prayer",
    description:
      "A simple and fast prayer times web app that displays daily Islamic prayer schedules with a clean UI — built using HTML, SCSS, and JavaScript for accurate and smooth performance.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "scss", color: "green-text-gradient" },
      { name: "js", color: "pink-text-gradient" },
    ],
    image: "/products/prayer.jpg",
    source_code_link: "https://github.com/AbdulrahmanAsharf/prayer",
    live_demo_link:"https://prayer-two.vercel.app/",
  },

  {
    name: "Shopping Hub",
    description:
      "A stylish grocery shopping landing page built with HTML, CSS, and Vite, featuring product sections, dynamic interactions, and a clean, modern shopping experience.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "vite", color: "pink-text-gradient" },
    ],
    image: "/products/shopping-hub.jpg",
    source_code_link: "https://github.com/AbdulrahmanAsharf/Shopping-Hub",
    live_demo_link:"https://shopping-hub-olive.vercel.app/",
  },

  {
    name: "assaf",
    description:
      "A modern perfume store built with Next.js and Neon, offering users an elegant browsing experience with product details, smooth transitions, and a refined UI.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "Neon", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: "/products/assaf.jpg",
    source_code_link: "https://github.com/AbdulrahmanAsharf/assaf",
    live_demo_link:"https://assaf.vercel.app/ar",
  },
];


export { services, technologies, experiences, testimonials, projects };
