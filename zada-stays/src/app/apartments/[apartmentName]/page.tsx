import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import ApartmentDetails from "@/components/apartments/ApartmentDetails";

interface ApartmentPageProps {
  params: Promise<{
    apartmentName: string;
  }>;
}

export default async function ApartmentPage({ params }: ApartmentPageProps) {
  const { apartmentName } = await params;

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Apartment Details Section */}
      <ApartmentDetails apartmentSlug={apartmentName} />

      {/* Footer */}
      <Footer />
    </div>
  );
}