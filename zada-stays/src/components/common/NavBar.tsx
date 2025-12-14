"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/apartments", label: "APARTMENTS" },
    { href: "/aboutUs", label: "ABOUT US" },
    { href: "/contact", label: "CONTACT US" },
  ];

  return (
    <>
      <div className="w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between !py-3 !px-6 lg:!px-8 xl:max-w-none">
          <Image
            src="/zada-stays-main-logo.png"
            alt="Zada stays"
            width={200}
            height={100}
            className="h-6 w-auto"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-8 h-8 focus:outline-none focus:ring-2 focus:ring-gray-900 rounded transition-all"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Backdrop Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`md:hidden fixed top-[57px] right-0 h-[calc(100vh-57px)] w-64 bg-gray-50 shadow-xl z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col h-full !space-y-6 !p-[20px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-base font-medium transition-colors py-3 ${
                isActive(link.href)
                  ? "text-gray-900 bg-white border-l-4 border-gray-900 shadow-sm !rounded-[0px] !pl-5 !pr-4"
                  : "text-gray-700 hover:text-gray-900 hover:bg-white/50 px-4 rounded-lg"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default NavBar; 