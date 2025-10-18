import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/zadastaysbangalore?igsh=eTJybGl0YnU3ZjAy&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <InstagramIcon />
              </a>
              <a
                href=" https://wa.me/message/ZSUBJYAA5NMLK1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-bold !mb-6">Contact Information</h4>
            <div className="space-y-4 text-gray-300 flex flex-col gap-2">
             <p className="flex items-center">
  <span className="mr-3">📞</span>
  <a
    href="tel:6360234678"
    className="hover:underline hover:text-blue-600 transition-colors"
  >
    6360234678
  </a>
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
