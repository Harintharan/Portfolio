import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Azbow Pvt Ltd",
      period: "2023 - Present",
      description: "Developed and maintained microservices architecture for enterprise applications",
      achievements: [
        "Built RESTful APIs using Spring Boot and Express.js",
        "Implemented CI/CD pipelines reducing deployment time by 40%",
        "Collaborated with cross-functional teams in Agile environment"
      ],
      technologies: ["Spring Boot", "Docker", "AWS", "PostgreSQL", "Jenkins"]
    },
    {
      title: "Full-Stack Developer",
      company: "Magazine App Platform",
      period: "2023",
      description: "Created a digital magazine publishing platform with content management system",
      achievements: [
        "Designed responsive UI using React and Tailwind CSS",
        "Implemented user authentication and authorization",
        "Optimized database queries improving performance by 50%"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js"]
    },
    {
      title: "Backend Developer",
      company: "LeanSL Live Platform",
      period: "2022 - 2023",
      description: "Developed real-time streaming infrastructure for live events",
      achievements: [
        "Built scalable WebSocket server handling 1000+ concurrent connections",
        "Integrated payment gateway for subscription management",
        "Implemented Redis caching strategy"
      ],
      technologies: ["Node.js", "Socket.io", "Redis", "Azure", "Stripe"]
    },
    {
      title: "Blockchain Developer",
      company: "MAP Project",
      period: "2022",
      description: "Developed decentralized applications and smart contracts",
      achievements: [
        "Created and deployed ERC-20 token smart contracts",
        "Built DApp interfaces using Web3.js and React",
        "Conducted security audits on smart contract code"
      ],
      technologies: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "React"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey building impactful solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-1/2 z-10">
                  <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
                </div>

                {/* Content card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 pl-16' : 'md:pl-12 pl-16'}`}>
                  <Card className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-smooth">
                        <Briefcase className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-smooth">
                          {exp.title}
                        </h3>
                        <p className="text-accent font-medium mb-1">{exp.company}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        <ul className="space-y-2 mb-4">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="text-accent mt-1">▸</span>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
