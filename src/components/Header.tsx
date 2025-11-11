"use client";

import { useState, useEffect, useRef } from "react";
import { Bell, Search, ChevronDown, Calendar, Menu, MoreVertical, Filter } from "lucide-react";

interface HeaderProps {
  onMobileMenuToggle: () => void;
}

const Header = ({ onMobileMenuToggle }: HeaderProps) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setIsDatePickerOpen(false);
      }
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setIsMoreMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 backdrop-blur-sm sticky top-0 z-40">
      <div className="h-14 px-4 flex items-center justify-between">
        {/* Left Section: Hamburger + Title */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {/* Mobile hamburger menu */}
          <button
            onClick={onMobileMenuToggle}
            className="lg:hidden p-2 -ml-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle sidebar menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          {/* Title Section */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-semibold text-gray-900 tracking-tight truncate">
                Dashboard
              </h1>
              <span className="hidden sm:inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-600 whitespace-nowrap">
                Overview
              </span>
            </div>
            
            {/* Date Range - Desktop */}
            <div className="hidden md:flex items-center text-gray-500 mt-0.5 text-xs sm:text-sm">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 flex-shrink-0" />
              <span className="whitespace-nowrap">Financial report for Feb 01, 2024 - Feb 28, 2024</span>
              <button 
                className="ml-2 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Change date range"
              >
                <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Date Range - Mobile (Collapsible) */}
            <div className="md:hidden relative" ref={datePickerRef}>
              <button
                onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                className="flex items-center text-gray-500 mt-0.5 text-xs transition-colors"
                aria-label="Toggle date range"
              >
                <Filter className="w-3.5 h-3.5 mr-1" />
                <span className="whitespace-nowrap">Feb 01 - Feb 28</span>
                <ChevronDown className={`w-3 h-3 ml-1 transition-transform ${isDatePickerOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Expanded Date Picker (Mobile) */}
              {isDatePickerOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-50 min-w-[200px] animate-fade-in">
                  <div className="text-xs text-gray-600 mb-2">Financial report for</div>
                  <div className="text-sm text-gray-900 font-medium">Feb 01, 2024 - Feb 28, 2024</div>
                  <button
                    onClick={() => setIsDatePickerOpen(false)}
                    className="mt-2 text-xs text-teal-600 hover:text-teal-700"
                  >
                    Change range
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Search - Desktop */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-3 py-1.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 placeholder:text-gray-400 w-48"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" />
          </div>
          
          {/* Mobile: More Menu (for very small screens) */}
          <div className="relative md:hidden" ref={moreMenuRef}>
            <button
              onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="More options"
            >
              <MoreVertical className="w-5 h-5" />
            </button>
            
            {/* More Menu Dropdown */}
            {isMoreMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 min-w-[180px] animate-fade-in">
                <button
                  onClick={() => setIsMoreMenuOpen(false)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </button>
                <button
                  onClick={() => setIsMoreMenuOpen(false)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors relative"
                  aria-label="Notifications"
                >
                  <Bell className="w-4 h-4" />
                  <span>Notifications</span>
                  <span className="absolute left-8 top-2.5 block h-2 w-2 rounded-full bg-red-500" />
                </button>
                <div className="border-t border-gray-200 my-1" />
                <button
                  onClick={() => setIsMoreMenuOpen(false)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  aria-label="Profile"
                >
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold text-xs">
                    MP
                  </div>
                  <span>Profile</span>
                </button>
              </div>
            )}
          </div>

          {/* Desktop/Tablet: Individual Icons */}
          <div className="hidden md:flex items-center gap-2">
            
            {/* Notifications */}
            <button
              className="relative p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>
            
            {/* Profile */}
            <div className="flex items-center gap-1.5">
              <button
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold text-sm hover:bg-gray-300 transition-colors min-w-[44px] min-h-[44px]"
                aria-label="Profile menu"
              >
                MP
              </button>
              <button
                className="p-1 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Profile options"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 