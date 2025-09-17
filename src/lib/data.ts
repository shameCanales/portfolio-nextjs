// Career Goals
interface CareerGoals {
  title: string;
  desc: string;
}

export const careerGoals: CareerGoals[] = [
  {
    title: "Learn Constantly",
    desc: "Fuel my growth through curiosity. I aim to keep learning new tools, patterns, and technologies to stay sharp and relevant in a fast-evolving field.",
  },
  {
    title: "Grow Skillset",
    desc: "Strengthen both technical and soft skills by diving deeper into frontend development, expanding my backend knowledge, and building full-stack confidence.",
  },
  {
    title: "Contribute Value",
    desc: "Whether through clean code, thoughtful design, or teamwork, I want to create meaningful impact and bring value to projects and teams I work with.",
  },
  {
    title: "Solve Problem",
    desc: "I enjoy breaking down challenges and finsing solutions, not just to make things work, but to make them work better, smarter, and smoother.",
  },
];

// Dev Journey
interface DevJourney {
  title: string;
  desc: string;
}

export const devJourney: DevJourney[] = [
  {
    title: "Curiosity Sparked It All",
    desc: "I first got curious about how beautiful websites and apps were made — that curiosity quickly turned into excitement when I learned the basics of programming. Writing code felt fun and empowering, and I began imagining all the things I could build.",
  },
  {
    title: "First Line of Code",
    desc: "I wrote my first line of code in Grade 11 using Visual Basic to build a basic calculator. Around the same time, I was introduced to HTML and CSS — and built my first website. That early exposure made me realize I wanted to keep going deeper.",
  },
  {
    title: "Learning Beyond the Classroom",
    desc: "In college, I went beyond the curriculum—learning advanced HTML and CSS early to build a standout portfolio. I explored Python, C, C#, PHP, and MySQL, and later deepened my skills through Udemy courses in web development, UI/UX, and React.",
  },
  {
    title: "First Real Projects & Building with Purpose",
    desc: "I began with a PHP & MySQL CRUD app, then led the development of a Water Billing Management System for our capstone. I'm now rebuilding it with React and Node.js to modernize the stack and showcase my full stack skills—this portfolio highlights that journey.",
  },
  {
    title: "Growing Into a Full Stack Developer",
    desc: "I'm a frontend-focused developer specializing in responsive, component-based UIs with React, Next.js, and Tailwind CSS. I'm also advancing my backend skills with Node.js and MongoDB, aiming to become a well-rounded full stack engineer committed to purposeful learning and development.",
  },
];

// All Projects
interface TechStackItem {
  name: string;
  src: string;
}

interface Project {
  id: number;
  src: string;
  title: string;
  description: string;
  features: string[];
  techstack: TechStackItem[];
}

