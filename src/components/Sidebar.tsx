"use client";

interface SidebarProps {
  onViewChange: (view: 'dashboard' | 'exchanges') => void;
  activeView: 'dashboard' | 'exchanges';
}

const Sidebar = ({ onViewChange, activeView }: SidebarProps) => {
  return (
    <div className="w-64 bg-gray-900 text-white p-6 flex flex-col">
      {/* Logo */}
      <div className="flex items-center mb-10">
        <div className="w-10 h-10 rounded-md bg-teal-500 flex items-center justify-center mr-3">
          <span className="font-bold text-white">W</span>
        </div>
        <span className="font-bold text-xl">Weavy</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <div className="mb-8">
          <h3 className="text-xs uppercase text-gray-400 mb-2">Main Menu</h3>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => onViewChange('dashboard')}
                className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                  activeView === 'dashboard' ? 'bg-teal-700 text-white' : 'hover:bg-gray-800'
                }`}
              >
                <span className="mr-3">📊</span>
                <span>Dashboard</span>
              </button>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <span className="mr-3">💳</span>
                <span>Cards</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <span className="mr-3">🔄</span>
                <span>Transactions</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <span className="mr-3">💰</span>
                <span>Cash Flow</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <span className="mr-3">📋</span>
                <span>Budget</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <span className="mr-3">🎯</span>
                <span>Goals</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xs uppercase text-gray-400 mb-2">Investments</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <span className="mr-3">📈</span>
                <span>Investments</span>
              </a>
            </li>
            <li>
              <button
                onClick={() => onViewChange('exchanges')}
                className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                  activeView === 'exchanges' ? 'bg-teal-600 text-white' : 'hover:bg-gray-800'
                }`}
              >
                <span className="mr-3">💱</span>
                <span>Exchanges</span>
              </button>
            </li>
          </ul>
        </div>

        <div className="mt-auto">
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <span className="mr-3">⚙️</span>
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <span className="mr-3">❓</span>
                <span>Help & Support</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar; 