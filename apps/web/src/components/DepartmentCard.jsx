export default function DepartmentCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-cyan-300 transition-all group">
      <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <a
        href={`/book?department=${encodeURIComponent(title)}`}
        className="inline-flex items-center text-cyan-600 font-medium text-sm hover:text-cyan-700 transition-colors"
      >
        Book Appointment →
      </a>
    </div>
  );
}
