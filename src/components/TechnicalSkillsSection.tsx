
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Figma, GitBranch } from "lucide-react";

const SKILLS = [
  { name: "Python", logo: "/lovable-uploads/1edf1431-14b9-4c56-b9c4-255fc40a2d27.png" },
  { name: "Postgres", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "dBT", logo: "https://seeklogo.com/images/D/dbt-logo-500AB0BAA7-seeklogo.com.png" },
  { name: "PowerBI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Spark", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
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
                    className="w-12 h-12 rounded-lg object-contain group-hover:opacity-80 transition-opacity"
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
