import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import Benifits from "@/components/home/Benifits";
import HeroSection from "@/components/home/HeroSection";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Zada Stays Section */}
     <Benifits/>

      {/* Customer Testimonials Section */}
     <Testimonials/>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
