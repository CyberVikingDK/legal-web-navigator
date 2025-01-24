import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Import Footer component
import { motion } from "framer-motion"; // Import framer-motion

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const KVKK = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-3xl font-serif">KVKK (Kişisel Verilerin Korunması Kanunu)</h1>
            <div className="mt-4 md:mt-0">
              <a href="/" className="text-gray-300 hover:text-white transition-colors duration-300">Ana Sayfa /</a>
              <span className="text-gray-300"> Kurumsal / </span>
              <span>KVKK</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-lg relative"
          initial="hidden"
          animate="visible"
          variants={listVariants}
          style={{ backgroundImage: 'url("/images/paper-texture.png")', backgroundSize: 'cover' }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-90 rounded-lg"></div>
          <motion.h2 className="text-2xl font-serif text-primary mb-4 relative z-10" variants={itemVariants}>
            Kişisel Verilerin Korunması Kanunu Nedir?
          </motion.h2>
          <motion.p className="text-gray-700 mb-6 relative z-10" variants={itemVariants}>
            Kişisel Verilerin Korunması Kanunu (KVKK), kişisel verilerin işlenmesi, korunması ve bu verilerin gizliliğinin sağlanmasına yönelik düzenlemeler getiren bir kanundur. Bu kanun, bireylerin temel hak ve özgürlüklerini korumayı amaçlar.
          </motion.p>

          <motion.h2 className="text-2xl font-serif text-primary mb-4 relative z-10" variants={itemVariants}>
            KVKK Kapsamında Hizmetlerimiz
          </motion.h2>
          <motion.p className="text-gray-700 mb-6 relative z-10" variants={itemVariants}>
            Ayana Avukatlık Bürosu olarak, KVKK kapsamında aşağıdaki hizmetleri sunmaktayız:
          </motion.p>
          <motion.ul className="list-disc pl-6 mb-6 relative z-10" variants={listVariants}>
            <motion.li className="text-gray-700 mb-2" variants={itemVariants}>Kişisel veri işleme envanteri hazırlanması</motion.li>
            <motion.li className="text-gray-700 mb-2" variants={itemVariants}>KVKK uyum süreçlerinin yönetilmesi</motion.li>
            <motion.li className="text-gray-700 mb-2" variants={itemVariants}>Veri sorumluları sicil bilgi sistemi (VERBİS) kaydı</motion.li>
            <motion.li className="text-gray-700 mb-2" variants={itemVariants}>Kişisel veri işleme politikalarının oluşturulması</motion.li>
            <motion.li className="text-gray-700 mb-2" variants={itemVariants}>KVKK eğitimleri ve bilinçlendirme çalışmaları</motion.li>
            <motion.li className="text-gray-700 mb-2" variants={itemVariants}>KVKK denetimleri ve uygunluk değerlendirmeleri</motion.li>
          </motion.ul>

          <motion.h2 className="text-2xl font-serif text-primary mb-4 relative z-10" variants={itemVariants}>
            KVKK İhlali Durumunda Ne Yapılmalı?
          </motion.h2>
          <motion.p className="text-gray-700 mb-6 relative z-10" variants={itemVariants}>
            Kişisel verilerinizin hukuka aykırı şekilde işlendiğini düşünüyorsanız, öncelikle veri sorumlusuna başvuruda bulunabilirsiniz. Başvurunuzun olumsuz sonuçlanması durumunda, Kişisel Verileri Koruma Kurumu'na şikayette bulunabilirsiniz. Ayana Avukatlık Bürosu olarak, bu süreçte size hukuki destek sağlıyoruz.
          </motion.p>

          <motion.h2 className="text-2xl font-serif text-primary mb-4 relative z-10" variants={itemVariants}>
            KVKK Danışmanlığı
          </motion.h2>
          <motion.p className="text-gray-700 mb-6 relative z-10" variants={itemVariants}>
            KVKK uyum süreçlerinde ihtiyaç duyduğunuz tüm hukuki danışmanlık hizmetlerini sunuyoruz. Kurumsal müşterilerimiz için özel çözümler üretiyor ve KVKK uyum süreçlerini etkin bir şekilde yönetiyoruz.
          </motion.p>

          <motion.h2 className="text-2xl font-serif text-primary mb-4 relative z-10" variants={itemVariants}>
            İletişim
          </motion.h2>
          <motion.p className="text-gray-700 mb-6 relative z-10" variants={itemVariants}>
            KVKK ile ilgili daha fazla bilgi almak veya danışmanlık hizmeti talep etmek için bizimle iletişime geçebilirsiniz.
          </motion.p>
          <motion.div className="flex space-x-4 relative z-10" variants={itemVariants}>
            <a
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-md transition-colors"
            >
              İletişime Geç
            </a>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default KVKK;