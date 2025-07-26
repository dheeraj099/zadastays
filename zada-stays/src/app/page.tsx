import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="text-white text-2xl font-bold">
              Zada Stays
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                Apartments
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                Contact us
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Modern building architecture"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Find Your Perfect Home
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Discover premium apartments with Zada Stays - your trusted partner in finding the ideal living space
          </p>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg">
            View Apartments
          </button>
        </div>
      </section>

      {/* Why Choose Zada Stays Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zada Stays?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide exceptional service and quality apartments to make your search for the perfect home effortless.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable Prices</h3>
              <p className="text-gray-600">Competitive pricing that fits your budget without compromising quality.</p>
            </div>
            
            {/* Feature Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prime Locations</h3>
              <p className="text-gray-600">Strategically located apartments in the most desirable neighborhoods.</p>
            </div>
            
            {/* Feature Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-4">🎧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Customer Support</h3>
              <p className="text-gray-600">Round-the-clock assistance to help you with any questions or concerns.</p>
            </div>
            
            {/* Feature Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Listings</h3>
              <p className="text-gray-600">All our listings are thoroughly verified to ensure quality and authenticity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied customers about their experience with Zada Stays.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Zada Stays helped me find the perfect apartment in just a week. The process was smooth and the team was incredibly helpful!"
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The quality of apartments and the level of service exceeded my expectations. Highly recommend!"
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Emily Rodriguez</h4>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Professional, reliable, and truly care about their customers. Found my dream home through Zada Stays!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Zada Stays */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Zada Stays</h3>
              <p className="text-gray-300 mb-4">
                Your trusted partner in finding the perfect living space. We connect you with premium apartments in prime locations.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">📘</a>
                <a href="#" className="text-gray-300 hover:text-white">📷</a>
                <a href="#" className="text-gray-300 hover:text-white">📺</a>
                <a href="#" className="text-gray-300 hover:text-white">💼</a>
              </div>
            </div>
            
            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ info@zadastays.com</p>
                <p>📍 123 Main Street, City, State 12345</p>
              </div>
            </div>
            
            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>© 2024 Zada Stays. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
