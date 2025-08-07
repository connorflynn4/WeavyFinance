"use client";

import {
  Sidebar,
  Header,
  WelcomeBanner,
  BalanceChart,
  IncomeExpenseSummary,
  CardsSection,
  SpendingSummary,
  ExchangeSection,
} from './components';
import { balanceData, spendingCategories } from './data/mockData';

const FinancialDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
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
        </main>
      </div>
    </div>
  );
};

export default FinancialDashboard;
