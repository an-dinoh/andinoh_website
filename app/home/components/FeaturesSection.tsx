export default function FeaturesSection() {
  return (
    <section className="py-12 md:py-20 px-6 md:px-12 lg:px-16 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block bg-[#E3F2FD] text-[#0F75BD] text-xs px-4 py-1 rounded-full mb-3 md:mb-4">
            FEATURES
          </span>
          <h2 className="text-2xl md:text-4xl font-bold">
            Everything You Need to Excel
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#FAFAFA] border-2 border-transparent hover:border-[#0F75BD] transition-colors">
            <div className="text-3xl md:text-4xl mb-3 md:mb-4">📅</div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Personalized Schedules</h3>
            <p className="text-sm md:text-base text-[#757575]">AI-powered study schedules tailored to your learning style and goals</p>
          </div>
          <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#FAFAFA] border-2 border-transparent hover:border-[#0F75BD] transition-colors">
            <div className="text-3xl md:text-4xl mb-3 md:mb-4">📊</div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Progress Tracking</h3>
            <p className="text-sm md:text-base text-[#757575]">Monitor your performance and identify areas for improvement</p>
          </div>
          <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#FAFAFA] border-2 border-transparent hover:border-[#0F75BD] transition-colors">
            <div className="text-3xl md:text-4xl mb-3 md:mb-4">🎯</div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Smart Goals</h3>
            <p className="text-sm md:text-base text-[#757575]">Set and achieve your academic goals with intelligent recommendations</p>
          </div>
        </div>
      </div>
    </section>
  );
}
