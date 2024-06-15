import project2 from "../assets/projects/project-2.jpg";
import Netflix from "../assets/projects/netflix.png"
import RlProject from "../assets/projects/rlproject.jpg"
import ExpenseLens from "../assets/projects/expenselens.jpg"


export const HERO_CONTENT = `I am a skilled software engineer with a Master's degree in Computer Science from the University of Colorado Boulder. I have extensive technical expertise in Python, C++, Golang, JavaScript, and various cloud services, alongside certifications in Kubernetes and AWS. My professional experience includes a DevOps Engineer internship at ASANTe, where I enhanced security and efficiency in AWS environments, and a Software Developer role at Solfir, where I improved web application performance and user engagement. `;

export const ABOUT_TEXT = `I am dedicated and passionate software engineer driven by the excitement of solving new challenges and working with cutting-edge technologies. My journey through the fields of computer science and engineering has been marked by continuous learning and growth. I thrive in collaborative environments and enjoy developing innovative solutions that enhance system performance and user experience. My long-term career goal is to continue growing as a software engineer, consistently building something new and impactful in the ever-evolving tech landscape.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Apr 2024",
    role: "Software Developer Intern",
    company: "Rule4",
    description: `Developed an AI-driven cybersecurity application leveraging Microsoft Teams transcripts to train a Llama2 model, enhancing threat detection and response capabilities.
    Implemented a responsive Slack bot interface using WebSocket protocol for secure, low-latency interactions, enabling users to receive action items and provide feedback within Slack.
    Deployed the application on Kubernetes and Docker, ensuring high availability, scalability, and optimized infrastructure for reliable performance.
    Integrated GenAI to refine development practices and enhance team collaboration.`,
    technologies: ["Azure", "Openstack", "Slack Bot", "Llama2", "kubernetes", "Docker"],
  },
  {
    year: "Aug 2023 - Jan 2024",
    role: "Software Developer Intern",
    company: "ASANTe",
    description: `Enhanced security and operational efficiency in AWS by developing and managing Identity and Access Management (IAM) roles, ensuring robust data protection and system manageability.
    Achieved a 10% reduction in data breaches and improved system manageability by 25% through robust IAM role development.
    Improved AWS service responsiveness, reducing server load by 20% using scalable Golang microservices.
    Utilized AWS CodeWhisperer to streamline infrastructure automation and code deployment.`,
    technologies: ["AWS EC2","AWS DynamoDB", "Golag", "Jira"],
  },
  {
    year: "May 2023 - Aug 2023",
    role: "Machine Learning Research Assistant",
    company: "University of Colorado Boulder",
    description: `Aimed to improve comparative genomics studies accuracy by transforming phylogenies into dynamic Directed Acyclic Graphs (DAGs) to overcome phylogenetic autocorrelation
    Employed machine learning to convert phylogenies into DAGs, leveraging statistical methods to address phylogenetic autocorrelation enhancing evolutionary relationship modeling
    Achieved a 5% improvement in predictive modeling accuracy for comparative genomics`,
    technologies: ["Python", "DAGs", "Statistics", "Graph Neural Network"],
  },
  {
    year: "Sept 2021 - May 2022",
    role: "Software Developer Intern",
    company: "Solfir",
    description: `Enhanced the user experience by developing and maintaining responsive web applications using React, leading to a 15% increase in user engagement.
    Improved data retrieval efficiency by integrating Axios for API calls, reducing average load times by 20%.
    Strengthened security and user trust by implementing JWT authentication, ensuring secure data transmission and session management.
    Boosted application performance and scalability by designing and implementing robust RESTful API endpoints.
    Contributed to the visual consistency and usability of the product by creating custom components for the UI library, streamlining the development process for future features.
    Utilized AWS EC2 and Load Balancer to deploy reliable and scalable services.
    `,
    technologies: ["HTML", "CSS", "Javascript", "Node.js", "React", "AWS", "API"],
  },
];

export const PATENT = [
  {
    // year: "Dec 05, 2021",
    role: "Image Based Plant Seedling Classification using Ensemble Learning",
    company: "6th ICACIE 2021",
    description: `Investigate various learning classifiers for the image-based multi-class problem in Agricultural plant seed clasification problem`,
    technologies: ["Python","ML", "Neural Network"],
    link: "https://link.springer.com/chapter/10.1007/978-981-19-2225-1_39"
  },
];

export const PROJECTS = [
  {
    title: "Netflix Cloning Application",
    image: Netflix,
    description:
      `Deployed a scalable Netflix clone on AWS EC2 using Docker, optimizing container management for improved application scalability and reliability.
      Automated CI/CD pipeline with Jenkins, integrating SonarQube and Trivy for continuous code quality checks and security vulnerability assessments.
      Implemented real-time monitoring with Prometheus and Grafana, configuring Node Exporter to capture system metrics, enhancing operational visibility and proactive management.`,
    technologies: ["Jenkins"," Docker", "AWS", "Prometheus", "Grafana", "Node.js"],
    githubLink: "https://github.com/OmkarYeole/Task-Management-Software",
  },
  {
    title: "Crime Data Analysis",
    image: project2,
    description:
      `This project focuses on creating a web application to analyze and understand various crimes that occur across the United States. The goal is to empower users to make informed decisions about their safety by providing detailed crime data and trends. Additionally, the app allows users to share their crime-related experiences anonymously, promoting a community-driven approach to spreading awareness and enhancing public safety.`,
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "MongoDB", "Heroku"],
    githubLink: "https://github.com/Rishiii7/Crime-Data-Analysis",
  },
  {
    title: "ExpenseLens",
    image: ExpenseLens,
    description:
      `Spearheaded the GCP deployment of an expense tracking app using Kubernetes for orchestration, Terraform for infrastructure automation, and Helm for application management
      Achieved a 20% cost reduction and enhanced CI/CD efficiency
      Conducted insightful analysis on the amassed data, extracting valuable insights to inform strategic decision-making solution
      `,
    technologies: ["Python", "GCP", "Kubernetes", "Redis", "REST"," Flask"],
    githubLink: "https://github.com/OmkarYeole/Omkar-Yeole-Portfolio",
  },
  {
    title: "Multi-agent Environment for Lunar Lander",
    image: RlProject,
    description:
      `Developed a Multi-agent Lunar Lander simulation to study agent collaboration and competition, using OpenAI Gym, PettingZoo, PyTorch for a DQN RL algorithm, and pygame with Box2D for realistic simulation
      Published the environment on the PettingZoo forum, highlighting how DQN-trained agents learn not just to complete landing tasks but also to strategically collaborate or compete, enhancing our understanding of multi-agent dynamics in RL
      
      `,
    technologies: ["RL", "PyTorch", "pygame", "Box2D", "OpenAI Gym" ],
    githubLink: "https://github.com/Rishiii7/RL-project",
  },
];

export const CONTACT = {
  address: "Boulder, CO",
  phoneNo: "+1 720-673-6775",
  email: "rishikesh.solapure@colorado.edu",
};
