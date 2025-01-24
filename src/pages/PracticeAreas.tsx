import Navbar from "../components/Navbar";
import { motion } from "framer-motion"; // Import framer-motion
import { FaBalanceScale, FaGavel, FaHome, FaBriefcase, FaGlobe, FaUsers, FaLightbulb, FaBuilding, FaShieldAlt, FaUserShield, FaFileContract, FaHandshake } from 'react-icons/fa';

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const PracticeAreas = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-primary mb-6 text-center">Çalışma Alanlarımız</h1>
        <motion.div 
          className="prose max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={listVariants}
        >
          <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
            Ayana Avukatlık Bürosu olarak, müvekkillerimize geniş bir yelpazede hukuki hizmetler sunuyoruz. Uzman avukatlarımız, her alanda en güncel hukuki bilgilerle donanmış olarak çalışmalarını sürdürmektedir. İşte sunduğumuz başlıca hizmet alanları:
          </motion.p>

          <motion.div className="flex items-center mb-4" variants={itemVariants}>
            <FaBalanceScale className="text-primary mr-2" />
            <h2 className="text-2xl font-serif text-primary">1. Ticaret Hukuku</h2>
          </motion.div>
          <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
            Şirketlerin kuruluşu, birleşme ve devir işlemleri, ticari sözleşmeler, rekabet hukuku ve ticari uyuşmazlıkların çözümü gibi konularda danışmanlık ve dava takibi hizmetleri sunuyoruz.
          </motion.p>

          <motion.div className="flex items-center mb-4" variants={itemVariants}>
            <FaGavel className="text-primary mr-2" />
            <h2 className="text-2xl font-serif text-primary">2. Ceza Hukuku</h2>
          </motion.div>
          <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
            Ceza davalarında savunma, tutuklama ve gözaltı süreçlerinde hukuki destek, şikayet ve suç duyurusu süreçlerinin yönetilmesi gibi hizmetler veriyoruz.
          </motion.p>

          <motion.div className="flex items-center mb-4" variants={itemVariants}>
            <FaHome className="text-primary mr-2" />
            <h2 className="text-2xl font-serif text-primary">3. Aile Hukuku</h2>
          </motion.div>
          <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
            Boşanma, velayet, nafaka, mal paylaşımı ve aile içi şiddet gibi konularda hukuki danışmanlık ve dava takibi hizmetleri sunuyoruz.
          </motion.p>

          <motion.div className="flex items-center mb-4" variants={itemVariants}>
            <FaBuilding className="text-primary mr-2" />
            <h2 className="text-2xl font-serif text-primary">4. Gayrimenkul Hukuku</h2>
          </motion.div>
          <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
            Tapu işlemleri, kat mülkiyeti, kira uyuşmazlıkları, inşaat hukuku ve kamulaştırma süreçlerinde hukuki destek sağlıyoruz.
          </motion.p>

          <motion.div className="flex items-center mb-4" variants={itemVariants}>
            <FaBriefcase className="text-primary mr-2" />
            <h2 className="text-2xl font-serif text-primary">5. İş Hukuku</h2>
          </motion.div>
          <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
            İşçi ve işveren hakları, iş sözleşmeleri, işten çıkarma süreçleri, mobbing ve iş kazaları gibi konularda danışmanlık ve dava takibi hizmetleri sunuyoruz.
          </motion.p>

          <motion.div className="flex items-center mb-4" variants={itemVariants}>
            <FaGlobe className="text-primary mr-2" />
            <h2 className="text-2xl font-serif text-primary">6. Uluslararası Hukuk</h2>
          </motion.div>
          <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
            Yabancı uyruklu müvekkillerimiz için uluslararası ticaret hukuku, göçmenlik hukuku ve yabancılar hukuku alanlarında hukuki destek sağlıyoruz.
          </motion.p>

          <motion.div className="flex items-center mb-4" variants={itemVariants}>
            <FaUsers className="text-primary mr-2" />
            <h2 className="text-2xl font-serif text-primary">7. Miras Hukuku</h2>
          </motion.div>
          <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
            Miras paylaşımı, vasiyetname düzenleme, mirasçılık belgesi ve miras davaları gibi konularda hukuki danışmanlık hizmetleri sunuyoruz.
          </motion.p>

          <motion.div className="flex items-center mb-4" variants={itemVariants}>
            <FaLightbulb className="text-primary mr-2" />
            <h2 className="text-2xl font-serif text-primary">8. Fikri Mülkiyet Hukuku</h2>
          </motion.div>
          <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
            Telif hakları, patent, marka tescili ve fikri mülkiyet ihlalleri gibi konularda hukuki destek sağlıyoruz.
          </motion.p>

          <motion.div className="flex items-center mb-4" variants={itemVariants}>
            <FaShieldAlt className="text-primary mr-2" />
            <h2 className="text-2xl font-serif text-primary">9. İdare Hukuku</h2>
          </motion.div>
          <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
            Kamu hukuku alanında idari işlemler, vergi uyuşmazlıkları ve kamu ihale süreçlerinde hukuki danışmanlık hizmetleri sunuyoruz.
          </motion.p>

          <motion.div className="flex items-center mb-4" variants={itemVariants}>
            <FaUserShield className="text-primary mr-2" />
            <h2 className="text-2xl font-serif text-primary">10. Tüketici Hukuku</h2>
          </motion.div>
          <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
            Tüketici hakları, tüketici uyuşmazlıkları ve tüketici davaları gibi konularda hukuki destek sağlıyoruz.
          </motion.p>

          <motion.div className="flex items-center mb-4" variants={itemVariants}>
            <FaFileContract className="text-primary mr-2" />
            <h2 className="text-2xl font-serif text-primary">11. Sigorta Hukuku</h2>
          </motion.div>
          <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
            Sigorta sözleşmeleri, sigorta tazminat davaları ve sigorta uyuşmazlıkları gibi konularda hukuki danışmanlık hizmetleri sunuyoruz.
          </motion.p>

          <motion.div className="flex items-center mb-4" variants={itemVariants}>
            <FaHandshake className="text-primary mr-2" />
            <h2 className="text-2xl font-serif text-primary">12. Medeni Hukuk</h2>
          </motion.div>
          <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
            Borçlar hukuku, sözleşmeler hukuku ve özel hukuk alanında hukuki danışmanlık ve dava takibi hizmetleri sunuyoruz.
          </motion.p>

          <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
            Ayana Avukatlık Bürosu olarak, her bir hizmet alanında müvekkillerimize en iyi hukuki çözümleri sunmak için çalışıyoruz. Detaylı bilgi almak veya danışmanlık talep etmek için bizimle iletişime geçebilirsiniz.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default PracticeAreas;