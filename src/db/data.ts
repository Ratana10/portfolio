import { Education, Experience, IconType } from "../types";

export const frontendIcons: IconType[] = [
  {
    name: "Reactjs",
    src: "frontend/reactjs.svg",
  },
  {
    name: "Nextjs",
    src: "frontend/nextjs.svg",
  },
];

export const backendIcons: IconType[] = [
  {
    name: "Nestjs",
    src: "backend/nestjs.svg",
  },
  {
    name: "SpringBoot",
    src: "backend/spring.svg",
  },
];

export const databaseIcons: IconType[] = [
  {
    name: "Postgres",
    src: "db/postgres.svg",
  },
  {
    name: "Mongodb",
    src: "db/mongodb.svg",
  },
];

export const basicLanguages: IconType[] = [
  {
    name: "HTML5",
    src: "basic/html.svg",
  },
  {
    name: "CSS3",
    src: "basic/css.svg",
  },
  {
    name: "JavaScript",
    src: "basic/js.svg",
  },
  {
    name: "Java",
    src: "basic/java.svg",
  },
  {
    name: "Python",
    src: "basic/python.svg",
  },
];

export const otherSkills: IconType[] = [
  {
    name: "Blockchain",
    src: "other/blockchain.svg",
  },
  {
    name: "Crypto",
    src: "other/bitcoin.svg",
  },
  {
    name: "AWS",
    src: "other/aws.svg",
  },
];

export const hero = {
  description: `
  I am a motivated and versatile individual, always eager to take on
  new challenges. With a passion for learning I am dedicated to
  delivering high-quality results. With a positive attitude and a
  growth mindset, I am ready to make a meaningful contribution and
  achieve great things.`,
};
export const skills: IconType[] = [
  {
    name: "Blockchain",
    src: "other/blockchain.png",
  },
  {
    name: "Crypto",
    src: "other/cryptocurrency.png",
  },
  {
    name: "AWS",
    src: "other/aws.png",
  },
  {
    name: "Nestjs",
    src: "backend/nestjs.svg",
  },
  {
    name: "SpringBoot",
    src: "backend/spring.svg",
  },
  {
    name: "Reactjs",
    src: "frontend/reactjs.svg",
  },
  {
    name: "Nextjs",
    src: "frontend/nextjs.svg",
  },
  {
    name: "Postgres",
    src: "db/postgres.svg",
  },
  {
    name: "Mongodb",
    src: "db/mongodb.png",
  },
  {
    name: "Java",
    src: "basic/java.svg",
  },
  {
    name: "Python",
    src: "basic/python.svg",
  },
  {
    name: "Javascript",
    src: "basic/js.svg",
  },
  {
    name: "Linux",
    src: "other/linux.svg",
  },
];

// export const experiences: Experience[] = [
//   {
//     company: "KHMER CODE ACADEMY",
//     role: "Software Developer",
//     duration: "May 2024 - Present",
//     description: ` Developed a Learning Management System (For KCA).
//       Analyzed and initiated the entire project.
//       Performed database analysis and normalization.
//       Implemented backend using Spring Boot and frontend with Next.js.
//       Authored documents, research papers, and technical reports.`,
//     skills: ["Spring Boot", "Next.js", "Database Analysis", "Documentation"],
//     logo: "/logo/khmer_code_academy.jpg",
//   },
//   {
//     company: "Seatincom",
//     role: "Data Input",
//     duration: "May 2022 - Jun 2024",
//     description:
//     `Performed accurate and efficient data entry tasks,
//     maintaining high levels of data integrity and confidentiality.`,
//     "skills": [
//       "Data Entry",
//       "Data Management",
//       "Confidentiality"
//     ],
//     logo: "/logo/wnk.png",
//   },
//   {
//     company: "YAKJIN CAMBODIA 2",
//     role: "Junior Industrial Engineer",
//     duration: "Oct 2019 - Apr 2020",
//     description: `
//       Conducted time study analysis to optimize line balance and resolve bottlenecks.
//       Measured operator and line efficiency.
//       Analyzed samples to create Operation Breakdown SMV.
//       Presented and trained operators on new processes.
//       Followed up on KPIs and updated garment defect reports for management.
//     `,
//     skills: ["Time Study", "Efficiency Analysis", "Training", "KPI"],
//     logo: "/logo/wnk.png",
//   },
// ];

