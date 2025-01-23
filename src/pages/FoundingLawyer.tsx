import Navbar from "../components/Navbar";
import { Card } from "@/components/ui/card";

const FoundingLawyer = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-serif">KURUMSAL</h1>
            <div className="mt-4 md:mt-0">
              <span className="text-gray-300">Ana Sayfa / Kurumsal / </span>
              <span>KURUCU AVUKATIMIZ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <Card className="p-6">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <img 
                  src="/upload/galeri/logo_bB_2.png"
                  alt="Av. Gülten AYANA"
                  className="w-full md:w-1/3 rounded-lg object-cover"
                />
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
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-primary mb-4 pb-2 border-b">İletişim Bilgileri</h3>
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
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundingLawyer;