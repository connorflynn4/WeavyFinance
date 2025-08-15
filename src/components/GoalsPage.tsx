"use client";

import { useState } from "react";
import { Target, Plus, TrendingUp, Calendar, DollarSign, PiggyBank, Home, Car, GraduationCap, Heart, Plane, Star, Edit2, Trash2 } from "lucide-react";

interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  monthlyTarget: number;
  deadline: string;
  category: "Savings" | "Emergency Fund" | "House" | "Car" | "Education" | "Travel" | "Wedding" | "Business" | "Other";
  priority: "Low" | "Medium" | "High";
  status: "On Track" | "Behind" | "Completed";
  description?: string;
  startDate: string;
}

const initialGoals: FinancialGoal[] = [
  {
    id: "1",
    name: "Emergency Fund",
    targetAmount: 10000,
    currentAmount: 6500,
    monthlyTarget: 500,
    deadline: "2024-12-31",
    category: "Emergency Fund",
    priority: "High",
    status: "On Track",
    description: "Build a 6-month emergency fund for unexpected expenses",
    startDate: "2024-01-01"
  },
  {
    id: "2",
    name: "House Down Payment",
    targetAmount: 50000,
    currentAmount: 15000,
    monthlyTarget: 2000,
    deadline: "2026-06-30",
    category: "House",
    priority: "High",
    status: "Behind",
    description: "Save for a 20% down payment on a $250k house",
    startDate: "2023-01-01"
  },
  {
    id: "3",
    name: "Vacation Fund",
    targetAmount: 5000,
    currentAmount: 3200,
    monthlyTarget: 300,
    deadline: "2024-08-31",
    category: "Travel",
    priority: "Medium",
    status: "On Track",
    description: "Summer vacation to Europe",
    startDate: "2024-01-01"
  },
  {
    id: "4",
    name: "New Car",
    targetAmount: 25000,
    currentAmount: 8000,
    monthlyTarget: 1000,
    deadline: "2025-12-31",
    category: "Car",
    priority: "Medium",
    status: "On Track",
    description: "Replace current car with a more fuel-efficient model",
    startDate: "2024-01-01"
  }
];

const GoalsPage = () => {
  const [goals, setGoals] = useState<FinancialGoal[]>(initialGoals);
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Calculate overall progress
  const totalTargetAmount = goals.reduce((sum, goal) => sum + goal.targetAmount, 0);
  const totalCurrentAmount = goals.reduce((sum, goal) => sum + goal.currentAmount, 0);
  const totalProgress = totalTargetAmount > 0 ? (totalCurrentAmount / totalTargetAmount) * 100 : 0;
  const totalMonthlyTarget = goals.reduce((sum, goal) => sum + goal.monthlyTarget, 0);

  // Filter goals by category
  const filteredGoals = selectedCategory === "All" 
    ? goals 
    : goals.filter(goal => goal.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Savings': return <PiggyBank className="w-5 h-5" />;
      case 'Emergency Fund': return <Heart className="w-5 h-5" />;
      case 'House': return <Home className="w-5 h-5" />;
      case 'Car': return <Car className="w-5 h-5" />;
      case 'Education': return <GraduationCap className="w-5 h-5" />;
      case 'Travel': return <Plane className="w-5 h-5" />;
      case 'Wedding': return <Heart className="w-5 h-5" />;
      case 'Business': return <Star className="w-5 h-5" />;
      default: return <Target className="w-5 h-5" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Track': return 'bg-green-100 text-green-700';
      case 'Behind': return 'bg-red-100 text-red-700';
      case 'Completed': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-yellow-500';
    if (progress >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const calculateProgress = (current: number, target: number) => {
    return target > 0 ? (current / target) * 100 : 0;
  };

  const calculateMonthsRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44));
    return Math.max(0, diffMonths);
  };

  const addGoal = () => {
    setShowAddGoal(true);
    // This would typically open a modal or form
    console.log("Add goal clicked");
  };

  const deleteGoal = (id: string) => {
    setGoals(prev => prev.filter(goal => goal.id !== id));
  };

  const categories = ["All", "Savings", "Emergency Fund", "House", "Car", "Education", "Travel", "Wedding", "Business", "Other"];

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-0">
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Financial Goals</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Track your progress towards financial milestones and create a plan for your future.</p>
        </div>
        <button 
          onClick={addGoal}
          className="inline-flex items-center gap-2 rounded-lg bg-teal-600 text-white px-3 py-2 text-xs sm:text-sm font-medium hover:bg-teal-700 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Goal
        </button>
      </div>

      {/* Overall Progress Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="bg-white rounded-xl shadow p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Total Target</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">${totalTargetAmount.toLocaleString()}</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Total Saved</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">${totalCurrentAmount.toLocaleString()}</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <PiggyBank className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Monthly Target</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">${totalMonthlyTarget.toLocaleString()}</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Overall Progress</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">{totalProgress.toFixed(1)}%</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-teal-100 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-xl shadow p-3 sm:p-4 mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Filter by Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {filteredGoals.map((goal) => {
          const progress = calculateProgress(goal.currentAmount, goal.targetAmount);
          const monthsRemaining = calculateMonthsRemaining(goal.deadline);
          const isOnTrack = goal.currentAmount >= (goal.monthlyTarget * (12 - monthsRemaining));
          
          return (
            <div key={goal.id} className="bg-white rounded-xl shadow p-4 sm:p-6 hover:shadow-lg transition-shadow">
              {/* Goal Header */}
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
                    {getCategoryIcon(goal.category)}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900">{goal.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">{goal.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <Edit2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                  <button 
                    onClick={() => deleteGoal(goal.id)}
                    className="text-gray-400 hover:text-red-600"
                  >
                    <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              {/* Goal Description */}
              {goal.description && (
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{goal.description}</p>
              )}

              {/* Progress Bar */}
              <div className="mb-3 sm:mb-4">
                <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{progress.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(progress)}`}
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Financial Details */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <p className="text-xs text-gray-500">Current Amount</p>
                  <p className="text-sm sm:text-lg font-semibold text-gray-900">${goal.currentAmount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Target Amount</p>
                  <p className="text-sm sm:text-lg font-semibold text-gray-900">${goal.targetAmount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Monthly Target</p>
                  <p className="text-xs sm:text-sm font-medium text-gray-900">${goal.monthlyTarget.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Remaining</p>
                  <p className="text-xs sm:text-sm font-medium text-gray-900">${(goal.targetAmount - goal.currentAmount).toLocaleString()}</p>
                </div>
              </div>

              {/* Status and Priority */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(goal.priority)}`}>
                  {goal.priority} Priority
                </span>
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(goal.status)}`}>
                  {goal.status}
                </span>
              </div>

              {/* Timeline */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-600 gap-2">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Deadline: {new Date(goal.deadline).toLocaleDateString()}</span>
                </div>
                <span>{monthsRemaining} months left</span>
              </div>

              {/* Monthly Progress Indicator */}
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Monthly Progress</span>
                  <span className={`font-medium ${isOnTrack ? 'text-green-600' : 'text-red-600'}`}>
                    {isOnTrack ? 'On Track' : 'Behind'}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                    <div 
                      className={`h-1.5 rounded-full ${isOnTrack ? 'bg-green-500' : 'bg-red-500'}`}
                      style={{ width: `${Math.min((goal.currentAmount / (goal.monthlyTarget * 12)) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">
                    {Math.round((goal.currentAmount / (goal.monthlyTarget * 12)) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredGoals.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <Target className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No goals found</h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
            {selectedCategory === "All" 
              ? "Start by creating your first financial goal" 
              : `No goals found in the ${selectedCategory} category`
            }
          </p>
          <button 
            onClick={addGoal}
            className="inline-flex items-center gap-2 rounded-lg bg-teal-600 text-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium hover:bg-teal-700 transition-colors"
          >
            <Plus className="w-4 h-4" /> Create Your First Goal
          </button>
        </div>
      )}
    </div>
  );
};

export default GoalsPage;
