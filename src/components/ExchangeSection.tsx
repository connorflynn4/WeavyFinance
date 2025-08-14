"use client";

import { useState, useEffect, useCallback } from 'react';
import { 
  currencies, 
  exchangeRates, 
  defaultExchangeSettings,
  type Currency,
  type ExchangeRate
} from '../data/mockData';

const ExchangeSection = () => {
  // State management
  const [fromCurrency, setFromCurrency] = useState<Currency>(defaultExchangeSettings.fromCurrency);
  const [toCurrency, setToCurrency] = useState<Currency>(defaultExchangeSettings.toCurrency);
  const [fromAmount, setFromAmount] = useState<number | ''>('');
  const [toAmount, setToAmount] = useState<number | ''>('');
  const [exchangeRate, setExchangeRate] = useState<ExchangeRate | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  // Calculate exchange rate
  const getExchangeRate = useCallback((from: string, to: string): number => {
    if (from === to) return 1;
    
    // Direct rate
    if (exchangeRates[from] && exchangeRates[from][to]) {
      return exchangeRates[from][to];
    }
    
    // Cross rate (convert through USD if needed)
    if (from !== 'USD' && to !== 'USD') {
      const fromToUSD = exchangeRates[from]?.['USD'];
      const usdToTo = exchangeRates['USD']?.[to];
      if (fromToUSD && usdToTo) {
        return fromToUSD * usdToTo;
      }
    }
    
    return 0;
  }, []);

  // Update exchange rate
  const updateExchangeRate = useCallback(() => {
    const rate = getExchangeRate(fromCurrency.code, toCurrency.code);
    setExchangeRate({
      from: fromCurrency.code,
      to: toCurrency.code,
      rate,
      lastUpdated: new Date(),
    });
    setLastUpdated(new Date());
  }, [fromCurrency.code, toCurrency.code, getExchangeRate]);

  // Calculate converted amount
  const calculateConversion = useCallback((amount: number, from: string, to: string) => {
    const rate = getExchangeRate(from, to);
    return amount * rate;
  }, [getExchangeRate]);

  // Handle amount changes
  const handleFromAmountChange = (value: number | '') => {
    setFromAmount(value);
    if (typeof value === 'number' && value > 0) {
      const converted = calculateConversion(value, fromCurrency.code, toCurrency.code);
      setToAmount(converted);
    } else {
      setToAmount('');
    }
  };

  const handleToAmountChange = (value: number | '') => {
    setToAmount(value);
    if (typeof value === 'number' && value > 0) {
      const converted = calculateConversion(value, toCurrency.code, fromCurrency.code);
      setFromAmount(converted);
    } else {
      setFromAmount('');
    }
  };

  // Handle currency changes
  const handleFromCurrencyChange = (currency: Currency) => {
    setFromCurrency(currency);
    setShowFromDropdown(false);
    if (typeof fromAmount === 'number' && fromAmount > 0) {
      const converted = calculateConversion(fromAmount, currency.code, toCurrency.code);
      setToAmount(converted);
    }
  };

  const handleToCurrencyChange = (currency: Currency) => {
    setToCurrency(currency);
    setShowToDropdown(false);
    if (typeof fromAmount === 'number' && fromAmount > 0) {
      const converted = calculateConversion(fromAmount, fromCurrency.code, currency.code);
      setToAmount(converted);
    }
  };

  // Swap currencies
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  // Handle exchange
  const handleExchange = async () => {
    if (typeof fromAmount !== 'number' || fromAmount <= 0) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, this would make an actual exchange API call
    console.log(`Exchanging ${fromAmount} ${fromCurrency.code} to ${toAmount} ${toCurrency.code}`);
    
    // Show success message
    alert(`Successfully exchanged ${fromAmount.toLocaleString()} ${fromCurrency.code} to ${toAmount?.toLocaleString()} ${toCurrency.code}`);
    
    // Reset form
    setFromAmount('');
    setToAmount('');
    
    setIsLoading(false);
  };

  // Track mount and update rates on mount and when currencies change
  useEffect(() => {
    setHasMounted(true);
    updateExchangeRate();
  }, [updateExchangeRate]);

  // Calculate fees
  const feePercentage = defaultExchangeSettings.feePercentage;
  const feeAmount = typeof fromAmount === 'number' ? fromAmount * feePercentage : 0;
  const totalWithFees = typeof fromAmount === 'number' ? fromAmount + feeAmount : 0;

  // Format currency amounts
  const formatAmount = (amount: number | '', currency: Currency) => {
    if (typeof amount !== 'number' || amount <= 0) return '';
    
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.code,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-base font-bold text-gray-800 mb-3">Exchange</h3>

      {/* Exchange Rate Display */}
      <div className="mb-3 p-2 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600">Conversion Rate</p>
        <div className="flex justify-between items-center mt-1">
          <p className="font-medium text-sm">
            1 {fromCurrency.code} = {exchangeRate?.rate.toFixed(6)} {toCurrency.code}
          </p>
          <button 
            onClick={() => updateExchangeRate()}
            className="text-teal-600 text-xs hover:underline"
          >
            Refresh
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Last updated: <span suppressHydrationWarning>{
            hasMounted && lastUpdated
              ? lastUpdated.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' })
              : '—'
          }</span>
        </p>
      </div>

      <div className="space-y-3">
        {/* From Currency */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Exchange From</label>
          <div className="flex">
            <div className="relative">
              <button
                onClick={() => setShowFromDropdown(!showFromDropdown)}
                className="flex items-center bg-gray-100 rounded-l-lg px-2 py-1 border border-r-0 border-gray-300 hover:bg-gray-200 transition-colors"
              >
                <span className="mr-1 text-sm">{fromCurrency.flag}</span>
                <span className="text-sm">{fromCurrency.code}</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showFromDropdown && (
                <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => handleFromCurrencyChange(currency)}
                      className="w-full flex items-center px-3 py-2 text-sm hover:bg-gray-100 text-left"
                    >
                      <span className="mr-2">{currency.flag}</span>
                      <span className="font-medium">{currency.code}</span>
                      <span className="ml-auto text-gray-500 text-xs">{currency.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input
              type="number"
              value={fromAmount}
              onChange={(e) => handleFromAmountChange(Number(e.target.value))}
              className="flex-1 rounded-r-lg border border-gray-300 px-2 py-1 text-sm"
              placeholder="0.00"
              min="0"
              step="0.01"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {formatAmount(fromAmount, fromCurrency)}
          </p>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button 
            onClick={swapCurrencies}
            className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
            title="Swap currencies"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
          </button>
        </div>

        {/* To Currency */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Exchange To</label>
          <div className="flex">
            <div className="relative">
              <button
                onClick={() => setShowToDropdown(!showToDropdown)}
                className="flex items-center bg-gray-100 rounded-l-lg px-2 py-1 border border-r-0 border-gray-300 hover:bg-gray-200 transition-colors"
              >
                <span className="mr-1 text-sm">{toCurrency.flag}</span>
                <span className="text-sm">{toCurrency.code}</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showToDropdown && (
                <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => handleToCurrencyChange(currency)}
                      className="w-full flex items-center px-3 py-2 text-sm hover:bg-gray-100 text-left"
                    >
                      <span className="mr-2">{currency.flag}</span>
                      <span className="font-medium">{currency.code}</span>
                      <span className="ml-auto text-gray-500 text-xs">{currency.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input
              type="number"
              value={toAmount}
              onChange={(e) => handleToAmountChange(Number(e.target.value))}
              className="flex-1 rounded-r-lg border border-gray-300 px-2 py-1 text-sm"
              placeholder="0.00"
              min="0"
              step="0.01"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {formatAmount(toAmount, toCurrency)}
          </p>
        </div>

        {/* Fee Information */}
        <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
          <div className="flex justify-between mb-1">
            <span>Amount:</span>
            <span>{formatAmount(fromAmount, fromCurrency)}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Fees ({feePercentage * 100}%):</span>
            <span>{formatAmount(feeAmount, fromCurrency)}</span>
          </div>
          <div className="flex justify-between font-medium border-t pt-1">
            <span>Total:</span>
            <span>{formatAmount(totalWithFees, fromCurrency)}</span>
          </div>
        </div>

        {/* Exchange Button */}
        <button 
          onClick={handleExchange}
          disabled={isLoading || typeof fromAmount !== 'number' || fromAmount <= 0}
          className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            `Exchange ${fromCurrency.code} to ${toCurrency.code}`
          )}
        </button>
      </div>

      {/* Close dropdowns when clicking outside */}
      {(showFromDropdown || showToDropdown) && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => {
            setShowFromDropdown(false);
            setShowToDropdown(false);
          }}
        />
      )}
    </div>
  );
};

export default ExchangeSection; 