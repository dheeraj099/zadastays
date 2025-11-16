'use client';
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <div className="w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between !py-3 !px-6 lg:!px-8 xl:max-w-none">
        <p className="text-base font-semibold text-gray-900">Zada stays</p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            aria-current={isActive("/") ? "page" : undefined}
            className={`text-sm font-medium transition-colors ${
              isActive("/") ? "text-gray-900 border-b-2 border-gray-900 pb-1" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Home
          </Link>
          <Link
            href="/apartments"
            aria-current={isActive("/apartments") ? "page" : undefined}
            className={`text-sm font-medium transition-colors ${
              isActive("/apartments") ? "text-gray-900 border-b-2 border-gray-900 pb-1" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Apartments
          </Link>
          <Link
            href="/aboutUs"
            aria-current={isActive("/aboutUs") ? "page" : undefined}
            className={`text-sm font-medium transition-colors ${
              isActive("/aboutUs") ? "text-gray-900 border-b-2 border-gray-900 pb-1" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className={`text-sm font-medium transition-colors ${
              isActive("/contact") ? "text-gray-900 border-b-2 border-gray-900 pb-1" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
