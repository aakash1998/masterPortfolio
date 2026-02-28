const settings = {
  isSplash: false,
};

const seo = {
  title: "Aakash Patel",
  description: "Data Engineer → AI Builder | Azure • Python • Agentic AI | Turning messy problems into automated systems.",
  og: {
    title: "Aakash Patel Portfolio",
    type: "website",
    image: "",
  },
};

const greeting = {
  title: "Hi, I'm Aakash",
  logo_name: "AakashPatel",
  nickname: "AI Builder",
  subTitle: "Data Engineer → AI Builder. I turn messy problems into automated systems using Azure, Python, and Agentic AI.",
  resumeLink: "",
  portfolio_repository: "https://github.com/aakash1998/masterPortfolio",
  githubProfile: "https://github.com/aakash1998",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aakashpatel05",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:aakash98.pt@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Github",
    link: "https://github.com/aakash1998",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
];

const skills = {
  data: [
    {
      title: "AI & Automation",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Build agentic AI solutions that operate autonomously — no human in the loop",
        "⚡ Integrate LLMs (Claude, OpenAI) into real business workflows",
        "⚡ Build chatbots and AI copilots for internal teams",
        "⚡ Automate manual processes end-to-end using Python and cloud tools",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python", style: { backgroundColor: "transparent", color: "#3776AB" } },
        { skillName: "Azure", fontAwesomeClassname: "simple-icons:microsoftazure", style: { color: "#0089D6" } },
        { skillName: "OpenAI", fontAwesomeClassname: "simple-icons:openai", style: { color: "#412991" } },
      ],
    },
    {
      title: "Data Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Design and deploy scalable data pipelines on Azure and AWS",
        "⚡ Build real-time streaming applications using Kafka and Kinesis",
        "⚡ Optimize data warehouses for high-performance analytics",
      ],
      softwareSkills: [
        { skillName: "AWS", fontAwesomeClassname: "simple-icons:amazonaws", style: { color: "#FF9900" } },
        { skillName: "Azure", fontAwesomeClassname: "simple-icons:microsoftazure", style: { color: "#0089D6" } },
        { skillName: "Spark", fontAwesomeClassname: "simple-icons:apachespark", style: { color: "#E25A1C" } },
        { skillName: "Snowflake", fontAwesomeClassname: "simple-icons:snowflake", style: { color: "#29B5E8" } },
        { skillName: "Kafka", fontAwesomeClassname: "simple-icons:apachekafka", style: { color: "#231F20" } },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Trent University",
      subtitle: "Master's in Big Data Analytics",
      logo_path: "",
      alt_name: "Trent University",
      duration: "",
      descriptions: [
        "⚡ Studied Big Data, Machine Learning, and Data Engineering",
        "⚡ Built ML projects: fake news detection, credit card fraud detection, flight fare prediction, text classification",
      ],
      website_link: "https://www.trentu.ca",
    },
    {
      title: "A.D. Patel Institute of Technology",
      subtitle: "Bachelor's in Computer Engineering",
      logo_path: "",
      alt_name: "ADIT",
      duration: "",
      descriptions: [
        "⚡ Published research on Data Mining Algorithms and Indian Paper Currency Detection using OpenCV",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning and Deep Learning Masters",
      subtitle: "",
      logo_path: "",
      certificate_link: "",
      alt_name: "",
      color_code: "#8B0000",
    },
    {
      title: "Apache PySpark by Example",
      subtitle: "",
      logo_path: "",
      certificate_link: "",
      alt_name: "",
      color_code: "#0C9D58",
    },
    {
      title: "Neo4j Fundamentals",
      subtitle: "",
      logo_path: "",
      certificate_link: "",
      alt_name: "",
      color_code: "#1F70C1",
    },
    {
      title: "Analyzing Big Data with Hive",
      subtitle: "",
      logo_path: "",
      certificate_link: "",
      alt_name: "",
      color_code: "#F6B042",
    },
  ],
};

const experience = {
  title: "Experience",
  subtitle: "Work Experience",
  description: "Data Engineer with 4+ years of experience building AI-powered automation systems and scalable data pipelines.",
  header_image_path: "",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Engineer",
          company: "Avenue Living",
          company_url: "",
          logo_path: "",
          duration: "July 2025 - Present",
          location: "Calgary, Alberta, Canada",
          description: "Building agentic AI solutions and data pipelines on Azure.",
          descBullets: [
            "Built an agentic AI system using Bing Grounding Search to scrape advisor data and push into HubSpot — fully automated",
            "Integrated Azure AI Foundry with Claude LLM to auto-generate documentation on every code release",
            "Cut daily operational costs by 73% through intelligent scraping and pipeline optimization",
            "Manage CI/CD pipelines, DevOps, and automation initiatives",
          ],
          color: "#0879bf",
        },
        {
          title: "Data Engineer",
          company: "Citi",
          company_url: "",
          logo_path: "",
          duration: "May 2022 - June 2025",
          location: "",
          description: "Designed and deployed scalable data pipelines in high-demand production environments.",
          descBullets: [
            "Built ETL pipelines using AWS Glue, Apache Spark, and PySpark on EMR",
            "Built real-time streaming apps using Kafka, Kinesis, Redshift, and DynamoDB",
            "Migrated monitoring tools to Lambda — serverless, automated, cheaper",
            "Optimized Redshift clusters improving BI query performance significantly",
          ],
          color: "#9b1578",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description: "AI and automation projects I've built — real problems, real solutions.",
  avatar_image_path: "",
};

const publicationsHeader = {
  title: "Publications",
  description: "Research publications from my academic work.",
  avatar_image_path: "",
};

const publications = {
  data: [
    {
      id: "1",
      name: "Data Mining Algorithms",
      createdAt: "",
      description: "Research on data mining algorithms and their applications.",
      url: "",
    },
    {
      id: "2",
      name: "Indian Paper Currency Detection using OpenCV3, Python and Digital Image Processing",
      createdAt: "",
      description: "Computer vision research on currency detection.",
      url: "",
    },
  ],
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "",
    description: "Open to discussing data, AI, automation, or new opportunities. My inbox is always open.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Location",
    subtitle: "Calgary, Alberta, Canada",
    locality: "Calgary",
    country: "CA",
    region: "Alberta",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+1-343-580-0147",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
