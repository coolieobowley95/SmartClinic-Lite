import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Shield, Clock, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Book Your Clinic Appointment{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Easily
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Skip the lines. Schedule your visit online in minutes.
            </p>
            <a
              href="/book"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Book Appointment Now
            </a>
            <p className="text-sm text-gray-500 mt-4">
              No account needed • Secure & confidential
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Secure & Confidential
              </h3>
              <p className="text-gray-600">
                Your health information is protected and kept private
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Easy Booking
              </h3>
              <p className="text-gray-600">
                Book your appointment in under 60 seconds
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Designed for Local Clinics
              </h3>
              <p className="text-gray-600">
                Simple, fast, and built for your convenience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Choose a Department
                </h3>
                <p className="text-gray-600">
                  Select the clinic or department you need to visit
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Select Date & Time
                </h3>
                <p className="text-gray-600">
                  Pick your preferred appointment date and time
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Submit Request
                </h3>
                <p className="text-gray-600">
                  We'll confirm your appointment shortly
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/book"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Comprehensive healthcare services for you and your family
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "General Medicine", icon: "🩺" },
              { name: "Pediatrics", icon: "👶" },
              { name: "Dental", icon: "🦷" },
              { name: "OB/GYN", icon: "👩‍⚕️" },
              { name: "Cardiology", icon: "❤️" },
              { name: "Laboratory", icon: "🔬" },
            ].map((service) => (
              <div
                key={service.name}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-cyan-300 transition-all"
              >
                <div className="text-3xl mb-2">{service.icon}</div>
                <p className="text-sm font-medium text-gray-900">
                  {service.name}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/services"
              className="text-cyan-600 font-medium hover:text-cyan-700"
            >
              View All Services →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
