import Navbar from "../components/Navbar";
import TeamComponent from "../components/Team";

const Team = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-primary mb-6">Ekibimiz</h1>
        <TeamComponent />
      </div>
    </div>
  );
};

export default Team;