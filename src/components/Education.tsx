import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "BSc (Hons) in Computer Engineering",
      institution: "University of Ruhuna",
      period: "2021 - Present",
      highlights: [
        "Specializing in Cloud-Native Systems, Microservices Architecture, and Distributed Computing",
        "Hands-on experience in AI/GenAI, Blockchain, and IoT-driven system design",
        "Active involvement in research and project development using Spring Boot, React, and Express.js",
      ],
    },
    {
      degree: "G.C.E. Advanced Level (Physical Science Stream)",
      institution: "Shivananda Vidyalaya National School, Batticaloa",
      period: "2017 - 2019",
      highlights: [
        "Strong foundation in Mathematics, Physics, and ICT",
        "Engaged in technology-focused leadership roles and innovation clubs",
        "Developed early interest in programming and engineering problem-solving",
      ],
    },
  ];




  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                </div>

                {/* Content card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 pl-16' : 'md:pl-12 pl-16'}`}>
                  <Card className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                            {edu.degree}
                          </h3>
                        </div>
                        <p className="text-primary font-medium mb-1">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mb-4">{edu.period}</p>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Award className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
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

export default Education;
