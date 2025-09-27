// Personal Information - Update this with your actual data from CV
export const personalInfo = {
  name: "Rio Ananda Putra",
  title: "Full Stack Developer",
  tagline: "Fullstack Developer Portfolio",
  email: "rio.anandaputra@example.com",
  phone: "+62 XXX-XXXX-XXXX",
  location: "Indonesia",
  bio: "Full Stack Software Engineer specializing in scalable web applications and mobile solutions. I transform complex business requirements into elegant, user-centered digital experiences using cutting-edge technologies.",
  detailedBio: "Passionate Full Stack Developer specializing in React.js, Next.js, and Node.js with a strong focus on creating seamless user experiences and robust backend systems. My expertise spans from frontend architecture to database optimization, transforming complex business requirements into elegant digital solutions.",
  resumeUrl: "/resume.pdf",
  highlights: [
    "Scalable",
    "Secure",
    "Reliable",
    "Efficient",
  ],
  
  // Stats - Avoid hardcoding these in components
  stats: {
    experience: "3+",
    projects: "50+",
    clients: "20+",
    technologies: "15+"
  },
  
  // Social Links - Update with your actual social media profiles
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    instagram: "https://instagram.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    discord: "https://discord.gg/yourusername",
    youtube: "https://youtube.com/@yourusername",
  },
};

// Work Experience - Update with your actual work experience
export const workExperience = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Company Name",
    period: "2023 - Present",
    location: "Remote/Location",
    slug: "senior-full-stack-developer-company-name",
    summary: "Leading full-stack development initiatives and architecting scalable applications for enterprise clients",
    description: [
      "Architected and deployed scalable full-stack applications using React, Node.js, and MongoDB, serving 10K+ active users",
      "Led cross-functional development team of 3 engineers, implementing agile methodologies and code review processes",
      "Optimized application performance by 40% through advanced code refactoring and database query optimization",
      "Collaborated with product managers and UX designers to deliver user-centric solutions aligned with business objectives",
    ],
    detailedDescription: [
      "As a Senior Full Stack Developer, I spearhead the development of complex web applications that serve thousands of users daily. My role encompasses both technical leadership and hands-on development, ensuring our applications meet the highest standards of performance and user experience.",
      
      "One of my key achievements was architecting a microservices-based e-commerce platform that handles over 10,000 concurrent users. This involved designing robust APIs, implementing efficient database schemas, and ensuring seamless integration between frontend and backend systems.",
      
      "I take pride in mentoring junior developers and fostering a collaborative team environment. Through regular code reviews, pair programming sessions, and knowledge sharing meetings, I've helped build a strong development culture focused on continuous learning and improvement.",
      
      "My approach to problem-solving combines technical expertise with business acumen, always keeping the end-user experience at the forefront of development decisions."
    ],
    keyAchievements: [
      "Reduced application load time by 60% through performance optimization",
      "Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes",
      "Led migration from monolith to microservices architecture",
      "Established coding standards and review processes adopted company-wide"
    ],
    challenges: [
      "Scaling database performance for high-traffic periods",
      "Coordinating development across multiple time zones",
      "Migrating legacy codebase without disrupting live services"
    ],
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "Next.js", "Docker", "AWS", "GraphQL"],
    tools: ["VS Code", "Git", "Jira", "Figma", "Postman"],
    teamSize: "5 developers, 2 designers, 1 PM",
    reportingTo: "Engineering Manager",
    keyMetrics: {
      userGrowth: "300% increase in daily active users",
      performance: "40% improvement in application performance", 
      teamProductivity: "25% increase in sprint velocity",
      codeQuality: "50% reduction in production bugs"
    }
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Previous Company",
    period: "2021 - 2023",
    location: "Location",
    slug: "full-stack-developer-previous-company",
    summary: "Developing responsive web applications and RESTful APIs while mentoring junior team members",
    description: [
      "Developed responsive web applications using modern JavaScript frameworks, achieving 95% client satisfaction",
      "Designed and implemented RESTful APIs with comprehensive database schemas using MySQL and PostgreSQL",
      "Executed agile development practices with Git version control, participating in sprint planning and retrospectives",
      "Mentored 2 junior developers through code reviews, knowledge sharing sessions, and technical guidance",
    ],
    detailedDescription: [
      "In my role as a Full Stack Developer, I was responsible for building and maintaining web applications that directly impacted our clients' business operations. Working in an agile environment, I collaborated closely with cross-functional teams to deliver high-quality solutions.",
      
      "I specialized in creating responsive, user-friendly interfaces while also developing robust backend systems. My work involved everything from database design to API development, ensuring seamless data flow and optimal user experiences.",
      
      "A significant part of my role involved mentoring junior developers, helping them grow their technical skills and understanding of best practices. This experience taught me valuable leadership skills and reinforced my own technical knowledge.",
      
      "Throughout this position, I consistently delivered projects on time while maintaining high code quality standards, contributing to our team's reputation for reliability and excellence."
    ],
    keyAchievements: [
      "Achieved 95% client satisfaction rating across all projects",
      "Successfully mentored 2 junior developers to mid-level positions",
      "Delivered 15+ projects on time and within budget",
      "Implemented automated testing reducing bug reports by 35%"
    ],
    challenges: [
      "Working with legacy systems and gradual modernization",
      "Balancing feature development with technical debt",
      "Managing multiple client projects simultaneously"
    ],
    technologies: ["React", "Express.js", "MySQL", "PostgreSQL", "Docker", "JavaScript", "HTML5", "CSS3"],
    tools: ["VS Code", "Git", "Trello", "Slack", "Chrome DevTools"],
    teamSize: "3 developers, 1 designer",
    reportingTo: "Senior Developer",
    keyMetrics: {
      clientSatisfaction: "95% satisfaction rating",
      projectDelivery: "100% on-time delivery rate",
      codeQuality: "35% reduction in bug reports",
      mentorship: "2 junior developers promoted"
    }
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "First Company",
    period: "2020 - 2021",
    location: "Location",
    slug: "junior-web-developer-first-company",
    summary: "Building responsive frontend interfaces and supporting backend development in my first professional role",
    description: [
      "Built responsive frontend interfaces using HTML5, CSS3, and vanilla JavaScript with cross-browser compatibility",
      "Supported backend development using PHP and MySQL, contributing to database design and API integration",
      "Conducted comprehensive testing and debugging procedures, reducing production bugs by 25%",
      "Acquired proficiency in modern development tools and industry best practices through continuous learning",
    ],
    detailedDescription: [
      "Starting my professional journey as a Junior Web Developer was both exciting and challenging. This role provided me with invaluable hands-on experience in web development fundamentals and introduced me to professional development practices.",
      
      "I focused primarily on frontend development, creating responsive and accessible user interfaces. Working with HTML5, CSS3, and JavaScript, I learned to build interfaces that work seamlessly across different browsers and devices.",
      
      "My involvement in backend development with PHP and MySQL gave me a comprehensive understanding of full-stack development. This experience was crucial in shaping my ability to think about applications holistically.",
      
      "The debugging and testing responsibilities taught me the importance of code quality and attention to detail. These skills became foundational to my approach to development throughout my career."
    ],
    keyAchievements: [
      "Reduced production bugs by 25% through rigorous testing",
      "Successfully completed all assigned projects within deadlines",
      "Contributed to database design for 3 major features",
      "Achieved cross-browser compatibility for all developed interfaces"
    ],
    challenges: [
      "Learning professional development workflows and tools",
      "Understanding complex existing codebases",
      "Balancing learning with productivity expectations"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "jQuery"],
    tools: ["Sublime Text", "Git", "XAMPP", "Chrome DevTools", "FileZilla"],
    teamSize: "2 developers, 1 senior developer",
    reportingTo: "Senior Web Developer",
    keyMetrics: {
      bugReduction: "25% reduction in production bugs",
      projectCompletion: "100% on-time project completion",
      learningGrowth: "Mastered 6+ new technologies",
      codeContribution: "Contributed to 10+ feature implementations"
    }
  },
];

// Education - Update with your actual education
export const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    school: "University of Indonesia",
    period: "2019 - 2023",
    location: "Jakarta, Indonesia",
    description: "Specialized in Software Engineering and Web Development. Completed advanced coursework in Data Structures, Algorithms, Database Systems, Computer Networks, and Human-Computer Interaction. Graduated Magna Cum Laude with thesis on 'Modern Web Application Architecture using Microservices'.",
    gpa: "3.85/4.0",
  },
  {
    id: 2,
    degree: "Full Stack Web Development Bootcamp",
    school: "Dicoding Indonesia",
    period: "2022",
    location: "Online",
    description: "Intensive 6-month program focusing on modern web development technologies including React, Node.js, Express, and MongoDB. Completed 8 real-world projects and received industry-recognized certification.",
  },
  {
    id: 3,
    degree: "High School - Science Track",
    school: "SMA Negeri 1 Jakarta",
    period: "2016 - 2019",
    location: "Jakarta, Indonesia",
    description: "Focused on Mathematics, Physics, and Computer Science. President of the Computer Science Club and led the development of the school's digital library system.",
  },
];

