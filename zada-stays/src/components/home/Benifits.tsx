import React from 'react'

const Benifits = () => {
  return (
    <section className="bg-white !py-20  flex items-center justify-center">
        <div className="max-w-7xl mx-auto !px-6 lg:!px-8 flex  flex-col items-center justify-center">
          <div className="text-center !mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Zada Stays?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl !mx-auto !mt-2 leading-relaxed">
              We're committed to providing exceptional service and premium
              living experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Feature Card 1 */}
            <div className="bg-white !p-8 rounded-lg shadow-lg text-center border border-gray-100">
              <div className="text-4xl mb-6">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Affordable Prices
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Competitive pricing that fits your budget without compromising
                quality.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white !p-8 rounded-lg shadow-lg text-center border border-gray-100">
              <div className="text-4xl mb-6">📍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Prime Locations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Strategically located apartments in the most desirable
                neighborhoods.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white !p-8 rounded-lg shadow-lg text-center border border-gray-100">
              <div className="text-4xl mb-6">🎧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                24/7 Customer Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock assistance to help you with any questions or
                concerns.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white !p-8 rounded-lg shadow-lg text-center border border-gray-100">
              <div className="text-4xl mb-6">✅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Verified Listings
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All our listings are thoroughly verified to ensure quality and
                authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Benifits