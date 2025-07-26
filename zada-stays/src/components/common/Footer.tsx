import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white !py-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto !px-6 lg:!px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Zada Stays */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold !mb-6">Zada Stays</h3>
            <p className="text-gray-300 !mb-6 leading-relaxed">
              Your trusted partner in finding the perfect living space. We
              connect you with premium apartments in prime locations.
            </p>
            <div className="flex space-x-6 !my-3 gap-2">
              <FacebookIcon/>
              <InstagramIcon/>
              
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-bold !mb-6">Contact Information</h4>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-center">
                <span className="mr-3">📞</span>
                +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <span className="mr-3">✉️</span>
                info@zadastays.com
              </p>
              <p className="flex items-center">
                <span className="mr-3">📍</span>
                123 Main Street, City, State 12345
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
          <p className="text-lg !mt-2">© 2025 Zada Stays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
