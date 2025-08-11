"use client";

interface SidebarProps {
  onViewChange: (view: 'dashboard' | 'exchanges') => void;
  activeView: 'dashboard' | 'exchanges';
}

const Sidebar = ({ onViewChange, activeView }: SidebarProps) => {
  return (
    <div className="w-64 bg-gray-900 text-white p-4 flex flex-col min-h-screen">
      {/* Logo */}
      <div className="flex items-center mb-8 px-2">
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

      {/* Main Navigation */}
      <nav className="flex-1">
        <div className="mb-6">
          <h3 className="text-xs uppercase text-gray-400 mb-3 px-2 font-semibold tracking-wider">Main Menu</h3>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => onViewChange('dashboard')}
                className={`w-full flex items-center p-2.5 rounded-lg transition-all duration-200 ${
                  activeView === 'dashboard' 
                    ? 'bg-teal-600 text-white shadow-sm' 
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <span className="mr-3 text-gray-400">📊</span>
                <span className="font-medium">Dashboard</span>
              </button>
            </li>
            <li>
              <a href="#" className="flex items-center p-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200">
                <span className="mr-3 text-gray-400">💳</span>
                <span className="font-medium">Cards</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200">
                <span className="mr-3 text-gray-400">🔄</span>
                <span className="font-medium">Transactions</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200">
                <span className="mr-3 text-gray-400">💰</span>
                <span className="font-medium">Cash Flow</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200">
                <span className="mr-3 text-gray-400">📋</span>
                <span className="font-medium">Budget</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200">
                <span className="mr-3 text-gray-400">🎯</span>
                <span className="font-medium">Goals</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xs uppercase text-gray-400 mb-3 px-2 font-semibold tracking-wider">Investments</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center p-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200">
                <span className="mr-3 text-gray-400">📈</span>
                <span className="font-medium">Investments</span>
              </a>
            </li>
            <li>
              <button
                onClick={() => onViewChange('exchanges')}
                className={`w-full flex items-center p-2.5 rounded-lg transition-all duration-200 ${
                  activeView === 'exchanges' 
                    ? 'bg-teal-600 text-white shadow-sm' 
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <span className="mr-3 text-gray-400">💱</span>
                <span className="font-medium">Exchanges</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Settings and Help - positioned at bottom */}
      <div className="pt-6 border-t border-gray-700">
        <ul className="space-y-1">
          <li>
            <a href="#" className="flex items-center p-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200">
              <span className="mr-3 text-gray-400">⚙️</span>
              <span className="font-medium">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200">
              <span className="mr-3 text-gray-400">❓</span>
              <span className="font-medium">Help & Support</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar; 