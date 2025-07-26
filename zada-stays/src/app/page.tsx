import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-8">
            {/* Logo */}
            <div className="text-white text-3xl font-bold">
              Zada Stays
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-10">
              <a href="#" className="text-white hover:text-gray-200 transition-colors text-lg">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors text-lg">
                Apartments
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors text-lg">
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
      <section className="relative h-screen w-full flex items-center justify-center">
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
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Find Your Perfect Home
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover premium apartments with Zada Stays - your trusted partner in finding the ideal living space
          </p>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-10 rounded-lg transition-colors text-xl border border-gray-600">
            View Apartments
          </button>
        </div>
      </section>

      {/* Why Choose Zada Stays Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Zada Stays?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're committed to providing exceptional service and premium living experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Feature Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-100">
              <div className="text-4xl mb-6">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordable Prices</h3>
              <p className="text-gray-600 leading-relaxed">Competitive pricing that fits your budget without compromising quality.</p>
            </div>
            
            {/* Feature Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-100">
              <div className="text-4xl mb-6">📍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Prime Locations</h3>
              <p className="text-gray-600 leading-relaxed">Strategically located apartments in the most desirable neighborhoods.</p>
            </div>
            
            {/* Feature Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-100">
              <div className="text-4xl mb-6">🎧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Customer Support</h3>
              <p className="text-gray-600 leading-relaxed">Round-the-clock assistance to help you with any questions or concerns.</p>
            </div>
            
            {/* Feature Card 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-100">
              <div className="text-4xl mb-6">✅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Verified Listings</h3>
              <p className="text-gray-600 leading-relaxed">All our listings are thoroughly verified to ensure quality and authenticity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Sarah Johnson</h4>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-lg">
                "Zada Stays helped me find the perfect apartment in just a week. The process was smooth and the team was incredibly helpful!"
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Michael Chen</h4>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-lg">
                "The quality of apartments and the level of service exceeded my expectations. Highly recommend!"
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Emily Rodriguez</h4>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-lg">
                "Professional, reliable, and truly care about their customers. Found my dream home through Zada Stays!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Zada Stays */}
            <div className="md:col-span-1">
              <h3 className="text-3xl font-bold mb-6">Zada Stays</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner in finding the perfect living space. We connect you with premium apartments in prime locations.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-white text-2xl">📘</a>
                <a href="#" className="text-gray-300 hover:text-white text-2xl">📷</a>
                <a href="#" className="text-gray-300 hover:text-white text-2xl">📺</a>
                <a href="#" className="text-gray-300 hover:text-white text-2xl">💼</a>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="md:col-span-1">
              <h4 className="text-xl font-bold mb-6">Contact Information</h4>
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
              <h4 className="text-xl font-bold mb-6">Stay Updated</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p className="text-lg">© 2024 Zada Stays. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
