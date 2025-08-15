"use client";

import { Bell, Search, ChevronDown, Calendar, Menu } from "lucide-react";

interface HeaderProps {
  onMobileMenuToggle: () => void;
}

const Header = ({ onMobileMenuToggle }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-3">
        {/* Mobile hamburger menu */}
        <button
          onClick={onMobileMenuToggle}
          className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200"
        >
          <Menu className="w-6 h-6" />
        </button>
        
        <div>
          <div className="flex items-center gap-2 text-gray-900">
            <h1 className="text-lg font-semibold">Dashboard</h1>
            <span className="hidden sm:inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-600">Overview</span>
          </div>
          <div className="flex items-center text-gray-500 mt-1 text-sm">
            <Calendar className="w-4 h-4 mr-1.5" />
            <span className="hidden sm:inline">Financial report for Feb 01, 2024 - Feb 28, 2024</span>
            <span className="sm:hidden">Feb 01 - Feb 28, 2024</span>
            <button className="ml-2 text-gray-500 hover:text-gray-700">
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search - hidden on very small screens */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-3 py-1.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 placeholder:text-gray-400"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" />
        </div>
        
        {/* Mobile search button */}
        <button className="sm:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200">
          <Search className="w-5 h-5" />
        </button>
        
        <button className="relative rounded-full p-2 hover:bg-gray-100 text-gray-600">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500" />
        </button>
        
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold mr-2 text-sm">
            MP
          </div>
          <button className="text-gray-600 hover:text-gray-800">
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 