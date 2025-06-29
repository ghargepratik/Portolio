export const personalInfo = {
  name: import.meta.env.VITE_PERSONAL_NAME || "Pratik Gharge",
  title: "MERN Stack | Full Stack Developer",
  description:
    "Results-driven MERN Stack Developer with 3.5+ years of experience building robust, scalable, and high-performance web applications. Proficient in both frontend and backend development, with a strong focus on clean architecture, responsive design, and cloud integration.",
  email: import.meta.env.VITE_PERSONAL_EMAIL || "pratik.gharge31@gmail.com",
  location: import.meta.env.VITE_PERSONAL_LOCATION || "India",
  education: {
    degree: "B.Sc. in Computer Science",
    university: "RTMNU University",
    duration: "2018 - 2021"
  },
  experience:
    "3.5+ years of hands-on experience in full-stack development using the MERN stack, with proven expertise in building scalable applications, integrating REST APIs, and deploying cloud-based solutions using AWS and Docker.",
  social: {
    github: import.meta.env.VITE_GITHUB_URL || "https://github.com/ghargepratik",
    linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/pratik31",
    email: import.meta.env.VITE_PERSONAL_EMAIL || "pratik.gharge31@gmail.com"
  }
};

export const experiences = [
  {
    id: 1,
    title: "Solution Engineer (Developer)",
    company: "Deqode, Indore",
    duration: "July 2023 - Present",
    description:
      "Collaborate directly with clients to gather requirements, propose technical solutions, and translate them into scalable and maintainable code using the MERN stack. Work across both service-based and product-based projects. Focus on performance optimization, scalable architecture, and clean code practices. Drive end-to-end development with an emphasis on client satisfaction and high code quality.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN Stack",
      "Client Communication",
      "Solution Design",
      "Performance Optimization",
      "Database Optimization",
      "AWS",
      "Docker",
      "Framer Motion"
    ]
  },
  {
    id: 2,
    title: "Associate Software Engineer (Developer)",
    company: "Techinfini Software Solution Pvt Ltd, Indore",
    duration: "April 2022 - July 2023",
    description:
      "Worked as a full-stack MERN developer on both client-based and in-house product projects, including a Job Portal and a Project Management System. Focused on creating responsive user interfaces, building scalable APIs, and improving overall application performance. Introduced TypeScript for type safety and improved development efficiency.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Redis",
      "API Optimization",
      "Responsive Design",
      "Project Architecture",
      "Product Development"
    ]
  },
  {
    id: 3,
    title: "Junior Software Engineer (Developer)",
    company: "Pegasus Technologies & Software Pvt Ltd, Nagpur",
    duration: "September 2021 - March 2022",
    description:
      "Contributed to the development of cross-browser web applications and assisted in building backend services using Node.js. Participated in code reviews, debugging, and ensuring consistent user experiences across different devices and browsers.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Cross-browser Compatibility",
      "Debugging"
    ]
  },
  {
    id: 4,
    title: "Junior Software Engineer (Internship)",
    company: "Pegasus Technologies & Software Pvt Ltd, Nagpur",
    duration: "February 2021 - August 2021",
    description:
      "Gained hands-on experience in React.js and Node.js by contributing to real-world web development projects. Learned industry best practices, collaborated with senior developers, and applied theoretical concepts to practical implementations.",
    skills: [
      "React.js",
      "Node.js",
      "JavaScript",
      "Web Development",
      "Code Collaboration",
      "Version Control (Git)"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
    longDescription: "Built a comprehensive e-commerce solution with user authentication, product catalog, shopping cart, payment processing using Stripe, order management, and administrative features. The platform includes real-time inventory updates, email notifications, and responsive design for all devices.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API", "JWT"],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/ghargepratik/ecommerce-platform",
    featured: true,
    role: "Full Stack Developer",
    responsibilities: [
      "Designed and developed the complete frontend using React.js with responsive design",
      "Built RESTful APIs using Node.js and Express.js for product management and user authentication",
      "Implemented secure payment processing with Stripe API integration",
      "Developed admin dashboard for inventory management and order tracking",
      "Created user authentication system with JWT tokens and role-based access control",
      "Integrated MongoDB for efficient data storage and retrieval",
      "Implemented real-time inventory updates and email notification system",
      "Optimized application performance and implemented caching strategies"
    ]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    longDescription: "Developed a modern task management application with features like drag-and-drop functionality, real-time collaboration using Socket.io, file attachments, due date reminders, and project analytics. The app supports team management and role-based permissions.",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React.js", "Socket.io", "Node.js", "PostgreSQL", "Redis", "AWS S3"],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/ghargepratik/task-manager",
    featured: true,
    role: "Lead Full Stack Developer",
    responsibilities: [
      "Architected and developed the entire application using React.js and Node.js",
      "Implemented real-time collaboration features using Socket.io for live updates",
      "Built drag-and-drop functionality for intuitive task management",
      "Designed PostgreSQL database schema for efficient data organization",
      "Integrated Redis for session management and caching",
      "Developed file upload system using AWS S3 for task attachments",
      "Created team management system with role-based permissions",
      "Implemented project analytics dashboard with data visualizations",
      "Set up automated email reminders for due dates and notifications"
    ]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather application with location-based forecasts and interactive maps.",
    longDescription: "Created a responsive weather dashboard that provides current weather conditions, 7-day forecasts, weather maps, and location-based recommendations. Features include geolocation support, favorite locations, weather alerts, and beautiful data visualizations.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React.js", "Weather API", "Chart.js", "Tailwind CSS", "Geolocation API"],
    liveUrl: "https://weather-dashboard-demo.com",
    githubUrl: "https://github.com/ghargepratik/weather-dashboard",
    featured: false,
    role: "Frontend Developer",
    responsibilities: [
      "Developed responsive UI using React.js and Tailwind CSS",
      "Integrated multiple weather APIs for comprehensive weather data",
      "Implemented geolocation functionality for automatic location detection",
      "Created interactive weather maps and data visualizations using Chart.js",
      "Built favorite locations feature with local storage",
      "Developed weather alert system with push notifications",
      "Optimized application for mobile devices and various screen sizes",
      "Implemented caching mechanism for improved performance"
    ]
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media performance tracking with beautiful data visualizations.",
    longDescription: "Built an comprehensive analytics platform for social media managers to track engagement, follower growth, content performance, and competitor analysis. Features include custom report generation, automated insights, and integration with major social platforms.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React.js", "D3.js", "Node.js", "MongoDB", "Social Media APIs"],
    liveUrl: "https://analytics-demo.com",
    githubUrl: "https://github.com/ghargepratik/social-analytics",
    featured: false,
    role: "Full Stack Developer",
    responsibilities: [
      "Built comprehensive analytics dashboard using React.js and D3.js",
      "Integrated multiple social media APIs (Facebook, Twitter, Instagram, LinkedIn)",
      "Developed data processing pipeline using Node.js for social media metrics",
      "Created custom report generation system with PDF export functionality",
      "Implemented automated insights and trend analysis algorithms",
      "Built competitor analysis features with comparative metrics",
      "Designed MongoDB schema for efficient storage of analytics data",
      "Developed scheduling system for automated data collection and reporting"
    ]
  },
  {
    id: 5,
    title: "Employee Handbook",
    description: "A PDF-generating tool with a dynamic form managed via Contentful CMS.",
    longDescription: "Developed a web-based employee handbook generator with dynamic PDF creation. Admins can customize content through Contentful CMS, and users interact with a form-driven UI. Ensured efficient state management and seamless backend integration.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Context API", "Contentful CMS"],
    liveUrl: "https://smallbusiness.wsps.ca/safety-orientation-handbook/",
    githubUrl: "",
    featured: false,
    role: "Full Stack Developer",
    responsibilities: [
      "Developed and optimized dynamic PDF generation system using React.js and Node.js",
      "Integrated Contentful CMS for customizable form and content management",
      "Designed and implemented RESTful APIs for data handling and form submission",
      "Managed application state using Context API for smooth user interactions",
      "Ensured responsive design and cross-browser compatibility",
      "Collaborated with stakeholders to gather requirements and plan CMS structure"
    ]
  },
  {
    id: 6,
    title: "Job Portal - Techinfini",
    description: "A recruitment management portal for Techinfini with complete hiring workflow.",
    longDescription: "Built a job portal application that allows users to apply for jobs, while administrators can manage applications, schedule interviews, and generate offer and joining letters. Focused on backend logic, admin panel, and end-to-end application workflow.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Context API"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    role: "Full Stack Developer",
    responsibilities: [
      "Developed frontend interface using React.js for job browsing and application submission",
      "Implemented backend REST APIs using Node.js and Express.js for job and applicant management",
      "Integrated Context API for efficient state management across user and admin workflows",
      "Created modules for interview scheduling, offer letter generation, and applicant tracking",
      "Collaborated with internal team to define features and improve system performance"
    ]
  },
  {
    id: 7,
    title: "Project Management Portal (ClickUp Clone)",
    description: "A task and project tracking tool with SOD/EOD updates and team collaboration features.",
    longDescription: "Developed a project management portal inspired by ClickUp, enabling task assignments, SOD/EOD tracking, and progress monitoring. Managers can oversee employee updates and project flows through a dashboard-style interface with Redux-managed state.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Redux Toolkit"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    role: "Full Stack Developer",
    responsibilities: [
      "Designed and developed task and project tracking interfaces using React.js",
      "Implemented backend RESTful APIs using Node.js and Express.js",
      "Used Redux Toolkit for managing complex state and asynchronous operations",
      "Enabled SOD/EOD submission, task assignment, and team updates features",
      "Created modular architecture for scalability and performance",
      "Defined database schema and routing structure based on requirements analysis"
    ]
  }
];

