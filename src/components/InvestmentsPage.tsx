"use client";

import { useState } from "react";
import { LineChart, TrendingUp, TrendingDown, DollarSign, Target, Plus, MoreVertical, Eye, EyeOff } from "lucide-react";

interface InvestmentItem {
  id: string;
  name: string;
  symbol: string;
  type: "Stock" | "ETF" | "Crypto" | "Bond" | "Real Estate";
  currentValue: number;
  totalInvested: number;
  shares: number;
  pricePerShare: number;
  change24h: number;
  changePercent: number;
  sector?: string;
  risk: "Low" | "Medium" | "High";
}

const initialInvestments: InvestmentItem[] = [
  {
    id: "1",
    name: "Apple Inc.",
    symbol: "AAPL",
    type: "Stock",
    currentValue: 15420.50,
    totalInvested: 12000.00,
    shares: 60,
    pricePerShare: 257.01,
    change24h: 12.45,
    changePercent: 5.09,
    sector: "Technology",
    risk: "Medium"
  },
  {
    id: "2",
    name: "Vanguard S&P 500 ETF",
    symbol: "VOO",
    type: "ETF",
    currentValue: 8750.25,
    totalInvested: 8000.00,
    shares: 20,
    pricePerShare: 437.51,
    change24h: -2.15,
    changePercent: -0.49,
    sector: "Broad Market",
    risk: "Low"
  },
  {
    id: "3",
    name: "Bitcoin",
    symbol: "BTC",
    type: "Crypto",
    currentValue: 12500.00,
    totalInvested: 10000.00,
    shares: 0.5,
    pricePerShare: 25000.00,
    change24h: 1250.00,
    changePercent: 5.26,
    sector: "Cryptocurrency",
    risk: "High"
  },
  {
    id: "4",
    name: "Tesla Inc.",
    symbol: "TSLA",
    type: "Stock",
    currentValue: 6800.00,
    totalInvested: 7500.00,
    shares: 25,
    pricePerShare: 272.00,
    change24h: -8.50,
    changePercent: -3.03,
    sector: "Automotive",
    risk: "High"
  }
];

const InvestmentsPage = () => {
  const [investments, setInvestments] = useState<InvestmentItem[]>(initialInvestments);
  const [showValues, setShowValues] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState<'1D' | '1W' | '1M' | '3M' | '1Y'>('1M');

  // Calculate portfolio metrics
  const totalValue = investments.reduce((sum, inv) => sum + inv.currentValue, 0);
  const totalInvested = investments.reduce((sum, inv) => sum + inv.totalInvested, 0);
  const totalGain = totalValue - totalInvested;
  const totalGainPercent = totalInvested > 0 ? (totalGain / totalInvested) * 100 : 0;

  const addInvestment = () => {
    // This would typically open a modal or form
    console.log("Add investment clicked");
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-green-100 text-green-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'High': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Stock': return 'bg-blue-100 text-blue-700';
      case 'ETF': return 'bg-purple-100 text-purple-700';
      case 'Crypto': return 'bg-orange-100 text-orange-700';
      case 'Bond': return 'bg-green-100 text-green-700';
      case 'Real Estate': return 'bg-indigo-100 text-indigo-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Investments</h1>
          <p className="text-sm text-gray-500 mt-1">Track your portfolio performance and manage your investments.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowValues(!showValues)}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 text-gray-700 px-3 py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            {showValues ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showValues ? 'Hide Values' : 'Show Values'}
          </button>
          <button 
            onClick={addInvestment}
            className="inline-flex items-center gap-2 rounded-lg bg-teal-600 text-white px-3 py-2 text-sm font-medium hover:bg-teal-700 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Investment
          </button>
        </div>
      </div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Value</p>
              <p className="text-2xl font-bold text-gray-900">
                {showValues ? `$${totalValue.toLocaleString()}` : '****'}
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-teal-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Invested</p>
              <p className="text-2xl font-bold text-gray-900">
                {showValues ? `$${totalInvested.toLocaleString()}` : '****'}
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Gain/Loss</p>
              <p className={`text-2xl font-bold ${totalGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {showValues ? `${totalGain >= 0 ? '+' : ''}$${totalGain.toLocaleString()}` : '****'}
              </p>
            </div>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              totalGain >= 0 ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {totalGain >= 0 ? (
                <TrendingUp className="w-5 h-5 text-green-600" />
              ) : (
                <TrendingDown className="w-5 h-5 text-red-600" />
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Return %</p>
              <p className={`text-2xl font-bold ${totalGainPercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {showValues ? `${totalGainPercent >= 0 ? '+' : ''}${totalGainPercent.toFixed(2)}%` : '****'}
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <LineChart className="w-5 h-5 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Portfolio Performance</h3>
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {(['1D', '1W', '1M', '3M', '1Y'] as const).map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  selectedTimeframe === timeframe
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>
        
        {/* Placeholder for chart - would integrate with Chart.js */}
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <LineChart className="w-12 h-12 mx-auto mb-2 text-gray-400" />
            <p>Performance chart for {selectedTimeframe}</p>
            <p className="text-sm">Chart integration would go here</p>
          </div>
        </div>
      </div>

      {/* Investments List */}
      <div className="bg-white rounded-xl shadow">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Your Investments</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Investment</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shares</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Value</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gain/Loss</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {investments.map((investment) => {
                const gainLoss = investment.currentValue - investment.totalInvested;
                const gainLossPercent = (gainLoss / investment.totalInvested) * 100;
                
                return (
                  <tr key={investment.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{investment.name}</div>
                        <div className="text-sm text-gray-500">{investment.symbol}</div>
                        {investment.sector && (
                          <div className="text-xs text-gray-400">{investment.sector}</div>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(investment.type)}`}>
                        {investment.type}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900">
                      {showValues ? investment.shares.toLocaleString() : '****'}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900">
                      {showValues ? `$${investment.pricePerShare.toFixed(2)}` : '****'}
                    </td>
                    <td className="px-4 py-4">
                      <div className={`text-sm font-medium ${investment.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {investment.changePercent >= 0 ? '+' : ''}{investment.changePercent.toFixed(2)}%
                      </div>
                      <div className={`text-xs ${investment.changePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {investment.change24h >= 0 ? '+' : ''}${investment.change24h.toFixed(2)}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900">
                      {showValues ? `$${investment.currentValue.toLocaleString()}` : '****'}
                    </td>
                    <td className="px-4 py-4">
                      <div className={`text-sm font-medium ${gainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {showValues ? `${gainLoss >= 0 ? '+' : ''}$${gainLoss.toFixed(2)}` : '****'}
                      </div>
                      <div className={`text-xs ${gainLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {gainLossPercent >= 0 ? '+' : ''}{gainLossPercent.toFixed(2)}%
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(investment.risk)}`}>
                        {investment.risk}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvestmentsPage;
