import Navbar from "../components/Navbar";
import TeamComponent from "../components/Team";
import { motion } from "framer-motion"; // Import framer-motion

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

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
              <a href="/" className="text-gray-500 hover:text-white transition-colors duration-300">Ana Sayfa /</a>
              <a href="/kurumsal" className="text-gray-500 hover:text-white transition-colors duration-300"> Kurumsal / </a>
                <span className="text-white">Ekibimiz</span>
              </div>
            </div>
          </div>
        </div>
        <motion.div 
          className="container mx-auto px-4 py-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <TeamComponent />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;