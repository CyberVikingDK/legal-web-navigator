import Navbar from "../components/Navbar";

const Articles = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-primary mb-6">Yargıtay Kararları ve Makaleler</h1>
      </div>
    </div>
  );
};

export default Articles;