import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import ApartmentBuildings from "@/components/apartments/ApartmentBuildings";

export default function Apartments() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Apartment Buildings Section */}
      <ApartmentBuildings />

      {/* Footer */}
      <Footer />
    </div>
  );
}