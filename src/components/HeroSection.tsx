const HeroSection = () => <section className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16 max-w-7xl mx-auto w-full">
    {/* Text Section */}
    <div className="flex-1 space-y-5">
      <h1 className="font-playfair text-5xl md:text-6xl font-bold leading-tight text-primary">Sai Tiger Raina</h1>
      <p className="text-xl text-muted-foreground font-medium">
        Data Science Student passionate about machine learning, analytics, and building impactful data solutions. <br />
        Welcome to my portfolio!
      </p>
      <a href="#projects" className="inline-block px-7 py-3 text-base mt-6 rounded-md bg-primary text-primary-foreground font-medium shadow transition hover:scale-105 hover:bg-primary/90">
        View Projects
      </a>
    </div>
    {/* Avatar */}
    <div className="flex justify-center flex-1">
      <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=facearea&facepad=2" alt="Profile" className="w-56 h-56 rounded-full object-cover border-4 border-primary/30 shadow-lg" />
    </div>
  </section>;
export default HeroSection;