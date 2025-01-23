import Navbar from "../components/Navbar";
import ContactComponent from "../components/Contact";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-primary mb-6">İletişim</h1>
        <ContactComponent />
      </div>
    </div>
  );
};

export default Contact;