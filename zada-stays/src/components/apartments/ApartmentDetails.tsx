import Link from "next/link";
import { notFound } from "next/navigation";
import {
  fetchApartmentBySlug,
  fetchRoomTypesForApartment,
  formatCurrency,
} from "@/lib/notion";

interface ApartmentDetailsProps {
  apartmentSlug: string;
}

const ApartmentDetails = async ({ apartmentSlug }: ApartmentDetailsProps) => {
  const apartment = await fetchApartmentBySlug(apartmentSlug);

  if (!apartment) {
    notFound();
  }

  const roomTypes = await fetchRoomTypesForApartment(apartment.id);

  return (
    <section className="!py-16 !px-6 lg:!px-8 bg-white flex flex-col  items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="text-center !mb-16  flex flex-col items-center justify-center">
          <p className="text-base font-semibold uppercase tracking-wide text-gray-500">
            {apartment.location || "Featured Apartment"}
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 !mb-4">
            {apartment.name}
          </h1>
          {(apartment.description || roomTypes.length > 0) && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
              {apartment.description ||
                "Choose the perfect room type that fits your lifestyle and budget."}
            </p>
          )}
        </div>

        {roomTypes.length === 0 ? (
          <div className="rounded-lg bg-gray-50 p-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 !mb-4">
              Room types coming soon
            </h2>
            <p className="text-gray-600">
              We are adding availability details for this apartment. Please
              check back shortly or reach out through the enquiry form.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomTypes.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="!p-6 flex flex-col h-full">
                  <div className="flex justify-between items-center !mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {room.name}
                    </h3>
                    {room.price != null ? (
                      <span className="text-xl font-bold text-gray-900">
                        {`${formatCurrency(room.price)}/month`}
                      </span>
                    ) : null}
                  </div>

                  {room.availability != null ? (
                    <span
                      className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-semibold ${
                        room.availability
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {room.availability ? "Available" : "Not Available"}
                    </span>
                  ) : null}

                  <div className="h-4" />

                  {room.description ? (
                    <p className="text-gray-600 leading-relaxed !mb-5">
                      {room.description}
                    </p>
                  ) : null}

                  {room.amenities.length > 0 ? (
                    <div className="!mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 !mb-3">
                        Amenities:
                      </h4>
                      <ul className="space-y-2">
                        {room.amenities.map((amenity) => (
                          <li
                            key={amenity}
                            className="flex items-center text-gray-600"
                          >
                            <span className="w-2 h-2 bg-green-500 rounded-full !mr-3"></span>
                            {amenity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <Link
                    href={`/apartments/${apartment.slug}/enquiry`}
                    className="mt-auto block w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold !py-3 !px-4 rounded-lg transition-colors duration-200 text-center"
                  >
                    View Details
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

export default ApartmentDetails;