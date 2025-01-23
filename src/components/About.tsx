import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif text-primary mb-6">AYANA HUKUK & ARABULUCULUK & DANIŞMANLIK BÜROSU</h2>
            <p className="text-gray-600 mb-6">
              AYANA HUKUK BÜROSU Av. Gülten AYANA tarafından Ankara'da kurulmuştur. Ankara'da avukatlığa başlayan Gülten AYANA; inşaat, proje, enerji, elektrik taahhüt, akaryakıt, mimarlık, tarım, gıda ve turizm alanlarında kurumsal hukuk müşavirliği görevini yürütmektedir.
            </p>
            <Button variant="outline">Devamını Oku</Button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://ayana.av.tr/upload/galeri/kurumsal11.png" 
              alt="Ayana Hukuk Bürosu" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;