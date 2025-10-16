import React from "react";
import {Link} from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <span className="text-xl font-bold">DigitalPro</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforming businesses through innovative digital marketing
              strategies. We help brands grow and dominate their markets with
              data-driven approaches.
            </p>
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label={social}
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                      {social.charAt(0)}
                    </div>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/services"
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                to="/book-consultation"
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                Consultation
              </Link>
              <Link
                to="/book-campaign"
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                Book Campaign
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Email: info@digitalpro.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Marketing St, Digital City</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} DigitalPro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
