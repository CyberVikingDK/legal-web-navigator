import Navbar from "../components/Navbar";
import PracticeAreasComponent from "../components/PracticeAreas";

const PracticeAreas = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-primary mb-6">Çalışma Alanlarımız</h1>
        <PracticeAreasComponent />
      </div>
    </div>
  );
};

export default PracticeAreas;