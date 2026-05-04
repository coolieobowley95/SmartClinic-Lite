import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DepartmentCard from "@/components/DepartmentCard";

export default function ServicesPage() {
  const departments = [
    {
      icon: "🩺",
      title: "General Medicine",
      description:
        "Comprehensive primary care for adults including checkups, diagnosis, and treatment of common illnesses.",
    },
    {
      icon: "👶",
      title: "Pediatrics",
      description:
        "Specialized care for infants, children, and adolescents including vaccinations and growth monitoring.",
    },
    {
      icon: "🦷",
      title: "Dental",
      description:
        "Complete dental care including cleanings, fillings, extractions, and oral health consultations.",
    },
    {
      icon: "👩‍⚕️",
      title: "OB/GYN",
      description:
        "Women's health services including prenatal care, gynecological exams, and family planning.",
    },
    {
      icon: "❤️",
      title: "Cardiology",
      description:
        "Heart health services including ECG, blood pressure monitoring, and cardiovascular consultations.",
    },
    {
      icon: "🔬",
      title: "Laboratory",
      description:
        "Diagnostic testing services including blood work, urinalysis, and other medical tests.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services & Departments
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive healthcare services to meet all your medical
            needs. Book an appointment with any department below.
          </p>
        </div>

        {/* Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {departments.map((dept) => (
            <DepartmentCard
              key={dept.title}
              icon={dept.icon}
              title={dept.title}
              description={dept.description}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Not sure which department to book? Contact our front desk and we'll
            help guide you to the right specialist for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5551234567"
              className="bg-white text-cyan-600 border-2 border-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
            >
              Call Us: (555) 123-4567
            </a>
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
