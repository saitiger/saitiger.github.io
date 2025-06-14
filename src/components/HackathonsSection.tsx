
import { Projector } from "lucide-react";

const HACKATHONS = [
  {
    name: "DataSprint Hackathon 2024",
    role: "Team Lead, Analytics",
    outcome: "🏆 2nd Place out of 50 teams",
    description: "Led a team of 4 to build a real-time fraud detection app in 36 hours; integrated data APIs and built ML pipeline.",
    year: "2024"
  },
  {
    name: "AI4Good Challenge",
    role: "ML Engineer",
    outcome: "Top 10 Finalist",
    description: "Developed NLP models for disaster tweet classification and visualized results in an interactive dashboard.",
    year: "2023"
  }
];

const HackathonsSection = () => (
  <section id="hackathons" className="py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-playfair text-3xl mb-8 text-primary text-center">Hackathon Experience</h2>
      <div className="flex flex-col gap-8">
        {HACKATHONS.map((hack) => (
          <div
            key={hack.name}
            className="relative flex flex-col md:flex-row gap-7 bg-card rounded-lg shadow border border-border p-6 hover:shadow-lg transition"
          >
            <Projector className="w-10 h-10 text-primary flex-shrink-0 mb-2 md:mb-0" />
            <div>
              <div className="flex gap-4 items-center">
                <span className="text-lg font-semibold">{hack.name}</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded">{hack.year}</span>
              </div>
              <div className="text-sm text-muted-foreground mb-2">{hack.role} &mdash; <span className="font-medium">{hack.outcome}</span></div>
              <div className="text-base">{hack.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HackathonsSection;
