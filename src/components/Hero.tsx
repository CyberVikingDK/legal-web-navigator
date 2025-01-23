const Hero = () => {
  return (
    <div id="home" className="relative bg-primary min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Excellence in Legal Practice
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Dedicated to providing exceptional legal services with integrity and professionalism
          </p>
          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-accent-light text-white font-bold py-3 px-8 rounded-md transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;