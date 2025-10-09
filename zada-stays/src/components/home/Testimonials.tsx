import React from 'react'

const Testimonials = () => {
  return (
     <section className="bg-gray-50 !py-20 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto !px-6 lg:!px-8 flex flex-col items-center justify-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed !mt-2">
              Don&apos;t just take our word for it - hear from our satisfied
              customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 !mt-8">
            {/* Testimonial 1 */}
            <div className="bg-white !p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg !pl-3">
                    Sarah Johnson
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-lg !mt-2">
                &quot;Zada Stays helped me find the perfect apartment in just a week.
                The process was smooth and the team was incredibly helpful!&quot;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white !p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg !pl-3">
                    Michael Chen
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-lg !mt-2">
                &quot;The quality of apartments and the level of service exceeded my
                expectations. Highly recommend!&quot;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white !p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg !pl-3">
                    Emily Rodriguez
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-lg !mt-2">
                &quot;Professional, reliable, and truly care about their customers.
                Found my dream home through Zada Stays!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonials