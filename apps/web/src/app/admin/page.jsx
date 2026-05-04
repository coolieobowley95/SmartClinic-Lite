"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, Phone, Mail, FileText } from "lucide-react";

export default function AdminPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchAppointments();
  }, [filter]);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const url =
        filter === "all"
          ? "/api/appointments"
          : `/api/appointments?status=${filter}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch appointments");
      }

      const data = await response.json();
      setAppointments(data.appointments || []);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Appointment Management
          </h1>
          <p className="text-gray-600">
            View and manage all appointment requests
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === "all"
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("pending")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === "pending"
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter("confirmed")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === "confirmed"
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Confirmed
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === "completed"
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Appointments List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
            <p className="mt-4 text-gray-600">Loading appointments...</p>
          </div>
        ) : appointments.length === 0 ? (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <p className="text-gray-600">No appointments found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {appointment.full_name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {appointment.department}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4 text-cyan-600" />
                        <span>{appointment.phone}</span>
                      </div>
                      {appointment.email && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="w-4 h-4 text-cyan-600" />
                          <span>{appointment.email}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4 text-cyan-600" />
                        <span>{formatDate(appointment.preferred_date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4 text-cyan-600" />
                        <span>{appointment.preferred_time}</span>
                      </div>
                    </div>

                    {appointment.preferred_doctor && (
                      <div className="mt-3 text-sm text-gray-600">
                        <span className="font-medium">Preferred Doctor:</span>{" "}
                        {appointment.preferred_doctor}
                      </div>
                    )}

                    {appointment.reason && (
                      <div className="mt-3">
                        <div className="flex items-start gap-2">
                          <FileText className="w-4 h-4 text-cyan-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">
                              Reason for Visit:
                            </p>
                            <p className="text-sm text-gray-600">
                              {appointment.reason}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium text-center ${
                        appointment.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : appointment.status === "confirmed"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {appointment.status.charAt(0).toUpperCase() +
                        appointment.status.slice(1)}
                    </span>
                    <p className="text-xs text-gray-500 text-center">
                      ID: {appointment.id}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
