
import { Briefcase } from "lucide-react";

const WORK = [
  {
    position: "Data Science Intern",
    company: "TechData Solutions",
    dates: "Jun 2023 – Aug 2023",
    description: "Worked on EDA and feature engineering for ecommerce datasets to improve recommendation systems."
  },
  {
    position: "Teaching Assistant, Python Programming",
    company: "University of XYZ",
    dates: "Jan 2023 – May 2023",
    description: "Assisted 50+ students with weekly labs and code reviews, and helped design assignments."
  },
  {
    position: "Research Volunteer",
    company: "HealthAI Lab",
    dates: "2022",
    description: "Conducted literature review and data cleaning for public health research on COVID data."
  }
];

const WorkExperienceSection = () => (
  <section id="work" className="py-20 bg-muted/40">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-playfair text-3xl mb-8 text-primary text-center">Work Experience</h2>
      <ol className="relative border-l-2 border-primary/50 pl-7 space-y-8">
        {WORK.map((w) => (
          <li key={w.position + w.company} className="mb-0">
            <div className="absolute -left-6 top-2 bg-primary rounded-full w-4 h-4 flex items-center justify-center">
              <Briefcase className="w-3 h-3 text-primary-foreground" />
            </div>
            <div className="flex flex-col gap-1 bg-card rounded-md border border-border px-5 py-4 shadow-md hover:shadow-lg transition">
              <span className="font-semibold text-lg">
                {w.position} <span className="text-muted-foreground font-normal">@ {w.company}</span>
              </span>
              <span className="text-xs text-muted-foreground ml-0">{w.dates}</span>
              <span className="text-base">{w.description}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default WorkExperienceSection;
