import { User, Phone, Mail, MapPin, Tablet, Printer } from "lucide-react";
import { FaMapPin } from "react-icons/fa";

const teamMembers = [
  {
    category: "KURUCUMUZ",
    members: [
      {
        name: "Av. Gülten AYANA",
        title: "Ankara Barosu Sicil No:8752",
      }
    ]
  },
  {
    category: "AVUKATLARIMIZ",
    members: [
      {
        name: "Av. Serdıl AY",
        title: "Ankara 1 Nolu Barosu / Sicil No: 43437",
      },
      {
        name: "Stajyer Av. Erkan AĞIN",
        title: "Ankara Barosu",
      }
    ]
  },
  {
    category: "EKİP ÜYELERİMİZ",
    members: [
      {
        name: "Gülcan KUNAR",
        title: "Genel Koordinatör",
      },
      {
        name: "Rahime Gül SEVİL",
        title: "Call Center (İcra Takip Sorumlusu)",
      },
      {
        name: "Gökçe GÜRHAN",
        title: "Call Center (İcra Takip Sorumlusu)",
      }
    ]
  }
];

const contactInfo = [
  { icon: Phone, text: "0312 433 66 23" },
  { icon: Tablet, text: "0533 068 55 16" },
  { icon: Mail, text: "gultenayana@ayana.av.tr" },
  { icon: FaMapPin, text: "Çukurambar Mah. Öğretmenler Cad. Kardelen Apt. No: 5/5 Çukurambar Ankara / TÜRKİYE" },
  { icon: Printer, text: "0312 435 38 49"},
];

const Team = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-primary">EKİBİMİZ</h2>
                  
                  {teamMembers.map((category, idx) => (
                    <div key={idx} className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary-dark">
                        {category.category}
                      </h3>
                      <div className="space-y-3">
                        {category.members.map((member, memberIdx) => (
                          <div key={memberIdx} className="flex items-start gap-2">
                            <User className="w-5 h-5 mt-1 text-primary" />
                            <div>
                              <p className="font-semibold">{member.name}</p>
                              <p className="text-gray-600">{member.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-4 pb-2 border-b">
                İletişim Bilgileri
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <item.icon className="w-5 h-5 mt-1 text-primary" />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;