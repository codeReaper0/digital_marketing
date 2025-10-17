import React, {useState} from "react";
import {toast} from "react-toastify";
import {type CampaignFormData} from "../types";

interface ServiceOption {
  value: string;
  label: string;
  price: string;
  icon: string;
}

const CampaignBooking: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>("");
  const [formData, setFormData] = useState<CampaignFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    goals: "",
    additionalInfo: "",
  });

  const services: ServiceOption[] = [
    {value: "seo", label: "SEO Optimization", price: "₦999/mo", icon: "🔍"},
    {
      value: "social",
      label: "Social Media Marketing",
      price: "₦799/mo",
      icon: "📱",
    },
    {value: "ppc", label: "PPC Advertising", price: "₦1,299/mo", icon: "🎯"},
    {
      value: "content",
      label: "Content Marketing",
      price: "₦1,499/mo",
      icon: "✍️",
    },
    {value: "email", label: "Email Marketing", price: "₦599/mo", icon: "📧"},
    {
      value: "web-design",
      label: "Web Design & Development",
      price: "₦2,999",
      icon: "💻",
    },
  ];

  const budgets: string[] = [
    "Less than ₦1,000",
    "₦1,000 - ₦5,000",
    "₦5,000 - ₦10,000",
    "₦10,000 - ₦25,000",
    "₦25,000+",
  ];

  const timelines: string[] = [
    "Immediately",
    "Within 2 weeks",
    "Within 1 month",
    "Within 3 months",
    "Flexible",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleServiceSelect = (serviceValue: string): void => {
    setSelectedService(serviceValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!selectedService || !formData.name || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success(
      "🎉 Campaign booking request submitted! Our team will contact you within 24 hours."
    );

    setSelectedService("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      timeline: "",
      goals: "",
      additionalInfo: "",
    });
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="relative bg-gray-800 text-white py-28 overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Book Your Campaign
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-balance">
            Start your journey to digital success with our expert marketing
            services
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Service Selection */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Select Your Service
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service: ServiceOption) => (
                    <div
                      key={service.value}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                        selectedService === service.value
                          ? "border-gray-500 bg-gray-50 shadow-lg"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                      onClick={() => handleServiceSelect(service.value)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{service.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">
                            {service.label}
                          </h4>
                          <p className="text-gray-600 font-medium">
                            {service.price}
                          </p>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedService === service.value
                              ? "border-gray-500 bg-gray-500"
                              : "border-gray-300"
                          }`}
                        >
                          {selectedService === service.value && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
              </div>

              {/* Campaign Details */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Campaign Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Monthly Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      {budgets.map((budget: string, index: number) => (
                        <option key={index} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline: string, index: number) => (
                        <option key={index} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="goals"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Marketing Goals
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={3}
                    value={formData.goals}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="What are your primary marketing objectives? (e.g., increase sales, generate leads, build brand awareness)"
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="additionalInfo"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us more about your business, target audience, and any specific requirements..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary py-4 text-lg font-semibold"
                disabled={!selectedService}
              >
                Submit Campaign Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignBooking;
