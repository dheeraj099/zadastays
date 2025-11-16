import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between !py-3 !px-6 lg:!px-8">
        <p className="text-base font-semibold text-gray-900">Zada stays</p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Home</Link>
          <Link href="/apartments" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Apartments</Link>
          <Link href="/aboutUs" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">About Us</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Contact us</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;