// Certifications - Update with your actual certifications
export const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-ASA-2024-001",
    url: "https://aws.amazon.com/certification/",
  },
  {
    id: 2,
    name: "Meta React Developer Professional Certificate",
    issuer: "Meta (Facebook)",
    date: "2023",
    credentialId: "META-REACT-2023-456",
    url: "https://developers.facebook.com/certification/",
  },
  {
    id: 3,
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PCA-2023-789",
    url: "https://cloud.google.com/certification/",
  },
  {
    id: 4,
    name: "MongoDB Certified Developer Associate",
    issuer: "MongoDB University",
    date: "2023",
    credentialId: "MongoDB-CDA-2023-101",
    url: "https://university.mongodb.com/",
  },
  {
    id: 5,
    name: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialId: "FCC-FSWD-2022-202",
    url: "https://freecodecamp.org/certification/",
  },
  {
    id: 6,
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2024",
    credentialId: "DOCKER-DCA-2024-303",
    url: "https://www.docker.com/certification/",
  },
];

// Projects - Update with your actual projects
export const projects = [
  {
    id: 1,
    title: "Enterprise E-Commerce Platform",
    description: "Comprehensive full-stack e-commerce solution featuring advanced user authentication, integrated payment processing, and sophisticated admin dashboard for inventory management.",
    excerpt: "Modern e-commerce platform with advanced features including real-time inventory, secure payments, and comprehensive admin dashboard.",
    image: "/NextWebsite.png",
    category: "fullstack",
    slug: "enterprise-ecommerce-platform",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "https://your-ecommerce-project.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    status: "Completed",
    startDate: "January 2024",
    endDate: "March 2024",
    features: [
      "Multi-role authentication system",
      "Advanced shopping cart with persistent storage",
      "Secure payment integration with Stripe",
      "Real-time inventory management dashboard",
      "Responsive design optimized for all devices",
      "Order tracking and management system",
      "Email notifications and confirmations",
      "Advanced search and filtering capabilities",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Optimizing database queries for large product catalogs",
      "Building scalable admin dashboard",
    ],
    achievements: [
      "Reduced page load time by 40%",
      "Achieved 99.9% uptime",
      "Processed 10,000+ transactions safely",
    ],
  },
  {
    id: 2,
    title: "Collaborative Project Management Suite",
    description: "Real-time collaborative workspace with advanced task orchestration, drag-and-drop functionality, and comprehensive team analytics for enhanced productivity.",
    excerpt: "Real-time collaborative workspace with drag-and-drop task management and team analytics for enhanced productivity.",
    image: "/project2.png",
    category: "web",
    slug: "collaborative-project-management-suite",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    liveUrl: "https://your-task-app.com",
    githubUrl: "https://github.com/yourusername/task-management",
    status: "Completed",
    startDate: "April 2024",
    endDate: "June 2024",
    features: [
      "Real-time collaborative editing",
      "Advanced drag-and-drop task organization",
      "Team workspace with role-based permissions",
      "Comprehensive progress tracking and analytics",
      "Cross-platform responsive interface",
      "Time tracking and reporting",
      "File sharing and attachment system",
      "Integration with popular tools",
    ],
    challenges: [
      "Implementing real-time synchronization",
      "Building complex drag-and-drop interface",
      "Optimizing database for concurrent users",
    ],
    achievements: [
      "Supports 100+ concurrent users",
      "99.5% real-time sync accuracy",
      "Improved team productivity by 35%",
    ],
  },
  {
    id: 3,
    title: "Advanced Weather Intelligence Dashboard",
    description: "Sophisticated weather analytics platform providing detailed meteorological data with interactive visualizations and location-based forecasting capabilities.",
    excerpt: "Weather analytics platform with interactive visualizations, detailed forecasts, and location-based intelligence.",
    image: "/SpaceWebsite.png",
    category: "web",
    slug: "advanced-weather-intelligence-dashboard",
    technologies: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
    liveUrl: "https://your-weather-app.com",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    status: "Completed",
    startDate: "July 2024",
    endDate: "August 2024",
    features: [
      "Real-time weather data integration",
      "Extended 14-day forecast analysis",
      "Interactive data visualization charts",
      "Geolocation-based weather detection",
      "Dynamic weather condition animations",
      "Weather alerts and notifications",
      "Historical weather data analysis",
      "Multiple location tracking",
    ],
    challenges: [
      "Handling large weather datasets",
      "Creating responsive chart visualizations",
      "Optimizing API calls for performance",
    ],
    achievements: [
      "Displays data for 500+ cities",
      "Sub-second data refresh rate",
      "95% weather prediction accuracy",
    ],
  },
  {
    id: 4,
    title: "React Native Food Delivery App",
    description: "Cross-platform mobile application for food delivery with real-time order tracking, secure payment integration, and intuitive user experience.",
    excerpt: "Cross-platform mobile food delivery app with real-time tracking and secure payments.",
    image: "/foodorder.png",
    category: "mobile",
    slug: "react-native-food-delivery-app",
    technologies: ["React Native", "Node.js", "Express", "MongoDB", "Socket.io"],
    liveUrl: "https://play.google.com/store/apps/food-app",
    githubUrl: "https://github.com/yourusername/food-delivery-app",
    status: "Completed",
    startDate: "September 2024",
    endDate: "November 2024",
    features: [
      "Cross-platform mobile application",
      "Real-time order tracking with GPS",
      "Secure payment processing",
      "Restaurant discovery and reviews",
      "Push notifications for order updates",
      "User profile and order history",
      "Favorite restaurants and dishes",
      "Advanced search and filtering",
    ],
    challenges: [
      "Implementing real-time GPS tracking",
      "Optimizing app performance on different devices",
      "Building complex navigation system",
    ],
    achievements: [
      "Published on both iOS and Android",
      "4.8/5 average user rating",
      "10,000+ app downloads",
    ],
  },
  {
    id: 5,
    title: "Social Media Analytics Dashboard",
    description: "Comprehensive analytics platform for social media management with advanced reporting, content scheduling, and performance insights.",
    excerpt: "Analytics platform for social media management with reporting, scheduling, and performance insights.",
    image: "/reactsocialmedia1.png",
    category: "web",
    slug: "social-media-analytics-dashboard",
    technologies: ["React", "Node.js", "Chart.js", "Redis", "Social Media APIs"],
    liveUrl: "https://your-social-analytics.com",
    githubUrl: "https://github.com/yourusername/social-analytics",
    status: "In Progress",
    startDate: "December 2024",
    endDate: "February 2025",
    features: [
      "Multi-platform social media integration",
      "Advanced analytics and reporting",
      "Content scheduling and automation",
      "Audience insights and demographics",
      "Competitor analysis and benchmarking",
      "Custom dashboard creation",
      "Export reports in multiple formats",
      "Team collaboration tools",
    ],
    challenges: [
      "Integrating multiple social media APIs",
      "Processing large amounts of social data",
      "Building real-time analytics engine",
    ],
    achievements: [
      "Connects to 8+ social platforms",
      "Processes 1M+ social posts daily",
      "Provides insights in under 3 seconds",
    ],
  },
  {
    id: 6,
    title: "AI-Powered Task Automation Tool",
    description: "Intelligent automation platform using machine learning to optimize workflows, predict task completion times, and enhance team productivity.",
    excerpt: "AI-powered automation platform with machine learning for workflow optimization and productivity enhancement.",
    image: "/gpt2.png",
    category: "fullstack",
    slug: "ai-powered-task-automation-tool",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    liveUrl: "https://your-ai-automation.com",
    githubUrl: "https://github.com/yourusername/ai-automation",
    status: "In Progress",
    startDate: "January 2025",
    endDate: "April 2025",
    features: [
      "Machine learning task prediction",
      "Automated workflow optimization",
      "Intelligent resource allocation",
      "Natural language task processing",
      "Predictive analytics dashboard",
      "Custom automation rules",
      "Integration with popular tools",
      "Performance monitoring and alerts",
    ],
    challenges: [
      "Training accurate ML models",
      "Building scalable AI infrastructure",
      "Ensuring data privacy and security",
    ],
    achievements: [
      "95% task prediction accuracy",
      "Reduced manual work by 60%",
      "Improved team efficiency by 45%",
    ],
  },
];

