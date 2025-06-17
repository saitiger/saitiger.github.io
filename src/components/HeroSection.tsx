import TypewriterText from "./TypewriterText";

const HeroSection = () => (
  <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 py-16 max-w-7xl mx-auto w-full">
    {/* Text Section */}
    <div className="flex-1 flex flex-col justify-center items-center lg:items-start space-y-5 px-6">
      <h1 className="font-playfair text-5xl md:text-6xl font-bold leading-tight text-primary text-center lg:text-left">
        Sai Tiger Raina
      </h1>
      <div className="text-center lg:text-left max-w-xl">
        <TypewriterText />
        <p className="text-xl text-muted-foreground font-medium mt-6">
          Hi, I'm Sai 👋, a Data Scientist passionate about turning data into decisions.
          I specialize in deploying machine learning models, building scalable data pipelines, and delivering insights that drive marketing performance. Lately, I've been diving into the world of startups and product strategy, exploring what makes businesses tick. On weekends, you'll find me vibing with code, prototyping side projects that solve pain points in my life.
        </p>
      </div>
    </div>
    {/* Avatar */}
    <div className="flex justify-center flex-1">
      <img
        alt="Profile"
        className="w-56 h-56 rounded-full object-cover border-4 border-primary/30 shadow-lg"
        src="./images/profile.png"
      />
    </div>
  </section>
);
export default HeroSection;
