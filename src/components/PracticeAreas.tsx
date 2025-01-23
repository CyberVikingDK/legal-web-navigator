import { Scale, Briefcase, Building, Users, Shield, Gavel } from "lucide-react";

const practices = [
  {
    title: "Corporate Law",
    description: "Comprehensive legal solutions for businesses of all sizes",
    icon: Building,
  },
  {
    title: "Civil Litigation",
    description: "Expert representation in civil disputes and litigation",
    icon: Gavel,
  },
  {
    title: "Family Law",
    description: "Compassionate guidance in family legal matters",
    icon: Users,
  },
  {
    title: "Criminal Defense",
    description: "Strong defense for your rights and freedom",
    icon: Shield,
  },
  {
    title: "Commercial Law",
    description: "Strategic advice for commercial transactions",
    icon: Briefcase,
  },
  {
    title: "Labor Law",
    description: "Protection of employee and employer rights",
    icon: Scale,
  },
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-primary mb-12">
          Practice Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice) => (
            <div
              key={practice.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <practice.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-serif text-primary mb-2">{practice.title}</h3>
              <p className="text-gray-600">{practice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;