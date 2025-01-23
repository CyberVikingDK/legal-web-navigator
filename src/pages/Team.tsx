import Navbar from "../components/Navbar";
import TeamComponent from "../components/Team";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <div className="bg-primary py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h1 className="text-white text-3xl font-serif">EKİBİMİZ</h1>
              <div className="text-gray-200 mt-4 md:mt-0">
                <span>Ana Sayfa / </span>
                <span>Kurumsal / </span>
                <span className="text-white">Ekibimiz</span>
              </div>
            </div>
          </div>
        </div>
        <TeamComponent />
      </div>
    </div>
  );
};

export default TeamPage;