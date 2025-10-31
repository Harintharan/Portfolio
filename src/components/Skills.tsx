// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// const Skills = () => {
//   const skillCategories = [
//     {
//       category: "Programming Languages",
//       skills: [
//         "JavaScript/TypeScript",
//         "Java",
//         "Python",
//         "Solidity",
//         "C/C++"
//       ]
//     },
//     {
//       category: "Frameworks & Libraries",
//       skills: [
//         "React",
//         "Express.js",
//         "Spring Boot",
//         "Node.js",
//         "Next.js"
//       ]
//     },
//     {
//       category: "Cloud & DevOps",
//       skills: [
//         "AWS",
//         "Azure",
//         "Docker",
//         "Jenkins",
//         "Kubernetes"
//       ]
//     },
//     {
//       category: "Databases",
//       skills: [
//         "PostgreSQL",
//         "MongoDB",
//         "Redis",
//         "MySQL"
//       ]
//     }
//   ];

//   const tools = [
//     "Git", "GitHub", "GitLab", "VS Code", "IntelliJ IDEA",
//     "Postman", "Figma", "Jira", "Confluence", "Slack"
//   ];

//   const certifications = [
//     { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
//     { name: "Azure Fundamentals", issuer: "Microsoft", year: "2023" },
//     { name: "Docker Certified Associate", issuer: "Docker Inc.", year: "2022" }
//   ];

//   return (
//     <section id="skills" className="py-20 px-4">
//       <div className="container mx-auto max-w-6xl">
//         <div className="text-center mb-16 animate-slide-in-up">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Skills & <span className="text-gradient">Expertise</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Technical proficiency across modern development stack
//           </p>
//         </div>

//         {/* Skill categories with bullet points */}
//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           {skillCategories.map((category, index) => (
//             <Card 
//               key={index} 
//               className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth"
//             >
//               <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
//               <ul className="space-y-2">
//                 {category.skills.map((skill, i) => (
//                   <li key={i} className="flex items-center gap-2">
//                     <span className="text-primary">•</span>
//                     <span>{skill}</span>
//                   </li>
//                 ))}
//               </ul>
//             </Card>
//           ))}
//         </div>

//         {/* Tools & Technologies */}
//         <Card className="p-8 gradient-card shadow-card mb-12">
//           <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
//           <div className="flex flex-wrap gap-3">
//             {tools.map((tool, index) => (
//               <Badge 
//                 key={index} 
//                 variant="outline" 
//                 className="px-4 py-2 text-sm bg-muted/50 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-smooth cursor-pointer"
//               >
//                 {tool}
//               </Badge>
//             ))}
//           </div>
//         </Card>

//         {/* Certifications */}
//         <div className="mb-8">
//           <h3 className="text-2xl font-bold mb-6 text-center">Certifications & Achievements</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             {certifications.map((cert, index) => (
//               <Card 
//                 key={index} 
//                 className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group cursor-pointer text-center"
//               >
//                 <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
//                   <span className="text-2xl font-bold text-primary">{cert.year}</span>
//                 </div>
//                 <h4 className="font-bold mb-2 group-hover:text-primary transition-smooth">
//                   {cert.name}
//                 </h4>
//                 <p className="text-sm text-muted-foreground">{cert.issuer}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        "Java",
        "JavaScript / TypeScript",
        "Python",
        "Solidity",
        "C / C++",
        "Dart",
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        "Spring Boot",
        "Express.js",
        "React.js",
        "Next.js",
        "Flutter",
        "LangChain",
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS Lightsail",
        "AWS S3",
        "Azure Cloud",
        "Docker",
        "GitLab CI/CD",
        "Jenkins",
        "Kubernetes",
      ],
    },
    {
      category: "Databases & Storage",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Redis",
        "Firebase",
        "HDFS",
      ],
    },
    {
      category: "Blockchain & AI",
      skills: [
        "Solidity Smart Contracts",
        "Web3.js",
        "MetaMask",
        "LLaMA 2",
        "TensorFlow / PyTorch",
        "OpenCV",
      ],
    },
  ];

  const tools = [
    "Git",
    "GitHub",
    "GitLab",
    "VS Code",
    "IntelliJ IDEA",
    "Postman",
    "Figma",
    "Jira",
    "Firebase FCM",
    "Confluence",
    "Remix IDE",
  ];

 const certifications = [
  { 
    name: "AWS for Beginners", 
    issuer: "Great Learning", 
    year: "2024",
    link: "https://www.mygreatlearning.com/certificate/PSKSQCRB?referrer_code=GLIQKU-649HVK"
  },
  { 
    name: "Cloud Computing Service Models", 
    issuer: "Great Learning", 
    year: "2024",
    link: "https://www.mygreatlearning.com/certificate/DVNPQHKS?referrer_code=GLIQKU-649HVK"
  },
  { 
    name: "SpringBoot", 
    issuer: "Alison", 
    year: "2023",
    link: "https://alison.com/certification/check/9261a942be"
  },
  { 
    name: "Blockchain", 
    issuer: "IEEE / LinkedIn Post", 
    year: "2023",
    link: "https://www.linkedin.com/posts/harintharan-nagalingam-233b5720b_blockchain-cardano-ieee-activity-7341894542083661826-Npmo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADViuYcBsms_xqSDhelkO-PAnar_oSEfV6I"
  },
];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical proficiency across modern full-stack, cloud, and blockchain ecosystems
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Tools */}
        <Card className="p-8 gradient-card shadow-card mb-12">
          <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm bg-muted/50 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-smooth cursor-pointer"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Certifications */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Certifications & Achievements
          </h3>
           <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group cursor-pointer text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <span className="text-2xl font-bold text-primary">{cert.year}</span>
                </div>
                <h4 className="font-bold mb-2 group-hover:text-primary transition-smooth">
                  {cert.name}
                </h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </Card>
            </a>
          ))}
        </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