// Skills - Already exists in constants/index.ts but we can extend it
export const skillCategories = {
  frontend: "Frontend Development",
  backend: "Backend Development",
  fullstack: "Full Stack & Tools",
  other: "Other Technologies",
};

// Languages
export const languages = [
  {
    name: "Indonesian",
    level: "Native",
  },
  {
    name: "English",
    level: "Professional",
  },
  {
    name: "Japanese",
    level: "Basic", // Update as needed
  },
];

// Interests/Hobbies - Enhanced with more engaging descriptions
export const interests = [
  "🏗️ System Architecture & Scalability",
  "📱 Mobile-First Innovation",
  "🌍 Open Source Contribution",
  "✍️ Technical Writing & Mentoring",
  "☁️ Cloud Computing & DevOps",
  "🎨 UI/UX Design Excellence",
  "🚀 Emerging Tech Exploration",
  "💡 Creative Problem Solving",
  "🤝 Community Building",
  "📊 Data-Driven Development"
];

// Blog Posts - Update with your actual blog posts
export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Next.js 14",
    excerpt: "Explore advanced patterns and techniques for creating high-performance, scalable React applications using the latest Next.js features including App Router, Server Components, and streaming.",
    date: "September 20, 2025",
    readTime: "8 min read",
    image: "/NextWebsite.png",
    category: "web-development",
    slug: "building-scalable-react-applications-nextjs-14",
    url: "/blog/building-scalable-react-applications-nextjs-14",
    tags: ["React", "Next.js", "Performance", "Architecture"],
  },
  {
    id: 2,
    title: "Mastering TypeScript: Advanced Types and Patterns",
    excerpt: "Dive deep into TypeScript's advanced type system, including conditional types, mapped types, and utility types to write more robust and maintainable code.",
    date: "September 15, 2025",
    readTime: "10 min read",
    image: "/SpaceWebsite.png",
    category: "web-development",
    slug: "mastering-typescript-advanced-types-patterns",
    url: "/blog/mastering-typescript-advanced-types-patterns",
    tags: ["TypeScript", "Programming", "Best Practices"],
  },
  {
    id: 3,
    title: "Database Design Patterns for Modern Web Applications",
    excerpt: "Learn essential database design patterns and optimization techniques for building efficient, scalable backend systems with PostgreSQL and MongoDB.",
    date: "September 10, 2025",
    readTime: "12 min read",
    image: "/profiol3.png",
    category: "tutorials",
    slug: "database-design-patterns-web-applications",
    url: "/blog/database-design-patterns-web-applications",
    tags: ["Database", "PostgreSQL", "MongoDB", "Architecture"],
  },
  {
    id: 4,
    title: "Authentication and Security in Full-Stack Applications",
    excerpt: "Comprehensive guide to implementing secure authentication systems using JWT, OAuth, and modern security practices in React and Node.js applications.",
    date: "September 5, 2025",
    readTime: "9 min read",
    image: "/deliveroo1.jpg",
    category: "tutorials",
    slug: "authentication-security-fullstack-applications",
    url: "/blog/authentication-security-fullstack-applications",
    tags: ["Security", "Authentication", "JWT", "Node.js"],
  },
  {
    id: 5,
    title: "Optimizing React Performance: Tips and Techniques",
    excerpt: "Practical strategies for optimizing React application performance, including code splitting, lazy loading, memoization, and bundle optimization techniques.",
    date: "August 30, 2025",
    readTime: "7 min read",
    image: "/foodorder.png",
    category: "web-development",
    slug: "optimizing-react-performance-tips-techniques",
    url: "/blog/optimizing-react-performance-tips-techniques",
    tags: ["React", "Performance", "Optimization", "Best Practices"],
  },
  {
    id: 6,
    title: "Career Growth: From Junior to Senior Developer",
    excerpt: "Personal insights and actionable advice on advancing your career in software development, including key skills, leadership principles, and continuous learning strategies.",
    date: "August 25, 2025",
    readTime: "6 min read",
    image: "/reactsocialmedia1.png",
    category: "career",
    slug: "career-growth-junior-to-senior-developer",
    url: "/blog/career-growth-junior-to-senior-developer",
    tags: ["Career", "Professional Development", "Leadership", "Growth"],
  },
];