export const allProjects: Project[] = [
  {
    id: 1,
    src: "/projects/WebDesignUdemy.jpg",
    title: "Fakestore React App",
    description:
      "A modern e-commerce platform built with React that simulates real-world shopping experiences using the FakeStore API. Designed with performance, scalability, and user experience in mind, it showcases advanced state management, routing, and UI techniques.",
    features: [
      "Implemented dynamic product browsing with search, filtering, and category-based navigation.",
      "Developed Role-based authentication with protected routes for admin and customer.",
      "Enhanced product display using an interactive image carousel and pagination.",
      "Improved user engagement with responsive UI, toast notifications, and smooth navigation.",
    ],
    techstack: [
      { name: "React", src: "/logos/reactjs.png" },
      { name: "TailwindCSS", src: "/logos/reactjs.png" },
      { name: "Redux Toolkit", src: "/logos/reactjs.png" },
      { name: "React Router V7", src: "/logos/reactjs.png" },
      { name: "React Fakestore API", src: "/logos/reactjs.png" },
      { name: "TypeScript", src: "/logos/reactjs.png" },
      { name: "Tanstack Query", src: "/logos/reactjs.png" },
    ],
  },
  // {
  //   id: 2,
  //   src: "/projects/WebDesignUdemy.jpg",
  //   title: "Fakestore App 2",
  //   description:
  //     "A modern e-commerce platform built with React that simulates real-world shopping experiences using the FakeStore API. Designed with performance, scalability, and user experience in mind, it showcases advanced state management, routing, and UI techniques.",
  //   features: [
  //     "Implemented dynamic product browsing with search, filtering, and category-based navigation.",
  //     "Developed Role-based authentication with protected routes for admin and customer.",
  //     "Enhanced product display using an interactive image carousel and pagination.",
  //     "Improved user engagement with responsive UI, toast notifications, and smooth navigation.",
  //   ],
  //   techstack: [
  //     { name: "React", src: "/logos/reactjs.png" },
  //     { name: "React 2 ", src: "/logos/reactjs.png" },
  //     { name: "Reac 3t", src: "/logos/reactjs.png" },
  //     { name: "React 4", src: "/logos/reactjs.png" },
  //     { name: "React 5", src: "/logos/reactjs.png" },
  //     { name: "React6 ", src: "/logos/reactjs.png" },
  //   ],
  // },
  {
    id: 3,
    src: "/projThumbnails/portfoliov1.png",
    title: "Portfolio Website with Vite",
    description:
      "a modern, responsive developer portfolio built with React, Vite, Tailwind CSS, Redux Toolkit, TanStack Query, and Framer Motion. It showcases my projects, skills, and experiences with a clean UI, smooth animations, and performance-focused design. Deployed on Vercel, it highlights both my frontend expertise and my passion for building scalable, interactive web applications.",
    features: [
      "Component-driven architecture for easy scalability",
      "A modern, responsive UI that adapts beautifully accross devices",
      "A polished, professional design that aligns with my developer identity",
    ],
    techstack: [
      { name: "React", src: "/logos/reactjs.png" },
      { name: "Vite", src: "/logos/vite.png" },
      { name: "Redux Toolkit", src: "/logos/redux.png" },
      { name: "Tanstack Query", src: "/logos/tanstack.png" },
      { name: "Git", src: "/logos/git.png" },
      { name: "Github", src: "/logos/github.png" },
    ],
  },
];

//Featured Projects
interface FeatProject {
  id: number;
  src: string;
  title: string;
  description: string;
  features: string[];
  techUsed: string[];
  liveLink: string;
  githubRepoLink: string;
}

export const featuredProjects: FeatProject[] = [
  {
    id: 1,
    src: "/projects/WebDesignUdemy.jpg",
    title: "Fakestore React E-Commerce App",
    description:
      "Built a modern e-commerce application with React, Redux Toolkit, and Fakestore API, featuring search, cart management, authentication, and protected routes.",
    features: [
      "Implemented scalable component-based architecture for modular development.",
      "Managed global state efficiently using Redux Toolkit and TypeScript.",
      "Added role-based authentication with protected routes for users.",
    ],
    techUsed: [
      "React JS",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router V7",
      "Vite",
    ],
    liveLink: "#",
    githubRepoLink: "#",
  },
  // {
  //   id: 2,
  //   src: "/projects/WebDesignUdemy.jpg",
  //   title: "React Fakestore Shopping Platform",
  //   description:
  //     "Developed an interactive online storefront with React and Fakestore API, delivering responsive browsing, cart persistence, authentication, and user feedback.",
  //   features: [
  //     "Built fully responsive layouts using Tailwind CSS utility classes.",
  //     "Implemented cart synchronization and state updates via Redux Toolkit.",
  //     "Enhanced user experience with toast notifications and smooth navigation.",
  //   ],
  //   techUsed: [
  //     "React JS",
  //     "Tailwind CSS",
  //     "Redux Toolkit",
  //     "React Router V7",
  //     "Vite",
  //   ],
  //   liveLink: "#",
  //   githubRepoLink: "#",
  // },
  {
    id: 3,
    src: "/projThumbnails/portfoliov1.png",
    title: "Personal Portfolio Website Project",
    description:
      "Designed and deployed a responsive personal portfolio showcasing skills, experience, and projects with React, Vite, Tailwind CSS, and Framer Motion.",
    features: [
      "Developed modular reusable components for consistency and scalability.",
      "Integrated Framer Motion to deliver smooth animations and transitions.",
      "Crafted responsive layouts optimized for mobile, tablet, and desktop.",
    ],
    techUsed: [
      "ReactJS",
      "Vite",
      "Redux Toolkit",
      "Tanstack Query",
      "Git",
      "Github",
    ],
    liveLink: "https://shame-canales-portfolio-v1.vercel.app/",
    githubRepoLink: "https://github.com/shameCanales/shame-portfolio",
  },
];

