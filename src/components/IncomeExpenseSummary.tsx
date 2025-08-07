"use client";

const IncomeExpenseSummary = () => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl shadow p-4">
        <h4 className="text-base font-medium text-gray-800 mb-2">Income</h4>
        <div className="flex items-end">
          <p className="text-xl font-bold text-gray-800">$28,933.92</p>
          <div className="ml-auto flex items-center text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-1 text-sm">+5% vs last month</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <h4 className="text-base font-medium text-gray-800 mb-2">Expense</h4>
        <div className="flex items-end">
          <p className="text-xl font-bold text-gray-800">$12,933.92</p>
          <div className="ml-auto flex items-center text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-1 text-sm">-12% vs last month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenseSummary; 