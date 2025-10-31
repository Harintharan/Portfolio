// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { ExternalLink, Github } from "lucide-react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Microservices E-Commerce Platform",
//       description: "Scalable e-commerce solution with independent microservices for user management, product catalog, and order processing",
//       technologies: ["Spring Boot", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
//       category: "Full-Stack"
//     },
//     {
//       title: "Blockchain Voting System",
//       description: "Decentralized voting application ensuring transparency and immutability using smart contracts",
//       technologies: ["Solidity", "Ethereum", "React", "Web3.js", "IPFS"],
//       category: "Blockchain"
//     },
//     {
//       title: "IoT Environmental Monitor",
//       description: "Real-time monitoring system for environmental data with cloud analytics and alerting",
//       technologies: ["React", "Express.js", "MongoDB", "AWS IoT", "MQTT"],
//       category: "IoT"
//     },
//     {
//       title: "Secure Chat Application",
//       description: "End-to-end encrypted messaging platform with multi-device support and secure key exchange",
//       technologies: ["React Native", "Node.js", "Socket.io", "PostgreSQL", "WebRTC"],
//       category: "Security"
//     },
//     {
//       title: "AI-Powered Code Analyzer",
//       description: "Static code analysis tool using machine learning to detect bugs and suggest improvements",
//       technologies: ["Python", "TensorFlow", "Flask", "React", "Docker"],
//       category: "AI/ML"
//     },
//     {
//       title: "Cloud Infrastructure Automation",
//       description: "Automated deployment pipeline for multi-cloud environments with infrastructure as code",
//       technologies: ["Terraform", "Jenkins", "AWS", "Azure", "Ansible"],
//       category: "DevOps"
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 px-4">
//       <div className="container mx-auto max-w-6xl">
//         <div className="text-center mb-16 animate-slide-in-up">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             A showcase of innovative solutions across various domains
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <Card
//               key={index}
//               className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group cursor-pointer overflow-hidden relative"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {/* Gradient overlay on hover */}
//               <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-smooth" />

//               <div className="relative z-10">
//                 <div className="flex items-start justify-between mb-3">
//                   <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
//                     {project.category}
//                   </Badge>
//                   <div className="flex gap-2">
//                     <Button size="icon" variant="ghost" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-smooth">
//                       <Github className="h-4 w-4" />
//                     </Button>
//                     <Button size="icon" variant="ghost" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-smooth">
//                       <ExternalLink className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
//                   {project.title}
//                 </h3>

