import { Code } from "lucide-react";

const PROJECTS = [
  {
    title: "Predictive Analytics Platform",
    description: "Built an end-to-end data pipeline to predict sales with 80% accuracy using Python, scikit-learn, and SQL.",
    stack: ["Python", "scikit-learn", "SQL", "Pandas"],
    github: "#",
    demo: "#"
  },
  {
    title: "Computer Vision: Image Classifier",
    description: "Developed and deployed a CNN for real-time image classification using PyTorch and Streamlit.",
    stack: ["PyTorch", "Streamlit", "OpenCV"],
    github: "#",
    demo: "#"
  },
  {
    title: "Interactive Data Dashboard",
    description: "Created a dynamic dashboard for business KPIs with React and Recharts; supports drill-down and filtering.",
    stack: ["React", "Recharts", "JavaScript"],
    github: "#",
    demo: "#"
  }
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="font-playfair text-3xl mb-8 text-center text-primary">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="bg-card rounded-xl shadow-md border border-border p-7 flex flex-col gap-3 hover:shadow-lg transition group"
          >
            <div className="flex items-center gap-3 mb-2">
              <Code className="w-6 h-6 text-primary" />
              <span className="font-semibold text-lg">{project.title}</span>
            </div>
            <div className="text-muted-foreground text-base mb-3">{project.description}</div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-accent px-2 py-0.5 rounded text-xs font-medium text-accent-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              <a
                href={project.github}
                className="text-primary underline hover:text-primary/80 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                className="text-primary underline hover:text-primary/80 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