export const skills = [
  { name: "React.js", level: 95 },
  { name: "Node.js", level: 90 },
  { name: "MongoDB", level: 85 },
  { name: "Express.js", level: 90 },
  { name: "NestJS", level: 75 },
  { name: "Next.js", level: 80 },
  { name: "TypeScript", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "PostgreSQL", level: 80 },
  { name: "MySQL", level: 75 },
  { name: "AWS", level: 80 },
  { name: "Docker", level: 75 },
  { name: "Git", level: 90 },
  { name: "REST APIs", level: 90 },
  { name: "GraphQL", level: 70 },
  { name: "Redux", level: 80 },
  { name: "Socket.io", level: 75 },
  { name: "Jest", level: 70 },
  { name: "Webpack", level: 65 },
  { name: "Vite", level: 80 }
];

// Blog data - Add your blogs here when you start writing
export const blogs = [
  // Example blog structure - remove these examples and add your real blogs
  // {
  //   id: 1,
  //   title: "Building Scalable React Applications with TypeScript",
  //   excerpt: "Learn how to structure and build maintainable React applications using TypeScript, covering best practices, patterns, and real-world examples.",
  //   image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   url: "https://dev.to/ghargepratik/building-scalable-react-applications",
  //   platform: "Dev.to",
  //   publishedAt: "Dec 15, 2024",
  //   readTime: "8 min read",
  //   tags: ["React", "TypeScript", "JavaScript", "Web Development"],
  //   featured: true
  // },
  // {
  //   id: 2,
  //   title: "Optimizing Node.js Performance: Tips and Tricks",
  //   excerpt: "Discover practical techniques to improve your Node.js application performance, from memory management to database optimization.",
  //   image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   url: "https://medium.com/@ghargepratik/nodejs-performance-optimization",
  //   platform: "Medium",
  //   publishedAt: "Dec 10, 2024",
  //   readTime: "6 min read",
  //   tags: ["Node.js", "Performance", "Backend", "Optimization"],
  //   featured: false
  // }
];