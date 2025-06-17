
const LEADERSHIP = [
  {
    title: "Contributor",
    org: "DeepML (Leetcode for Machine Learning)",
    dates: "",
    description: "Contributed to the platform by adding questions, solutions, and creating new challenges"
  },
  {
    title: "Vice President",
    org: "USC HSO",
    dates: "",
    description: "Led executive board meetings, provided guidance on sponsorship negotiations, and oversaw budget management. Managed a team of 15 to organize large-scale events, balancing multiple priorities while maintaining quality standards."
  },
  {
    title: "Social Chair",
    org: "USC HSO",
    dates: "",
    description: "Developed and executed social media strategies to enhance the organization's online presence and increase alumni engagement"
  },
  {
    title: "Student Partner",
    org: "Internshala",
    dates: "",
    description: "Represented Internshala in college as a campus ambassador and helped peers make the best use of Internshala as a platform for getting internships and training. Core responsibilities included inculcating internship culture and hosting activities like workshops and seminars to build relationships with students and faculty."
  },
  {
    title: "Student Volunteer",
    org: "National Service Scheme",
    dates: "",
    description: "Volunteered for spreading awareness among people about cleanliness under the Swachh Bharat Scheme introduced by the government of India."
  }
];

const LeadershipSection = () => (
  <section id="leadership" className="py-16 bg-muted/40">
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
