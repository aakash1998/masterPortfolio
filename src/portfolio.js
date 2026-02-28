const greeting = {
  username: "Aakash Patel",
  title: "Hi, I'm Aakash",
  subTitle: "Data Engineer → AI Builder | I turn messy problems into automated systems using Azure, Python, and Agentic AI.",
  resumeLink: "",
  displayGreeting: true
};

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/aakashpatel05",
  github: "https://github.com/aakash1998",
  gmail: "aakash98.pt@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle: "I build AI-powered systems, automate workflows, and engineer data pipelines that actually work at scale.",
  skills: [
    "⚡ Build agentic AI solutions that operate autonomously — no human in the loop",
    "⚡ Design and deploy data pipelines on Azure and AWS",
    "⚡ Integrate LLMs (Claude, OpenAI) into real business workflows",
    "⚡ Automate manual processes end-to-end using Python and cloud tools",
    "⚡ Build chatbots and AI copilots for internal teams",
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "OpenAI", fontAwesomeClassname: "fas fa-robot" },
  ],
  display: true
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Engineer",
      company: "Avenue Living",
      companylogo: "",
      date: "July 2025 – Present",
      desc: "Building agentic AI solutions and data pipelines on Azure.",
      descBullets: [
        "Built an agentic AI system using Bing Grounding Search to scrape advisor data and push it into HubSpot — fully automated",
        "Integrated Azure AI Foundry with Claude LLM to auto-generate documentation on every code release",
        "Cut daily operational costs by 73% through intelligent scraping and pipeline optimization",
        "Manage CI/CD pipelines, DevOps, and automation initiatives across data workflows",
      ]
    },
    {
      role: "Data Engineer",
      company: "Citi",
      companylogo: "",
      date: "May 2022 – June 2025",
      desc: "Designed and deployed scalable data pipelines in high-demand production environments.",
      descBullets: [
        "Built ETL pipelines using AWS Glue, Apache Spark, and PySpark on EMR",
        "Built real-time streaming apps using Kafka, Kinesis, Redshift, and DynamoDB",
        "Migrated monitoring tools to Lambda — serverless, automated, cheaper",
        "Optimized Redshift clusters significantly improving BI query performance",
      ]
    }
  ]
};

const bigProjects = {
  title: "Projects",
  subtitle: "AI and automation projects I've built",
  projects: [
    {
      projectName: "Agentic Advisor Data Scraper",
      projectDesc: "An agentic AI pipeline that takes a company name and address, searches the web using Bing Grounding Search, finds the company website, extracts advisor data, and pushes it into HubSpot — fully automated, no human in the loop.",
      footerLink: []
    },
    {
      projectName: "Automated LinkedIn Content Generator",
      projectDesc: "A fully automated content pipeline — searches the web for trending AI/tech topics, generates posts using Claude, refines with OpenAI, and auto-publishes to LinkedIn via API. Zero manual effort.",
      footerLink: []
    },
    {
      projectName: "AI-Powered Release Documentation",
      projectDesc: "Built on Azure AI Foundry — detects changes in ADF and Python projects, calls Claude LLM to generate intelligent summaries, and automatically updates Confluence on every release.",
      footerLink: []
    },
    {
      projectName: "Internal Q&A Chatbot",
      projectDesc: "A RAG-based chatbot built with Azure OpenAI, LangChain, and Copilot Studio — allows teams to query internal documents and get instant AI-powered answers.",
      footerLink: []
    },
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Trent University",
      logo: "",
      subHeader: "Master's in Big Data Analytics",
      duration: "",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "A.D. Patel Institute of Technology",
      logo: "",
      subHeader: "Bachelor's in Computer Engineering",
      duration: "",
      desc: "",
      descBullets: []
    }
  ]
};

const contactInfo = {
  title: "Let's Talk",
  subtitle: "Open to discussing data, AI, automation, or new opportunities. My inbox is always open.",
  number: "+1-343-580-0147",
  email_address: "aakash98.pt@gmail.com"
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning and Deep Learning Masters",
      subtitle: "",
      logo_path: "",
      certificate_link: "",
      alt_name: "",
      color_code: "#8B0000"
    },
    {
      title: "Apache PySpark by Example",
      subtitle: "",
      logo_path: "",
      certificate_link: "",
      alt_name: "",
      color_code: "#0C9D58"
    },
    {
      title: "Neo4j Fundamentals",
      subtitle: "",
      logo_path: "",
      certificate_link: "",
      alt_name: "",
      color_code: "#1F70C1"
    },
    {
      title: "Analyzing Big Data with Hive",
      subtitle: "",
      logo_path: "",
      certificate_link: "",
      alt_name: "",
      color_code: "#F6B042"
    },
  ],
  display: true
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  bigProjects,
  educationInfo,
  contactInfo,
  certifications
};
