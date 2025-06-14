
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Figma, GitBranch } from "lucide-react";

const SKILLS = [
  { name: "Python", logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=64&h=64&fit=crop&crop=center" },
  { name: "Postgres", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=64&h=64&fit=crop&crop=center" },
  { name: "MongoDB", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=64&h=64&fit=crop&crop=center" },
  { name: "Redis", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=64&h=64&fit=crop&crop=center" },
  { name: "dBT", logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=64&h=64&fit=crop&crop=center" },
  { name: "PowerBI", logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=64&h=64&fit=crop&crop=center" },
  { name: "PyTorch", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=64&h=64&fit=crop&crop=center" },
  { name: "Spark", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=64&h=64&fit=crop&crop=center" },
  { name: "AWS", logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=64&h=64&fit=crop&crop=center" },
  { name: "GCP", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=64&h=64&fit=crop&crop=center" },
  { name: "Docker", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=64&h=64&fit=crop&crop=center" },
  { name: "Figma", icon: Figma },
  { name: "Git", icon: GitBranch },
];

const TechnicalSkillsSection = () => (
  <section id="skills" className="py-16 bg-muted/40">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-playfair text-3xl mb-8 text-primary text-center">Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {SKILLS.map((skill) => (
          <HoverCard key={skill.name}>
            <HoverCardTrigger asChild>
              <div className="flex flex-col items-center cursor-pointer group">
                {skill.icon ? (
                  <skill.icon className="w-12 h-12 text-primary group-hover:text-primary/80 transition-colors" aria-label={skill.name} />
                ) : (
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="w-12 h-12 rounded-lg object-cover group-hover:opacity-80 transition-opacity"
                  />
                )}
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="text-center">{skill.name}</HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  </section>
);

export default TechnicalSkillsSection;
