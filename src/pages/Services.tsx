import React from "react";
import {Link} from "react-router-dom";
import {type Service} from "../types";

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: "1",
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic to your website with our comprehensive SEO strategies.",
      price: "₦999/mo",
      features: [
        "Keyword Research & Analysis",
        "On-page Optimization",
        "Technical SEO Audit",
        "Content Strategy",
        "Link Building",
        "Monthly Performance Reports",
      ],
      icon: "🔍",
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "2",
      title: "Social Media Marketing",
      description:
        "Engage your audience across all social platforms with compelling content and strategic campaigns.",
      price: "₦799/mo",
      features: [
        "Content Creation & Curation",
        "Community Management",
        "Paid Social Advertising",
        "Influencer Partnerships",
        "Analytics & Reporting",
        "Strategy Development",
      ],
      icon: "📱",
      popular: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "3",
      title: "PPC Advertising",
      description:
        "Drive immediate results with targeted pay-per-click advertising campaigns across search and social platforms.",
      price: "₦1,299/mo",
      features: [
        "Campaign Strategy & Setup",
        "Ad Creation & Optimization",
        "A/B Testing",
        "Landing Page Optimization",
        "Conversion Tracking",
        "ROI Analysis",
      ],
      icon: "🎯",
      popular: false,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: "4",
      title: "Content Marketing",
      description:
        "Create valuable content that attracts, engages, and converts your target audience.",
      price: "₦1,499/mo",
      features: [
        "Content Strategy Development",
        "Blog Writing & Optimization",
        "Video Production",
        "Infographic Design",
        "Content Distribution",
        "Performance Analytics",
      ],
      icon: "✍️",
      popular: false,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "5",
      title: "Email Marketing",
      description:
        "Nurture leads and build customer relationships through targeted email campaigns and automation.",
      price: "₦599/mo",
      features: [
        "Email Strategy Development",
        "List Building & Segmentation",
        "Campaign Design & Copywriting",
        "Automation Setup",
        "A/B Testing",
        "Performance Analytics",
      ],
      icon: "📧",
      popular: false,
      gradient: "from-yellow-500 to-amber-500",
    },
    {
      id: "6",
      title: "Web Design & Development",
      description:
        "Create stunning, conversion-optimized websites that drive business growth and user engagement.",
      price: "₦2,999",
      features: [
        "UI/UX Design",
        "Responsive Development",
        "SEO Optimization",
        "E-commerce Integration",
        "Website Maintenance",
        "Performance Optimization",
      ],
      icon: "💻",
      popular: false,
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="relative bg-gray-800 text-white py-28 overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-balance">
            Comprehensive digital marketing solutions tailored to drive growth
            and maximize your ROI
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="section-padding bg-gray-50/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service: Service, index: number) => (
              <div
                key={service.id}
                className={`group card overflow-hidden hover:scale-105 ${
                  service.popular ? "ring-2 ring-gray-800 shadow-2xl" : ""
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {service.popular && (
                  <div className="bg-gray-800 text-white text-center py-3 text-sm font-semibold">
                    ⭐ Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-14 h-14 bg-white border border-gray-800 rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    {service.popular && (
                      <span className="bg-purple-100 text-purple-600 text-sm font-semibold px-3 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600"
                        >
                          <svg
                            className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                    <div className="text-3xl font-bold text-gray-800">
                      {service.price}
                    </div>
                    <Link
                      to="/book-campaign"
                      className="btn btn-primary group-hover:scale-105"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative  bg-gray-800 text-white overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <div className="text-center py-28">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-balance">
              Schedule a free consultation to discuss your goals and discover
              how we can help you achieve them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-consultation"
                className="btn bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 backdrop-blur-sm"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/book-campaign"
                className="btn border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 backdrop-blur-sm"
              >
                Start Campaign
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
