import { Heart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">
              SmartClinic <span className="text-cyan-600">Lite</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-gray-700 hover:text-cyan-600 transition-colors"
            >
              Home
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-cyan-600 transition-colors"
            >
              Services
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-cyan-600 transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-cyan-600 transition-colors"
            >
              Contact
            </a>
          </div>

          <a
            href="/book"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex gap-4 pb-3 overflow-x-auto">
          <a
            href="/"
            className="text-sm text-gray-700 hover:text-cyan-600 whitespace-nowrap"
          >
            Home
          </a>
          <a
            href="/services"
            className="text-sm text-gray-700 hover:text-cyan-600 whitespace-nowrap"
          >
            Services
          </a>
          <a
            href="/about"
            className="text-sm text-gray-700 hover:text-cyan-600 whitespace-nowrap"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-sm text-gray-700 hover:text-cyan-600 whitespace-nowrap"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
