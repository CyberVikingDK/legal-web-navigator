import Navbar from "../components/Navbar";
import ContactComponent from "../components/Contact";

const Contact = () => {
  return (
    <div className="min-h-screen pt-0">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-primary mb-6">İletişim</h1>
        <div className="prose max-w-4xl mx-auto">
          <p className="text-gray-700 mb-6">
            Ayana Avukatlık Bürosu olarak, hukuki sorunlarınızda size en iyi çözümleri sunmak için buradayız. Aşağıdaki iletişim bilgilerimiz üzerinden bize ulaşabilir veya ofisimizi ziyaret edebilirsiniz.
          </p>

          <h2 className="text-2xl font-serif text-primary mb-4">İletişim Bilgileri</h2>
          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <h3 className="font-serif text-xl mb-1">Telefon</h3>
                <p>+90 0312 433 66 23</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 className="font-serif text-xl mb-1">E-posta</h3>
                <p>ayana@ayana.av.tr / gultenayana@ayana.av.tr / ayanahukuk@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <h3 className="font-serif text-xl mb-1">Adres</h3>
                <p>Çukurambar, Öğretmenler Cd. Kardelen Apt No: 5/5, 06510 Çankaya/Ankara</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-serif text-primary mb-4">Ofisimizi Ziyaret Edin</h2>
          <div className="mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.279567055864!2d32.81485931541199!3d39.91182697929962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f5e7a7777c43%3A0x4c76cf3dcc8b33b2!2sÇukurambar%2C%20Öğretmenler%20Cd.%20Kardelen%20Apt%20No%3A%205%2F5%2C%2006510%20Çankaya%2FAnkara!5e0!3m2!1str!2str!4v1632931234567!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <h2 className="text-2xl font-serif text-primary mb-4">Bize Ulaşın</h2>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Adınız"
                className="w-full px-4 py-2 rounded-md text-gray-900"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="E-posta Adresiniz"
                className="w-full px-4 py-2 rounded-md text-gray-900"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Konu"
                className="w-full px-4 py-2 rounded-md text-gray-900"
              />
            </div>
            <div>
              <textarea
                placeholder="Mesajınız"
                rows={4}
                className="w-full px-4 py-2 rounded-md text-gray-900"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-accent hover:bg-accent-light text-white font-bold py-3 px-8 rounded-md transition-colors w-full"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;