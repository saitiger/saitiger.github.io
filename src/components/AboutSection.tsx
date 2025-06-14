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
            My journey into data science began with a simple curiosity about how numbers could tell stories and drive meaningful change. What started as exploring datasets in college has evolved into a passion for building systems that turn raw data into actionable insights.
          </p>
          
          <p className="text-lg mb-6">
            Over the years, I've had the opportunity to work across different industries, from developing predictive models that improved marketing ROI by 30% to building real-time analytics dashboards that helped teams make faster, data-driven decisions. Each project taught me something new about the intersection of technology, business, and human behavior.
          </p>
          
          <p className="text-lg mb-6">
            Recently, I've been fascinated by the startup ecosystem and product strategy. There's something incredibly exciting about understanding how businesses scale, how products find their market fit, and how data can be the compass that guides these journeys. This curiosity has led me to dive deep into business fundamentals, user psychology, and the art of building products that people actually want to use.
          </p>
          
          <p className="text-lg">
            When I'm not analyzing data or reading about the latest business strategies, you'll find me coding side projects that solve my own pain points. There's something therapeutic about turning a weekend frustration into a functioning piece of software. These projects keep me grounded in the craft of building and remind me why I fell in love with programming in the first place.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
