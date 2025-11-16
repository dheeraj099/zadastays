'use client';
import React, { useState } from "react";

type ContactFormProps = {
    locations: string[];
};

const ContactForm: React.FC<ContactFormProps> = ({ locations }) => {
    const [submitted, setSubmitted] = useState(false);

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // TODO: Wire up API submission when backend is ready
    };

    return (
        <div className="bg-white rounded-lg shadow-lg !p-8">
            <form className="!space-y-6" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 !mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        className="w-full !px-4 !py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-900"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 !mb-2">
                        Phone *
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        className="w-full !px-4 !py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-900"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 !mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        placeholder="Enter your email address"
                        className="w-full !px-4 !py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-900"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="interestedLocation"
                        className="block text-sm font-medium text-gray-700 !mb-2"
                    >
                        Interested location *
                    </label>
                    <select
                        id="interestedLocation"
                        name="interestedLocation"
                        className="w-full !px-4 !py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all text-gray-900"
                        required
                        defaultValue=""
                    >
                        <option value="" disabled className="text-gray-400">
                            Select a location
                        </option>
                        {locations.map((loc) => (
                            <option key={loc} value={loc.toLowerCase()}>
                                {loc}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 !mb-2">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell us how we can help you..."
                        className="w-full !px-4 !py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus-border-transparent outline-none transition-all resize-none placeholder-gray-400 text-gray-900"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold !py-3 !px-6 rounded-lg transition-colors duration-200"
                    disabled={submitted}
                >
                    {submitted ? "Enquiry Sent" : "Send Message"}
                </button>
                {submitted ? (
                    <div className="mt-6 rounded-md border border-green-200 bg-green-50 !p-4">
                        <p className="text-green-800">
                            Thank you! We’ve received your enquiry. Our team will get back to you shortly.
                        </p>
                    </div>
                ) : null}
            </form>
        </div>
    );
};

export default ContactForm;
