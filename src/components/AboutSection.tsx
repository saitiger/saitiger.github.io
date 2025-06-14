
const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="font-playfair text-3xl mb-12 text-center text-primary">About Me</h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <img
            alt="Brain GIF"
            className="w-64 h-64 rounded-lg object-cover shadow-lg"
            src="https://i.gifer.com/75ez.gif"
          />
        </div>
        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="text-xl mb-6">
            Growing up watching cricket, I was always curious about the people behind the laptop screens : What exactly were they doing? How are they helping the team ? 
            That curiosity sparked a lifelong fascination with how data can tell stories and drive decisions.
          </p>
          <p className="text-xl mb-6">
            When I enrolled in the computer science program, I got to know more about the "Sexiest job of the 21st century" and started exploring datasets. And yes, my first project was based on the Titanic Dataset! 
            Since then, I’ve worked across industries: building <strong>models</strong> and <strong>ETL</strong> pipelines, improving marketing ROI by <strong>30%</strong>, and crafting real-time <strong>dashboards</strong> that helped teams move faster and smarter.
          </p>
          <p className="text-lg mb-6">
            At my core, I <strong>humanize</strong> data through storytelling and practical solutions.
          </p>
          <p className="text-lg mb-6">
            Outside of work, I’m usually reading about startups, exploring business strategy, or building side projects that solve my own everyday problems. There’s something therapeutic about turning a weekend frustration into a working app. When I’m not coding, you’ll find me hiking or watching sports.
          </p>
          <p className="text-lg">
            P.S. This means watching classics when nothing's live!
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default AboutSection;
