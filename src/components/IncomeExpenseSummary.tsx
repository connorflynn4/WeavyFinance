"use client";

const IncomeExpenseSummary = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4 h-full flex flex-col justify-center">
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100">
          <h4 className="text-base font-medium text-gray-800 mb-2 flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Income
          </h4>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-gray-800">$28,933.92</p>
            <div className="flex items-center text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-1 text-sm font-medium">+5%</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-1">vs last month</p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border border-red-100">
          <h4 className="text-base font-medium text-gray-800 mb-2 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            Expense
          </h4>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-gray-800">$12,933.92</p>
            <div className="flex items-center text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-1 text-sm font-medium">-12%</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-1">vs last month</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenseSummary; 