//Marque
interface TechItems {
  name: string;
  iconsrc: string;
}

export const techRow1: TechItems[] = [
  {
    name: "ReactJS",
    iconsrc: "/logos/reactjs.png",
  },
  {
    name: "Vite",
    iconsrc: "/logos/vite.png",
  },
  {
    name: "Css3",
    iconsrc: "/logos/css3.png",
  },
  {
    name: "Html5",
    iconsrc: "/logos/html5.png",
  },
  {
    name: "Javascript",
    iconsrc: "/logos/javascript.png",
  },
  {
    name: "Redux Toolkit",
    iconsrc: "/logos/redux.png",
  },
  {
    name: "Figma",
    iconsrc: "/logos/figma.png",
  },
];
export const techRow2: TechItems[] = [
  {
    name: "VSCode",
    iconsrc: "/logos/vscode.png",
  },
  {
    name: "TailwindCSS",
    iconsrc: "/logos/tailwindcss.png",
  },
  {
    name: "Git",
    iconsrc: "/logos/git.png",
  },
  {
    name: "TypeScript",
    iconsrc: "/logos/typescriptLogo.png",
  },
  {
    name: "Redux Toolkit",
    iconsrc: "/logos/reduxtoolkit.png",
  },
  {
    name: "Tanstacfk Query",
    iconsrc: "/logos/tanstack.png",
  },
  {
    name: "Jest",
    iconsrc: "/logos/jest.png",
  },
  {
    name: "React Testing Library",
    iconsrc: "/logos/testinglibrary.png",
  },
];
export const techRow3: TechItems[] = [
  {
    name: "MongoDB",
    iconsrc: "/logos/monggodb.png",
  },
  {
    name: "NextJS",
    iconsrc: "/logos/nextjs.png",
  },
  {
    name: "GitHub",
    iconsrc: "/logos/github.png",
  },
  {
    name: "NodeJS",
    iconsrc: "/logos/nodejs.png",
  },
  {
    name: "Firebase",
    iconsrc: "/logos/firebase.png",
  },
  {
    name: "MySQL",
    iconsrc: "/logos/mySQL.png",
  },
  {
    name: "Prisma",
    iconsrc: "/logos/prisma.png",
  },
  {
    name: "PostgreSQL",
    iconsrc: "/logos/postgres.png",
  },
];

//Technical Skills
interface TechCategory {
  label: string;
  name: string;
}

export const categories: TechCategory[] = [
  { label: "All", name: "all" },
  { label: "Languages", name: "languages" },
  { label: "Frontend", name: "frontend" },
  { label: "UI & Styling", name: "styling" },
  { label: "Tools", name: "tools" },
  { label: "Backend (Exploring)", name: "backend" },
];

interface TechStack {
  name: string;
  iconsrc: string;
  category: string;
}

