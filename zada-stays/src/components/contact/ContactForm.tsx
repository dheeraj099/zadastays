'use client';
import React, { useState } from "react";

type ContactFormProps = {
    locations: string[];
};

const ContactForm: React.FC<ContactFormProps> = ({ locations }) => {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedLocation, setSelectedLocation] = useState<string>("");

    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            fullName: formData.get("fullName") as string,
            phoneNumber: formData.get("phoneNumber") as string,
            emailAddress: formData.get("emailAddress") as string,
            interestedLocation: formData.get("interestedLocation") as string,
            preferredLocation: formData.get("preferredLocation") as string || "",
            message: formData.get("message") as string,
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to send message");
            }

            setSubmitted(true);
            // Reset form
            e.currentTarget.reset();
            setSelectedLocation("");
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Failed to send message. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg !p-8">
            {error && (
                <div className="mb-6 rounded-md border border-red-200 bg-red-50 !p-4">
                    <p className="text-red-800">{error}</p>
                </div>
            )}
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
                        disabled={isSubmitting || submitted}
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
                        disabled={isSubmitting || submitted}
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
                        disabled={isSubmitting || submitted}
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
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        disabled={isSubmitting || submitted}
                    >
                        <option value="" disabled className="text-gray-400">
                            Select a location
                        </option>
                        {locations.map((loc) => (
                            <option key={loc} value={loc.toLowerCase()}>
                                {loc}
                            </option>
                        ))}
                        <option value="others" className="text-gray-900">Others</option>
                    </select>
                </div>
                {selectedLocation === "others" ? (
                    <div>
                        <label htmlFor="preferredLocation" className="block text-sm font-medium text-gray-700 !mb-2">
                            Preferred location
                        </label>
                        <input
                            type="text"
                            id="preferredLocation"
                            name="preferredLocation"
                            placeholder="Enter your preferred location"
                            className="w-full !px-4 !py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-900"
                            required
                            disabled={isSubmitting || submitted}
                        />
                    </div>
                ) : null}
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
                        disabled={isSubmitting || submitted}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gray-800 hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold !py-3 !px-6 rounded-lg transition-colors duration-200"
                    disabled={isSubmitting || submitted}
                >
                    {isSubmitting ? "Sending..." : submitted ? "Message Sent" : "Send Message"}
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
