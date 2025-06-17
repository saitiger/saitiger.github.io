import { Code, Github } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

const PROJECTS = [
  {
    title: "Tummy Time",
    short: "Webapp development using Streamlit, adhoc analysis using Python and hypothesis testing for sensor data.",
    tags: [
      "Streamlit",
      "Docker",
      "Plotly",
      "Pandas",
      "Deep Learning",
      "Langchain",
      "Groq",
      "Hypothesis Testing",
    ],
    github: "https://github.com/saitiger/Tummy-Time",
    details: (
      <>
        <p>Assisted a PhD student at the Motor Development Lab in conducting statistical analysis, debugging sensors, and analyzing the data.<br/>
        Created a streamlit app to analyze data from the GENEActiv sensor.<br/>
        Conducted analysis of the data for configuring the sensor and the toy.<br/>
        Developed a prototype deep learning model for posture detection and am currently working on optimizing it and creating a model with better accuracy.<br/>
        A quick introduction to Tummy Time using NotebookLM.</p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a href="https://github.com/saitiger/Tummy-Time" className="text-primary underline" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </>
    ),
  },
  {
    title: "Beyond the Bot: Customer Happiness with Human vs AI Customer Service",
    short: "User study comparing customer satisfaction with chatbot vs human support.",
    tags: ["Python", "G-Power", "SPSS", "Seaborn", "Hypothesis Testing"],
    github: "https://github.com/saitiger/Beyong-the-Bot",
    details: (
      <>
        <p>A comprehensive user study aimed at understanding and comparing customer satisfaction and response accuracy between chatbot and human support in a customer service setting.<br/>
        Conducted user interviews to collect several key variables, including customer satisfaction scores for both chatbot and human support, the frequency of support usage, and the rating of chatbot response accuracy. Furthermore, open-ended questions were included to gather insights to deepen understanding of user experiences.<br/>
        <b>Experiment Design:</b> The study design involves participants interacting with both types of support in a sequence (either chatbot first then human, or vice versa), allowing us to explore the impact of the order of interaction on satisfaction. This dual approach helps to differentiate between the effects of the support type itself and the influence of prior experiences with the alternate support type.<br/>
        <b>Analysis:</b> Used repeated measures ANOVA, paired sample t-test for hypothesis testing, and used correlation test (Pearson and Spearman) to find the correlation between chatbot response and user satisfaction, frequency of use, and customer satisfaction respectively. For open-ended questions, sentiment analysis of the user responses was conducted to understand the general idea of how the user's experience is during conversation with customer support. Used SPSS and Python for running the statistical tests and GPower for power analysis of the tests.<br/>
        <b>Results:</b> Higher satisfaction with human support, order of interaction not influential, negative correlation of chatbot accuracy with satisfaction, frequency of use and satisfaction negligible correlation.<br/>
        <b>Interpretation:</b> The strong preference for human support underlines the importance of human elements like empathy and personalization in customer interactions, aspects that chatbots may not adequately replicate. The lack of sequence effect on satisfaction suggests that customer judgments are more directly influenced by the nature of the support rather than sequential biases. The paradox in chatbot accuracy points to the need for a broader understanding of what constitutes a satisfying customer service experience, beyond mere accuracy. The minimal role of frequency of support usage in determining satisfaction indicates that the quality of each individual interaction is more crucial than how often support is used.</p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a href="https://github.com/saitiger/Beyong-the-Bot" className="text-primary underline" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://sairaina.substack.com/p/the-ai-customer-service-dilemma-efficiency" className="text-primary underline" target="_blank" rel="noopener noreferrer">Substack</a>
        </div>
      </>
    ),
  },
  {
    title: "Instacart Market Basket Analysis",
    short: "Market basket analysis, association rules, and customer segmentation for Instacart data.",
    tags: ["Python", "Market Basket Analysis", "SQL", "Clustering", "Customer Segmentation"],
    github: "https://github.com/saitiger/Instacart-Market-Basket-Analysis",
    details: (
      <>
        <p>Executed comparative analysis of key order metrics, reorder trends, and top-performing items, driving actionable insights.<br/>
        Utilized Pandas and PostgreSQL to query and visualize data.<br/>
        Analyzed seasonal trends and cart sizes; applied the Apriori algorithm to identify association rules, leading to strategic recommendations.<br/>
        Performed customer segmentation using K-means clustering to enhance targeted marketing efforts.</p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a href="https://github.com/saitiger/Instacart-Market-Basket-Analysis" className="text-primary underline" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </>
    ),
  },
  {
    title: "Recommender System for Yelp Dataset",
    short: "Hybrid recommender system using XGBoost & PySpark on restaurants data from Yelp.",
    tags: ["Pyspark", "Recommendation Systems", "XgBoost"],
    github: "https://github.com/saitiger/Recommender-System-Yelp",
    details: (
      <>
        <p>Developed a hybrid recommendation system with collaborative filtering, Pearson similarity on restaurants data.<br/>
        Enhanced user rating predictions utilizing feature engineering and XGBoost, achieving 0.974 RMSE.<br/>
        Applied Locality Sensitive Hashing to identify similar businesses.</p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a href="https://github.com/saitiger/Recommender-System-Yelp" className="text-primary underline" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </>
    ),
  },
  {
    title: "Emulated Data File System for Medical Records",
    short: "Distributed file system and big data analysis for medical records using PySpark and GCP.",
    tags: ["Python", "GCP", "Pyspark", "MongoDB", "Firebase", "SQL", "BigQuery"],
    github: "https://github.com/saitiger/Emulated-Data-File-System",
    details: (
      <>
        <p>Implemented a distributed file system using Python and PySpark for swift analysis of millions of data rows.<br/>
        Managed Spark clusters on Google Dataproc and hosted data on GCS buckets.<br/>
        Conducted ad-hoc analysis using BigQuery on a cloud data warehouse containing over 500,000 rows.</p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a href="https://github.com/saitiger/Emulated-Data-File-System" className="text-primary underline" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.youtube.com/watch?v=C9lxvqlx-7g&ab_channel=SaiRaina" className="text-primary underline" target="_blank" rel="noopener noreferrer">Video Presentation</a>
        </div>
      </>
    ),
  },
  {
    title: "Transfer Learning",
    short: "Multi-class classifier for bird species and video classification using transfer learning.",
    tags: ["Transfer Learning", "Deep Learning", "CNN", "Fine-tuning"],
    github: "https://github.com/saitiger/Transfer-Learning",
    details: (
      <>
        <p>Built a multi-class classifier on pretrained EfficientNetB0 and VGG16 to identify 20 bird species.<br/>
        Implemented data augmentation techniques using TensorFlow and improved model generalization.<br/>
        Performed optimization with Adam optimizer and achieved 86% accuracy.<br/>
        After completing the transfer learning model for images built a model for video classification leveraging the earlier models.</p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a href="https://github.com/saitiger/Transfer-Learning" className="text-primary underline" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </>
    ),
  },
  {
    title: "Data Science Job Dashboard",
    short: "PowerBI dashboard analyzing data science industry trends from survey data.",
    tags: ["PowerBI", "Survey Analysis", "Data Science"],
    github: "https://github.com/saitiger/PowerBI/tree/main/Data%20Science%20Survey",
    details: (
      <>
        <p>Inspired by Alex the analyst, used the data science survey data to analyze the industry trends for data-based roles (Data Science, Data Analyst, Data Engineer).<br/>
        Created PowerBI dashboard and provided insights based on the survey responses.</p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a href="https://app.powerbi.com/view?r=eyJrIjoiN2Q3ZmM4MjYtYmRmZS00NzI1LWE0MTctMmMyOWM5OGMyNmMxIiwidCI6IjlkZGFhY2ExLTM4OWYtNGNiMS1hMTEzLTA4MWJlNmNjMjVmYyIsImMiOjZ9" className="text-primary underline" target="_blank" rel="noopener noreferrer">PowerBI Dashboard</a>
        </div>
      </>
    ),
  },
  {
    title: "Urban Water Management",
    short: "Time series model and PowerBI dashboard for water demand prediction in LA County.",
    tags: ["Time Series Analysis", "Python", "PowerBI"],
    github: "https://github.com/saitiger/Urban-Water-Management/tree/main",
    details: (
      <>
        <p>Built a times series model using Prophet and XgBoost to predict water demand in Los Angeles County to tackle water scarcity and achieved 92% accuracy.<br/>
        Performed exploratory data analysis to find top 3 reasons for wastage.<br/>
        Identified top 5 water resources for the county and monitored them real time thorough PowerBI dashboard.</p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a href="https://github.com/saitiger/Urban-Water-Management/tree/main" className="text-primary underline" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </>
    ),
  },
  {
    title: "Viterbi Vision",
    short: "Market research, user interviews & research, Figma prototype and business model for product market fit study.",
    tags: ["Figma", "User Research", "Customer Discovery", "A/B Testing", "Hypothesis Testing", "Business Model"],
    github: null,
    details: (
      <>
        <p>Part of DSCI 556 Coursework: User Experience Design & Strategy.<br/>
        Conducted customer discovery and validation to gauge if the product is viable.<br/>
        To ensure Product Market Fit(PMF), conducted interviews with a wireframe and idea of the system to unearth pain points and missing features in the current offering.<br/>
        After getting a good response, conducted competitor research & analysis of current offerings in the market.<br/>
        Developed the prototype using Figma based on the feature prioritization, user interviews, and feedback on the initial wireframe.<br/>
        Lastly, Business and Lean Canvas was created to analyze the costs incurred in developing and maintaining the system, along with the business model to generate revenue.<br/>
        <b>Learning Outcomes:</b> Agile Methodology to iterate the version of the app based on the feedback, Data collection, management of raw data, Creating and understanding business models, Understood how user feedback and pain points can be analyzed and used for creating features.</p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a href="https://www.figma.com/design/fyTo8GBP5pD2fw0UvW8zCq/ViterbiVision?node-id=0-1&t=O8XI4ZnVr9X9Bfz8-1" className="text-primary underline" target="_blank" rel="noopener noreferrer">Figma Prototype</a>
          <a href="https://drive.google.com/file/d/1yom-9PcceVnRru-ijG_U2Wk6NfsfpVrj/view" className="text-primary underline" target="_blank" rel="noopener noreferrer">Case Study</a>
        </div>
      </>
    ),
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="font-playfair text-3xl mb-8 text-center text-primary">Projects</h2>
      <Accordion type="multiple" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <AccordionItem value={project.title} key={project.title} className="bg-card rounded-xl shadow-md border border-border p-0 flex flex-col hover:shadow-lg transition group">
            <AccordionTrigger className="p-7 flex flex-col gap-3 text-left">
              <div className="flex items-center gap-3 mb-2">
                <Code className="w-6 h-6 text-primary" />
                <span className="font-semibold text-lg">{project.title}</span>
              </div>
              <div className="text-muted-foreground text-base mb-3">{project.short}</div>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tech) => (
                  <span
                    key={tech}
                    className="bg-accent px-2 py-0.5 rounded text-xs font-medium text-accent-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1 text-primary underline hover:text-primary/80 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              )}
            </AccordionTrigger>
            <AccordionContent className="px-7 pb-7">{project.details}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default ProjectsSection;
