import { Linkedin, Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border font-sans">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold text-gradient">YG</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">AI Developer</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="mailto:yashankgaddi.ai@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yashankgaddi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/yashankgaddiai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Yashank Gaddi. Crafted with{" "}
            <Heart size={14} className="text-primary" /> in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
