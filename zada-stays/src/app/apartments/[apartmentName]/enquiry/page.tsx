import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import { notFound } from "next/navigation";
import {
  fetchApartmentBySlug,
  fetchRoomTypesForApartment,
  formatCurrency,
} from "@/lib/notion";

interface EnquiryPageProps {
  params: Promise<{
    apartmentName: string;
  }>;
}

export default async function EnquiryPage({ params }: EnquiryPageProps) {
  const { apartmentName } = await params;
  const apartment = await fetchApartmentBySlug(apartmentName);

  if (!apartment) {
    notFound();
  }

  const roomTypes = await fetchRoomTypesForApartment(apartment.id);
  const primaryRoomType = roomTypes[0] ?? null;

  const formattedPrice = primaryRoomType
    ? formatCurrency(primaryRoomType.price)
    : null;

  const amenities = primaryRoomType?.amenities ?? [];
  const description =
    primaryRoomType?.description || apartment.description || "";
  const displayName = apartment.name;
  const imageUrl =
    apartment.imageUrl ??
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-gray-50  ">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <div className="flex flex-col   items-center">
        <div className="max-w-7xl mx-auto !px-6 lg:!px-8 !py-8 ">
          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Apartment Details */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Apartment Image */}
              <div className="h-80">
                <img
                  src={imageUrl}
                  alt={displayName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Apartment Info */}
              <div className="!p-6 flex flex-col ">
                <h2 className="text-2xl font-bold text-gray-900 !mb-2">
                  {displayName}
                </h2>
                <p className="text-2xl font-bold text-gray-900 !mb-6">
                  {formattedPrice ?? "Pricing on request"}
                </p>

                {/* Amenities */}
                <div className="!mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 !mb-4">
                    Amenities
                  </h3>
                  {amenities.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4">
                      {amenities.map((amenity:string) => (
                        <div className="flex items-center" key={amenity}>
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          <span className="text-gray-600">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">
                      Amenities details will be shared during the follow-up.
                    </p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 !mb-3">
                    Description
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {description ||
                      "We will share complete apartment details once we receive your enquiry."}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Enquiry Form */}
            <div className="bg-white rounded-lg shadow-lg !p-8">
              <h2 className="text-2xl font-bold text-gray-900 !mb-2">
                Interested? Send us an enquiry
              </h2>
              <p className="text-gray-600 !mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </p>

              <form className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 !mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    className="w-full !px-4 !py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                {/* Phone Nu!mber */}
                <div>
                  <label
                    htmlFor="phoneNu!mber"
                    className="block text-sm font-medium text-gray-700 !mb-2"
                  >
                    Phone Nu!mber *
                  </label>
                  <input
                    type="tel"
                    id="phoneNu!mber"
                    name="phoneNu!mber"
                    placeholder="Enter your phone nu!mber"
                    className="w-full !px-4 !py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 !mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full !px-4 !py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold !py-3 !px-6 rounded-lg transition-colors duration-200"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
