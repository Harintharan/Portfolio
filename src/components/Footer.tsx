import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, Laptop } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 gradient-dark text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Harintharan Nagalingam</h3>
            <p className="text-sm opacity-80">
              Computer Engineering Undergraduate University Of Ruhuna
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Harintharan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Button size="icon" variant="ghost" className="hover:bg-white/10 hover:text-white">
                <Github className="h-5 w-5" />
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/harintharan-nagalingam-233b5720b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Button size="icon" variant="ghost" className="hover:bg-white/10 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>

            <a href="mailto:nharintharan@gmail.com" aria-label="Email">
              <Button size="icon" variant="ghost" className="hover:bg-white/10 hover:text-white">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm opacity-80">
          <p className="flex items-center justify-center gap-2">
            Built with <Laptop className="h-4 w-4 text-red-400 fill-current" /> using React & TypeScript
          </p>
          <p className="mt-2">© 2025 Harintharan Nagalingam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