export const techStack: TechStack[] = [
  {
    name: "JavaScript (ES6+)",
    iconsrc: "/logos/javascript.png",
    category: "languages",
  },
  {
    name: "TypeScript",
    iconsrc: "/logos/typescriptLogo.png",
    category: "languages",
  },
  { name: "HTML", iconsrc: "/logos/html5.png", category: "languages" },
  { name: "CSS/Sass", iconsrc: "/logos/css3.png", category: "languages" },
  { name: "Redux Toolkit", iconsrc: "/logos/redux.png", category: "frontend" },
  {
    name: "Tanstack Query",
    iconsrc: "/logos/tanstack.png",
    category: "frontend",
  },
  { name: "React JS", iconsrc: "/logos/reactjs.png", category: "frontend" },
  { name: "Next JS", iconsrc: "/logos/nextjs.png", category: "frontend" },
  {
    name: "Tailwind CSS",
    iconsrc: "/logos/tailwindcss.png",
    category: "styling",
  },
  { name: "Figma", iconsrc: "/logos/figma.png", category: "styling" },
  {
    name: "Framer Motion",
    iconsrc: "/logos/framermotion.png",
    category: "styling",
  },
  { name: "Git", iconsrc: "/logos/git.png", category: "tools" },
  { name: "GitHub", iconsrc: "/logos/github.png", category: "tools" },
  { name: "Jest", iconsrc: "/logos/jest.png", category: "tools" },
  {
    name: "React Testing Library",
    iconsrc: "/logos/testinglibrary.png",
    category: "tools",
  },
  { name: "Node JS", iconsrc: "/logos/nodejs.png", category: "backend" },
  { name: "Firebase", iconsrc: "/logos/firebase.png", category: "backend" },
  { name: "MySQL", iconsrc: "/logos/mysql.png", category: "backend" },
  {
    name: "MongoDB Atlas",
    iconsrc: "/logos/monggodb.png",
    category: "backend",
  },
  { name: "Prisma", iconsrc: "/logos/prisma.png", category: "backend" },
  { name: "PostgreSQL", iconsrc: "/logos/postgres.png", category: "backend" },
];

// Experience

interface Experience {
  date: string;
  role: string;
  address: string;
  where: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    date: "FEB - JUNE 2025",
    role: "IT Intern",
    address: "Quezon City, Metro Manila",
    where: "ComWorks Inc.",
    description: [
      "Collaborated with the IT team in software updates, OS reinstallation, and preventive maintenance, reinforcing system security and operational continuity.",
      "Streamlined documentation and asset management through Draw.io and inventory systems, improving tracking efficiency and maintaining organized IT resources.",
      "Provided remote IT support using RRM tools and AnyDesk, resolving connectivity and software issues for on-site and remote employees, enhancing productivity company-wide.",
      "Delivered CCTV configuration and POS system support, strengthening cross-department IT collaboration and showcasing It&apos;s role in enabling business functions.",
      "Supported network configuration and connectivity by setting up MikroTik routers, access points, and virtual machines (ProxMox), ensuring smooth operations across multiple departments.",
      "Assisted in hardware diagnostics, repairs, and upgrades (SSD installations, printer troubleshooting, LAN cable assembly), improving system performance and reducing downtime for employees.",
    ],
  },
  {
    date: "JAN - DEC 2024",
    role: "Water Biling Management System ",
    address: "San Fernando, Romblon",
    where: "Capstone Project",
    description: [
      "Role: Leader, System Analyst, Head Researcher, Developer, UI/UX Designer",
      "Architected and developed a full-stack, web-based billing system from scratch to replace manual processes, automating consumer management, bill generation, and payment tracking. ",
      "Directed a 4-member team through all Agile phases (requirements analysis, UI/UX design, development, testing, deployment, and Review), ensuring project milestones were met on time.",
      "Achieved perfect 100/100 Lighthouse performance & best practices score and 4.55/5 in ISO 25010 evaluation, validating system efficiency, usability, and reliability.",
      "Designed and Implemented intuitive UI/UX workflows, improving system accessibility for administrator.",
      "Delivered a scalable and maintainable solution that streamlined operations, reduced errors, and enhanced customer satisfaction for municipal billing services.",
    ],
  },
];

//Certifications
interface Certification {
  thumbnail: string;
  title: string;
  description: string;
  did: string[];
  learned: string[];
  certLink: string;
}

