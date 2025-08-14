export interface BalanceData {
  date: string;
  balance: number;
}

export interface SpendingCategory {
  name: string;
  amount: number;
  size: 'large' | 'medium' | 'small';
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
  { date: 'Dec 12', balance: 21500 },
  { date: 'Dec 13', balance: 21800 },
  { date: 'Dec 14', balance: 22000 },
  { date: 'Dec 15', balance: 21563.92 },
  { date: 'Dec 16', balance: 22200 },
  { date: 'Dec 17', balance: 22500 },
  { date: 'Dec 18', balance: 22933.92 },
  { date: 'Dec 19', balance: 23100 },
  { date: 'Dec 20', balance: 22800 },
  { date: 'Dec 21', balance: 23200 },
  { date: 'Dec 22', balance: 23500 },
  { date: 'Dec 23', balance: 23800 },
  { date: 'Dec 24', balance: 24100 },
  { date: 'Dec 25', balance: 23900 },
  { date: 'Dec 26', balance: 24200 },
  { date: 'Dec 27', balance: 24500 },
  { date: 'Dec 28', balance: 24800 },
  { date: 'Dec 29', balance: 25100 },
  { date: 'Dec 30', balance: 24900 },
  { date: 'Dec 31', balance: 25200 },
  { date: 'Jan 01', balance: 25500 },
  { date: 'Jan 02', balance: 25800 },
  { date: 'Jan 03', balance: 26100 },
  { date: 'Jan 04', balance: 26400 },
  { date: 'Jan 05', balance: 26700 },
  { date: 'Jan 06', balance: 27000 },
  { date: 'Jan 07', balance: 27300 },
  { date: 'Jan 08', balance: 27600 },
  { date: 'Jan 09', balance: 27900 },
  { date: 'Jan 10', balance: 28200 },
  { date: 'Jan 11', balance: 28500 },
  { date: 'Jan 12', balance: 28800 },
  { date: 'Jan 13', balance: 29100 },
  { date: 'Jan 14', balance: 29400 },
  { date: 'Jan 15', balance: 29700 },
  { date: 'Jan 16', balance: 30000 },
  { date: 'Jan 17', balance: 30300 },
  { date: 'Jan 18', balance: 30600 },
  { date: 'Jan 19', balance: 30900 },
  { date: 'Jan 20', balance: 31200 },
  { date: 'Jan 21', balance: 31500 },
  { date: 'Jan 22', balance: 31800 },
  { date: 'Jan 23', balance: 32100 },
  { date: 'Jan 24', balance: 32400 },
  { date: 'Jan 25', balance: 32700 },
  { date: 'Jan 26', balance: 33000 },
  { date: 'Jan 27', balance: 33300 },
  { date: 'Jan 28', balance: 33600 },
  { date: 'Jan 29', balance: 33900 },
  { date: 'Jan 30', balance: 34200 },
  { date: 'Jan 31', balance: 34500 },
  { date: 'Feb 01', balance: 34800 },
  { date: 'Feb 02', balance: 35100 },
  { date: 'Feb 03', balance: 35400 },
  { date: 'Feb 04', balance: 35700 },
  { date: 'Feb 05', balance: 36000 },
  { date: 'Feb 06', balance: 36300 },
  { date: 'Feb 07', balance: 36600 },
  { date: 'Feb 08', balance: 36900 },
  { date: 'Feb 09', balance: 37200 },
  { date: 'Feb 10', balance: 37500 },
  { date: 'Feb 11', balance: 37800 },
  { date: 'Feb 12', balance: 38100 },
  { date: 'Feb 13', balance: 38400 },
  { date: 'Feb 14', balance: 38700 },
  { date: 'Feb 15', balance: 39000 },
  { date: 'Feb 16', balance: 39300 },
  { date: 'Feb 17', balance: 39600 },
  { date: 'Feb 18', balance: 39900 },
  { date: 'Feb 19', balance: 40200 },
  { date: 'Feb 20', balance: 40500 },
  { date: 'Feb 21', balance: 40800 },
  { date: 'Feb 22', balance: 41100 },
  { date: 'Feb 23', balance: 41400 },
  { date: 'Feb 24', balance: 41700 },
  { date: 'Feb 25', balance: 42000 },
  { date: 'Feb 26', balance: 42300 },
  { date: 'Feb 27', balance: 42600 },
  { date: 'Feb 28', balance: 42933.92 },
];

// Mock data for spending categories
export const spendingCategories: SpendingCategory[] = [
  { name: 'Shopping', amount: 849.35, size: 'large' },
  { name: 'Utilities', amount: 188.01, size: 'medium' },
  { name: 'Credit', amount: 182.28, size: 'medium' },
  { name: 'Food', amount: 52.38, size: 'small' },
  { name: 'Insurance', amount: 44.29, size: 'small' },
  { name: 'Other', amount: 44.29, size: 'small' },
]; 