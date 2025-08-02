import React from "react";
import Link from "next/link";

interface ApartmentDetailsProps {
  apartmentName: string;
}

const ApartmentDetails = ({ apartmentName }: ApartmentDetailsProps) => {
  // Decode the apartment name from URL
  const decodedApartmentName = decodeURIComponent(apartmentName).replace(/-/g, ' ');

  // Room types data structure
  const roomTypes = [
    {
      id: 1,
      type: "1BHK",
      price: "$1,200/month",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amenities: [
        "1 Bedroom",
        "1 Bathroom", 
        "Kitchen",
        "Balcony"
      ]
    },
    {
      id: 2,
      type: "2BHK",
      price: "$1,800/month",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amenities: [
        "2 Bedrooms",
        "2 Bathrooms",
        "Kitchen", 
        "Living Room",
        "Balcony"
      ]
    },
    {
      id: 3,
      type: "3BHK",
      price: "$2,400/month",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amenities: [
        "3 Bedrooms",
        "2 Bathrooms",
        "Kitchen",
        "Living Room", 
        "Dining Area",
        "Balcony"
      ]
    }
  ];

  return (
    <section className="!py-16 !px-6 lg:!px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Back to Apartments Link */}
        <div className="!mb-8">
          <Link 
            href="/apartments" 
            className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg className="w-4 h-4 !mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Apartments
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center !mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 !mb-4">
            Available Room Types
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect room type that fits your lifestyle and budget
          </p>
        </div>

        {/* Room Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomTypes.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.type}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Room Content */}
              <div className="!p-6">
                {/* Room Type and Price */}
                <div className="flex justify-between items-center !mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {room.type}
                  </h3>
                  <span className="text-xl font-bold text-gray-900">
                    {room.price}
                  </span>
                </div>

                {/* Amenities */}
                <div className="!mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 !mb-3">
                    Amenities:
                  </h4>
                  <ul className="space-y-2">
                    {room.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full !mr-3"></span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Details Button */}
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold !py-3 !px-4 rounded-lg transition-colors duration-200">
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

export default ApartmentDetails;