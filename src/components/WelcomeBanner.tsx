"use client";

const WelcomeBanner = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-4 mb-4 text-white flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold mb-1">Welcome to Weavy</h2>
        <p className="text-sm opacity-90">Now it's easier than ever to get started with Weavy.</p>
      </div>
      <button className="bg-white text-teal-600 font-medium py-2 px-3 rounded-lg border border-white hover:bg-gray-100 transition-colors text-sm">
        Watch a Demo
      </button>
    </div>
  );
};

export default WelcomeBanner; 