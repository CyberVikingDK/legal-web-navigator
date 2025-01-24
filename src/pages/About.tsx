import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Import Footer component
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // Import framer-motion
import { Mail, MapPin, Phone, Printer, Tablet } from "lucide-react"; // Import icons
import { FaMapPin } from "react-icons/fa";

const contactInfo = [
  { icon: Phone, text: "0312 433 66 23", link: "/contact" },
  { icon: Tablet, text: "0533 068 55 16", link: "/contact" },
  { icon: Mail, text: "gultenayana@ayana.av.tr", link: "mailto:gultenayana@ayana.av.tr" },
  { icon: FaMapPin, text: "Çukurambar Mah. Öğretmenler Cad. Kardelen Apt. No: 5/5 Çukurambar Ankara / TÜRKİYE", link: "https://www.google.com/maps?q=Çukurambar+Mah.+Öğretmenler+Cad.+Kardelen+Apt.+No:+5/5+Çukurambar+Ankara+/+TÜRKİYE" },
  { icon: Printer, text: "0312 435 38 49", link: "/contact" }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <motion.div 
        className="bg-black-222 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
      </motion.div>

      {/* EKİBİMİZ Section */}
      <div className="pt-0">
        <div className="bg-primary py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h1 className="text-white text-3xl font-serif">HAKKIMIZDA</h1>
              <div className="text-gray-200 mt-4 md:mt-0">
                <a href="/" className="text-gray-500 hover:text-white transition-colors duration-300">Ana Sayfa /</a>
                <a href="/kurumsal" className="text-gray-500 hover:text-white transition-colors duration-300"> Kurumsal / </a>
                <span className="text-white">Hakkımızda</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <motion.div 
            className="lg:w-3/4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-gray-50 p-6 rounded-lg">
              <motion.img 
                src="https://ayana.av.tr/upload/galeri/kurumsal11.png" 
                alt="AYANA HUKUK & ARABULUCULUK & DANIŞMANLIK BÜROSU" 
                className="w-full md:w-1/3 rounded-lg object-cover mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="space-y-4">
                  <h5 className="text-xl font-semibold text-primary">AYANA HUKUK & ARABULUCULUK & DANIŞMANLIK BÜROSU</h5>
                  <p className="text-lg font-bold">AYANA HUKUK BÜROSU</p>
                  <p className="text-gray-700">
                    Av. Gülten AYANA tarafından Ankara'da kurulmuştur. Ankara'da avukatlığa başlayan Gülten AYANA; inşaat, proje, enerji, elektrik taahhüt, akaryakıt, mimarlık, tarım, gıda ve turizm alanlarında kurumsal hukuk müşavirliği görevini yürütmektedir.
                  </p>
                  <p className="text-gray-700">
                    Özellikle istisna akitleri, sözleşme hukuku, basın hukuku, hizmet sözleşmeleri, ticari alacak davaları, kamu ihale, tüketici hukuku, icra ve iflas hukukuna ilişkin icra takibi ve devamındaki tüm ihtilaflar AYANA HUKUK BÜROSU'nun uzmanlık alanlarını oluşturmaktadır.
                  </p>
                  <p className="text-gray-700">
                    AYANA HUKUK BÜROSU, 2016 yılından itibaren OTOYOL YATIRIM VE İŞLETME A.Ş işletiminde olan GEBZE-ORHANGAZİ-İZMİR (İzmit Körfez Geçişi ve bağlantı yolları dahil) OTOYOLU ihlali geçiş icra takip dosyaları ve bunlarla ilgili Tüketici ve Ticaret Mahkemelerinde açılan davalar, Tüketici Hakem Heyeti Uyuşmazlıkları ve Sulh Ceza Davalarını yürütmektedir.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            className="lg:w-1/4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h5 className="text-lg font-semibold mb-4 pb-2 border-b">Kurumsal</h5>
              <ul className="space-y-2">
                <li>
                  <a href="/practice-areas" className="text-gray-700 hover:text-primary flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>ÇALIŞMA ALANLARIMIZ</span>
                  </a>
                </li>
                <li>
                  <a href="/articles" className="text-gray-700 hover:text-primary flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>MAKALELERİMİZ</span>
                  </a>
                </li>
                <li>
                  <a href="/team" className="text-gray-700 hover:text-primary flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>EKİBİMİZ</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-4 pb-2 border-b">İletişim Bilgileri</h5>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <info.icon className="text-primary" />
                    <a href={info.link} className="text-gray-700 hover:text-primary">{info.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer /> {/* Add Footer component */}
    </div>
  );
};

export default About;