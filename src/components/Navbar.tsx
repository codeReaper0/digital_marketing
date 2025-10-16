import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {type NavLink} from "../types";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();

  const navLinks: NavLink[] = [
    {name: "Home", path: "/"},
    {name: "Services", path: "/services"},
    {name: "Consultation", path: "/book-consultation"},
    {name: "Book Campaign", path: "/book-campaign"},
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">DP</span>
            </div>
            <div>
              <span
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                DigitalPro
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link: NavLink) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-all duration-300 relative ${
                  location.pathname === link.path
                    ? "text-blue-600"
                    : isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              to="/book-consultation"
              className={`btn ${
                isScrolled
                  ? "btn-primary"
                  : "bg-white text-blue-600 hover:bg-gray-100"
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden flex flex-col space-y-1.5 p-2 rounded-lg transition-colors ${
              isScrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-gray-900" : "bg-white"
              } ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-gray-900" : "bg-white"
              } ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-gray-900" : "bg-white"
              } ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-6 space-y-4">
            {navLinks.map((link: NavLink) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book-consultation"
              className="btn btn-primary w-full justify-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
