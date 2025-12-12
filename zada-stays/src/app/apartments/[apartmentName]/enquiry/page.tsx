import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import { notFound } from "next/navigation";
import {
  fetchApartmentBySlug,
  fetchRoomTypesForApartment,
  formatCurrency,
} from "@/lib/notion";
import EnquiryForm from "@/components/apartments/EnquiryForm";

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

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 !mb-3">
                    Description
                  </h3>
                  <div className="text-gray-600 leading-relaxed">
                    {(() => {
                      const lines = (description ||
                        "We will share complete apartment details once we receive your enquiry.")
                        .split("\n");
                      
                      return lines.map((line: string, index: number) => {
                        const processLine = (text: string) => {
                          const parts: (string | React.ReactElement)[] = [];
                          const matches: Array<{ index: number; length: number; text: string; key: string; isLink?: boolean; linkUrl?: string }> = [];
                          
                          // Check for "📍 Location Link:"
                          const locationLinkIndex = text.indexOf("📍 Location Link:");
                          if (locationLinkIndex !== -1) {
                            matches.push({
                              index: locationLinkIndex,
                              length: "📍 Location Link:".length,
                              text: "📍 Location Link:",
                              key: `location-label-${index}`,
                              isLink: false
                            });
                          }
                          
                          // Find all matches
                          const amenitiesIndex = text.indexOf("⭐ AMENITIES");
                          if (amenitiesIndex !== -1) {
                            matches.push({
                              index: amenitiesIndex,
                              length: "⭐ AMENITIES".length,
                              text: "⭐ AMENITIES",
                              key: `amenities-${index}`
                            });
                          }
                          
                          const chargesIndex = text.indexOf("⚡ ADDITIONAL CHARGES");
                          if (chargesIndex !== -1) {
                            matches.push({
                              index: chargesIndex,
                              length: "⚡ ADDITIONAL CHARGES".length,
                              text: "⚡ ADDITIONAL CHARGES",
                              key: `charges-${index}`
                            });
                          }
                          
                          // Check for "💵 Rent"
                          const rentIndex = text.indexOf("💵 Rent");
                          if (rentIndex !== -1) {
                            matches.push({
                              index: rentIndex,
                              length: "💵 Rent".length,
                              text: "💵 Rent",
                              key: `rent-${index}`
                            });
                          }
                          
                          // Check for "💰 Deposit"
                          const depositIndex = text.indexOf("💰 Deposit");
                          if (depositIndex !== -1) {
                            matches.push({
                              index: depositIndex,
                              length: "💰 Deposit".length,
                              text: "💰 Deposit",
                              key: `deposit-${index}`
                            });
                          }
                          
                          // Check for "🛠️ Maintenance"
                          const maintenanceIndex = text.indexOf("🛠️ Maintenance");
                          if (maintenanceIndex !== -1) {
                            matches.push({
                              index: maintenanceIndex,
                              length: "🛠️ Maintenance".length,
                              text: "🛠️ Maintenance",
                              key: `maintenance-${index}`
                            });
                          }
                          
                          // Sort matches by index
                          matches.sort((a, b) => a.index - b.index);
                          
                          if (matches.length === 0) {
                            return [text];
                          }
                          
                          let lastIndex = 0;
                          matches.forEach((match) => {
                            // Add text before the match
                            if (match.index > lastIndex) {
                              parts.push(text.substring(lastIndex, match.index));
                            }
                            
                            // Add styled match
                            parts.push(
                              <span key={match.key} className="text-lg font-semibold text-gray-900">
                                {match.text}
                              </span>
                            );
                            
                            lastIndex = match.index + match.length;
                          });
                          
                          // Add remaining text
                          if (lastIndex < text.length) {
                            parts.push(text.substring(lastIndex));
                          }
                          
                          return parts;
                        };
                        
                        // Check if previous line contains "📍 Location Link:" and current line is a URL
                        const prevLine = index > 0 ? lines[index - 1] : "";
                        const isLocationLinkValue = prevLine.includes("📍 Location Link:") && line.trim();
                        
                        if (isLocationLinkValue) {
                          // Check if it's a URL
                          const trimmedLine = line.trim();
                          const isUrl = /^https?:\/\//i.test(trimmedLine);
                          const linkUrl = isUrl ? trimmedLine : (trimmedLine.startsWith('www.') ? `https://${trimmedLine}` : trimmedLine);
                          
                          return (
                            <p key={index} className={index > 0 ? "!mt-0.5" : ""}>
                              <a
                                href={linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 underline"
                              >
                                {trimmedLine}
                              </a>
                            </p>
                          );
                        }
                        
                        return (
                          <p key={index} className={index > 0 ? "!mt-0.5" : ""}>
                            {processLine(line || "\u00A0")}
                          </p>
                        );
                      });
                    })()}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Enquiry Form */}
            <EnquiryForm
              apartmentName={displayName}
              apartmentLocation={apartment.location || ""}
            />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
