const userData = {
  githubUsername: "iamchristiancollins",
  name: "Christian Collins",
  designation: "Software Developer",
  avatarUrl: "/avatar_alt.png",
  email: "iamchristiancollins@gmail.com",
  phone: "+1 9046873838",
  address: "Birmingham, AL.",
  projects: [
    {
      title: "Trip Planner",
      link: "https://github.com/iamchristiancollins/TripPlanner",
      imgUrl: "/TripPlanner.png",
    },
    {
      title: "AgriDrone",
      link: "https://github.com/iamchristiancollins/AgriDrone",
      imgUrl: "/AgriDrone.png",
    },
    {
      title: "Customer Support AI",
      link: "https://customer-support-ai-two.vercel.app/login",
      imgUrl: "/customersupport.png",
    },
    {
      title: "Inventory Management",
      link: "https://inventory-management-sigma-six.vercel.app/",
      imgUrl: "/inventory.png",
    },
  ],
  about: {
    title:
      "I'm a software developer that loves tackling new problems and building innovative solutions",
    description: [
      `I am a dedicated software developer with a background in mathematics, and recently completed a Computer Science degree at the University of Alabama at Birmingham. I am proficient in programming languages including Python, Java, C, and Go.`,
      `My professional experience includes a software engineering internship at Shipt, where I developed Go web services for ACH payment processing, implemented secure API integrations with financial institutions, and built event-driven architecture using Kafka and webhooks. I also work as a software developer at DarkTower, maintaining analytical tools and web scrapers, managing PostgreSQL databases, and enhancing our React-based website.`
      `As a recent Computer Science graduate from UAB, I served as a Teaching Assistant for Algorithms and Data Structures, Computer Organization and Assembly Language, and Systems Programming, where I conducted weekly labs, provided individual tutoring, and helped students with problem-solving and debugging. During my studies, I was actively involved in the tech community as president of the Association of Computing Machinery and a member of Women in Tech.`,
      `I continue to stay engaged with Birmingham's tech community through regular AI meetups. Having completed my degree and gained hands-on experience in financial technology and full-stack development, I'm excited to contribute my skills to innovative software solutions at a forward-thinking company.`,
    ],
    currentProject: "learning backend with Go by building a simple banking app",
    currentProjectUrl: "https://github.com/iamchristiancollins/simplebank",
  },
  experience: [
    {
      title: "Backend Engineering Intern",
      company: "Shipt",
      year: "June 2025 - August 2025",
      companyLink: "https://shipt.com/",
      desc: [
        "- Built Go web services with Postgres database for ACH payment processing, implementing secure OAuth authentication and Wells Fargo API integration",
        "- Architected asynchronous processing pipeline using Kafka topics and webhooks with idempotency patterns to ensure transaction consistency and reliable retries",
        "- Developed comprehensive test coverage through TDD practices, enabling confident large-scale refactors and system reliability",
        "- Collaborated with Staff Engineer using pair programming to deliver robust transaction management and guaranteed information delivery",
      ],
      image:
        "https://images.seeklogo.com/logo-png/42/1/shipt-logo-png_seeklogo-423378.png",
    },
    {
      title: "Software Developer",
      company: "DarkTower",
      year: "February 2024 - May 2025",
      companyLink: "https://getdarktower.com/",
      desc: [
        "- Expand and develop new tools for analysts to aid in forensic investigations",
        "- Create, debug, and containerize web scraping applications for Facebook using Docker",
        "- Utilize pair programming and Agile methodologies via Shortcut",
        "- Work with PostgreSQL databases, ensuring data integrity and efficient retrieval",
        "- Maintain and integrate analytical tools and web scrapers in Docker and GitLab",
        "- Enhance in-house website features using React",
      ],
      image:
        "https://media.licdn.com/dms/image/C510BAQGhXx5HbNWrLQ/company-logo_200_200/0/1519861747403?e=2147483647&v=beta&t=1CEMMSI-BXn6cF0gsDqsHNtNZdNdnE-RXvxa6_-wEZo",
    },
    {
      title: "Teaching Assistant",
      company: "UAB Department of Computer Science",
      year: "August 2023 - April 2025",
      companyLink: "https://uab.edu",
      desc: [
        "- Support professors in delivering courses in Algorithms and Data Structures, Computer Organization and Assembly Language, and Systems Programming",
        "- Facilitate student learning by conducting lab sessions and tutoring on C and Assembly programming languages",
        "- Teach essential terminal commands and GitHub best practices, enhancing students’ practical skills",
        "- Assist students in problem-solving and debugging, ensuring a comprehensive understanding of course material",
        "- Collaborate with professors to develop and grade assignments and exams",],
      image:
        "https://content.sportslogos.net/logos/35/879/full/1518_uab_blazers-primary-2015.png",
    },
    {
      title: "Graduation",
      company: "UAB",
      year: "2025",
      companyLink: "https://uab.edu",
      desc: [
        "Received a Postbaccalaureate degree in Computer Science with a GPA of 4.0.",
        "Took courses in Software Engineering, Databases, Web Application Development, Systems, and more.",
      ],
      image:
        "https://content.sportslogos.net/logos/35/879/full/1518_uab_blazers-primary-2015.png",
    },
    {
      title: "Mathematics Instructor",
      company: "Creekside High School",
      year: "2014-2022",
      companyLink: "https://www-chs.stjohns.k12.fl.us/",
      desc: ["- Taught Algebra 1, Algebra 2, Pre-Calculus, and Calculus to high school students",
        "- Developed and implemented lesson plans, quizzes, and exams",
        "- Led a Professional Learning Community to improve student performance",
        "- Created a math competition for all students in the county that was later taken over by the district",
      ],
      image:
        "https://1stplacesports.com/wp-content/uploads/2020/09/creekside-symbol-front.jpg",
    },
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1pAin08cwLh4AsvTjorkfDeAsmBoioD-m/view?usp=sharing",
  socialLinks: {
    instagram: "https://instagram.com/iamchriscollins",
    twitter: "https://twitter.com/iamchriscollins",
    linkedin: "https://linkedin.com/in/iamchristiancollins",
    github: "https://github.com/iamchristiancollins",
    facebook: "https://facebook.com/",
    peerlist: "https://peerlist.io/christianc",
    bluesky: "https://bsky.app/profile/iamchristiancollins.com",
  },
};

export default userData;
