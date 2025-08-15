"use client";

import { useMemo, useState } from "react";
import { transactions as seed, type Transaction } from "../data/mockData";
import { Search, Filter } from "lucide-react";

const categories = ["All", ...Array.from(new Set(seed.map((t) => t.category)))];
const types = ["All", "income", "expense"] as const;

const formatCurrency = (amount: number, currency: string) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const TransactionsPage = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [type, setType] = useState<(typeof types)[number]>("All");

  const filtered: Transaction[] = useMemo(() => {
    return seed
      .filter((t) =>
        query.trim().length === 0
          ? true
          : `${t.description} ${t.merchant}`.toLowerCase().includes(query.toLowerCase())
      )
      .filter((t) => (category === "All" ? true : t.category === category))
      .filter((t) => (type === "All" ? true : t.type === type))
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [query, category, type]);

  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-0">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Transactions</h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Search, filter and review your recent transactions.</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow p-3 sm:p-4 mb-4">
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <div className="relative flex-1">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search description or merchant..."
              className="w-full pl-8 pr-3 py-2 rounded-md border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 placeholder:text-gray-400"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" />
          </div>
          <div className="flex gap-2 sm:gap-3">
            <div className="relative">
              <Filter className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="pl-7 pr-7 py-2 rounded-md border border-gray-300 text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <Filter className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={type}
                onChange={(e) => setType(e.target.value as any)}
                className="pl-7 pr-7 py-2 rounded-md border border-gray-300 text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                {types.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left font-medium px-2 sm:px-4 py-2 sm:py-3">Date</th>
                <th className="text-left font-medium px-2 sm:px-4 py-2 sm:py-3">Description</th>
                <th className="text-left font-medium px-2 sm:px-4 py-2 sm:py-3">Merchant</th>
                <th className="text-left font-medium px-2 sm:px-4 py-2 sm:py-3">Category</th>
                <th className="text-right font-medium px-2 sm:px-4 py-2 sm:py-3">Amount</th>
                <th className="text-right font-medium px-2 sm:px-4 py-2 sm:py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((t) => (
                <tr key={t.id} className="border-t border-gray-100 hover:bg-gray-50/60">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 whitespace-nowrap">{new Date(t.date).toLocaleDateString()}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-900">{t.description}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700">{t.merchant}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3">
                    <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-2 py-0.5 text-xs">{t.category}</span>
                  </td>
                  <td className={`px-2 sm:px-4 py-2 sm:py-3 text-right font-medium ${t.type === 'income' ? 'text-emerald-600' : 'text-gray-900'}`}>
                    {t.type === 'income' ? '+' : '-'}{formatCurrency(t.amount, t.currency)}
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-right">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${
                      t.status === 'completed' ? 'bg-green-100 text-green-700' :
                      t.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-700'
                    }`}>
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-gray-500">No transactions match your filters.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
