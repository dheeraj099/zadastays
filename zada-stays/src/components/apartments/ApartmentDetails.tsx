import Link from "next/link";
import { notFound } from "next/navigation";
import {
  fetchApartmentBySlug,
  fetchRoomTypesForApartment,
  formatCurrency,
} from "@/lib/notion";

type RoomType = {
  id: string;
  name: string;
  price: number | null;
  amenities: string[];
  availability: boolean | string | null;
  description: string;
};

interface ApartmentDetailsProps {
  apartmentSlug: string;
}

const ApartmentDetails = async ({ apartmentSlug }: ApartmentDetailsProps) => {
  const apartment = await fetchApartmentBySlug(apartmentSlug);

  if (!apartment) {
    notFound();
  }

  const allRoomTypes = (await fetchRoomTypesForApartment(
    apartment.id,
  )) as RoomType[];

  // Filter to show only rooms with availability === true or "yes"
  const roomTypes = allRoomTypes.filter(
    (room) => room.availability === true || room.availability === "yes"
  );

  return (
    <section className="!py-16 !px-6 lg:!px-8 bg-white flex flex-col  items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="text-center !mb-16  flex flex-col items-center justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 !mb-4">
            {apartment.name}
          </h1>
          {(apartment.description || roomTypes.length > 0) && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center !mb-4">
              {apartment.description ||
                "Choose the perfect room type that fits your lifestyle and budget."}
            </p>
          )}
          <p className="text-base font-semibold uppercase tracking-wide text-gray-500">
            {apartment.location || "Featured Apartment"}
          </p>
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
            {roomTypes.map((room: RoomType) => (
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

                  <div className="h-4" />

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
                    href={`/apartments/${apartment.slug}/enquiry?roomType=${encodeURIComponent(room.name)}`}
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