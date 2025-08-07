"use client";

import { useState } from 'react';

const ExchangeSection = () => {
  const [fromAmount, setFromAmount] = useState(10000000);
  const [toAmount, setToAmount] = useState(607.16);

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-base font-bold text-gray-800 mb-3">Exchange</h3>

      <div className="mb-3 p-2 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600">Conversion Rate</p>
        <div className="flex justify-between items-center mt-1">
          <p className="font-medium text-sm">1 USD = 16,275.01 IDR</p>
          <a href="#" className="text-teal-600 text-xs hover:underline">
            Conversion Chart
          </a>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Exchange From</label>
          <div className="flex">
            <div className="flex items-center bg-gray-100 rounded-l-lg px-2 border border-r-0 border-gray-300">
              <span className="mr-1 text-sm">🇮🇩</span>
              <span className="text-sm">IDR</span>
            </div>
            <input
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(Number(e.target.value))}
              className="flex-1 rounded-r-lg border border-gray-300 px-2 py-1 text-sm"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
          </button>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Exchange To</label>
          <div className="flex">
            <div className="flex items-center bg-gray-100 rounded-l-lg px-2 border border-r-0 border-gray-300">
              <span className="mr-1 text-sm">🇺🇸</span>
              <span className="text-sm">USD</span>
            </div>
            <input
              type="number"
              value={toAmount}
              onChange={(e) => setToAmount(Number(e.target.value))}
              className="flex-1 rounded-r-lg border border-gray-300 px-2 py-1 text-sm"
            />
          </div>
        </div>

        <div className="text-xs text-gray-600">Includes fees (1.18%) 118,436 IDR</div>

        <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
          Exchange
        </button>
      </div>
    </div>
  );
};

export default ExchangeSection; 