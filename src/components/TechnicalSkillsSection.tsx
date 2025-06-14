
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Database, Terminal, BookOpen, BarChart2, LayoutGrid, Globe2 } from "lucide-react";

// Use icons that are visually representative or generic for the tools (since Lucide doesn't have python/mysql)
const SKILLS = [
  { name: "Python", Icon: Terminal },           // Terminal as a stand-in for Python
  { name: "MySQL", Icon: Database },
  { name: "Pandas", Icon: LayoutGrid },
  { name: "scikit-learn", Icon: BarChart2 },
  { name: "React", Icon: Globe2 },
  { name: "Jupyter", Icon: BookOpen },
];

const TechnicalSkillsSection = () => (
  <section id="skills" className="py-16 bg-muted/40">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-playfair text-3xl mb-8 text-primary text-center">Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {SKILLS.map(({ name, Icon }) => (
          <HoverCard key={name}>
            <HoverCardTrigger asChild>
              <div className="flex flex-col items-center cursor-pointer group">
                <Icon className="w-12 h-12 text-primary group-hover:text-primary/80 transition-colors" aria-label={name} />
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="text-center">{name}</HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  </section>
);

export default TechnicalSkillsSection;
