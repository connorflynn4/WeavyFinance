"use client";

import { useState } from 'react';
import {
  Sidebar,
  Header,
  WelcomeBanner,
  BalanceChart,
  IncomeExpenseSummary,
  CardsSection,
  SpendingSummary,
  ExchangeSection,
  ExchangeHistory,
} from './components';
import { balanceData, spendingCategories } from './data/mockData';

const FinancialDashboard = () => {
  const [activeView, setActiveView] = useState<'dashboard' | 'exchanges'>('dashboard');

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar onViewChange={setActiveView} activeView={activeView} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {activeView === 'dashboard' ? (
            <>
              {/* Welcome Banner */}
              <WelcomeBanner />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                {/* Balance Section */}
                <BalanceChart balanceData={balanceData} />

                {/* Income & Expense Summary */}
                <IncomeExpenseSummary />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Cards Section */}
                <CardsSection />

                {/* Spending Summary */}
                <SpendingSummary spendingCategories={spendingCategories} />

                {/* Exchange Section */}
                <ExchangeSection />
              </div>
            </>
          ) : (
            /* Exchange History View */
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Exchange History</h1>
                <p className="text-gray-600">View your recent currency exchange transactions</p>
              </div>
              <ExchangeHistory />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default FinancialDashboard;