export const certificationsData: Certification[] = [
  {
    thumbnail: "/certThumbnails/react.webp",
    title: "React - The Complete Guide 2025 (Includes Next.js, Redux)",
    description:
      "Comprehensive training on modern React development covering core concepts, hooks, state management with redux, and fullstack application development with Next.js.",
    did: [
      "Built a fullstack web app using React and Next.js",
      "Implemented Authentication and Protected Routes",
      "Managed global state with Redux Toolkit and Tanstack",
      "Designed responsive UIs with Tailwindcss",
      "Integrated REST APIs and handled async data fetching",
    ],
    learned: [
      "ReactJS",
      "TailwindCSS",
      "Redux Toolkit",
      "React Router V7",
      "Jest",
      "NextJS",
      "APIs",
      "Tanstack Query",
      "Framer Motion",
    ],
    certLink:
      "https://www.udemy.com/certificate/UC-8f474679-6550-48ba-85d6-c17204a7e028/",
  },
  {
    thumbnail: "/certThumbnails/javascript.png",
    title: "The Completed JavaScript Course 2024: From Zero to Expert!",
    description:
      "A 70-hour project-based course teaching JavaScript from beginner to advanced, covering ES6+, async programming, OOP, and real-world projects.",
    did: [
      "Built a fullstack web app using React and Next.js",
      "Implemented Authentication and Protected Routes",
      "Managed global state with Redux Toolkit and Tanstack",
      "Designed responsive UIs with Tailwindcss",
      "Integrated REST APIs and handled async data fetching",
    ],
    learned: ["Javascript ES6+", "HTML", "CSS", "DOM"],
    certLink:
      "https://www.udemy.com/certificate/UC-3e25f926-9033-4b8e-8b71-afb344cbcab4/",
  },
  {
    thumbnail: "/certThumbnails/html.jpg",
    title: "Build Responsive Real-World Websites with HTML and CSS",
    description:
      "A hands-on course teaching modern HTML and CSS, focusing on responsive design, Flexbox, Grid layouts, and building professional websites.",
    did: [
      "Learn modern HTML and CSS fundamentals.",
      "Build fully responsive websites for all devices.",
      "Master layouts using Flexbox and CSS Grid.",
      "Apply professional design principles and typography.",
      "Work on real-world projects with clean, organized code.",
    ],
    learned: ["HTML5", "CSS3", "Responsive Web Design", "Flexbox", "Grid"],
    certLink:
      "https://www.udemy.com/certificate/UC-8f474679-6550-48ba-85d6-c17204a7e028/",
  },
  {
    thumbnail: "/certThumbnails/design.jpg",
    title: "Web Design for Web Developers: Build Beautiful Websites!",
    description:
      "A beginner-friendly course on web design fundamentals, covering color theory, typography, spacing, layout, and visual hierarchy for creating visually appealing websites.",
    did: [
      "Learn the core principles of modern web design.",
      "Understand how to use color theory and typography effectively.",
      "Apply spacing, alignment, and visual hierarchy for better layouts.",
      "Explore responsive and user-friendly design practices.",
      "Build beautiful, professional-looking websites with practical examples.",
    ],
    learned: ["HTML5", "CSS3", "Design Fundamentals", "Responsive Design"],
    certLink:
      "https://www.udemy.com/certificate/UC-8f474679-6550-48ba-85d6-c17204a7e028/",
  },
];

// Education

export const education = [
  {
    title: "Tertiary Education",
    schoolName: "Romblon State University - SFC",
    course: "Bachelor of Science in Information Technology",
    schoolYear: "S.Y. 2021-2025",
    address: "Poblacion, San Fernando, Romblon",
  },
  {
    title: "Secondary Education - Senior",
    schoolName: "Don Carlos M. Mejias Memorial NHS",
    course: "Information Communication Technology",
    schoolYear: "S.Y. 2019-2021",
    address: "Panangcalan, San Fernando, Romblon",
  },
  {
    title: "Secondary Education - Junior",
    schoolName: "Don Carlos M. Mejias Memorial NHS",
    course: "",
    schoolYear: "S.Y. 2015-2019",
    address: "Panangcalan, San Fernando, Romblon",
  },
  {
    title: "Primary Education",
    schoolName: "Campalingo Elementary School",
    course: "",
    schoolYear: "S.Y. 2008-2015",
    address: "Campalingo, San Fernando, Romblon",
  },
];
