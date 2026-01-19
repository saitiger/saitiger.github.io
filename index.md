# Sai Tiger Raina - Portfolio

## Summary
Sai Tiger Raina is a Data Scientist focused on machine learning, scalable data pipelines, and product strategy. Interests include startups, product experimentation, and building data-driven products.

## Roles
- Data Scientist
- AI Explorer
- Product Experience & Experimentation

## Work Experience
### Vosyn
#### Product Lead, Vosyn Core (Jun 2025 - Present)
- Designing and implementing sub-second, low-latency multimodal AI pipelines (audio, video, text), optimizing system architecture for production-scale performance, scalability, and large analysis loops.
- Heading product vision and roadmap, translating user interviews, usage metrics, and feedback loops into prioritized features that drive adoption and improve user experience (+18% retention).
- Developing and deploying internal AI agents using n8n and fine-tuned open-source models, automating workflows and materially reducing manual operational effort across product teams.
- Leading multimodal AI evaluations and benchmarking, identifying capability gaps and guiding iterative improvements across models, prompts, and system architecture.
- Designing scalable data schemas, storage patterns, and telemetry pipelines across cloud services, enabling end-to-end observability, traceability, and system reliability.

#### Data Scientist (Mar 2025 - Present)
- Designed and deployed scalable data extraction and cleaning pipelines using containerized microservices.
- Implemented end-to-end CI/CD/CT pipelines with Kubeflow on Kubernetes, Vertex AI, reducing model deployment time by 70% and streamlining production workflows.
- Built and optimized inference pipelines on GCP with auto-scaling capabilities, ensuring high-performance model serving for production workloads.
- Collaborated with product and UX teams to drive process improvements and data pipeline initiatives.

### USC Institute for Creative Technologies
#### Research Assistant (Jan 2024 - Feb 2025)
- Conducted research under Dr. Benjamin Nye on Finer Bad Writing: Evaluating LLM Fine-Tuning with LLM-Generated Errors, focused on diagnosing and improving weaknesses in academic writing.
- Developed an AI assistant for personalized feedback on college essays, delivering targeted critiques on thesis clarity, argument support, and vagueness.
- Designed and executed prompt-engineering frameworks to systematically evaluate, score, and categorize writing issues, ensuring high-quality and actionable feedback.
- Fine-tuned and evaluated GPT-3.5, GPT-4, and LLaMA2-7B, emphasizing baseline analysis and automated evaluation methods to improve thesis support and reduce vague reasoning.
- Awarded "Best Data Science Insight" at Datafirst 2024 for outstanding research insights and technical contributions.

### Keck School of Medicine
#### Data Analyst (May 2022 - May 2024)
- Oversaw all marketing channels within the global medicine program, leveraging data insights to drive strategic decisions.
- Analyzed user behavior and demographic information for detailed targeting to reduce cost per lead by 17% and boost impressions by 36%.
- Increased conversions by 42% by redesigning digital marketing strategies through optimized A/B testing, keyword research.
- Recognized growth opportunities by analyzing website data, comprising of over 100k visits per month via SQL queries and hypothesis testing methods.
- Handled system updates, reconfigurations, troubleshooting, and maintenance to ensure data accuracy and operational efficiency.

### Ecom Express
#### Business Analyst Intern (Aug 2020 - Nov 2020)
- Automated labeling creation for 80,000+ item descriptions, enabling migration from unsupervised to supervised learning. Used KMeans clustering to segment data points into categories.
- Optimized last-mile delivery performance by 10% and minimized shipment returns through predictive modeling of delays, routing analysis, item classification, and optimal placement for new delivery centers.
- Compiled and visualized data in Excel and Python, identifying actionable insights and presented the findings to the upper management.
- Partnered with the data engineering team on feature engineering and assisted in managing data pipelines, improving model performance.

## Projects
### Tummy Time
- Summary: Webapp development using Streamlit, adhoc analysis using Python and hypothesis testing for sensor data.
- Tags: Streamlit, Docker, Plotly, Pandas, Deep Learning, Langchain, Groq, Hypothesis Testing.
- Details:
  - Assisted a PhD student at the Motor Development Lab in conducting statistical analysis, debugging sensors, and analyzing the data.
  - Created a streamlit app to analyze data from the GENEActiv sensor.
  - Conducted analysis of the data for configuring the sensor and the toy.
  - Developed a prototype deep learning model for posture detection and am currently working on optimizing it and creating a model with better accuracy.
  - A quick introduction to Tummy Time using NotebookLM.
- Links: https://github.com/saitiger/Tummy-Time, https://notebooklm.google.com/notebook/0c19ec43-2477-47ee-ad04-92566277c8b5/audio?pli=1

