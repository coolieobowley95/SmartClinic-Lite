import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone, Mail, Users, Award, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About SmartClinic Lite
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted healthcare partner, committed to providing quality
            medical care with convenience and compassion.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            To make quality healthcare accessible and convenient for everyone in
            our community. We combine experienced medical professionals with
            modern technology to serve you better.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Patient-Centered Care
            </h3>
            <p className="text-gray-600">
              Your health and comfort are our top priorities
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Quality Excellence
            </h3>
            <p className="text-gray-600">
              Experienced doctors and modern medical equipment
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Community Focus
            </h3>
            <p className="text-gray-600">
              Serving our local community with dedication
            </p>
          </div>
        </div>

        {/* Clinic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Location & Hours */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Location & Hours
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p className="text-gray-600">123 Health Street</p>
                  <p className="text-gray-600">Medical District, City 12345</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cyan-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 mb-2">
                    Operating Hours
                  </p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>
                      <span className="font-medium">Monday - Friday:</span> 8:00
                      AM - 6:00 PM
                    </p>
                    <p>
                      <span className="font-medium">Saturday:</span> 9:00 AM -
                      2:00 PM
                    </p>
                    <p>
                      <span className="font-medium">Sunday:</span> Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a
                    href="tel:5551234567"
                    className="text-cyan-600 hover:text-cyan-700"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a
                    href="mailto:info@smartclinic.com"
                    className="text-cyan-600 hover:text-cyan-700"
                  >
                    info@smartclinic.com
                  </a>
                </div>
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-cyan-900 mb-2">
                  Book Online 24/7
                </p>
                <p className="text-sm text-cyan-700">
                  Use our online booking system anytime to request an
                  appointment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose SmartClinic Lite?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <div className="text-cyan-600 text-xl">✓</div>
              <div>
                <p className="font-medium text-gray-900">
                  Experienced Medical Team
                </p>
                <p className="text-sm text-gray-600">
                  Board-certified doctors and caring staff
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-cyan-600 text-xl">✓</div>
              <div>
                <p className="font-medium text-gray-900">Modern Facilities</p>
                <p className="text-sm text-gray-600">
                  Up-to-date equipment and clean environment
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-cyan-600 text-xl">✓</div>
              <div>
                <p className="font-medium text-gray-900">Convenient Booking</p>
                <p className="text-sm text-gray-600">
                  Easy online appointment scheduling
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-cyan-600 text-xl">✓</div>
              <div>
                <p className="font-medium text-gray-900">
                  Comprehensive Services
                </p>
                <p className="text-sm text-gray-600">
                  Multiple departments under one roof
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
