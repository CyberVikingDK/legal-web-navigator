const attorneys = [
  {
    name: "John Smith",
    title: "Senior Partner",
    image: "/placeholder.svg",
    specialization: "Corporate Law",
  },
  {
    name: "Sarah Johnson",
    title: "Partner",
    image: "/placeholder.svg",
    specialization: "Civil Litigation",
  },
  {
    name: "Michael Brown",
    title: "Associate",
    image: "/placeholder.svg",
    specialization: "Family Law",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-primary mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney) => (
            <div
              key={attorney.name}
              className="bg-secondary p-6 rounded-lg text-center group hover:shadow-lg transition-shadow"
            >
              <img
                src={attorney.image}
                alt={attorney.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-serif text-primary mb-1">{attorney.name}</h3>
              <p className="text-accent font-medium mb-2">{attorney.title}</p>
              <p className="text-gray-600">{attorney.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;