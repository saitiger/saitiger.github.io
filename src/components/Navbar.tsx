import { Github, Linkedin } from "lucide-react";
const NAV_ITEMS = [{
  label: "Projects",
  href: "#projects"
}, {
  label: "Hackathons",
  href: "#hackathons"
}, {
  label: "Work Experience",
  href: "#work"
}, {
  label: "Contact",
  href: "#contact"
}];
const Navbar = () => <nav className="w-full sticky top-0 z-30 bg-background/80 border-b flex items-center justify-between px-12 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
    <div className="text-2xl font-playfair tracking-tight">Sai Tiger Raina</div>
    <div className="flex gap-7 items-center">
      {NAV_ITEMS.map(item => <a key={item.label} href={item.href} className="transition-colors text-md font-medium text-muted-foreground hover:text-primary px-1 py-0.5">
          {item.label}
        </a>)}
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <Github className="w-5 h-5 hover:scale-110 transition-transform text-muted-foreground hover:text-primary" />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Linkedin className="w-5 h-5 hover:scale-110 transition-transform text-muted-foreground hover:text-primary" />
      </a>
    </div>
  </nav>;
export default Navbar;