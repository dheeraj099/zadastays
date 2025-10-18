import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import React from "react";

const CompanyPoliciesPage = () => {
  return (
    <div className="!min-h-screen">
      {/* Navigation Bar */}
      {/* <NavBar /> */}

      {/* Main Content */}
      <section className="!bg-white !py-20 !flex !items-center !justify-center">
        <div className="!max-w-4xl !mx-auto !px-6 lg:!px-8">
          {/* Header */}
          <div className="!text-center !mb-12">
            <h1 className="!text-4xl sm:!text-5xl !font-bold !text-gray-900 !mb-6">
              COMPANY POLICIES
            </h1>
            <h2 className="!text-2xl sm:!text-3xl !font-bold !text-gray-800 !mb-4">
              Welcome to Your New Home!
            </h2>
            <p className="!text-lg !text-gray-600 !leading-relaxed !max-w-3xl !mx-auto">
              We&apos;re truly delighted to have you as part of our community at Zada Stays. 
              To ensure a smooth and pleasant stay for everyone, we&apos;d like to share a few 
              important policies for your understanding:
            </p>
          </div>

          {/* Divider */}
          <div className="!border-t !border-gray-300 !mb-8"></div>

          {/* Policies Content */}
          <div className="!space-y-8">
            {/* Policy 1 */}
            <div className="!bg-gray-50 !p-6 !rounded-lg !border !border-gray-200">
              <h3 className="!text-xl !font-bold !text-gray-900 !mb-3">
                1. Agreement Duration
              </h3>
              <ul className="!text-gray-700 !leading-relaxed !space-y-2">
                <li>• The rental agreement is valid for 11 months.</li>
                <li>• (You may choose to vacate before the term ends if needed.)</li>
              </ul>
            </div>

            {/* Policy 2 */}
            <div className="!bg-gray-50 !p-6 !rounded-lg !border !border-gray-200">
              <h3 className="!text-xl !font-bold !text-gray-900 !mb-3">
                2. Rent Payment
              </h3>
              <ul className="!text-gray-700 !leading-relaxed !space-y-2">
                <li>• Rent must be paid on or before the 5th of every month.</li>
                <li>• Delays in rent payment may lead to necessary action as per our policy.</li>
              </ul>
            </div>

            {/* Policy 3 */}
            <div className="!bg-gray-50 !p-6 !rounded-lg !border !border-gray-200">
              <h3 className="!text-xl !font-bold !text-gray-900 !mb-3">
                3. Painting & Renovation Charges
              </h3>
              <ul className="!text-gray-700 !leading-relaxed !space-y-2">
                <li>• Upon vacating, one month&apos;s rent will be deducted from the deposit for painting and basic renovation.</li>
                <li>• This means the deposit is non-refundable.</li>
              </ul>
            </div>

            {/* Policy 4 */}
            <div className="!bg-gray-50 !p-6 !rounded-lg !border !border-gray-200">
              <h3 className="!text-xl !font-bold !text-gray-900 !mb-3">
                4. Vacating Notice
              </h3>
              <ul className="!text-gray-700 !leading-relaxed !space-y-2">
                <li>• A one-month prior notice is mandatory before vacating.</li>
                <li>• Failure to provide this notice will also lead to forfeiture of the deposit.</li>
              </ul>
            </div>

            {/* Policy 5 */}
            <div className="!bg-gray-50 !p-6 !rounded-lg !border !border-gray-200">
              <h3 className="!text-xl !font-bold !text-gray-900 !mb-3">
                5. Electricity Charges
              </h3>
              <ul className="!text-gray-700 !leading-relaxed !space-y-2">
                <li>• Electricity will be billed as per the meter reading.</li>
                <li>• Tenants are responsible for timely bill payment.</li>
              </ul>
            </div>

            {/* Policy 6 */}
            <div className="!bg-gray-50 !p-6 !rounded-lg !border !border-gray-200">
              <h3 className="!text-xl !font-bold !text-gray-900 !mb-3">
                6. Token Advance
              </h3>
              <ul className="!text-gray-700 !leading-relaxed !space-y-2">
                <li>• Please note, the token advance is non-refundable under any circumstance.</li>
              </ul>
            </div>

            {/* Policy 7 */}
            <div className="!bg-gray-50 !p-6 !rounded-lg !border !border-gray-200">
              <h3 className="!text-xl !font-bold !text-gray-900 !mb-3">
                7. Rent & Deposit Terms
              </h3>
              <ul className="!text-gray-700 !leading-relaxed !space-y-2">
                <li>• Rent is prepaid.</li>
                <li>• At the time of joining, both rent and deposit must be paid.</li>
                <li>• Upon vacating, one month&apos;s rent will be deducted from the deposit—making the deposit non-refundable.</li>
              </ul>
            </div>

            {/* Policy 8 */}
            <div className="!bg-gray-50 !p-6 !rounded-lg !border !border-gray-200">
              <h3 className="!text-xl !font-bold !text-gray-900 !mb-3">
                8. Owner&apos;s Rights
              </h3>
              <p className="!text-gray-700 !leading-relaxed !mb-3">
                The owner reserves the right to ask a tenant to vacate immediately for valid reasons, including:
              </p>
              <ul className="!text-gray-700 !leading-relaxed !space-y-2 !ml-4">
                <li>• Non-payment of rent</li>
                <li>• Agreement violations</li>
                <li>• Unauthorized occupants</li>
                <li>• Police-related issues</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="!border-t !border-gray-300 !my-8"></div>

          {/* Closing Message */}
          <div className="!text-center !bg-blue-50 !p-8 !rounded-lg !border !border-blue-200">
            <p className="!text-lg !text-gray-700 !leading-relaxed !mb-4">
              If you have any questions or require assistance, feel free to reach out to our support team.
            </p>
            <p className="!text-lg !text-gray-700 !leading-relaxed !mb-4">
              Once again, welcome—and we wish you a peaceful and comfortable stay at Zada Stays!
            </p>
            <p className="!text-xl !font-semibold !text-gray-800">
              Warm regards,<br />
              Team Zada Stays
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default CompanyPoliciesPage;