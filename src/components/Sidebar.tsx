"use client";

import { LayoutDashboard, CreditCard, RefreshCcw, Wallet, ClipboardList, Target, LineChart, ArrowLeftRight, Settings as SettingsIcon, HelpCircle } from "lucide-react";

interface SidebarProps {
  onViewChange: (view: 'dashboard' | 'exchanges' | 'cards' | 'transactions' | 'investments' | 'goals') => void;
  activeView: 'dashboard' | 'exchanges' | 'cards' | 'transactions' | 'investments' | 'goals';
}

const SidebarComponent = ({ onViewChange, activeView }: SidebarProps) => {
  return (
    <div className="w-64 bg-gray-900 text-white border-r border-gray-700 flex flex-col min-h-screen">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-700">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-md bg-teal-500 flex items-center justify-center mr-3">
            <span className="font-bold text-white text-sm">W</span>
          </div>
          <button
            onClick={() => onViewChange('dashboard')}
            className="font-bold text-lg hover:text-teal-300 transition-colors duration-200 cursor-pointer"
          >
            Weavy
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-4">
        {/* Main Menu */}
        <div className="mb-6">
          <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Main Menu</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onViewChange('dashboard')}
                className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeView === 'dashboard'
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <LayoutDashboard className="w-4 h-4 mr-3" />
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => onViewChange('cards')}
                className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeView === 'cards'
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <CreditCard className="w-4 h-4 mr-3" />
                Cards
              </button>
            </li>
            <li>
              <button
                onClick={() => onViewChange('transactions')}
                className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeView === 'transactions'
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <RefreshCcw className="w-4 h-4 mr-3" />
                Transactions
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200">
                <Wallet className="w-4 h-4 mr-3" />
                Cash Flow
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200">
                <ClipboardList className="w-4 h-4 mr-3" />
                Budget
              </button>
            </li>
            <li>
              <button
                onClick={() => onViewChange('goals')}
                className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeView === 'goals'
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Target className="w-4 h-4 mr-3" />
                Goals
              </button>
            </li>
          </ul>
        </div>

        {/* Investments */}
        <div className="mb-6">
          <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Investments</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onViewChange('investments')}
                className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeView === 'investments'
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <LineChart className="w-4 h-4 mr-3" />
                Investments
              </button>
            </li>
            <li>
              <button
                onClick={() => onViewChange('exchanges')}
                className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeView === 'exchanges'
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <ArrowLeftRight className="w-4 h-4 mr-3" />
                Exchanges
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-700 mt-auto">
        <ul className="space-y-2">
          <li>
            <button className="w-full flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200">
              <SettingsIcon className="w-4 h-4 mr-3" />
              Settings
            </button>
          </li>
          <li>
            <button className="w-full flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200">
              <HelpCircle className="w-4 h-4 mr-3" />
              Help & Support
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarComponent; 