import React from "react";

const IconFacebook = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.24 0-1.63.77-1.63 1.57v1.89h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93Z" />
  </svg>
);

const IconInstagram = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm10 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
  </svg>
);

const IconWhatsApp = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.73 0 .5 5.23.5 11.66c0 2.06.53 4.07 1.53 5.87L0 24l6.6-2.02a11.54 11.54 0 005.44 1.37h.01c6.32 0 11.55-5.23 11.55-11.66 0-3.11-1.21-6.03-3.58-8.21zM12.05 21.2c-1.74 0-3.45-.47-4.95-1.34l-.35-.2-3.92 1.2 1.15-3.78-.23-.39a9.6 9.6 0 01-1.45-5.11c0-5.32 4.33-9.64 9.65-9.64 2.57 0 4.99 1 6.82 2.82a9.62 9.62 0 012.83 6.83c0 5.32-4.33 9.63-9.55 9.63zm5.48-7.22c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.66.15-.2.3-.76.98-.93 1.18-.17.2-.34.23-.64.08-.3-.15-1.26-.46-2.4-1.47-.89-.77-1.5-1.72-1.68-2.02-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.51l-.56-.01a1.07 1.07 0 00-.77.36c-.27.3-1.02.99-1.02 2.42 0 1.43 1.04 2.81 1.19 3.01.15.2 2.04 3.15 4.93 4.32.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white !py-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto !px-6 lg:!px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Zada Stays */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold !mb-6">Zada Stays</h3>
            <p className="text-gray-300 !mb-6 leading-relaxed">
              Unwind in Style, Stay with a Smile
            </p>
            <div className="flex space-x-6 !my-3 gap-2">
              <a
                href="https://www.facebook.com/zadastaysbangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <IconFacebook />
              </a>
              <a
                href="https://www.instagram.com/zadastaysbangalore?igsh=eTJybGl0YnU3ZjAy&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <IconInstagram />
              </a>
              <a
                href="https://wa.me/918105710678"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <IconWhatsApp />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-bold !mb-6">Contact Information</h4>
            <div className="space-y-4 text-gray-300 flex flex-col gap-2">
             <p className="flex items-center">
  <span className="mr-3">📞</span>
  <span className="flex flex-col gap-1">
    <a
      href="tel:+918105710678"
      className="hover:underline hover:text-blue-600 transition-colors"
    >
      +91 810 571 0678
    </a>
    <a
      href="tel:+918123684678"
      className="hover:underline hover:text-blue-600 transition-colors"
    >
      +91 812 368 4678
    </a>
  </span>
</p>

             <p className="flex items-center">
  <span className="mr-3">✉️</span>
  <a
    href="mailto:zadastays@gmail.com"
    className="hover:underline hover:text-blue-600 transition-colors"
  >
    zadastays@gmail.com
  </a>
</p>
              <p className="flex items-center">
                <span className="mr-3">📍</span>
               Zada Stays, 170/B, 5th Main Rd, Thayappa Garden, Ranka Colony, Bilekahalli, Bengaluru, Karnataka 560076
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h4 className="text-xl font-bold !mb-6">Stay Updated</h4>
            <p className="text-gray-300 !mb-6 leading-relaxed">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 !px-4 !py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 !px-6 !py-3 rounded-r-lg transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 !mt-12 pt-8 text-center text-gray-300">
          <p className="text-lg !mt-2">
            © 2025 Zada Stays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;