import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PracticeAreas from "../components/PracticeAreas";
import Team from "../components/Team";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <Team />
      <Contact />
    </div>
  );
};

export default Index;