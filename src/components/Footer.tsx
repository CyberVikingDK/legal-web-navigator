const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; Copyrights 2017 Av. Gülten AYANA & Ayana Hukuk Avukatlık Danışmanlık ve Arabuluculuk Bürosu</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">Gizlilik Politikası</a>
            <a href="#" className="text-gray-400 hover:text-white">Kullanım Şartları</a>
            <a href="/contact" className="text-gray-400 hover:text-white">İletişim</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
