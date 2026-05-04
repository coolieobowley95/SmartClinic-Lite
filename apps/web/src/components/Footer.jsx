import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-cyan-600" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-cyan-600" />
                <span>info@smartclinic.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-cyan-600" />
                <span>123 Health Street, Medical District</span>
              </div>
            </div>
          </div>

          {/* Clinic Hours */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Clinic Hours
            </h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cyan-600 mt-0.5" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-sm">8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="ml-8">
                <p className="font-medium">Saturday</p>
                <p className="text-sm">9:00 AM - 2:00 PM</p>
              </div>
              <div className="ml-8">
                <p className="font-medium">Sunday</p>
                <p className="text-sm">Closed</p>
              </div>
            </div>
          </div>

          {/* Emergency Notice */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Emergency
            </h3>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-800 font-medium mb-2">
                For medical emergencies:
              </p>
              <p className="text-red-900 font-bold text-lg">Call 911</p>
              <p className="text-xs text-red-700 mt-2">
                Do not use online booking for urgent medical situations
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} SmartClinic Lite. All rights
            reserved.
          </p>
          <p className="mt-2">
            Your health information is kept private and secure.
          </p>
        </div>
      </div>
    </footer>
  );
}
