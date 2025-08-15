"use client";

import { useState, useMemo } from "react";
import { Target, TrendingUp, AlertCircle, CheckCircle, Plus } from "lucide-react";
import { budgetData, BudgetCategory } from '../data/mockData';

interface BudgetSummary {
  totalBudget: number;
  totalSpent: number;
  remaining: number;
}

const BudgetPage = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>("January 2025");
  const [showOverBudget, setShowOverBudget] = useState(false);

  // Get current month's data
  const currentMonthData = budgetData[selectedMonth as keyof typeof budgetData] || budgetData["January 2025"];

  // Filter data based on selected month and over-budget filter
  const filteredData = useMemo(() => {
    let filtered = currentMonthData;
    
    if (showOverBudget) {
      filtered = filtered.filter(item => item.spent > item.budget);
    }
    
    return filtered;
  }, [currentMonthData, showOverBudget]);

  // Calculate budget summary
  const summary: BudgetSummary = useMemo(() => {
    const totalBudget = filteredData.reduce((sum, category) => sum + category.budget, 0);
    const totalSpent = filteredData.reduce((sum, category) => sum + category.spent, 0);
    const remaining = totalBudget - totalSpent;

    return {
      totalBudget,
      totalSpent,
      remaining
    };
  }, [filteredData]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getProgressColor = (spent: number, budget: number) => {
    const percentage = (spent / budget) * 100;
    if (percentage >= 100) return "bg-red-500";
    if (percentage >= 80) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getStatusText = (spent: number, budget: number) => {
    if (spent > budget) return "Over";
    if (spent === budget) return "On Target";
    return "Under";
  };

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-0">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Budget</h1>
          <p className="text-gray-500 mt-1">Track your monthly spending</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="January 2025">January 2025</option>
            <option value="December 2024">December 2024</option>
            <option value="November 2024">November 2024</option>
          </select>
          <button className="inline-flex items-center gap-2 rounded-lg bg-teal-600 text-white px-3 py-2 text-sm font-medium hover:bg-teal-700 transition-colors">
            <Plus className="w-4 h-4" />
            Add Category
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500 mb-1">Total Budget</p>
          <p className="text-2xl font-bold text-blue-600">
            {formatCurrency(summary.totalBudget)}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500 mb-1">Total Spent</p>
          <p className="text-2xl font-bold text-gray-700">
            {formatCurrency(summary.totalSpent)}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500 mb-1">Remaining</p>
          <p className={`text-2xl font-bold ${summary.remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {summary.remaining >= 0 ? '+' : ''}{formatCurrency(summary.remaining)}
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="mb-4">
        <label className="flex items-center text-sm text-gray-700">
          <input
            type="checkbox"
            checked={showOverBudget}
            onChange={(e) => setShowOverBudget(e.target.checked)}
            className="mr-2 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
          />
          Show only over-budget categories ({filteredData.filter(item => item.spent > item.budget).length})
        </label>
      </div>

      {/* Budget Categories */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {filteredData.map((category) => {
            const percentage = (category.spent / category.budget) * 100;
            const isOverBudget = category.spent > category.budget;
            
            return (
              <div key={category.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{category.name}</h4>
                  <span className={`text-sm font-medium ${
                    isOverBudget ? 'text-red-600' : 
                    category.spent === category.budget ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    {getStatusText(category.spent, category.budget)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
                  <span>
                    {formatCurrency(category.spent)} / {formatCurrency(category.budget)}
                  </span>
                  <span>{percentage.toFixed(0)}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(category.spent, category.budget)}`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p className="text-sm">No categories match your current filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetPage;