export const experiences: Experience[] = [
  {
    company: "Deluxe",
    role: "Fullstack Developer",
    duration: "31-Auguest 2024 - Present",
    work: "Freelance",
    logo: "/logo/deluxe.png",
    projects: [
      {
        name: "Jewelry Ecomerce Website",
        description: `
        Developing an e-commerce platform for a jewelry
         store with product browsing, cart management, 
         and order tracking. Integrated a Telegram bot for
          real-time order status updates based on seller actions, 
       `,
        technologies: ["Telegram Bot", "MongoDB", "NextJs", "Prisma"],
      },
    ],
  },
  {
    company: "Wnk System",
    role: "Software Developer",
    duration: "23-July 2024 - Present",
    work: "Full Time",
    logo: "/logo/wnk.png",
    projects: [
      {
        name: "ColdWallet",
        description: `Developing a secure Cold Wallet application 
         for managing cryptocurrency assets. 
         The project involved integrating blockchain technologies to 
         ensure secure transactions and implementing Java-based backend services. 
       `,
        technologies: ["Blockchain", "Crypto Currency", "Java", "Maven"],
      },
    ],
  },
  {
    company: "KHMER CODE ACADEMY",
    role: "Software Developer",
    duration: "May 2024 - Present",
    work: "Part Time",
    logo: "/logo/khmer_code_academy.jpg",
    projects: [
      {
        name: "Learning Management System",
        description: `Led the development of an LMS for online education, 
        handling requirements analysis, database design, 
        backend implementation with Spring Boot, 
        and frontend integration with Next.js. 
        Also authored technical documentation and research papers`,
        technologies: ["Next.js", "Spring Boot", "PostgreSQL"],
      },
      {
        name: "Telegram Bot for Food Order",
        description:
          "Developing a Telegram bot to manage food orders. The bot allowed users to browse menus, place orders, and track order status in real-time. Integrated the bot with a payment gateway and a restaurant management system.",
        technologies: [
          "ReactJS",
          "NextJS",
          "NestJS",
          "Telegram API",
          "Pay Way",
        ],
      },
    ],
  },
  {
    company: "SEANTINCOM",
    role: "Data Input",
    duration: "May 2022 - Jun 2024",
    work: "Full Time",
    logo: "/logo/default.png",
    projects: [
      {
        name: "Data Entry Tasks",
        description:
          "Performed accurate and efficient data entry tasks, maintaining high levels of data integrity and confidentiality.",
        technologies: ["Data Entry", "Data Management", "Confidentiality"],
      },
    ],
  },
  {
    company: "YAKJIN CAMBODIA 2",
    role: "Junior Industrial Engineer",
    duration: "Oct 2019 - Apr 2020",
    work: "Full Time",
    logo: "/logo/yakjin.png",
    projects: [
      {
        name: "Time Study and Line Balancing",
        description:
          "Conducted time study analysis to optimize line balance and resolve bottlenecks. Measured operator and line efficiency. Analyzed samples to create Operation Breakdown SMV. Presented and trained operators on new processes. Followed up on KPIs and updated garment defect reports for management.",
        technologies: ["Time Study", "Efficiency Analysis", "Training", "KPI"],
      },
    ],
  },
];

export const educationDescription = {
  title: "Short Courses",
  description: `
  My continuous learning journey through specialized short courses,
  These course has provide me with hands-on experience in cutting edge technologies
  prepare for dynamic and evolving industy challenges.
  `,
};
export const educations: Education[] = [
  {
    institution: "KHMER CODE ACADEMY",
    course: "NEXTJS",
    duration: "May - July 2024",
    logo: "/school/khmer_code.jpg",
    topics: ["Front-end Development", "Nextjs", "Tailwind CSS"],
  },
  {
    institution: "PISETH JAVA",
    course: "JAVA ADVANCED",
    duration: "Oct - May 2024",
    logo: "/school/piseth.jpg",
    topics: [
      "Microservice",
      "Docker Deployment",
      "Web Client",
      "Spring Cloud",
      "Spring Discovery",
      "Spring Cloud Gateway",
      "Spring Config Server",
    ],
  },
  {
    institution: "SAMSUNG",
    course: "PYTHON",
    duration: "2021 - 2022",
    logo: "/school/rupp.png",
    topics: [
      "Python Basic",
      "Data Structures and Algorithms",
      "OOP",
      "Exception Handling",
    ],
  },
];
