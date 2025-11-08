export const portfolioData = {
  personal: {
    fullName: "Jaiditya Chauhan",
    title: "Computer Science Student",
    program: "Bachelor of Technology in Computer Science Engineering",
    institution: "Pandit Deendayal Energy University",
    submissionDate: "2027",
    tagline: "Building the Future Through Code, Creativity, and Continuous Learning",
    email: "jaidityaofficial@gmail.com",
    phone: "+91 9925024643",
    location: "Gandhinagar, Gujarat",
    profileImage: "/profile-photo.jpeg",
  },

  socials: {
    github: "https://github.com/Jaiditya-01",
    linkedin: "https://www.linkedin.com/in/jaiditya-chauhan-a2a58b298",
    twitter: "#",
    portfolio: "#",
  },

  navigation: [
    { id: "hero", label: "Home" },
    { id: "introduction", label: "Philosophy" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "leadership", label: "Leadership" },
    { id: "global", label: "Global Impact" },
    { id: "future", label: "Future Goals" },
    { id: "conclusion", label: "Reflection" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ],

  introduction: {
    title: "Learning Philosophy",
    content: [
      "My journey in technology began with curiosity and has evolved into a passion for creating meaningful solutions that impact lives. I believe in the power of interdisciplinary learning—combining computer science with design thinking, ethical considerations, and collaborative innovation.",
      "Learning, for me, is not just about acquiring skills but about understanding the 'why' behind every concept. I approach every challenge as an opportunity to grow, experiment, and push boundaries. My philosophy centers on three pillars: continuous improvement, ethical responsibility, and community impact.",
      "Through my academic journey, I've learned that the most valuable projects are those that solve real problems for real people. This human-centered approach drives everything I do—from writing clean, maintainable code to designing intuitive user experiences.",
    ],
  },

  resume: {
    education: [
      {
        degree: "Bachelor of Technology in Computer Science Engineering",
        institution: "Pandit Deendayal Energy University",
        period: "2023 - 2027",
        gpa: "8.95/10",
        highlights: ["Diploma in Computer Engineering"],
      },
      {
        degree: "Diploma in Computer Engineering",
        institution: "Tolani F.G Polytechnic",
        period: "2021 - 2023",
        gpa: "9.77/10",
        highlights: ["TFWs Merit Seat Holder - Recognized for outstanding academic performance and merit-based admission"],
      },
    ],

    experience: [
      {
        role: " Full Stack Website Development Project",
        company: "PDEU",
        period: "(April 2025)",
        description: "Developed a full-stack website using PHP, SHA algorithms for encryption, and MySQL with an admin page, co laborating in a team of 3.",
        technologies: ["PHP", "MySQL", "SHA algorithms", "Admin page"],
      },
      {
        role: "ASP.NET Developer Intern",
        company: "Evansh Services",
        period: "(20-July-2023 to 25-Aug-2023",
        description: " Built Dynamic web applications using ASP.NET, C#, and SQL Server for 9 Square Company",
        technologies: ["ASP.NET", "C#", "SQL Server"],
      },
      {
        role: "Web Development Intern",
        company: "Evansh Services",
        period: "9-Sep-2022 to 29-Sep-2022",
        description: "Developed responsive web pages using HTML, CSS, and JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
    ],

    skills: {
      technical: [
        "Python",
        "C++",
        "C",
        "Java",
        "PHP",
        "NoSQL",
        "MySQL",
        "ASP.NET",
        "SQLite",
        "Oracle",
        "JavaScript",
        "React & Next.js",
        "Node.js",
        "PostgreSQL & MongoDB",
        "Git & CI/CD",
        "Machine Learning",
      ],
      soft: [
        "Leadership",
        "Adaptability",
        "Communication",
        "Problem Solving",
        "Team Collaboration",
        "Project Management",
        "Critical Thinking",
      ],
    },

    certifications: [
      "ASP.NET Developer Intern Certificate - Evansh Services",
      "Web Development Intern Certificate - Evansh Services",
    ],

    awards: [
      "Coming Soon..",
    ],

    interests: ["Open Source", "AI/ML", "Web3", "Cloud Computing", "DevOps"],

    hobbies: ["Reading", "Hiking", "Traveling", "Sudoku", "Music"],
  },

  projects: [
    {
      id: 1,
      title: "Small Instagram Clone using Flutter",
      category: "Mobile Development",
      overview: "A mobile application built with Flutter that replicates core Instagram features including photo sharing, user profiles, feed browsing, and social interactions. The app demonstrates proficiency in cross-platform mobile development and modern UI/UX design principles.",
      objectives: [
        "Build a fully functional social media app with core Instagram features",
        "Implement user authentication and profile management",
        "Create an intuitive and responsive user interface",
        "Learn Flutter framework and Dart programming language",
      ],
      methodology: "Developed using Flutter framework with Dart programming language. Implemented Firebase for backend services including authentication, real-time database, and cloud storage. Used Provider for state management and followed Material Design guidelines for UI components.",
      outcomes: [
        "Successfully implemented core social media features",
        "Gained hands-on experience with Flutter and Firebase",
        "Created a responsive mobile application with smooth animations",
        "Learned mobile app architecture and state management patterns",
      ],
      innovations: [
        "Custom image picker and photo editing features",
        "Real-time feed updates using Firebase",
        "Optimized image loading and caching",
        "Smooth navigation and transition animations",
      ],
      challenges: [
        {
          problem: "Managing complex state across multiple screens",
          solution: "Implemented Provider pattern for centralized state management and efficient data flow",
        },
        {
          problem: "Optimizing image loading and storage",
          solution: "Used image caching techniques and compressed images before uploading to reduce storage costs",
        },
      ],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      id: 2,
      title: "9 Square Company Website",
      category: "Web Development",
      overview: "A professional corporate website developed for 9 Square Company using ASP.NET, C#, and SQL Server. The website features dynamic content management, responsive design, and seamless user experience for showcasing company services and information.",
      objectives: [
        "Create a modern and professional company website",
        "Implement dynamic content management system",
        "Ensure responsive design for all devices",
        "Integrate database for efficient data handling",
      ],
      methodology: "Built using ASP.NET framework with C# for server-side logic and SQL Server for database management. Implemented MVC architecture for clean code separation. Used Bootstrap for responsive design and integrated modern web technologies for optimal performance.",
      outcomes: [
        "Delivered a fully functional corporate website",
        "Improved company online presence and brand visibility",
        "Created an admin panel for easy content management",
        "Achieved fast loading times and excellent user experience",
      ],
      innovations: [
        "Dynamic content management system",
        "Admin dashboard for website administration",
        "SEO-optimized structure and meta tags",
        "Integrated contact forms with email notifications",
      ],
      challenges: [
        {
          problem: "Ensuring cross-browser compatibility",
          solution: "Tested extensively across different browsers and used CSS prefixes and polyfills where needed",
        },
        {
          problem: "Database optimization for fast queries",
          solution: "Implemented proper indexing, query optimization, and caching strategies to improve performance",
        },
      ],
      links: {
        github: "#",
        demo: "#",
      },
    },
  ],

  advancedSkills: [
    {
      category: "Technical Mastery",
      skills: [
        {
          name: "Full-Stack Development",
          level: 89,
          description: "Expert in modern web technologies, from React to Node.js to cloud deployment",
          projects: 7,
        },
        {
          name: "Machine Learning & AI",
          level: 65,
          description: "Proficient in TensorFlow, PyTorch, and implementing ML solutions",
          projects: 3,
        },
        {
          name: "Application Development",
          level: 60,
          description: "Experienced Java, Kotlin, and Flutter development.",
          projects: 6,
        },
        {
          name: "Backend Development",
          level: 78,
          description: "Strong foundation in SQL, NoSQL, and database optimization",
          projects: 13,
        },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        {
          name: "Leadership & Mentorship",
          level: 93,
          description: "Led multiple student teams and mentored junior developers",
          impact: "Mentored 10+ students",
        },
        {
          name: "Communication",
          level: 85,
          description: "Effective at presenting technical concepts to non-technical audiences",
          impact: "12+ presentations",
        },
        {
          name: "Collaboration",
          level: 95,
          description: "Thrive in team environments and cross-functional projects",
          impact: "20+ team projects",
        },
      ],
    },
    {
      category: "Creative Skills",
      skills: [
        {
          name: "UI/UX Design",
          level: 74,
          description: "Strong eye for design and user experience principles",
          tools: ["Figma", "Adobe XD", "Framer"],
        },
        {
          name: "Design Thinking",
          level: 85,
          description: "Human-centered approach to problem solving and innovation",
          tools: ["Miro", "FigJam"],
        },
      ],
    },
  ],

  leadership: [
    {
      role: "Volunteer Tech Instructor",
      organization: "Code for Good",
      period: "2022 - Present",
      responsibilities: [
        "Teach coding basics to underserved youth",
        "Develop curriculum and teaching materials",
        "Mentor students in project development",
      ],
      outcomes: [
        "Taught 50+ students",
        "100% student satisfaction rate",
        "3 students pursued CS degrees",
      ],
    },
    
  ],

  globalAwareness: {
    intro: "As a developer working with AI/ML, Web3, Cloud Computing, and Open Source technologies, I stay informed about the latest developments and their global implications. Technology shapes our world, and understanding its impact is crucial for responsible innovation.",
    caseStudies: [
      {
        title: "AI Development and Open Source Ethics",
        context: "The rapid advancement of AI models like GPT-4, Claude, and open-source alternatives has raised questions about AI safety, accessibility, and the democratization of technology. Major tech companies are balancing proprietary AI with open-source releases.",
        dilemma: "How can developers contribute to open-source AI while ensuring responsible use and preventing misuse?",
        decision: "I actively follow open-source AI projects on GitHub, contribute to documentation, and advocate for transparent AI development practices. I believe in making AI accessible while implementing proper safeguards.",
        outcome: "By engaging with the open-source AI community, I've learned about model fine-tuning, ethical AI frameworks, and the importance of diverse training datasets.",
        lesson: "Open source AI democratizes technology, but requires community-driven ethical guidelines and responsible deployment practices.",
      },
      {
        title: "Web3 and Decentralized Technology Evolution",
        context: "Web3 technologies are evolving beyond cryptocurrency, with applications in decentralized identity, supply chain transparency, and digital ownership. However, energy consumption and scalability remain significant challenges.",
        dilemma: "How can developers leverage Web3's potential while addressing its environmental and scalability concerns?",
        decision: "I explore energy-efficient blockchain solutions, layer-2 scaling technologies, and focus on practical Web3 applications that solve real-world problems rather than speculative use cases.",
        outcome: "Understanding Web3's technical foundations helps me evaluate when decentralized solutions are appropriate and when traditional architectures are more suitable.",
        lesson: "Web3 offers innovative solutions, but developers must prioritize sustainability and real-world utility over hype.",
      },
      {
        title: "Cloud Computing and DevOps in Modern Development",
        context: "Cloud platforms (AWS, Azure, GCP) continue to evolve with serverless architectures, containerization, and Infrastructure as Code. The shift-left security movement emphasizes security from the start of development.",
        dilemma: "How can developers balance rapid deployment with security, cost optimization, and environmental sustainability in cloud infrastructure?",
        decision: "I practice DevOps principles by implementing CI/CD pipelines, using containerization with Docker, and learning cloud-native architectures. I focus on writing efficient code that minimizes resource consumption.",
        outcome: "Understanding cloud economics and DevOps practices helps me build scalable, secure, and cost-effective applications while reducing environmental impact.",
        lesson: "Modern development requires understanding the full stack—from code to infrastructure—with security and sustainability as core principles.",
      },
    ],
    globalIssues: [
      "AI regulation and ethical AI development (EU AI Act, global AI governance)",
      "Open source sustainability and maintainer burnout",
      "Web3 energy consumption and proof-of-stake adoption",
      "Cloud computing carbon footprint and green computing initiatives",
      "Developer experience and the future of remote work in tech",
      "Cybersecurity threats and the importance of secure coding practices",
      "Digital divide and making technology accessible globally",
    ],
  },

  futureAspirations: {
    shortTerm: [
      {
        goal: "Graduate with Distinction",
        timeline: "May 2027",
        steps: [
          "Maintain CGPA above 8.5/10 throughout remaining semesters",
          "Complete capstone project combining AI/ML with web technologies",
          "Secure summer internship at a leading tech company in 2026",
          "Build 3-4 more full-stack projects showcasing diverse skills",
        ],
      },
      {
        goal: "Master Full-Stack Development",
        timeline: "By 2026",
        steps: [
          "Deepen expertise in React, Node.js, and modern JavaScript frameworks",
          "Learn cloud deployment (AWS/Azure) and DevOps practices",
          "Complete advanced database design and optimization projects",
          "Contribute to open-source projects on GitHub",
        ],
      },
      {
        goal: "Secure Full-Time Software Engineering Role",
        timeline: "By Graduation (2027)",
        steps: [
          "Build a comprehensive portfolio showcasing projects and internships",
          "Strengthen system design and algorithm problem-solving skills",
          "Network with industry professionals through tech meetups and conferences",
          "Target companies in Gandhinagar/Ahmedabad and remote-first organizations",
        ],
      },
    ],
    longTerm: [
      {
        goal: "Become a Senior Full-Stack Engineer",
        timeline: "3-5 years",
        vision: "Work on scalable web applications, lead technical initiatives, and mentor junior developers. Specialize in building robust systems using modern technologies like React, Node.js, and cloud platforms while maintaining expertise in both frontend and backend development.",
      },
      {
        goal: "Explore AI/ML Integration in Web Applications",
        timeline: "2-4 years",
        vision: "Combine my web development skills with machine learning to build intelligent applications. Work on projects that leverage AI for better user experiences, predictive analytics, and automated decision-making systems.",
      },
      {
        goal: "Contribute to Open Source and Tech Community",
        timeline: "Ongoing",
        vision: "Maintain open-source projects, write technical blogs, and contribute to developer communities. Share knowledge through tutorials, code reviews, and speaking at local tech meetups in Gujarat. Help bridge the gap between academic learning and industry practices.",
      },
      {
        goal: "Build Innovative Tech Solutions",
        timeline: "5-10 years",
        vision: "Lead or co-found a tech startup focused on solving real-world problems using web technologies, AI, or Web3. Create products that make a positive impact while building a sustainable business model.",
      },
    ],
    lifelongLearning: [
      "Stay updated with latest web frameworks and JavaScript ecosystem (React, Next.js, Vue.js)",
      "Explore AI/ML libraries and frameworks (TensorFlow, PyTorch) for web integration",
      "Learn cloud-native development and serverless architectures",
      "Master DevOps tools and practices (Docker, Kubernetes, CI/CD pipelines)",
      "Study Web3 technologies and blockchain development",
      "Attend tech conferences and workshops in India and globally",
      "Read technical books, research papers, and follow industry leaders",
      "Build side projects experimenting with new technologies and frameworks",
    ],
  },

  conclusion: {
    summary: "My journey from Tolani F.G Polytechnic to Pandit Deendayal Energy University has been marked by consistent academic excellence, hands-on learning through internships, and building real-world projects. Starting with web development fundamentals and progressing to full-stack development with modern frameworks, I've developed a strong foundation in both frontend and backend technologies. My internships at Evansh Services and projects at PDEU have taught me the importance of writing clean, maintainable code and collaborating effectively in team environments.",
    keyAchievements: [
      "Maintained excellent academic performance: 9.77/10 CGPA in Diploma and 8.95/10 in BTech",
      "Completed two internships at Evansh Services, gaining real-world industry experience",
      "Built full-stack projects including Instagram Clone (Flutter) and 9 Square Company Website",
      "Developed secure web applications using PHP, MySQL, ASP.NET, and modern JavaScript frameworks",
      "Earned TFWs Merit Seat Holder recognition for outstanding academic performance",
    ],
    swot: {
      strengths: [
        "Strong foundation in multiple programming languages (Python, Java, C++, JavaScript, PHP, C#)",
        "Experience with diverse databases (MySQL, PostgreSQL, MongoDB, SQL Server, Oracle, SQLite)",
        "Full-stack development skills from frontend (React, HTML/CSS) to backend (Node.js, ASP.NET, PHP)",
        "Real industry experience through internships at Evansh Services",
        "Proven ability to learn new technologies quickly and adapt to different project requirements",
        "Strong problem-solving skills demonstrated through academic projects and internships",
      ],
      weaknesses: [
        "Limited experience with large-scale distributed systems and microservices architecture",
        "Need to deepen knowledge in cloud platforms (AWS, Azure, GCP) and DevOps practices",
        "Want to gain more experience with AI/ML implementation in production environments",
        "Opportunity to contribute more actively to open-source projects",
      ],
      opportunities: [
        "Growing tech industry in Gujarat with companies expanding in Gandhinagar and Ahmedabad",
        "High demand for full-stack developers with diverse technology skills",
        "Remote work opportunities allowing collaboration with global teams",
        "Emerging fields in AI/ML, Web3, and cloud computing offer exciting career paths",
        "Strong academic foundation provides base for pursuing advanced certifications",
      ],
      threats: [
        "Rapidly evolving technology landscape requires continuous learning",
        "Competitive job market with many skilled developers",
        "Need to stay updated with latest frameworks and best practices",
        "Balancing academic commitments with skill development and project work",
      ],
    },
    reflection: "Reflecting on my journey so far, I'm proud of maintaining academic excellence while gaining practical experience through internships and building real projects. From learning web development basics to working on full-stack applications, each step has contributed to my growth as a developer. The internships at Evansh Services taught me the importance of writing production-ready code and working in professional environments. My projects, from the Instagram Clone to the 9 Square Company Website, have helped me understand the complete software development lifecycle. As I continue my journey toward graduation in 2027, I'm excited to explore new technologies, contribute to meaningful projects, and eventually build a career where I can solve complex problems and make a positive impact through technology.",
  },

  testimonials: [
    {
      name: "Faculty Member",
      role: "Computer Science Department",
      organization: "Pandit Deendayal Energy University",
      photo: "/placeholder.svg",
      quote: "Jaiditya demonstrates exceptional dedication to learning and consistently delivers high-quality work. Their strong foundation in multiple programming languages and ability to quickly grasp new concepts makes them stand out. The full-stack project they developed showcases both technical skills and attention to detail.",
    },
    {
      name: "Supervisor",
      role: "Mentor",
      organization: "Evansh Services",
      photo: "/placeholder.svg",
      quote: "During Jaiditya's internship with us, they showed remarkable growth in ASP.NET and web development. They took initiative, asked thoughtful questions, and delivered the 9 Square Company website project on time. Their willingness to learn and adapt to new technologies was impressive.",
    },
    {
      name: "Project Team Member",
      role: "Collaborator",
      organization: "PDEU Full-Stack Project",
      photo: "/placeholder.svg",
      quote: "Working with Jaiditya on the full-stack website project was a great experience. They handled the backend PHP development and database integration effectively. Their understanding of security practices, especially implementing SHA algorithms for encryption, showed strong technical knowledge and attention to security best practices.",
    },
    {
      name: "Academic Advisor",
      role: "Faculty",
      organization: "Tolani F.G Polytechnic",
      photo: "/placeholder.svg",
      quote: "Jaiditya's academic performance, achieving 9.77/10 CGPA and earning the TFWs Merit Seat Holder recognition, reflects their commitment to excellence. They consistently demonstrated strong problem-solving abilities and a genuine passion for computer engineering throughout their diploma program.",
    },
  ],
};
