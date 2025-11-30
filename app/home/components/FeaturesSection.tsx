export default function FeaturesSection() {
  return (
    <section className="bg-white py-16 px-app">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 leading-tight text-[#0F75BD]">
            Everything You Need
            <br />
            to Excel
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-[#0F75BD] transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#E3F2FD] flex items-center justify-center text-2xl mb-4">📅</div>
            <h3 className="text-xl font-medium mb-3 text-[#0F75BD]">Personalized Schedules</h3>
            <p className="text-sm text-gray-500 leading-relaxed">AI-powered study schedules tailored to your learning style and goals</p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-[#0F75BD] transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#E3F2FD] flex items-center justify-center text-2xl mb-4">📊</div>
            <h3 className="text-xl font-medium mb-3 text-[#0F75BD]">Progress Tracking</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Monitor your performance and identify areas for improvement</p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-[#0F75BD] transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#E3F2FD] flex items-center justify-center text-2xl mb-4">🎯</div>
            <h3 className="text-xl font-medium mb-3 text-[#0F75BD]">Smart Goals</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Set and achieve your academic goals with intelligent recommendations</p>
          </div>
        </div>
      </div>
    </section>
  );
}
