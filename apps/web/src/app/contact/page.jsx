import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help. Reach out to us through any of the channels
            below.
          </p>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-12 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-red-900 mb-2">
              Medical Emergency?
            </h3>
            <p className="text-red-800 mb-3">
              For life-threatening emergencies, do not use this contact form or
              online booking.
            </p>
            <p className="text-red-900 font-bold text-xl">
              Call 911 immediately
            </p>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600 text-sm mb-3">
              Call us during business hours
            </p>
            <a
              href="tel:5551234567"
              className="text-cyan-600 font-semibold hover:text-cyan-700 text-lg"
            >
              (555) 123-4567
            </a>
          </div>

          {/* Email */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm mb-3">
              Send us a message anytime
            </p>
            <a
              href="mailto:info@smartclinic.com"
              className="text-cyan-600 font-semibold hover:text-cyan-700 break-all"
            >
              info@smartclinic.com
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              WhatsApp
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Chat with us on WhatsApp
            </p>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Start Chat
            </a>
          </div>
        </div>

        {/* Location & Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Location */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="w-6 h-6 text-cyan-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Our Location
                </h3>
                <p className="text-gray-700">123 Health Street</p>
                <p className="text-gray-700">Medical District</p>
                <p className="text-gray-700">City, State 12345</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=123+Health+Street"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-cyan-600 font-medium hover:text-cyan-700"
            >
              Get Directions →
            </a>
          </div>

          {/* Hours */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-cyan-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Clinic Hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Book an Appointment?
          </h3>
          <p className="text-gray-600 mb-6">
            Use our online booking system to schedule your visit in minutes
          </p>
          <a
            href="/book"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            Book Appointment Now
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
