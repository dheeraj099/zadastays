import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import ApartmentDetails from "@/components/apartments/ApartmentDetails";

interface ApartmentPageProps {
  params: {
    apartmentName: string;
  };
}

export default function ApartmentPage({ params }: ApartmentPageProps) {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Apartment Details Section */}
      <ApartmentDetails apartmentName={params.apartmentName} />

      {/* Footer */}
      <Footer />
    </div>
  );
}