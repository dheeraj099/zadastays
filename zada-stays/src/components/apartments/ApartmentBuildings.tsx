import Link from "next/link";
import { fetchApartments } from "@/lib/notion";

const fallbackImage =
  "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1200&auto=format&fit=crop";

const ApartmentBuildings = async () => {
  const apartments = await fetchApartments();

  return (
    <section className="!py-16 !px-6 lg:!px-8 bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="text-center !mb-16 flex flex-col ">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 !mb-4">
            Our Apartment Buildings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl !mx-auto">
            Choose from our premium collection of apartment buildings in prime
            locations
          </p>
        </div>

        {apartments.length === 0 ? (
          <div className="rounded-lg bg-white p-12 text-center shadow">
            <p className="text-lg text-gray-600">
              We are updating our listings. Please check back shortly.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {apartments.map((apartment) => (
              <div
                key={apartment.id}
                className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={apartment.imageUrl ?? fallbackImage}
                    alt={apartment.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="!p-6 flex flex-col h-max flex-1">
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
                    className="block w-full"
                  >
                    <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold !py-3 !px-4 rounded-lg transition-colors duration-200 ">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ApartmentBuildings;