import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center !py-3 !px-40 bg-white  justify-between">
      <p className=" text-sm font-medium">Zada stays</p>
      <div className="flex items-center justify-center gap-3">
        <Link href="/" className="text-sm font-medium hover:text-gray-600 transition-colors">Home</Link>
        <Link href="/apartments" className="text-sm font-medium hover:text-gray-600 transition-colors">Apartments</Link>
        <Link href="/about" className="text-sm font-medium hover:text-gray-600 transition-colors">About Us</Link>
        <Link href="/contact" className="text-sm font-medium hover:text-gray-600 transition-colors">Contact us</Link>
      </div>
    </div>
  );
};

export default NavBar;
