import { Card } from "@/components/ui/card";
import { Code2, Cloud, Blocks, Shield } from "lucide-react";

const About = () => {
  const specializations = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building robust applications with Express.js, React, and Spring Boot"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Designing scalable solutions on AWS and Azure platforms"
    },
    {
      icon: Blocks,
      title: "Blockchain & Web3",
      description: "Creating smart contracts and decentralized applications with Solidity"
    },
    {
      icon: Shield,
      title: "DevOps & Security",
      description: "Implementing CI/CD pipelines with Docker, Jenkins, and secure practices"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about building innovative solutions that bridge technology and real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 gradient-card shadow-card hover:shadow-elegant transition-smooth animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a Computer Engineering student at the University of Ruhuna, I've developed a strong foundation in 
              both theoretical concepts and practical application of modern technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My experience spans from building microservices architectures to developing blockchain solutions, 
              always with a focus on clean code, scalability, and user-centric design.
            </p>
          </Card>

          <Card className="p-8 gradient-card shadow-card hover:shadow-elegant transition-smooth animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-4">My Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe in continuous learning and staying current with emerging technologies. 
              Every project is an opportunity to push boundaries and create something meaningful.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My goal is to leverage technology to solve complex problems while maintaining 
              code quality, security, and performance standards.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <Card 
                key={index} 
                className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {spec.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {spec.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
