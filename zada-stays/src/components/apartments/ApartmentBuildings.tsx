import { fetchApartments, fetchRoomTypesForApartment } from "@/lib/notion";
import ApartmentSearch from "./ApartmentSearch";

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

const ApartmentBuildings = async () => {
  const apartments = (await fetchApartments()) as Apartment[];

  // Check availability for each apartment
  const apartmentsWithAvailability = await Promise.all(
    apartments.map(async (apartment) => {
      const roomTypes = await fetchRoomTypesForApartment(apartment.id);
      // Check if any room type has availability = "yes" or true
      const hasAvailableRooms = roomTypes.some(
        (room: { availability: boolean | string | null }) =>
          room.availability === true || room.availability === "yes"
      );
      return { ...apartment, hasAvailableRooms };
    })
  );

  return (
    <section className="!py-16 !px-6 lg:!px-8 bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="text-center !mb-16 flex flex-col ">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 !mb-4">
            Our Apartments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl !mx-auto">
            Choose from our premium collection of apartment buildings in prime
            locations
          </p>
        </div>

        {apartmentsWithAvailability.length === 0 ? (
          <div className="rounded-lg bg-white p-12 text-center shadow">
            <p className="text-lg text-gray-600">
              We are updating our listings. Please check back shortly.
            </p>
          </div>
        ) : (
          <ApartmentSearch apartments={apartmentsWithAvailability} />
        )}
      </div>
    </section>
  );
};

export default ApartmentBuildings;