### Beyond the Bot: Customer Happiness with Human vs AI Customer Service
- Summary: User study comparing customer satisfaction with chatbot vs human support.
- Tags: Python, G-Power, SPSS, Seaborn, Hypothesis Testing.
- Details:
  - Comprehensive user study comparing customer satisfaction and response accuracy between chatbot and human support.
  - Conducted user interviews to collect satisfaction scores, frequency of support usage, and chatbot response accuracy ratings.
  - Experiment design: participants interacted with both chatbot and human support in different sequences.
  - Analysis: repeated measures ANOVA, paired sample t-test, Pearson and Spearman correlation tests, and sentiment analysis of open-ended responses.
  - Results: higher satisfaction with human support, order of interaction not influential, negative correlation of chatbot accuracy with satisfaction, and negligible correlation between frequency of use and satisfaction.
  - Interpretation: human empathy and personalization drive satisfaction; accuracy alone does not define a good experience.
- Links: https://github.com/saitiger/Beyong-the-Bot, https://sairaina.substack.com/p/the-ai-customer-service-dilemma-efficiency

### Instacart Market Basket Analysis
- Summary: Market basket analysis, association rules, and customer segmentation for Instacart data.
- Tags: Python, Market Basket Analysis, SQL, Clustering, Customer Segmentation.
- Details:
  - Executed comparative analysis of key order metrics, reorder trends, and top-performing items.
  - Used Pandas and PostgreSQL to query and visualize data.
  - Applied the Apriori algorithm to identify association rules and strategic recommendations.
  - Performed customer segmentation using K-means clustering.
- Links: https://github.com/saitiger/Instacart-Market-Basket-Analysis

### Recommender System for Yelp Dataset
- Summary: Hybrid recommender system using XGBoost and PySpark on restaurants data from Yelp.
- Tags: Pyspark, Recommendation Systems, XgBoost.
- Details:
  - Developed a hybrid recommendation system with collaborative filtering and Pearson similarity.
  - Enhanced rating predictions with feature engineering and XGBoost, achieving 0.974 RMSE.
  - Applied Locality Sensitive Hashing to identify similar businesses.
- Links: https://github.com/saitiger/Recommender-System-Yelp

### Emulated Data File System for Medical Records
- Summary: Distributed file system and big data analysis for medical records using PySpark and GCP.
- Tags: Python, GCP, Pyspark, MongoDB, Firebase, SQL, BigQuery.
- Details:
  - Implemented a distributed file system using Python and PySpark for analysis of millions of rows.
  - Managed Spark clusters on Google Dataproc and hosted data on GCS buckets.
  - Conducted ad-hoc analysis using BigQuery on a cloud data warehouse containing over 500,000 rows.
- Links: https://github.com/saitiger/Emulated-Data-File-System, https://www.youtube.com/watch?v=C9lxvqlx-7g&ab_channel=SaiRaina

### Transfer Learning
- Summary: Multi-class classifier for bird species and video classification using transfer learning.
- Tags: Transfer Learning, Deep Learning, CNN, Fine-tuning.
- Details:
  - Built a multi-class classifier on pretrained EfficientNetB0 and VGG16 to identify 20 bird species.
  - Implemented data augmentation techniques using TensorFlow and improved model generalization.
  - Performed optimization with Adam optimizer and achieved 86% accuracy.
  - Built a model for video classification leveraging the earlier models.
- Links: https://github.com/saitiger/Transfer-Learning

### Data Science Job Dashboard
- Summary: PowerBI dashboard analyzing data science industry trends from survey data.
- Tags: PowerBI, Survey Analysis, Data Science.
- Details:
  - Analyzed data science survey data for trends across data roles.
  - Created a PowerBI dashboard and provided insights based on survey responses.
- Links: https://app.powerbi.com/view?r=eyJrIjoiN2Q3ZmM4MjYtYmRmZS00NzI1LWE0MTctMmMyOWM5OGMyNmMxIiwidCI6IjlkZGFhY2ExLTM4OWYtNGNiMS1hMTEzLTA4MWJlNmNjMjVmYyIsImMiOjZ9

### Urban Water Management
- Summary: Time series model and PowerBI dashboard for water demand prediction in LA County.
- Tags: Time Series Analysis, Python, PowerBI.
- Details:
  - Built a time series model using Prophet and XgBoost to predict water demand in Los Angeles County and achieved 92% accuracy.
  - Performed exploratory data analysis to find top 3 reasons for wastage.
  - Identified top 5 water resources for the county and monitored them in real time through a PowerBI dashboard.
- Links: https://github.com/saitiger/Urban-Water-Management/tree/main

