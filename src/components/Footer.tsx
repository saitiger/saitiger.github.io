
import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="w-full mt-16 py-8 border-t bg-background/80">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 px-4">
      <span className="text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </span>
      <div className="flex items-center gap-6">
        <a
          href="mailto:your.email@example.com"
          className="text-primary hover:underline text-sm"
        >
          your.email@example.com
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
