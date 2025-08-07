"use client";

import { useState } from 'react';

const CardsSection = () => {
  const [spendLimitEnabled, setSpendLimitEnabled] = useState(true);

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-base font-bold text-gray-800">Cards</h3>
        <button className="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg p-3 text-white mb-3">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs opacity-80">Marteen Praz</p>
            <p className="text-base font-bold mt-1">9283 0293</p>
          </div>
          <div className="flex items-center">
            <span className="text-xs bg-teal-700 px-2 py-1 rounded mr-2">Physical</span>
            <span className="text-xs bg-green-500 px-2 py-1 rounded">Active</span>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs opacity-80">Expiry</p>
            <p className="font-medium">09/30</p>
          </div>
          <div className="text-right">
            <p className="text-xs opacity-80">Balance</p>
            <p className="font-bold">$10,372.92</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-600">Spend Limit</p>
          <p className="text-sm font-medium">$12,372.92 per month</p>
        </div>
        <div className="flex items-center">
          <span className="text-xs text-gray-600 mr-2">{spendLimitEnabled ? 'On' : 'Off'}</span>
          <button
            onClick={() => setSpendLimitEnabled(!spendLimitEnabled)}
            className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors ${
              spendLimitEnabled ? 'bg-teal-500' : 'bg-gray-300'
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                spendLimitEnabled ? 'translate-x-5' : ''
              }`}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsSection; 