### Viterbi Vision
- Summary: Market research, user interviews, Figma prototype, and business model for product market fit study.
- Tags: Figma, User Research, Customer Discovery, A/B Testing, Hypothesis Testing, Business Model.
- Details:
  - Conducted customer discovery and validation to gauge product viability.
  - Conducted interviews with a wireframe and idea of the system to unearth pain points and missing features.
  - Conducted competitor research and analysis of current offerings.
  - Developed the prototype using Figma based on feature prioritization and feedback.
  - Created a Business and Lean Canvas to analyze costs and revenue model.
  - Learning outcomes: Agile methodology, data collection, data management, and product feature prioritization.
- Links: https://www.figma.com/design/fyTo8GBP5pD2fw0UvW8zCq/ViterbiVision?node-id=0-1&t=O8XI4ZnVr9X9Bfz8-1, https://drive.google.com/file/d/1yom-9PcceVnRru-ijG_U2Wk6NfsfpVrj/view

## Technical Skills
- Python
- Postgres
- MongoDB
- Redis
- dBT
- PowerBI
- PyTorch
- Spark
- AWS
- GCP
- Docker
- Figma
- Git

## Hackathons
### Reality Shift
- Outcome: dY?+ 1st Place and $650 Prize
- Summary: Made an MVP for a VR-based speech therapy app for children with ASD.
- Details: Created a pitch deck, researched competitors and conducted market analysis.
- Links: https://github.com/saitiger/Talk-Through

### GRIDS Mindspark 2.0
- Outcome: dY?+ 1st Place and Featured on KNIME Blog and $1000 Cash Prize
- Summary: Developed a platform for matching PhD students with professors using research interests.
- Details:
  - Scraped academic directories and websites for research data.
  - Used OpenAI API for text embeddings and similarity-based recommendations.
  - Conducted user interviews and competitor analysis to gauge product-market fit.
  - Analyzed market trends to uncover product needs.
- Links: https://www.knime.com/blog/students-push-social-good-projects-at-hackathon, https://www.canva.com/design/DAFu1D4kBig/lOg2BDeHCCCVc0ADfL2HWg/edit, https://github.com/saitiger/Text2PhD

### Viterbi - Greif Sustainability Innovation Challenge
- Outcome: dY?+ "Biggest Swing" Award and $1000 Prize
- Summary: Developed a conversational bot for Life Cycle Analysis of products.
- Details:
  - Built PowerBI dashboards to identify material trading locations and track manufacturing emissions.
  - Conducted market analysis and devised a 3-year strategic plan for product launch.
- Links: https://github.com/saitiger/Green-Cycle

### Min Family Challenge
- Outcome: dY?. Top 5 Finalist (out of 100+ teams)
- Summary: Reached the finals (top 5 teams among 100+ teams). Min Family Challenge is a $50,000 social entrepreneurship challenge.
- Links: https://viterbiinnovation.usc.edu/competitions-and-programs/mfc/, https://www.youtube.com/watch?v=XKZfvOl_mBw

### Code and Conquer
- Outcome: dY?. Top 10 and Honourable Mention
- Summary: Developed Saathi.AI, an innovative AI-powered companion.
- Links: https://github.com/saitiger/Saathi.AI, https://pitch.com/v/saathiai-qmaery, https://www.youtube.com/watch?v=9vqTooqTjwU

## Education
- Master of Science in Applied Data Science, University of Southern California
  - Relevant Coursework: Machine Learning for Data Science, Data Mining, Research Methods and Analysis for User Studies, User Experience Design and Strategy.
- Bachelor of Technology in Computer Science and Engineering, GGSIPU, New Delhi, India
  - Relevant Coursework: Database Design, Machine Learning, Operating Systems, Object Oriented Programming, Data Structure, Computer Networks, Data Mining and Business Intelligence.

## Leadership and Volunteer Experience
- Contributor, DeepML (Leetcode for Machine Learning): Contributed to the platform by adding questions, solutions, and creating new challenges.
- Vice President, USC HSO: Led executive board meetings, provided guidance on sponsorship negotiations, and oversaw budget management. Managed a team of 15 to organize large-scale events, balancing multiple priorities while maintaining quality standards.
- Social Chair, USC HSO: Developed and executed social media strategies to enhance the organization's online presence and increase alumni engagement.
- Student Partner, Internshala: Represented Internshala in college as a campus ambassador and helped peers make the best use of Internshala as a platform for getting internships and training. Core responsibilities included inculcating internship culture and hosting activities like workshops and seminars to build relationships with students and faculty.
- Student Volunteer, National Service Scheme: Volunteered for spreading awareness among people about cleanliness under the Swachh Bharat Scheme introduced by the government of India.

## Contact
- Email: sai.raina@gmail.com
- GitHub: https://github.com/saitiger
- LinkedIn: https://www.linkedin.com/in/saitigerraina/
- Substack: https://sairaina.substack.com/