//                 <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2">
//                   {project.technologies.map((tech, i) => (
//                     <Badge key={i} variant="secondary" className="text-xs">
//                       {tech}
//                     </Badge>
//                   ))}
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Book Fair Stall Reservation System (Microservices)",
      description:
        "Cloud-native microservices platform for managing book fair stalls, genres, and payments. Includes secure Stripe-based transactions and real-time booking visualization.",
      technologies: [
        "Spring Boot",
        "Docker",
        "Spring Cloud Gateway",
        "Eureka",
        "RabbitMQ",
        "Stripe",
        "Azure",
        "MySQL",
      ],
      category: "Cloud / Microservices",
      github: "https://github.com/H-Neethika/stalls-reservation-system",
    },
    {
      title: "Parlour Booking System (Microservices)",
      description:
        "Scalable salon management system enabling service creation, appointment booking, and payments with asynchronous communication using RabbitMQ.",
      technologies: [
        "Spring Boot",
        "Docker",
        "Keycloak",
        "OpenFeign",
        "MySQL",
        "Azure",
      ],
      category: "Cloud / Microservices",
      github: "https://github.com/Harintharan/Cloud_Microservices_project",
    },
    {
      title: "Blockchain-Based Defect & Fraud Identification System",
      description:
        "IoT-integrated blockchain solution for cold supply chain tracking using Raspberry Pi sensor data and smart contracts on Sepolia testnet.",
      technologies: [
        "Express.js",
        "React.js",
        "Solidity",
        "Raspberry Pi 4",
        "Infura",
        "PostgreSQL",
      ],
      category: "Blockchain / IoT / Web3",
      github: "https://github.com/Harintharan/FYP_Backend",
    },
    {
      title: "Solidity Smart Contracts – Blockchain Projects",
      description:
        "Developed and deployed smart contracts for Crowdfunding, Event Organization, and Lottery systems using Remix IDE and MetaMask on Sepolia Testnet.",
      technologies: [
        "Solidity",
        "Remix IDE",
        "MetaMask",
        "Sepolia Testnet",
        "Google Cloud Web3 Faucet",
      ],
      category: "Blockchain / Web3",
      github: "https://github.com/Harintharan/smart-contracts",
    },
    {
      title: "Secure Chat Application",
      description:
        "End-to-end encrypted chat system with secure authentication, RSA key exchange, HMAC verification, and persistent audit logging for transparency.",
      technologies: [
        "Spring Boot",
        "PostgreSQL",
        "Java Cryptography",
        "JWT",
        "WebSocket",
      ],
      category: "Security",
      github: "https://github.com/Harintharan/Multi-Client-Chat-appliacation",
    },
    {
      title: "Medical Advice Chatbot (GenAI)",
      description:
        "AI-powered chatbot delivering context-aware medical advice using LLaMA 2, LangChain, and Pinecone for semantic search and natural dialogue.",
      technologies: ["Python", "Flask", "LangChain", "LLaMA 2", "Pinecone"],
      category: "AI / GenAI",
      github: "https://github.com/Harintharan/Medical_Advice_Chatbot-GenAI-",
    },
    {
      title: "Smile Detection – Computer Vision",
      description:
        "Real-time smile detection application using OpenCV and a CNN model, deployed via Streamlit for live camera inference and emotion recognition.",
      technologies: ["Python", "OpenCV", "CNN", "Streamlit", "PyTorch"],
      category: "AI / Computer Vision",
      github: "https://github.com/Harintharan/Computer_vision_smile_detection",
    },
    {
      title: "AI Image Captioning Project",
      description:
        "Deep learning model for automatic image caption generation using VGG16 + LSTM architecture, achieving high accuracy on the Flickr8k dataset.",
      technologies: ["Python", "TensorFlow", "CNN", "LSTM", "Flickr8k"],
      category: "AI / Deep Learning",
    },
    {
      title: "DBLP Multi-Stage MapReduce Pipeline",
      description:
        "Implemented a multi-stage Hadoop MapReduce pipeline to analyze the DBLP XML dataset, extracting insights about publications, authorship scores, and collaboration trends in computer science.",
      technologies: ["Java", "Hadoop", "MapReduce", "Maven", "HDFS"],
      category: "Cloud / Big Data",
      github: "https://github.com/Harintharan/Assignment_cloud1",
    },
    {
      title: "Network Programming Project",
      description:
        "Developed a Java-based client-server communication system implementing socket programming, multithreading, and data exchange between multiple clients and a central server.",
      technologies: [
        "Java",
        "Socket Programming",
        "Multithreading",
        "Networking",
      ],
      category: "Software Engineering",
      github: "https://github.com/Harintharan/Network_programing",
    },
    {
      title: "Emission Test Station Management System",
      description:
        "Database-driven system for managing vehicle emission tests, including full UML diagrams, ER model, and SQL schema implementation.",
      technologies: ["MySQL", "ERD", "UML", "SQL"],
      category: "Database Systems",
    },
    {
      title: "Bank Management System (Data Structures)",
      description:
        "C++ project implementing a complete bank management system using linked lists for efficient data handling and operations.",
      technologies: ["C++", "Linked List", "OOP", "Data Structures"],
      category: "Software Engineering",

      github: "https://github.com/Harintharan/Bank_management-likedList-",
    },
    {
      title: "QR-Based Attendance Tracking System",
      description:
        "Mobile-based QR attendance system with location verification and backend synchronization for secure, reliable attendance logging.",
      technologies: ["Flutter", "React.js", "Spring Boot", "MySQL", "Jira"],
      category: "Mobile / IoT",
    },
    {
      title: "Event Management Mobile App",
      description:
        "Platform connecting event organizers and service providers with real-time booking and chat functionalities.",
      technologies: ["Flutter", "Firebase", "Dart"],
      category: "Mobile App",

      github: "https://github.com/Harintharan/Happy-event",
    },
    {
      title: "Blood Bank Donor Management System",
      description:
        "CRUD-based web system for managing donors and blood data with search and record maintenance features.",
      technologies: ["React.js", "Spring Boot", "MySQL", "Postman"],
      category: "Full-Stack",
      github: "https://github.com/Harintharan/Blood_bank_back-end",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of real-world engineering projects across Cloud, AI,
            Blockchain, IoT, Security, and Software Systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group cursor-pointer overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-smooth" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {project.category}
                  </Badge>
                  {/* <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-smooth"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-smooth"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div> */}

                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                      >
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-smooth"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
                    )}

                    {/* {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Live Project"
                      >
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-smooth"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    )} */}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
