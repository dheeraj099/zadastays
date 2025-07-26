import React from "react";

const ApartmentBuildings = () => {
  const apartments = [
    {
      id: 1,
      name: "Skyline Towers",
      location: "Downtown District",
      description: "Modern high-rise apartments with stunning city views",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Garden Heights",
      location: "Green Valley",
      description: "Peaceful residential complex surrounded by nature",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Metropolitan Plaza",
      location: "Business District",
      description: "Luxury apartments in the heart of the business district",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Riverside Commons",
      location: "Waterfront",
      description: "Contemporary living with beautiful river views",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="!py-16 !px-6 lg:!px-8 bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Section Header */}
        <div className="text-center !mb-16 flex flex-col ">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 !mb-4">
            Our Apartment Buildings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl !mx-auto">
            Choose from our premium collection of apartment buildings in prime locations
          </p>
        </div>

        {/* Apartment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apartment) => (
            <div
              key={apartment.id}
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Apartment Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={apartment.image}
                  alt={apartment.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Apartment Content */}
              <div className="!p-6 flex flex-col h-max flex-1">
                <h3 className="text-xl font-bold text-gray-900 !mb-2">
                  {apartment.name}
                </h3>
                <p className="text-gray-600 !mb-3 font-medium">
                  {apartment.location}
                </p>
                <p className="text-gray-700 !mb-6 leading-relaxed">
                  {apartment.description}
                </p>
                
                {/* View Details Button */}
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold !py-3 !px-4 rounded-lg transition-colors duration-200 ">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApartmentBuildings;