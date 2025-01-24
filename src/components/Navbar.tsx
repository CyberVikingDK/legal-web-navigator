import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="https://ayana.av.tr/upload/manset/logo117.png" alt="Ayana Hukuk" className="h-16 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Ana Sayfa</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">Hakkımızda</Link>
            <Link to="/kvkk" className="text-gray-700 hover:text-primary transition-colors">KVKK</Link>
            <Link to="/founding-lawyer" className="text-gray-700 hover:text-primary transition-colors">Kurucu Avukat</Link>
            <Link to="/team" className="text-gray-700 hover:text-primary transition-colors">Ekibimiz</Link>
            <Link to="/practice-areas" className="text-gray-700 hover:text-primary transition-colors">Çalışma Alanlarımız</Link>
            <Link to="/articles" className="text-gray-700 hover:text-primary transition-colors">Y.Kararları - Makaleler</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">İletişim</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-primary">Ana Sayfa</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-primary">Hakkımızda</Link>
              <Link to="/kvkk" className="block px-3 py-2 text-gray-700 hover:text-primary">KVKK</Link>
              <Link to="/founding-lawyer" className="block px-3 py-2 text-gray-700 hover:text-primary">Kurucu Avukat</Link>
              <Link to="/team" className="block px-3 py-2 text-gray-700 hover:text-primary">Ekibimiz</Link>
              <Link to="/practice-areas" className="block px-3 py-2 text-gray-700 hover:text-primary">Çalışma ve Uzmanlık Alanlarımız</Link>
              <Link to="/articles" className="block px-3 py-2 text-gray-700 hover:text-primary">Y.Kararları - Makaleler</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary">İletişim</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;