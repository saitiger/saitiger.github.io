
const LEADERSHIP = [
  {
    title: "President, Data Science Club",
    org: "University of XYZ",
    dates: "2023 – Present",
    description: "Led a 40+ member student club, organizing workshops and speaker sessions to promote data science awareness."
  },
  {
    title: "Volunteer Data Analyst",
    org: "Open Health Initiative",
    dates: "2022 – 2023",
    description: "Provided analytics support for a non-profit; built dashboards on healthcare program reach."
  }
];

const LeadershipSection = () => (
  <section id="leadership" className="py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-playfair text-3xl mb-8 text-primary text-center">Leadership & Volunteer Experience</h2>
      <div className="flex flex-col gap-7">
        {LEADERSHIP.map((item) => (
          <div
            key={item.title + item.org}
            className="bg-card rounded-lg border p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:gap-5">
              <div className="flex-1">
                <span className="font-semibold text-lg">{item.title}</span>
                <span className="text-muted-foreground font-medium ml-2">@ {item.org}</span>
              </div>
              <span className="text-xs text-muted-foreground">{item.dates}</span>
            </div>
            <div className="text-base mt-2">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LeadershipSection;
