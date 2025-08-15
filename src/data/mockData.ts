export interface BalanceData {
  date: string;
  balance: number;
}

export interface SpendingCategory {
  name: string;
  amount: number;
  size: 'large' | 'medium' | 'small';
}

export interface BudgetCategory {
  id: string;
  name: string;
  budget: number;
  spent: number;
}

export interface Currency {
  code: string;
  name: string;
  flag: string;
  symbol: string;
}

export interface ExchangeRate {
  from: string;
  to: string;
  rate: number;
  lastUpdated: Date;
}

export interface ExchangeHistory {
  id: string;
  fromCurrency: string;
  toCurrency: string;
  fromAmount: number;
  toAmount: number;
  exchangeRate: number;
  feeAmount: number;
  totalAmount: number;
  timestamp: Date;
  status: 'completed' | 'pending' | 'failed';
}

export interface Transaction {
  id: string;
  date: string; // ISO date string
  description: string;
  merchant: string;
  category: string;
  type: 'income' | 'expense';
  currency: string; // currency code like USD
  amount: number; // positive number; sign based on type
  status: 'completed' | 'pending' | 'failed';
}

// Available currencies for exchange
export const currencies: Currency[] = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸', symbol: '$' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', symbol: '€' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧', symbol: '£' },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', symbol: '¥' },
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', symbol: 'S$' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', symbol: 'C$' },
];

// Mock exchange rates (in a real app, these would come from an API)
export const exchangeRates: Record<string, Record<string, number>> = {
  'USD': {
    'EUR': 0.92,
    'GBP': 0.79,
    'JPY': 149.50,
    'SGD': 1.35,
    'CAD': 1.35,
  },
  'EUR': {
    'USD': 1.09,
    'GBP': 0.86,
    'JPY': 162.50,
    'SGD': 1.47,
    'CAD': 1.47,
  },
  'GBP': {
    'USD': 1.27,
    'EUR': 1.16,
    'JPY': 189.24,
    'SGD': 1.71,
    'CAD': 1.71,
  },
  'JPY': {
    'USD': 0.0067,
    'EUR': 0.0061,
    'GBP': 0.0053,
    'SGD': 0.0090,
    'CAD': 0.0090,
  },
  'SGD': {
    'USD': 0.74,
    'EUR': 0.68,
    'GBP': 0.58,
    'JPY': 110.74,
    'CAD': 1.00,
  },
  'CAD': {
    'USD': 0.74,
    'EUR': 0.68,
    'GBP': 0.58,
    'JPY': 110.74,
    'SGD': 1.00,
  },
};

// Default exchange settings
export const defaultExchangeSettings = {
  fromCurrency: currencies[0], // USD
  toCurrency: currencies[1],   // EUR
  feePercentage: 0.0118, // 1.18%
};

// Mock exchange history data
export const exchangeHistory: ExchangeHistory[] = [
  {
    id: '1',
    fromCurrency: 'USD',
    toCurrency: 'EUR',
    fromAmount: 1000,
    toAmount: 920,
    exchangeRate: 0.92,
    feeAmount: 11.8,
    totalAmount: 1011.8,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    status: 'completed'
  },
  {
    id: '2',
    fromCurrency: 'EUR',
    toCurrency: 'GBP',
    fromAmount: 500,
    toAmount: 430,
    exchangeRate: 0.86,
    feeAmount: 5.9,
    totalAmount: 505.9,
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    status: 'completed'
  },
  {
    id: '3',
    fromCurrency: 'USD',
    toCurrency: 'CAD',
    fromAmount: 2500,
    toAmount: 3375,
    exchangeRate: 1.35,
    feeAmount: 29.5,
    totalAmount: 2529.5,
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    status: 'completed'
  },
  {
    id: '4',
    fromCurrency: 'GBP',
    toCurrency: 'JPY',
    fromAmount: 800,
    toAmount: 151392,
    exchangeRate: 189.24,
    feeAmount: 9.44,
    totalAmount: 809.44,
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    status: 'completed'
  },
  {
    id: '5',
    fromCurrency: 'SGD',
    toCurrency: 'USD',
    fromAmount: 1500,
    toAmount: 1110,
    exchangeRate: 0.74,
    feeAmount: 17.7,
    totalAmount: 1517.7,
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    status: 'completed'
  },
  {
    id: '6',
    fromCurrency: 'CAD',
    toCurrency: 'EUR',
    fromAmount: 3000,
    toAmount: 2040,
    exchangeRate: 0.68,
    feeAmount: 35.4,
    totalAmount: 3035.4,
    timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000), // 18 hours ago
    status: 'completed'
  },
  {
    id: '7',
    fromCurrency: 'JPY',
    toCurrency: 'USD',
    fromAmount: 50000,
    toAmount: 335,
    exchangeRate: 0.0067,
    feeAmount: 0.59,
    totalAmount: 50000.59,
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    status: 'completed'
  },
  {
    id: '8',
    fromCurrency: 'EUR',
    toCurrency: 'SGD',
    fromAmount: 1200,
    toAmount: 1764,
    exchangeRate: 1.47,
    feeAmount: 14.16,
    totalAmount: 1214.16,
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    status: 'completed'
  },
  {
    id: '9',
    fromCurrency: 'USD',
    toCurrency: 'GBP',
    fromAmount: 750,
    toAmount: 592.5,
    exchangeRate: 0.79,
    feeAmount: 8.85,
    totalAmount: 758.85,
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    status: 'completed'
  },
  {
    id: '10',
    fromCurrency: 'CAD',
    toCurrency: 'JPY',
    fromAmount: 1800,
    toAmount: 199332,
    exchangeRate: 110.74,
    feeAmount: 21.24,
    totalAmount: 1821.24,
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
    status: 'completed'
  }
];

