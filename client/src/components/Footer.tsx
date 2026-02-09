import { Github, Mail, Linkedin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/5 bg-background/50 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted-foreground text-sm">
            © {year} Ahmed Samer. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/ahmedsamer-dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:ahmedsameryt@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ahmed-samir-656940309/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
