import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Modern building architecture"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          Your Home from Home
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Unwind in Style, Stay with a Smile
        </p>
        <Link href="/apartments" className="cursor-pointer">
          <button className="!mt-3 cursor-pointer bg-gray-800 hover:bg-gray-700 text-white font-semibold  !px-4 !py-2 rounded-lg transition-colors text-xl border border-gray-600">
            View Apartments
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
