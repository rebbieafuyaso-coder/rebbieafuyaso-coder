"use client";

export default function Stats() {
  const stats = [
    {
      title: "Years Learning",
      digit: "05+",
      suffix: "Still counting..."
    },
    {
      title: "Projects done",
      digit: "10+",
      suffix: "and still working..."
    },
    {
      title: "Technologies",
      digit: "10+",
      suffix: "web, software, games and other technologies..."
    }
  ];

  return (
    <div className="bg-black py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 text-center sm:text-left border border-gray-100/10 rounded-xl hover:bg-white/5 transition-all duration-300 group"
          >
            <h4 className="font-display text-xs sm:text-sm uppercase tracking-wider text-gray-400 group-hover:text-emerald-400 transition-colors">
              {stat.title}
            </h4>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mt-1 sm:mt-2">
              {stat.digit}
            </p>
            <p className="text-xs sm:text-sm font-display text-gray-400 mt-1 sm:mt-2 leading-relaxed">
              {stat.suffix}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}