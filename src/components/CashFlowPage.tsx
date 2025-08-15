"use client";

import { useState, useMemo } from "react";
import { TrendingUp, TrendingDown, DollarSign, Calendar, Filter, Download, Plus } from "lucide-react";

interface CashFlowData {
  id: string;
  date: string;
  type: 'income' | 'expense';
  category: string;
  description: string;
  amount: number;
  balance: number;
}

interface CashFlowSummary {
  totalIncome: number;
  totalExpenses: number;
  netCashFlow: number;
  averageMonthlyIncome: number;
  averageMonthlyExpenses: number;
  savingsRate: number;
}

const mockCashFlowData: CashFlowData[] = [
  { id: "1", date: "2025-01-15", type: "income", category: "Salary", description: "Monthly salary", amount: 4500, balance: 4500 },
  { id: "2", date: "2025-01-16", type: "expense", category: "Housing", description: "Rent payment", amount: 1200, balance: 3300 },
  { id: "3", date: "2025-01-17", type: "expense", category: "Food", description: "Grocery shopping", amount: 300, balance: 3000 },
  { id: "4", date: "2025-01-18", type: "expense", category: "Transportation", description: "Gas and parking", amount: 150, balance: 2850 },
  { id: "5", date: "2025-01-19", type: "income", category: "Freelance", description: "Web design project", amount: 800, balance: 3650 },
  { id: "6", date: "2025-01-20", type: "expense", category: "Entertainment", description: "Movie tickets", amount: 50, balance: 3600 },
  { id: "7", date: "2025-01-21", type: "expense", category: "Utilities", description: "Electricity bill", amount: 120, balance: 3480 },
  { id: "8", date: "2025-01-22", type: "expense", category: "Healthcare", description: "Doctor visit", amount: 75, balance: 3405 },
  { id: "9", date: "2025-01-23", type: "income", category: "Investment", description: "Dividend payment", amount: 200, balance: 3605 },
  { id: "10", date: "2025-01-24", type: "expense", category: "Shopping", description: "New clothes", amount: 180, balance: 3425 },
];

const categories = ["All", "Salary", "Freelance", "Investment", "Housing", "Food", "Transportation", "Entertainment", "Utilities", "Healthcare", "Shopping"];

const CashFlowPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'1M' | '3M' | '6M' | '1Y'>('1M');
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showIncome, setShowIncome] = useState(true);
  const [showExpenses, setShowExpenses] = useState(true);

  // Filter data based on selected period and category
  const filteredData = useMemo(() => {
    let filtered = mockCashFlowData;
    
    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Filter by period (simplified - in real app would filter by actual dates)
    // For now, just return all data
    return filtered;
  }, [selectedCategory]);

  // Calculate summary statistics
  const summary: CashFlowSummary = useMemo(() => {
    const income = filteredData.filter(item => item.type === 'income').reduce((sum, item) => sum + item.amount, 0);
    const expenses = filteredData.filter(item => item.type === 'expense').reduce((sum, item) => sum + item.amount, 0);
    const netCashFlow = income - expenses;
    const averageMonthlyIncome = income; // Simplified for demo
    const averageMonthlyExpenses = expenses; // Simplified for demo
    const savingsRate = income > 0 ? ((income - expenses) / income) * 100 : 0;

    return {
      totalIncome: income,
      totalExpenses: expenses,
      netCashFlow,
      averageMonthlyIncome,
      averageMonthlyExpenses,
      savingsRate
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

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Salary': 'bg-blue-100 text-blue-700',
      'Freelance': 'bg-purple-100 text-purple-700',
      'Investment': 'bg-green-100 text-green-700',
      'Housing': 'bg-red-100 text-red-700',
      'Food': 'bg-orange-100 text-orange-700',
      'Transportation': 'bg-yellow-100 text-yellow-700',
      'Entertainment': 'bg-pink-100 text-pink-700',
      'Utilities': 'bg-indigo-100 text-indigo-700',
      'Healthcare': 'bg-teal-100 text-teal-700',
      'Shopping': 'bg-gray-100 text-gray-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-0">
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Cash Flow</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Track your income, expenses, and cash flow over time.</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 text-gray-700 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium hover:bg-gray-50 transition-colors">
            <Download className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Export</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-teal-600 text-white px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium hover:bg-teal-700 transition-colors">
            <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Add Transaction</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="bg-white rounded-xl shadow p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Total Income</p>
              <p className="text-lg sm:text-2xl font-bold text-green-600">
                {formatCurrency(summary.totalIncome)}
              </p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Total Expenses</p>
              <p className="text-lg sm:text-2xl font-bold text-red-600">
                {formatCurrency(summary.totalExpenses)}
              </p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Net Cash Flow</p>
              <p className={`text-lg sm:text-2xl font-bold ${summary.netCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {summary.netCashFlow >= 0 ? '+' : ''}{formatCurrency(summary.netCashFlow)}
              </p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-teal-100 flex items-center justify-center">
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Savings Rate</p>
              <p className={`text-lg sm:text-2xl font-bold ${summary.savingsRate >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {summary.savingsRate.toFixed(1)}%
              </p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow p-3 sm:p-4 mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value as any)}
              className="px-3 py-2 rounded-md border border-gray-300 text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="1M">Last Month</option>
              <option value="3M">Last 3 Months</option>
              <option value="6M">Last 6 Months</option>
              <option value="1Y">Last Year</option>
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="flex items-center text-xs sm:text-sm text-gray-700">
              <input
                type="checkbox"
                checked={showIncome}
                onChange={(e) => setShowIncome(e.target.checked)}
                className="mr-2 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
              Income
            </label>
            <label className="flex items-center text-xs sm:text-sm text-gray-700">
              <input
                type="checkbox"
                checked={showExpenses}
                onChange={(e) => setShowExpenses(e.target.checked)}
                className="mr-2 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
              Expenses
            </label>
          </div>
        </div>
      </div>

      {/* Cash Flow List */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="p-3 sm:p-4 border-b border-gray-200">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">Cash Flow Transactions</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData
                .filter(item => 
                  (showIncome && item.type === 'income') || 
                  (showExpenses && item.type === 'expense')
                )
                .map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 whitespace-nowrap">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        transaction.type === 'income' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {transaction.type === 'income' ? 'Income' : 'Expense'}
                      </span>
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(transaction.category)}`}>
                        {transaction.category}
                      </span>
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-900">
                      {transaction.description}
                    </td>
                    <td className={`px-2 sm:px-4 py-2 sm:py-3 text-right font-medium ${
                      transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-right text-gray-900">
                      {formatCurrency(transaction.balance)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {filteredData.filter(item => 
          (showIncome && item.type === 'income') || 
          (showExpenses && item.type === 'expense')
        ).length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p className="text-sm">No transactions match your current filters.</p>
            <p className="text-xs mt-1">Try adjusting your filters or add new transactions.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CashFlowPage;
