"use client";

import { useState } from "react";
import Link from "next/link";

type Apartment = {
  id: string;
  name: string;
  slug: string;
  location: string;
  description: string;
  imageUrl: string | null;
  roomTypeIds: string[];
  hasAvailableRooms?: boolean;
};

const fallbackImage =
  "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1200&auto=format&fit=crop";

type ApartmentSearchProps = {
  apartments: Apartment[];
};

const ApartmentSearch = ({ apartments }: ApartmentSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  // Filter apartments by location and availability
  const filteredApartments = apartments.filter((apartment) => {
    // Filter by availability toggle
    if (showAvailableOnly && !apartment.hasAvailableRooms) {
      return false;
    }

    // Filter by location search
    if (!searchQuery.trim()) {
      return true;
    }
    const location = apartment.location?.toLowerCase() || "";
    const query = searchQuery.toLowerCase().trim();
    return location.includes(query);
  });

  return (
    <>
      {/* Search Bar and Toggle */}
      <div className="flex flex-col items-center gap-4 !mb-12 w-full">
        <div className="flex justify-center items-center gap-4 w-full max-w-2xl">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full !px-4 !py-3 pl-12 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all placeholder:text-gray-500 text-gray-900 text-center"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          
          {/* Toggle Button */}
          <div className="flex items-center gap-2 whitespace-nowrap">
            <label className="text-sm font-medium text-gray-700">
              Available only
            </label>
            <button
              type="button"
              onClick={() => setShowAvailableOnly(!showAvailableOnly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${
                showAvailableOnly ? "bg-gray-800" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  showAvailableOnly ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Apartment List or No Results Message */}
      {filteredApartments.length === 0 ? (
        <div className="rounded-lg bg-white p-12 text-center shadow">
          <p className="text-lg text-gray-600">
            Sorry, we don&apos;t have any property in this location. Please try
            searching with a different location.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredApartments.map((apartment: Apartment) => (
            <div
              key={apartment.id}
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={apartment.imageUrl ?? fallbackImage}
                  alt={apartment.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="!p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 !mb-2">
                  {apartment.name}
                </h3>
                {apartment.location ? (
                  <p className="text-gray-600 !mb-3 font-medium">
                    {apartment.location}
                  </p>
                ) : null}
                {apartment.description ? (
                  <p className="text-gray-700 !mb-6 leading-relaxed">
                    {apartment.description}
                  </p>
                ) : null}

                <Link
                  href={`/apartments/${apartment.slug}`}
                  className="block w-full !mt-auto"
                >
                  <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold !py-3 !px-4 rounded-lg transition-colors duration-200 cursor-pointer">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ApartmentSearch;

