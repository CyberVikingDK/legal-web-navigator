import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion"; // Import framer-motion
import { Mail, MapPin, Phone, Printer, Tablet } from "lucide-react";
import { FaMapPin } from "react-icons/fa";

const contactInfo = [
  { icon: Phone, text: "0312 433 66 23", link: "tel:03124336623" },
  { icon: Tablet, text: "0533 068 55 16", link: "tel:05330685516" },
  { icon: Mail, text: "gultenayana@ayana.av.tr", link: "mailto:gultenayana@ayana.av.tr" },
  { icon: FaMapPin, text: "Çukurambar Mah. Öğretmenler Cad. Kardelen Apt. No: 5/5 Çukurambar Ankara / TÜRKİYE", link: "https://www.google.com/maps?q=Çukurambar+Mah.+Öğretmenler+Cad.+Kardelen+Apt.+No:+5/5+Çukurambar+Ankara+/+TÜRKİYE" },
  { icon: Printer, text: "0312 435 38 49", link: "tel:03124353849" }
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const FoundingLawyer = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* EKİBİMİZ Header Section */}
      <div className="pt-20"></div>

      {/* Kurucu Avukatımız Header Section */}
      <div className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-serif">KURUCU AVUKATIMIZ</h1>
            <div className="mt-4 md:mt-0">
              <a href="/" className="text-gray-500 hover:text-white transition-colors duration-300">Ana Sayfa /</a>
              <a href="/kurumsal" className="text-gray-500 hover:text-white transition-colors duration-300"> Kurumsal / </a>
              <span>KURUCU AVUKATIMIZ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="flex flex-col lg:flex-row gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Main Content Area */}
          <motion.div className="lg:w-3/4" variants={itemVariants}>
            <Card className="p-6">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                {/* Removed Image */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">KURUCU AVUKATIMIZ</h2>
                  <h3 className="text-xl font-semibold">Av. Gülten AYANA</h3>
                  <p className="text-lg">Ankara Barosu / Sicil No: 8752</p>
                  
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Avukat Gülten AYANA, Ayana Hukuk bürosunun kurucusu ve yöneticisidir. Ankara Üniversitesi Hukuk Fakültesi mezunu olan Av. Gülten AYANA, Ankara Barosu'na bağlı serbest avukat olarak faaliyetlerini sürdürmekte ve İş Hukuku, Tüketici Hukuku, Medeni Hukuk/Aile Hukuku, Miras Hukuku, Eşya Hukuku, İcra İflas Hukuku, Borçlar Hukuku, Ticaret Hukuku, Şirket Hukuku, Uluslararası Hukuk, Gayrimenkul Hukuku, Sözleşme Hukuku başlıca faaliyet ve uzmanlık alanlarını oluşturmaktadır.
                    </p>
                    <p>
                      Halen <strong>Türkiye Barolar Birliği temsilcisi olarak Reklam Kurulu üyeliği</strong> görevini yürütmektedir. Bu görevi nedeniyle tüketici hukuku alanında düzenlenen <strong>Tüketici Konseyi, Tüketici Hakem Heyetlerinin İyileştirilmesine yönelik AB toplantıları, Tüketici örgütlerinin düzenlediği toplantılar</strong> başta olmak üzere birçok toplantıya konuşmacı ve moderatör olarak katılmaktadır.
                    </p>
                    <p>
                      Av. Gülten AYANA, Türkiye Barolar Birliği'nin madde bağımlılığına karşı geliştirdiği <strong>HAYAT AĞACI PROJESİ'nde koordinatör</strong> olarak görev yapmıştır. 2017 yılından bu yana dezavantajlı gruplara yönelik sosyal sorumluluk projelerini hazırlayıp hayata geçiren <strong>ÇALIKUŞLARI DERNEĞİ'nin Genel Başkan yardımcılığı</strong> görevini yürütmektedir.
                    </p>
                    <p>
                      Av. Gülten AYANA, İstanbul Tahkim Merkezi (ISTAC) tarafından düzenlenen "Tahkimde Hakemlik" eğitimine katılmış ve düzenlenen sınavda başarılı olarak "Tahkimde Hakemlik Eğitimi Başarı Belgesi" almaya hak kazanmıştır.
                    </p>
                    <p>
                      <strong>Av. Arb. Gülten AYANA, halen NÜANS Arabuluculuk, Tahkim ve Uyuşmazlık Çözüm Merkezi'nin Kurucu Ortağı ve Yönetim Kurulu Başkanıdır.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div className="lg:w-1/4 space-y-6" variants={itemVariants}>
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-primary mb-4 pb-2 border-b">İletişim Bilgileri</h3>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <info.icon className="text-primary" />
                    <a href={info.link} className="text-gray-700 hover:text-primary">{info.text}</a>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </div>
      <Footer /> {/* Add Footer component */}
    </div>
  );
};

export default FoundingLawyer;