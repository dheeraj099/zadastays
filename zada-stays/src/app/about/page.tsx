import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="!min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <section className="!relative !h-96 !w-full !flex !items-center !justify-center !overflow-hidden">
        {/* Background Image */}
        <div className="!absolute !inset-0 !-z-10">
          <Image
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Zada Stays"
            className="!w-full !h-full !object-cover"
            fill
            priority
          />
          {/* Dark overlay */}
          <div className="!absolute !inset-0 !bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="!relative !z-10 !text-center !text-white !px-6 lg:!px-8 !max-w-4xl !mx-auto">
          <h1 className="!text-4xl sm:!text-5xl lg:!text-6xl !font-bold !mb-4 !leading-tight">
            About Us
          </h1>
          <p className="!text-lg sm:!text-xl lg:!text-2xl !max-w-2xl !mx-auto !leading-relaxed">
            Making Every Stay Feel Like Home
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="!bg-white !py-20 !flex !items-center !justify-center">
        <div className="!max-w-7xl !mx-auto !px-6 lg:!px-8">
          <div className="!text-center !mb-16">
            <h2 className="!text-4xl sm:!text-5xl !font-bold !text-gray-900 !mb-6">
              🔹 Our Story
            </h2>
            <h3 className="!text-2xl sm:!text-3xl !font-bold !text-gray-800 !mb-6">
              Making Every Stay Feel Like Home
            </h3>
            <p className="!text-xl !text-gray-600 !max-w-4xl !mx-auto !leading-relaxed">
              Zada Stays was established with one goal — to make your dream home come true.
              We provide well-furnished service apartments designed for comfort, convenience, and peace. 
              Our mission is to deliver premium living experiences that feel warm, personal, and affordable.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="!bg-gray-50 !py-20 !flex !items-center !justify-center">
        <div className="!max-w-7xl !mx-auto !px-6 lg:!px-8">
          <div className="!text-center !mb-16">
            <h2 className="!text-4xl sm:!text-5xl !font-bold !text-gray-900 !mb-12">
              🔹 Our Vision & Mission
            </h2>
          </div>
          
          <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-12">
            {/* Vision Card */}
            <div className="!bg-white !p-8 !rounded-lg !shadow-lg !border !border-gray-100">
              <h3 className="!text-2xl !font-bold !text-gray-900 !mb-6">Vision</h3>
              <p className="!text-lg !text-gray-600 !leading-relaxed">
                To be Bangalore&apos;s most trusted name for comfortable and affordable serviced apartments.
              </p>
            </div>

            {/* Mission Card */}
            <div className="!bg-white !p-8 !rounded-lg !shadow-lg !border !border-gray-100">
              <h3 className="!text-2xl !font-bold !text-gray-900 !mb-6">Mission</h3>
              <p className="!text-lg !text-gray-600 !leading-relaxed">
                To provide modern, fully furnished homes where comfort meets convenience — helping every guest feel at home from the moment they arrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="!bg-white !py-20 !flex !items-center !justify-center">
        <div className="!max-w-7xl !mx-auto !px-6 lg:!px-8">
          <div className="!text-center !mb-16">
            <h2 className="!text-4xl sm:!text-5xl !font-bold !text-gray-900 !mb-6">
              🔹 What We Offer
            </h2>
          </div>

          <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-8">
            {/* Offer Card 1 */}
            <div className="!bg-white !p-6 !rounded-lg !shadow-lg !text-center !border !border-gray-100">
              <div className="!text-3xl !mb-4">🏠</div>
              <h3 className="!text-xl !font-bold !text-gray-900 !mb-3">
                Fully Furnished Apartments
              </h3>
              <p className="!text-gray-600 !leading-relaxed">
                Single, 1BHK, 2BHK options available
              </p>
            </div>

            {/* Offer Card 2 */}
            <div className="!bg-white !p-6 !rounded-lg !shadow-lg !text-center !border !border-gray-100">
              <div className="!text-3xl !mb-4">📅</div>
              <h3 className="!text-xl !font-bold !text-gray-900 !mb-3">
                Flexible Stays
              </h3>
              <p className="!text-gray-600 !leading-relaxed">
                Short or Long Term options
              </p>
            </div>

            {/* Offer Card 3 */}
            <div className="!bg-white !p-6 !rounded-lg !shadow-lg !text-center !border !border-gray-100">
              <div className="!text-3xl !mb-4">📍</div>
              <h3 className="!text-xl !font-bold !text-gray-900 !mb-3">
                Prime Bangalore Locations
              </h3>
              <p className="!text-gray-600 !leading-relaxed">
                Strategic locations across the city
              </p>
            </div>

            {/* Offer Card 4 */}
            <div className="!bg-white !p-6 !rounded-lg !shadow-lg !text-center !border !border-gray-100">
              <div className="!text-3xl !mb-4">🚀</div>
              <h3 className="!text-xl !font-bold !text-gray-900 !mb-3">
                Quick Support
              </h3>
              <p className="!text-gray-600 !leading-relaxed">
                Hassle-Free Check-in process
              </p>
            </div>

            {/* Offer Card 5 */}
            <div className="!bg-white !p-6 !rounded-lg !shadow-lg !text-center !border !border-gray-100">
              <div className="!text-3xl !mb-4">✨</div>
              <h3 className="!text-xl !font-bold !text-gray-900 !mb-3">
                Clean & Safe Spaces
              </h3>
              <p className="!text-gray-600 !leading-relaxed">
                Well-Maintained environments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="!bg-gray-50 !py-20 !flex !items-center !justify-center">
        <div className="!max-w-7xl !mx-auto !px-6 lg:!px-8">
          <div className="!text-center">
            <h2 className="!text-4xl sm:!text-5xl !font-bold !text-gray-900 !mb-6">
              🔹 Our Promise
            </h2>
            <div className="!text-3xl !mb-6">💛</div>
            <h3 className="!text-2xl sm:!text-3xl !font-bold !text-gray-800 !mb-6">
              Comfort. Convenience. Care.
            </h3>
            <p className="!text-xl !text-gray-600 !max-w-3xl !mx-auto !leading-relaxed">
              Every detail at Zada Stays is designed to make your stay simple and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="!bg-white !py-20 !flex !items-center !justify-center">
        <div className="!max-w-7xl !mx-auto !px-6 lg:!px-8">
          <div className="!text-center !mb-12">
            <h2 className="!text-4xl sm:!text-5xl !font-bold !text-gray-900 !mb-6">
              🔹 Contact Section
            </h2>
            <h3 className="!text-2xl sm:!text-3xl !font-bold !text-gray-800 !mb-6">
              Let&apos;s Find Your Perfect Home Together
            </h3>
            <p className="!text-xl !text-gray-600 !max-w-3xl !mx-auto !mb-8 !leading-relaxed">
              📞 Call or WhatsApp us today to explore our available properties and make your booking with ease.
            </p>
            
            {/* Company Policies Section */}
            <div className="!mb-12 !max-w-2xl !mx-auto">
              <div className="!bg-gradient-to-r !from-blue-50 !to-indigo-50 !p-8 !rounded-xl !border !border-blue-200 !shadow-lg hover:!shadow-xl !transition-all !duration-300">
                <div className="!text-center">
                  <div className="!text-4xl !mb-4">📋</div>
                  <h4 className="!text-xl !font-bold !text-gray-800 !mb-3">
                    Important Information
                  </h4>
                  <p className="!text-gray-600 !mb-6 !leading-relaxed">
                    Before you join our community, please review our terms and policies to ensure a smooth experience for everyone.
                  </p>
                  <Link href="/company-policies" target="_blank" rel="noopener noreferrer">
                    <button className="!bg-blue-600 hover:!bg-blue-700 !text-white !font-semibold !px-8 !py-4 !rounded-lg !transition-all !duration-300 !text-lg !border !border-blue-600 !shadow-md hover:!shadow-lg !transform hover:!-translate-y-1">
                      📋 View Company Policies
                      <span className="!ml-2 !text-sm">↗</span>
                    </button>
                  </Link>
                  <p className="!text-sm !text-gray-500 !mt-3">
                    Opens in new tab • Takes 2 minutes to read
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="!flex !flex-col sm:!flex-row !gap-4 !justify-center !items-center">
            <Link href="/contact">
              <button className="!bg-blue-600 hover:!bg-blue-700 !text-white !font-semibold !px-6 !py-3 !rounded-lg !transition-colors !text-lg !border !border-blue-600 !flex !items-center !gap-2">
                📞 Call Us
              </button>
            </Link>
            <Link href="/contact">
              <button className="!bg-green-600 hover:!bg-green-700 !text-white !font-semibold !px-6 !py-3 !rounded-lg !transition-colors !text-lg !border !border-green-600 !flex !items-center !gap-2">
                📧 Send Enquiry
              </button>
            </Link>
            <Link href="/contact">
              <button className="!bg-gray-800 hover:!bg-gray-700 !text-white !font-semibold !px-6 !py-3 !rounded-lg !transition-colors !text-lg !border !border-gray-600 !flex !items-center !gap-2">
                📍 Get Directions
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;