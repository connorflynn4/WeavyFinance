"use client";

import { useState, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface BalanceData {
  date: string;
  balance: number;
}

interface BalanceChartProps {
  balanceData: BalanceData[];
}

const BalanceChart = ({ balanceData }: BalanceChartProps) => {
  const [activeTab, setActiveTab] = useState<'weekly' | 'monthly' | 'yearly'>('monthly');

  // Filter data based on selected time period
  const filteredData = useMemo(() => {
    switch (activeTab) {
      case 'weekly':
        return balanceData.slice(-7); // Last 7 days
      case 'monthly':
        return balanceData.slice(-30); // Last 30 days
      case 'yearly':
        return balanceData.slice(-90); // Last 90 days (representing 3 months)
      default:
        return balanceData.slice(-30);
    }
  }, [balanceData, activeTab]);

  // Calculate current balance and percentage change
  const currentBalance = filteredData[filteredData.length - 1]?.balance || 0;
  const previousBalance = filteredData[0]?.balance || 0;
  const percentageChange = previousBalance > 0 ? ((currentBalance - previousBalance) / previousBalance) * 100 : 0;

  // Chart configuration
  const chartData = {
    labels: filteredData.map(d => d.date),
    datasets: [
      {
        label: 'Balance',
        data: filteredData.map(d => d.balance),
        borderColor: 'rgb(20, 184, 166)',
        backgroundColor: 'rgba(20, 184, 166, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(20, 184, 166)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgb(20, 184, 166)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `Balance: $${context.parsed.y.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 12,
          },
          maxTicksLimit: activeTab === 'weekly' ? 7 : activeTab === 'monthly' ? 10 : 15,
        },
      },
      y: {
        grid: {
          color: 'rgba(107, 114, 128, 0.1)',
          borderDash: [5, 5],
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 12,
          },
          callback: function(value: any) {
            return '$' + (value / 1000) + 'k';
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
  };

  return (
    <div className="lg:col-span-2 bg-white rounded-xl shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">Balance</h3>
        <div className="flex space-x-2">
          {(['weekly', 'monthly', 'yearly'] as const).map((tab) => (
            <button
              key={tab}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-teal-100 text-teal-700'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <p className="text-2xl font-bold text-gray-800">
          ${currentBalance.toLocaleString()}
        </p>
        <p className={`text-sm flex items-center mt-1 ${percentageChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-4 w-4 mr-1 ${percentageChange >= 0 ? '' : 'rotate-180'}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          {percentageChange >= 0 ? '+' : ''}{percentageChange.toFixed(1)}% from {activeTab === 'weekly' ? 'last week' : activeTab === 'monthly' ? 'last month' : 'last quarter'}
        </p>
      </div>

      {/* Chart */}
      <div className="h-48 relative">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default BalanceChart; 