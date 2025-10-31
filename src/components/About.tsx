import { Card } from "@/components/ui/card";
import { Code2, Cloud, Blocks, Shield } from "lucide-react";

const About = () => {
const specializations = [
  {
    icon: Code2,
    title: "Microservices & Full-Stack Development",
    description:
      "Designing and developing scalable microservices with Spring Boot, Express.js, and React for real-world applications.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Engineering",
    description:
      "Deploying and managing applications on AWS and Azure with Docker, Jenkins, and CI/CD pipelines for high availability.",
  },
  {
    icon: Blocks,
    title: "Blockchain, IoT & Web3",
    description:
      "Building secure decentralized systems with Solidity and integrating IoT devices like Raspberry Pi for blockchain data logging.",
  },
  {
    icon: Shield,
    title: "AI Agents & Machine Intelligence",
    description:
      "Creating intelligent AI agents and GenAI applications using LLaMA 2, LangChain, and Python, with strong focus on contextual reasoning and automation.",
  },
  {
    icon: Shield,
    title: "Cybersecurity & System Protection",
    description:
      "Implementing advanced encryption, authentication, and audit logging to ensure end-to-end security and data integrity in all systems.",
  },
];



  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about building innovative solutions that bridge
            technology and real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 gradient-card shadow-card hover:shadow-elegant transition-smooth animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My journey as a Computer Engineering undergraduate at the
              University of Ruhuna has been shaped by a deep curiosity for
              solving real-world problems through technology. From developing
              microservices architectures and cloud-native applications to
              creating secure blockchain-based systems, each project has
              strengthened my ability to merge theory with hands-on engineering.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I’ve contributed to projects spanning full-stack web development,
              IoT, and AI-powered solutions  from cloud deployed booking
              platforms and GenAI chatbots to end-to-end encrypted communication
              systems. Every experience has refined my focus on scalability,
              performance, and secure design.
            </p>
          </Card>

          <Card className="p-8 gradient-card shadow-card hover:shadow-elegant transition-smooth animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-4">My Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe that engineering is not just about writing code.it’s
              about building solutions that create meaningful impact. My
              approach combines continuous learning, collaboration, and
              innovation to transform ideas into reliable, future-ready systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Guided by principles of clean architecture, security, and
              efficiency, I aim to contribute to technologies that empower
              people from decentralized systems to intelligent applications 
              while continuously evolving as a learner and builder.
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
