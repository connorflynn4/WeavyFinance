"use client";

import { LayoutDashboard, CreditCard, RefreshCcw, Wallet, ClipboardList, Target, LineChart, ArrowLeftRight, Settings as SettingsIcon, HelpCircle } from "lucide-react";

interface SidebarProps {
  onViewChange: (view: 'dashboard' | 'exchanges' | 'cards' | 'transactions' | 'investments' | 'goals' | 'cashflow' | 'budget') => void;
  activeView: 'dashboard' | 'exchanges' | 'cards' | 'transactions' | 'investments' | 'goals' | 'cashflow' | 'budget';
  isMobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
}

const SidebarComponent = ({ onViewChange, activeView, isMobileMenuOpen, onMobileMenuToggle }: SidebarProps) => {
  const handleNavClick = (view: 'dashboard' | 'exchanges' | 'cards' | 'transactions' | 'investments' | 'goals' | 'cashflow' | 'budget') => {
    onViewChange(view);
    // Close mobile menu when navigation item is clicked
    if (onMobileMenuToggle) {
      onMobileMenuToggle();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onMobileMenuToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-64 bg-gray-900 text-white border-r border-gray-700 flex flex-col
      `}>
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-700 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-md bg-teal-500 flex items-center justify-center mr-3">
                <span className="font-bold text-white text-sm">W</span>
              </div>
              <button
                onClick={() => handleNavClick('dashboard')}
                className="font-bold text-lg hover:text-teal-300 transition-colors duration-200 cursor-pointer"
              >
                Weavy
              </button>
            </div>
            {/* Mobile close button */}
            <button
              onClick={onMobileMenuToggle}
              className="lg:hidden text-gray-400 hover:text-white p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-3 lg:px-4 py-2 lg:py-4 min-h-0">
          {/* Main Menu */}
          <div className="mb-3">
            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Main Menu</h3>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => handleNavClick('dashboard')}
                  className={`w-full flex items-center px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeView === 'dashboard'
                      ? 'bg-teal-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4 mr-2 lg:mr-3" />
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('cards')}
                  className={`w-full flex items-center px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeView === 'cards'
                      ? 'bg-teal-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <CreditCard className="w-4 h-4 mr-2 lg:mr-3" />
                  Cards
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('transactions')}
                  className={`w-full flex items-center px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeView === 'transactions'
                      ? 'bg-teal-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <RefreshCcw className="w-4 h-4 mr-2 lg:mr-3" />
                  Transactions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('cashflow')}
                  className={`w-full flex items-center px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeView === 'cashflow'
                      ? 'bg-teal-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Wallet className="w-4 h-4 mr-2 lg:mr-3" />
                  Cash Flow
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('budget')}
                  className={`w-full flex items-center px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeView === 'budget'
                      ? 'bg-teal-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <ClipboardList className="w-4 h-4 mr-2 lg:mr-3" />
                  Budget
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('goals')}
                  className={`w-full flex items-center px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeView === 'goals'
                      ? 'bg-teal-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Target className="w-4 h-4 mr-2 lg:mr-3" />
                  Goals
                </button>
              </li>
            </ul>
          </div>

          {/* Investments */}
          <div className="mb-3">
            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Investments</h3>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => handleNavClick('investments')}
                  className={`w-full flex items-center px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeView === 'investments'
                      ? 'bg-teal-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <LineChart className="w-4 h-4 mr-2 lg:mr-3" />
                  Investments
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('exchanges')}
                  className={`w-full flex items-center px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeView === 'exchanges'
                      ? 'bg-teal-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <ArrowLeftRight className="w-4 h-4 mr-2 lg:mr-3" />
                  Exchanges
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Footer */}
        <div className="px-3 lg:px-4 py-2 border-t border-gray-700 flex-shrink-0">
          <ul className="space-y-1">
            <li>
              <button className="w-full flex items-center px-2 lg:px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200">
                <SettingsIcon className="w-4 h-4 mr-2 lg:mr-3" />
                Settings
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-2 lg:px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200">
                <HelpCircle className="w-4 h-4 mr-2 lg:mr-3" />
                Help & Support
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarComponent; 