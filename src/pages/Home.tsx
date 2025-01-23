import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </div>
  );
};

export default Home;