import { path } from "motion/react-client";

export const myProjects = [
  {
    id: 1,
    title: "ZenXplor-Universal File Search Engine",
    description:
      "A powerful search engine designed to help users find files across various platforms like Google Drive, Dropbox, and OneDrive quickly and efficiently.",
    subDescription: [
      "Developed a cross-platform file search engine using Flask and React",
      "Implemented advanced search algorithms for fast and accurate results.",
      "Designed a user-friendly interface with Tailwind CSS for seamless navigation.",
      "Integrated PostgreSQL for efficient data storage and retrieval.",
      
    ],
    href: "https://github.com/Servesh21/ZenXplor",
    logo: "",
    image: "/assets/projects/ZenXplor.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "tailwindcss",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Flask",
        path: "/assets/logos/Flask.svg",
      },
      {
        id: 4,
        name: "Python",
        path: "/assets/logos/Python.svg",
      },
      {
        id: 5,
        name: "PostgreSQL",
        path: "/assets/logos/PostgreSQL.svg",
      }
    ],
  },
  {
    id: 2,
    title: "Crowd-Guardian:Real-Time Crowd Monitoring Platform",
    description:
      "A real-time crowd monitoring platform that uses computer vision to analyze crowd density and behavior, providing insights for event management and safety.",
    subDescription: [
      "Developed a real-time crowd monitoring platform using React and Flask.",
      "Implemented computer vision algorithms like yolov8 for crowd density analysis.",
      "Designed a responsive UI with Tailwind CSS for real-time data visualization.",
      "Integrated Supabase for efficient data storage and retrieval.",
    ],
    href: "https://github.com/Servesh21/Crowd-Guardian",
    logo: "",
    image: "/assets/projects/Crowd-Guardian.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Flask",
        path: "/assets/logos/Flask.svg",
      },
      {
        id: 3,
        name: "Supabase",
        path: "/assets/logos/Supabase.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "YoloV8",
        path: "/assets/logos/Yolov8.svg",
      }
    ],
  },
  {
    id: 3,
    title: "InvestMate: Portfolio Management App",
    description:
      "A comprehensive portfolio management application that allows users to track their investments in mutual funds and SIP's",
    subDescription: [
      "Developed a portfolio management app using Java and JavaFX.",
      "Implemented MySQL for efficient data storage and retrieval.",
      "Integrated real-time data updates using MFAPI for live market analysis.",
      "Runner Up at Innoquest 2024 Project Competition.",
    ],
    href: "https://github.com/Servesh21/Portfolio_Management_System",
    logo: "",
    image: "/assets/projects/investmate.png",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.svg",
      },
      {
        id: 2,
        name: "MySQL",
        path: "/assets/logos/mysql.svg",
      },
    ],
  },
  {
    id: 4,
    title: "PeerChain: Decentralized Peer-to-Peer Transaction System",
    description:
      "A decentralized peer-to-peer transaction system built on blockchain technology.",
    subDescription: [
      "Implemented smart contracts for secure and transparent transactions.",
      "Developed a user-friendly interface with React and Tailwind CSS.",
      "Integrated Web3.js for seamless blockchain interactions.",
      "Ensured data privacy and security with end-to-end encryption.",
    ],
    href: "https://github.com/Servesh21/peerchain",
    logo: "",
    image: "/assets/projects/peerchain.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Solidity",
        path: "/assets/logos/Solidity.svg",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/logos/Node.js.svg",
      },
      {
        id: 5,
        name: "Web3.js",
        path: "/assets/logos/Web3.js.svg",
      }
    ],
  },
  {
    id: 5,
    title: "Schedula: Doctor Management System",
    description:
      "A comprehensive doctor management system for clinics and hospitals.",
    subDescription: [
      "Developed a user-friendly interface with Next.js and Tailwind CSS.",
      "Implemented a RESTful API with Nest.js.",
      "Integrated PostgreSQL for efficient data storage and retrieval.",
      "Ensured data security and privacy with JWT authentication.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/schedula.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/Next.js.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Nest.js",
        path: "/assets/logos/Nest.js.svg",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/logos/PostgreSQL.svg",
      },
    ],
  },
  {
    id: 6,
    title: "taskify: A to-do list application",
    description:
      "A web application that allows users to manage their tasks and to-do lists.",
    subDescription: [
      "Developed a responsive web application using Next.js and Tailwind CSS.",
      "Implemented user authentication and authorization with JWT.",
      "Ensured data persistence with PostgreSQL.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/taskify.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/Next.js.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/Node.js.svg",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/logos/PostgreSQL.svg",
      },
      
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/servesh21",
    icon: "/assets/logos/github-white.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/servesh-khade-459858297/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/servesh_khade/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Web Developement Intern",
    job: "Smarted",
    date: "Sep 2024-Jan 2025",
    contents: [
      "Got hands-on experience in full stack development, working with technologies like React, Node.js, and MongoDB.",
      "Developed and deployed web applications, focusing on responsive design and user experience.",
    ],
  },
  {
    title: "Cybersecurity Fundamentals Intern",
    job: "CSRBOX",
    date: "Dec 2024- Jan 2025",
    contents: [
      "Gained foundational knowledge in cybersecurity principles and practices.",
      "Assisted in identifying and mitigating security vulnerabilities in web applications.",
      "Learned about network security, encryption, and secure coding practices.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    job: "PearlThoughts",
    date: "May 2025-Present",
    contents: [
      "Developing and maintaining web applications using NextJS, NestJS, and PostgreSQL.",
      "Collaborating with cross-functional teams to design and implement new features.",
      "Ensuring code quality through testing and code reviews.",
      "Participating in Agile development processes, including sprint planning and retrospectives.",
    ],
  },
];
