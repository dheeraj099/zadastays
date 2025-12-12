"use client";

import { useState } from "react";

type EnquiryFormProps = {
  apartmentName: string;
  apartmentLocation: string;
};

const EnquiryForm = ({ apartmentName, apartmentLocation }: EnquiryFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      apartmentName,
      apartmentLocation,
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send enquiry");
      }

      setIsSubmitted(true);
      // Reset form
      e.currentTarget.reset();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to send enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg !p-8">
        <div className="text-center">
          <div className="mb-4">
            <svg
              className="w-16 h-16 text-green-500 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 !mb-2">
            Thank You!
          </h2>
          <p className="text-gray-600 !mb-4">
            We&apos;ve received your enquiry and will get back to you as soon as
            possible.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg !p-8">
      <h2 className="text-2xl font-bold text-gray-900 !mb-2">
        Interested? Send us an enquiry
      </h2>
      <p className="text-gray-600 !mb-8">
        Fill out the form below and we&apos;ll get back to you as soon as
        possible.
      </p>

      {error && (
        <div className="mb-6 rounded-md border border-red-200 bg-red-50 !p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 !mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            className="w-full !px-4 !py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all placeholder:text-gray-500 text-gray-900"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 !mb-2"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            className="w-full !px-4 !py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all placeholder:text-gray-500 text-gray-900"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 !mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full !px-4 !py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all placeholder:text-gray-500 text-gray-900"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 !mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your requirements..."
            className="w-full !px-4 !py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-500 text-gray-900"
            disabled={isSubmitting}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gray-800 hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold !py-3 !px-6 rounded-lg transition-colors duration-200"
        >
          {isSubmitting ? "Sending..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;

