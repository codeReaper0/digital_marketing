import React from "react";
import {Link} from "react-router-dom";
import {type Service, type Stat} from "../types";

const Home: React.FC = () => {
  const services: Service[] = [
    {
      id: "1",
      icon: "🔍",
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic to your website.",
      price: "$999/mo",
      features: [],
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "2",
      icon: "📱",
      title: "Social Media Marketing",
      description:
        "Engage your audience across all social platforms with compelling content.",
      price: "$799/mo",
      features: [],
      popular: false,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "3",
      icon: "🎯",
      title: "PPC Advertising",
      description:
        "Drive immediate results with targeted pay-per-click advertising campaigns.",
      price: "$1,299/mo",
      features: [],
      popular: false,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const stats: Stat[] = [
    {number: "500+", label: "Happy Clients"},
    {number: "150%", label: "Average ROI"},
    {number: "24/7", label: "Support"},
    {number: "50+", label: "Experts Team"},
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float"
            style={{animationDelay: "2s"}}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-float"
            style={{animationDelay: "4s"}}
          ></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center text-white">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-balance">
                Transform Your
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed text-balance">
                Expert digital marketing solutions to grow your business and
                dominate your market. Data-driven strategies that deliver real
                results.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
                style={{animationDelay: "0.3s"}}
              >
                <Link
                  to="/book-campaign"
                  className="btn btn-primary text-lg px-8 py-4"
                >
                  Book Campaign
                </Link>
                <Link
                  to="/book-consultation"
                  className="btn bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 text-lg px-8 py-4"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-balance">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance">
              Comprehensive digital marketing solutions tailored to your
              business needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service: Service, index: number) => (
              <div
                key={service.id}
                className="group card p-8 hover:scale-105"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <Link to="/services" className="btn btn-outline text-lg px-8 py-4">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat: Stat, index: number) => (
              <div
                key={stat.label}
                className="text-center group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-700">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 text-balance">
            Let's create a custom digital marketing strategy that drives real
            results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-campaign"
              className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 backdrop-blur-sm"
            >
              Start Your Campaign
            </Link>
            <Link
              to="/book-consultation"
              className="btn border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 backdrop-blur-sm"
            >
              Free Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
