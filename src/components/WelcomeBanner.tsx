"use client";

const WelcomeBanner = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-4 overflow-hidden">
      {/* Gradient top border */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400" />

      {/* Content */}
      <div className="p-4 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Welcome to Weavy</h2>
          <p className="text-xs text-gray-500 mt-1">Now it's easier than ever to get started with Weavy.</p>
        </div>

        {/* Button with gradient underline only */}
        <div className="relative inline-flex">
          <button className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-teal-700 hover:border-teal-400 transition-colors">
            Watch a Demo
          </button>
          <span aria-hidden className="pointer-events-none absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner; 