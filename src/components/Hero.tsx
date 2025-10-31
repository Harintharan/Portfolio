import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-dark opacity-0 dark:opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:to-accent/10" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Stack vertically, Desktop: Two columns */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left space-y-8 animate-slide-in-up text-gray-900 dark:text-white order-2 lg:order-1">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  Computer Engineering Student
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                Hi, I'm <span className="text-gradient">Harintharan N.</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-muted-foreground">
                Specializing in <span className="text-primary font-semibold">Full-Stack Development</span>,{" "}
                <span className="text-accent font-semibold">Cloud Deployment(Devops concepts)</span>, and{" "}
                <span className="text-primary font-semibold">Blockchain Technology</span>
              </p>
              
              <p className="text-base md:text-lg text-gray-700 dark:text-muted-foreground">
                Building scalable web applications with Express.js, React, Spring Boot, and deploying on AWS & Azure
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <a href="#contact" className="inline-block">
                  <Button size="lg" className="group shadow-elegant hover:shadow-xl transition-all">
                    <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Contact Me
                  </Button>
                </a>
                <a href="/cvs/current.pdf" download="Harintharan_Nagalingam_CV.pdf" className="inline-block">
                  <Button size="lg" variant="outline" className="group">
                    <FileDown className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Download CV
                  </Button>
                </a>
                
                {/* Mobile scroll indicator - inline with buttons */}
                <div className="block md:hidden">
                  <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center animate-bounce">
                    <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="https://github.com/Harintharan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-smooth">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>

                <a
                  href="https://www.linkedin.com/in/harintharan-nagalingam-233b5720b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-smooth">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>

                <a href="mailto:nharintharan@gmail.com" aria-label="Email">
                  <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-smooth">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 pt-16 sm:pt-10 md:pt-8 lg:pt-0">
              <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300 animate-slide-in-up">
                <img
                  // src="/images/hari.jpeg"
                  // alt="Harintharan Nagalingam"

                  src={`${import.meta.env.BASE_URL}images/hari.jpeg`} alt="Harintharan Nagalingam"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - Desktop only */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
