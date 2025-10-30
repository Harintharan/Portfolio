import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Microservices E-Commerce Platform",
      description: "Scalable e-commerce solution with independent microservices for user management, product catalog, and order processing",
      technologies: ["Spring Boot", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
      category: "Full-Stack"
    },
    {
      title: "Blockchain Voting System",
      description: "Decentralized voting application ensuring transparency and immutability using smart contracts",
      technologies: ["Solidity", "Ethereum", "React", "Web3.js", "IPFS"],
      category: "Blockchain"
    },
    {
      title: "IoT Environmental Monitor",
      description: "Real-time monitoring system for environmental data with cloud analytics and alerting",
      technologies: ["React", "Express.js", "MongoDB", "AWS IoT", "MQTT"],
      category: "IoT"
    },
    {
      title: "Secure Chat Application",
      description: "End-to-end encrypted messaging platform with multi-device support and secure key exchange",
      technologies: ["React Native", "Node.js", "Socket.io", "PostgreSQL", "WebRTC"],
      category: "Security"
    },
    {
      title: "AI-Powered Code Analyzer",
      description: "Static code analysis tool using machine learning to detect bugs and suggest improvements",
      technologies: ["Python", "TensorFlow", "Flask", "React", "Docker"],
      category: "AI/ML"
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated deployment pipeline for multi-cloud environments with infrastructure as code",
      technologies: ["Terraform", "Jenkins", "AWS", "Azure", "Ansible"],
      category: "DevOps"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group cursor-pointer overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-smooth" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-smooth">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-smooth">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
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
