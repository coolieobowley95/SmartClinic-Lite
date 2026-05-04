"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";

export default function BookPage() {
  const [preselectedDepartment, setPreselectedDepartment] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const dept = params.get("department");
    if (dept) {
      setPreselectedDepartment(dept);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h1>
          <p className="text-lg text-gray-600">
            Fill out the form below and we'll confirm your appointment within 24
            hours
          </p>
        </div>

        {/* Form */}
        <AppointmentForm preselectedDepartment={preselectedDepartment} />

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Need help or have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5551234567"
              className="inline-block bg-white text-cyan-600 border-2 border-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
            >
              Call Us: (555) 123-4567
            </a>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
