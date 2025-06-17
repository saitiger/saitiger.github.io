
import { Link as LinkIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HACKATHONS = [
  {
    name: "Reality Shift",
    outcome: "🏆 1st Place & $650 Prize",
    summary: "Made an MVP for a VR-based speech therapy app for children with ASD.",
    details: [
      "Created a pitch deck, researched competitors and conducted market analysis."
    ],
    links: [
      { name: "GitHub", url: "https://github.com/saitiger/Talk-Through" }
    ]
  },
    {
    name: "GRIDS Mindspark 2.0",
    outcome: "🏆 1st Place & Featured on KNIME Blog",
    summary: "Developed a platform for matching PhD students with professors using research interests.",
    details: [
      "Scraped academic directories and websites for research data.",
      "Used OpenAI API for text embeddings and similarity-based recommendations.",
      "Conducted user interviews and competitor analysis to gauge product-market fit.",
      "Analyzed market trends to uncover product needs."
    ],
    links: [
      { name: "KNIME Blog", url: "https://www.knime.com/blog/students-push-social-good-projects-at-hackathon" },
      { name: "Presentation", url: "https://www.canva.com/design/DAFu1D4kBig/lOg2BDeHCCCVc0ADfL2HWg/edit" },
      { name: "GitHub", url: "https://github.com/saitiger/Text2PhD" }
    ]
  },
  {
    name: "Viterbi - Greif Sustainability Innovation Challenge",
    outcome: "🏆 'Biggest Swing' Award & $1000 Prize",
    summary: "Developed a conversational bot for Life Cycle Analysis of products.",
    details: [
      "Built PowerBI dashboards to identify material trading locations and track manufacturing emissions.",
      "Conducted market analysis and devised a 3-year strategic plan for product launch."
    ],
    links: [
      { name: "GitHub", url: "https://github.com/saitiger/Green-Cycle" }
    ]
  },
  {
    name: "Min Family Challenge",
    outcome: "🏅 Top 5 Finalist (out of 100+ teams)",
    summary: "Reached the finals (top 5 teams among 100+ teams). Min Family Challenge is a $50,000 social entrepreneurship challenge.",
    details: [],
    links: [
      { name: "Competition", url: "https://viterbiinnovation.usc.edu/competitions-and-programs/mfc/" },
      { name: "Video", url: "https://www.youtube.com/watch?v=XKZfvOl_mBw" }
    ]
  },
  {
    name: "Code & Conquer",
    outcome: "🏅 Top 10 & Honourable Mention",
    summary: "Developed Saathi.AI, an innovative AI-powered companion.",
    details: [],
    links: [
      { name: "GitHub", url: "https://github.com/saitiger/Saathi.AI" },
      { name: "Presentation", url: "https://pitch.com/v/saathiai-qmaery" },
      { name: "Video", url: "https://www.youtube.com/watch?v=9vqTooqTjwU" }
    ]
  }
];

const HackathonsSection = () => (
  <section id="hackathons" className="py-20 bg-muted/40">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-playfair text-3xl mb-8 text-primary text-center">Hackathon Experience</h2>
      <Accordion type="multiple" className="w-full space-y-4">
        {HACKATHONS.map((hack, index) => (
          <AccordionItem
            value={`item-${index}`}
            key={hack.name}
            className="bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-shadow border-b-0"
          >
            <AccordionTrigger className="p-6 text-left hover:no-underline">
              <div className="flex flex-col gap-3 text-left w-full">
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-semibold">{hack.name}</span>
                  <div className="text-sm text-muted-foreground font-medium">{hack.outcome}</div>
                </div>
                {/* Show GitHub link in collapsed state */}
                <div className="flex flex-wrap gap-x-4 gap-y-2" onClick={(e) => e.stopPropagation()}>
                  {hack.links.filter(link => link.name === "GitHub").map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-primary underline-offset-4 hover:underline text-sm font-medium"
                    >
                      <LinkIcon className="w-3.5 h-3.5" />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-0">
              <div>
                <p className="text-base text-muted-foreground mb-4">{hack.summary}</p>
                {hack.details.length > 0 && (
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
                    {hack.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
                {hack.links.length > 0 && (
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {hack.links.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-primary underline-offset-4 hover:underline text-sm font-medium"
                      >
                        <LinkIcon className="w-3.5 h-3.5" />
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default HackathonsSection;
