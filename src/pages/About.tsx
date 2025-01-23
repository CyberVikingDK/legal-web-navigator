import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-black-222 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h3 className="text-white text-2xl">KURUMSAL</h3>
            <div className="text-white mt-4 md:mt-0">
              <span className="text-gray-400">Ana Sayfa / Kurumsal / </span>
              <span>AYANA HUKUK & ARABULUCULUK & DANIŞMANLIK BÜROSU</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <img 
                  src="https://ayana.av.tr/upload/galeri/kurumsal11.png" 
                  alt="AYANA HUKUK & ARABULUCULUK & DANIŞMANLIK BÜROSU" 
                  className="w-full md:w-1/3 rounded-lg"
                />
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
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h5 className="text-lg font-semibold mb-4 pb-2 border-b">Kurumsal</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-700 hover:text-primary flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>YARGITAY KARARLARI</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-primary flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>MAKALELERİMİZ</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-primary flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>ÇALIŞMA ALANLARIMIZ</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-4 pb-2 border-b">İletişim Bilgileri</h5>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <i className="fa fa-phone text-primary"></i>
                  <span>0312 435 38 49 / 0312 433 66 23</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa fa-tablet text-primary"></i>
                  <span>0533 068 55 16</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa fa-envelope-o text-primary"></i>
                  <span>gultenayana@ayana.av.tr</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;