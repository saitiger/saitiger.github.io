
const WORK = [
  {
    position: "Team Lead, Vosyn Core",
    company: "Vosyn",
    dates: "Mar 2025 - Present",
    description: "Collaborated with the product team to define roadmaps, prioritizing features based on customer feedback and market analysis. Oversaw the development of the audio, video, and text pipeline. Performed prompt engineering for the Llama-powered Cloud-Run function. Coordinated with multiple stakeholders, including IT teams, Finance, and Business Development, to address bottlenecks, ensuring alignment with business objectives and delivering actionable insights."
  },
  {
    position: "Machine Learning Engineer",
    company: "Vosyn",
    dates: "Mar 2025 - Present",
    description: "Designed and deployed scalable data extraction and cleaning pipelines using containerized microservices. Implemented end-to-end CI/CD/CT pipelines with Kubeflow on Kubernetes, Vertex AI, reducing model deployment time by 70% and streamlining production workflows. Built and optimized inference pipelines on GCP with auto-scaling capabilities, ensuring high-performance model serving for production workloads. Collaborated with product and UX teams to drive process improvements and data pipeline initiatives."
  },
  {
    position: "Research Assistant",
    company: "USC Institute for Creative Technologies",
    dates: "Jan 2024 - Feb 2025",
    description: "Worked under Dr. Benjamin Nye on the topic - Finer Bad Writing: Evaluating LLM Fine-Tuning with LLM-Generated Errors. Developed an AI assistant that gives personalized feedback on academic essays. Conducted prompt engineering to evaluate and score issues in college essays, ensuring high-quality, targeted feedback. Helped fine-tune GPT-3.5, GPT-4, and LLaMA2-7B to improve thesis support and vagueness issues in academic writing. Focussed on baseline analysis and auto-evaluation methods. Won 'Best Data Science Insight' at Datafirst 2024 for outstanding project contributions."
  },
  {
    position: "Data Analyst",
    company: "Keck School of Medicine",
    dates: "May 2022 - May 2024",
    description: "Oversaw all marketing channels within the global medicine program, leveraging data insights to drive strategic decisions. Analyzed user behavior and demographic information for detailed targeting to reduce cost per lead by 17% and boost impressions by 36%. Increased conversions by 42% by redesigning digital marketing strategies through optimized A/B testing, keyword research. Recognized growth opportunities by analyzing website data, comprising of over 100k visits per month via SQL queries and hypothesis testing methods (t-tests and ANOVA). Handled system updates, reconfigurations, troubleshooting, and maintenance to ensure data accuracy and operational efficiency."
  },
  {
    position: "Business Analyst Intern",
    company: "Ecom Express",
    dates: "Aug 2020 - Nov 2020",
    description: "Automated labeling creation for 80,000+ item descriptions, enabling migration from unsupervised to supervised learning. Used KMeans clustering to segment data points into categories. Optimized last-mile delivery performance by 10% and minimized shipment returns through predictive modeling of delays, routing analysis, item classification, and optimal placement for new delivery centers. Compiled and visualized data in Excel and Python, identifying actionable insights and presented the findings to the upper management. Partnered with the data engineering team on feature engineering and assisted in managing data pipelines, improving model performance."
  }
];

const WorkExperienceSection = () => (
  <section id="work" className="py-20 bg-muted/40">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-playfair text-3xl mb-8 text-primary text-center">Work Experience</h2>
      <ol className="relative border-l-2 border-primary/50 pl-7 space-y-8">
        {WORK.map((w) => (
          <li key={w.position + w.company} className="mb-0">
            <div className="absolute -left-3 top-2 bg-primary rounded-full w-2 h-2"></div>
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
