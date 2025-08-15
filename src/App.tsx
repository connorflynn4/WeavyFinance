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
  CardsPage,
  TransactionsPage,
  InvestmentsPage,
  GoalsPage,
  CashFlowPage,
  BudgetPage,
} from './components';

import { balanceData, spendingCategories } from './data/mockData';

type View = 'dashboard' | 'exchanges' | 'cards' | 'transactions' | 'investments' | 'goals' | 'cashflow' | 'budget';

const FinancialDashboard = () => {
  const [activeView, setActiveView] = useState<View>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        onViewChange={setActiveView} 
        activeView={activeView} 
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={handleMobileMenuToggle}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header onMobileMenuToggle={handleMobileMenuToggle} />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-2 sm:p-4 bg-gray-50">
        {activeView === 'dashboard' && (
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
        )}

        {activeView === 'exchanges' && (
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Exchange History</h1>
              <p className="text-gray-600">View your recent currency exchange transactions</p>
            </div>
            <ExchangeHistory />
          </div>
        )}

        {activeView === 'cards' && <CardsPage />}

                  {activeView === 'transactions' && <TransactionsPage />}

          {activeView === 'investments' && <InvestmentsPage />}

          {activeView === 'goals' && <GoalsPage />}

        {activeView === 'cashflow' && <CashFlowPage />}

        {activeView === 'budget' && <BudgetPage />}
      </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-gray-500 text-sm text-center">
              © 2025 Weavy Finance. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FinancialDashboard;