// Mock transactions
export const transactions: Transaction[] = [
  { id: 't1', date: '2024-02-28', description: 'Groceries at Wholefoods', merchant: 'Wholefoods Market', category: 'Groceries', type: 'expense', currency: 'USD', amount: 86.45, status: 'completed' },
  { id: 't2', date: '2024-02-27', description: 'Salary February', merchant: 'Weavy Inc.', category: 'Salary', type: 'income', currency: 'USD', amount: 5400, status: 'completed' },
  { id: 't3', date: '2024-02-26', description: 'Uber trip', merchant: 'Uber', category: 'Transport', type: 'expense', currency: 'USD', amount: 18.2, status: 'completed' },
  { id: 't4', date: '2024-02-25', description: 'Coffee', merchant: 'Starbucks', category: 'Food & Drink', type: 'expense', currency: 'USD', amount: 5.35, status: 'completed' },
  { id: 't5', date: '2024-02-24', description: 'Gym Membership', merchant: 'Anytime Fitness', category: 'Health', type: 'expense', currency: 'USD', amount: 39.99, status: 'completed' },
  { id: 't6', date: '2024-02-22', description: 'Flight to NYC', merchant: 'Delta Airlines', category: 'Travel', type: 'expense', currency: 'USD', amount: 312.4, status: 'completed' },
  { id: 't7', date: '2024-02-20', description: 'Freelance payout', merchant: 'Upwork', category: 'Freelance', type: 'income', currency: 'USD', amount: 800, status: 'completed' },
  { id: 't8', date: '2024-02-18', description: 'Internet Bill', merchant: 'Comcast', category: 'Utilities', type: 'expense', currency: 'USD', amount: 69.99, status: 'completed' },
  { id: 't9', date: '2024-02-17', description: 'Restaurant', merchant: 'Chipotle', category: 'Food & Drink', type: 'expense', currency: 'USD', amount: 22.1, status: 'completed' },
  { id: 't10', date: '2024-02-14', description: 'Refund - shoes', merchant: 'Nike', category: 'Refunds', type: 'income', currency: 'USD', amount: 79.99, status: 'completed' },
];

// Mock data for balance chart - more realistic daily fluctuations
export const balanceData: BalanceData[] = [
  { date: '2024-01', balance: 5000 },
  { date: '2024-02', balance: 5200 },
  { date: '2024-03', balance: 4800 },
  { date: '2024-04', balance: 5500 },
  { date: '2024-05', balance: 5800 },
  { date: '2024-06', balance: 6200 },
  { date: '2024-07', balance: 6000 },
  { date: '2024-08', balance: 6500 },
  { date: '2024-09', balance: 6800 },
  { date: '2024-10', balance: 7200 },
  { date: '2024-11', balance: 7500 },
  { date: '2024-12', balance: 8000 },
];

export const spendingCategories: SpendingCategory[] = [
  { name: 'Housing', amount: 1200, size: 'large' },
  { name: 'Food', amount: 400, size: 'medium' },
  { name: 'Transportation', amount: 300, size: 'medium' },
  { name: 'Entertainment', amount: 250, size: 'small' },
  { name: 'Utilities', amount: 200, size: 'small' },
  { name: 'Healthcare', amount: 150, size: 'small' },
  { name: 'Shopping', amount: 300, size: 'medium' },
  { name: 'Other', amount: 200, size: 'small' },
];

// Budget data for different months
export const budgetData = {
  "January 2025": [
    { id: "1", name: "Housing", budget: 1200, spent: 1200 },
    { id: "2", name: "Food", budget: 400, spent: 320 },
    { id: "3", name: "Transportation", budget: 200, spent: 180 },
    { id: "4", name: "Entertainment", budget: 150, spent: 200 },
    { id: "5", name: "Utilities", budget: 120, spent: 110 },
    { id: "6", name: "Healthcare", budget: 100, spent: 75 },
    { id: "7", name: "Shopping", budget: 200, spent: 250 },
    { id: "8", name: "Savings", budget: 500, spent: 500 },
  ],
  "December 2024": [
    { id: "1", name: "Housing", budget: 1200, spent: 1200 },
    { id: "2", name: "Food", budget: 400, spent: 450 },
    { id: "3", name: "Transportation", budget: 200, spent: 150 },
    { id: "4", name: "Entertainment", budget: 150, spent: 300 },
    { id: "5", name: "Utilities", budget: 120, spent: 130 },
    { id: "6", name: "Healthcare", budget: 100, spent: 50 },
    { id: "7", name: "Shopping", budget: 200, spent: 400 },
    { id: "8", name: "Savings", budget: 500, spent: 200 },
  ],
  "November 2024": [
    { id: "1", name: "Housing", budget: 1200, spent: 1200 },
    { id: "2", name: "Food", budget: 400, spent: 380 },
    { id: "3", name: "Transportation", budget: 200, spent: 220 },
    { id: "4", name: "Entertainment", budget: 150, spent: 120 },
    { id: "5", name: "Utilities", budget: 120, spent: 125 },
    { id: "6", name: "Healthcare", budget: 100, spent: 80 },
    { id: "7", name: "Shopping", budget: 200, spent: 180 },
    { id: "8", name: "Savings", budget: 500, spent: 600 },
  ],
}; 