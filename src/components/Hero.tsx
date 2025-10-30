import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-dark opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-in-up">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Computer Engineering Student
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm <span className="text-gradient">Hari Nagalingam</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Specializing in <span className="text-primary font-semibold">Full-Stack Development</span>,{" "}
            <span className="text-accent font-semibold">Cloud Architecture</span>, and{" "}
            <span className="text-primary font-semibold">Blockchain Technology</span>
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable web applications with Express.js, React, Spring Boot, and deploying on AWS & Azure
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" className="group shadow-elegant hover:shadow-xl transition-all">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
            <Button size="lg" variant="outline" className="group">
              <FileDown className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-smooth">
              <Github className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-smooth">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-smooth">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
