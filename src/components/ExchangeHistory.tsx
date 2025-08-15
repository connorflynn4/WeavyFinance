"use client";

import { exchangeHistory } from '../data/mockData';

const ExchangeHistory = () => {
  return (
    <div className="bg-white rounded-xl shadow p-3 sm:p-4">
      <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-3">Exchange History</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="text-xs sm:text-sm text-gray-600">Recent Exchanges</p>
          <span className="text-xs text-gray-500">{exchangeHistory.length} transactions</span>
        </div>
        
        {exchangeHistory.length === 0 ? (
          <div className="text-center py-6 sm:py-8 text-gray-500">
            <svg className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="mt-2 text-xs sm:text-sm">No exchange history yet</p>
            <p className="text-xs">Complete your first exchange to see it here</p>
          </div>
        ) : (
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {exchangeHistory.map((exchange) => (
              <div key={exchange.id} className="border border-gray-200 rounded-lg p-2 sm:p-3 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="flex items-center space-x-1">
                      <span className="text-xs sm:text-sm font-medium">{exchange.fromAmount.toLocaleString()}</span>
                      <span className="text-xs text-gray-500">{exchange.fromCurrency}</span>
                    </div>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div className="flex items-center space-x-1">
                      <span className="text-xs sm:text-sm font-medium">{exchange.toAmount.toLocaleString()}</span>
                      <span className="text-xs text-gray-500">{exchange.toCurrency}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    exchange.status === 'completed' ? 'bg-green-100 text-green-800' :
                    exchange.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {exchange.status}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs text-gray-500 gap-2">
                  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-1 sm:space-y-0">
                    <span>Rate: 1 {exchange.fromCurrency} = {exchange.exchangeRate.toFixed(4)} {exchange.toCurrency}</span>
                    <span>Fee: {exchange.feeAmount.toFixed(2)} {exchange.fromCurrency}</span>
                  </div>
                  <span>{exchange.timestamp.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExchangeHistory;
