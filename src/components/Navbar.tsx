
import { Github, Linkedin, LampCeiling, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Work Experience", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const getSystemTheme = (): "dark" | "light" => {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "dark";
};

const Navbar = () => {
  // Default dark mode
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : getSystemTheme();
  });

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    // Persist theme
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const location = useLocation();

  return (
    <nav className="w-full sticky top-0 z-30 bg-background/80 border-b flex items-center justify-between px-12 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <Link to="/" className="text-2xl font-playfair tracking-tight hover:text-primary transition-colors">
        Sai Tiger Raina
      </Link>
      <div className="flex gap-7 items-center">
        {NAV_ITEMS.map(item =>
          item.label === "Contact" ? (
            <Link
              to="/contact"
              key={item.label}
              className={`transition-colors text-md font-medium text-muted-foreground hover:text-primary px-1 py-0.5 ${
                location.pathname === "/contact" ? "text-primary" : ""
              }`}
            >
              {item.label}
            </Link>
          ) : (
            <Link
              to={`/${item.href}`}
              key={item.label}
              className="transition-colors text-md font-medium text-muted-foreground hover:text-primary px-1 py-0.5"
            >
              {item.label}
            </Link>
          )
        )}
        <a href="https://github.com/saitiger" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="w-5 h-5 hover:scale-110 transition-transform text-muted-foreground hover:text-primary" />
        </a>
        <a href="https://www.linkedin.com/in/saitigerraina/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5 hover:scale-110 transition-transform text-muted-foreground hover:text-primary" />
        </a>
        <a href="https://sairaina.substack.com/" target="_blank" rel="noopener noreferrer" aria-label="Substack">
          <FileText className="w-5 h-5 hover:scale-110 transition-transform text-muted-foreground hover:text-primary" />
        </a>
        <button
          type="button"
          aria-label="Toggle theme"
          className="ml-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full"
          onClick={toggleTheme}
        >
          <LampCeiling
            className={`w-6 h-6 hover:scale-110 transition-all duration-500 ${
              theme === "light"
                ? "translate-y-2 text-yellow-400 fill-yellow-300/50"
                : "text-muted-foreground hover:text-primary"
            }`}
          />
          <span className="sr-only">Toggle theme</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
