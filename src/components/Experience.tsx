// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Briefcase, Calendar } from "lucide-react";

// const Experience = () => {
//   const experiences = [
//     {
//       title: "Software Engineering Intern",
//       company: "Azbow Pvt Ltd",
//       period: "2023 - Present",
//       description: "Developed and maintained microservices architecture for enterprise applications",
//       achievements: [
//         "Built RESTful APIs using Spring Boot and Express.js",
//         "Implemented CI/CD pipelines reducing deployment time by 40%",
//         "Collaborated with cross-functional teams in Agile environment"
//       ],
//       technologies: ["Spring Boot", "Docker", "AWS", "PostgreSQL", "Jenkins"]
//     },
//     {
//       title: "Full-Stack Developer",
//       company: "Magazine App Platform",
//       period: "2023",
//       description: "Created a digital magazine publishing platform with content management system",
//       achievements: [
//         "Designed responsive UI using React and Tailwind CSS",
//         "Implemented user authentication and authorization",
//         "Optimized database queries improving performance by 50%"
//       ],
//       technologies: ["React", "Node.js", "MongoDB", "Express.js"]
//     },
//     {
//       title: "Backend Developer",
//       company: "LeanSL Live Platform",
//       period: "2022 - 2023",
//       description: "Developed real-time streaming infrastructure for live events",
//       achievements: [
//         "Built scalable WebSocket server handling 1000+ concurrent connections",
//         "Integrated payment gateway for subscription management",
//         "Implemented Redis caching strategy"
//       ],
//       technologies: ["Node.js", "Socket.io", "Redis", "Azure", "Stripe"]
//     },
//     {
//       title: "Blockchain Developer",
//       company: "MAP Project",
//       period: "2022",
//       description: "Developed decentralized applications and smart contracts",
//       achievements: [
//         "Created and deployed ERC-20 token smart contracts",
//         "Built DApp interfaces using Web3.js and React",
//         "Conducted security audits on smart contract code"
//       ],
//       technologies: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "React"]
//     }
//   ];

//   return (
//     <section id="experience" className="py-20 px-4 bg-muted/30">
//       <div className="container mx-auto max-w-6xl">
//         <div className="text-center mb-16 animate-slide-in-up">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Work <span className="text-gradient">Experience</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Professional journey building impactful solutions
//           </p>
//         </div>

//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/20" />

//           <div className="space-y-12">
//             {experiences.map((exp, index) => (
//               <div 
//                 key={index} 
//                 className={`relative flex items-center ${
//                   index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//                 }`}
//               >
//                 {/* Timeline dot */}
//                 <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-1/2 z-10">
//                   <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
//                 </div>

//                 {/* Content card */}
//                 <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 pl-16' : 'md:pl-12 pl-16'}`}>
//                   <Card className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
//                     <div className="flex items-start gap-4">
//                       <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-smooth">
//                         <Briefcase className="h-6 w-6 text-accent" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-smooth">
//                           {exp.title}
//                         </h3>
//                         <p className="text-accent font-medium mb-1">{exp.company}</p>
//                         <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
//                           <Calendar className="h-4 w-4" />
//                           <span>{exp.period}</span>
//                         </div>
//                         <p className="text-muted-foreground mb-4 leading-relaxed">
//                           {exp.description}
//                         </p>
//                         <ul className="space-y-2 mb-4">
//                           {exp.achievements.map((achievement, i) => (
//                             <li key={i} className="flex items-start gap-2 text-sm">
//                               <span className="text-accent mt-1">▸</span>
//                               <span className="text-muted-foreground">{achievement}</span>
//                             </li>
//                           ))}
//                         </ul>
//                         <div className="flex flex-wrap gap-2">
//                           {exp.technologies.map((tech, i) => (
//                             <Badge key={i} variant="secondary" className="text-xs">
//                               {tech}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </Card>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experience = {
    title: "Software Engineering Intern",
    company: "Azbow Pvt Ltd",
    period: "July 2024 – December 2024",
    description:
      "Completed six-month industrial training focused on full-stack, cloud-native, and microservices-based application development. Worked on multiple real-world projects spanning magazine publishing, gym management, and social networking systems.",
    achievements: [
      "<strong>Bhawana Magazine App</strong> – Designed and developed key backend modules, implemented UI dashboards, and handled AWS deployment for a digital magazine publishing platform.",
      "<strong>LeanSL Live Platform</strong> – Enhanced and maintained the gym and fitness management platform, fixing API-level issues, building new backend features, and improving user-facing components for live sessions.",
      "<strong>MAP Project</strong> – Led the development of a social-media-style event management application, integrating backend APIs, secure authentication, and real-time features with an interactive front-end.",
      "Developed RESTful APIs and backend microservices using <strong>Node.js</strong> and <strong>Express.js</strong> with <strong>PostgreSQL</strong> and <strong>MongoDB</strong>.",
      "Implemented <strong>GitLab CI/CD</strong> pipelines and containerized deployments on <strong>AWS Lightsail</strong> using <strong>Docker</strong>.",
      "Integrated third-party services like <strong>Meta WhatsApp Messaging</strong>, <strong>Firebase FCM</strong>, and <strong>Stripe</strong> for secure and scalable communication.",
      "Collaborated in Agile sprints using <strong>Jira</strong> and <strong>Figma</strong> for task tracking and UI design coordination.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "AWS Lightsail",
      "AWS S3",
      "Docker",
      "GitLab CI/CD",
      "Firebase FCM",
      "Jira",
      "Figma",
      "Postman",
      "JWT",
    ],
  };

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industrial training experience contributing to live, production-grade systems
          </p>
        </div>

        <Card className="p-8 gradient-card shadow-card hover:shadow-elegant transition-smooth">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-accent/10">
              <Briefcase className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">{experience.title}</h3>
              <p className="text-accent font-medium">{experience.company}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <Calendar className="h-4 w-4" />
                <span>{experience.period}</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {experience.description}
          </p>

          <ul className="space-y-2 mb-6">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-accent mt-1">▸</span>
                <span
                  className="text-muted-foreground"
                  dangerouslySetInnerHTML={{
                    __html: achievement.replace(
                      /<strong>(.*?)<\/strong>/g,
                      "<strong class='text-foreground font-semibold'>$1</strong>"
                    ),
                  }}
                />
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
