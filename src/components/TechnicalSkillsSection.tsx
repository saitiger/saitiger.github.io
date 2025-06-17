import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const SKILLS = [
  { name: "Python", logo: "/images/python-logo.png" },
  { name: "Postgres", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "dBT", logo: "https://seeklogo.com/images/D/dbt-logo-500AB0BAA7-seeklogo.com.png" },
  { name: "PowerBI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Spark", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const TechnicalSkillsSection = () => (
  <section id="skills" className="py-16 bg-background">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-playfair text-3xl mb-8 text-primary text-center">Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {SKILLS.map((skill) => (
          <HoverCard key={skill.name}>
            <HoverCardTrigger asChild>
              <div className="flex flex-col items-center cursor-pointer group">
                <div className="bg-white p-3 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="w-12 h-12 object-contain group-hover:opacity-80 transition-opacity"
                  />
                </div>
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
