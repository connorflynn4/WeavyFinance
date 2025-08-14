"use client";

import { useState } from "react";
import { CreditCard, Eye, EyeOff, Lock, Unlock, Plus } from "lucide-react";

interface CardItem {
  id: string;
  holder: string;
  last4: string;
  type: "Virtual" | "Physical";
  status: "Active" | "Frozen";
  expiry: string;
  balance: number;
}

const initialCards: CardItem[] = [
  { id: "1", holder: "Marteen Praz", last4: "0293", type: "Physical", status: "Active", expiry: "09/30", balance: 10372.92 },
  { id: "2", holder: "Marteen Praz", last4: "1128", type: "Virtual", status: "Active", expiry: "05/29", balance: 2345.1 },
];

const CardsPage = () => {
  const [cards, setCards] = useState<CardItem[]>(initialCards);
  const [showNumbers, setShowNumbers] = useState<Record<string, boolean>>({});

  const toggleFreeze = (id: string) => {
    setCards(prev => prev.map(c => c.id === id ? { ...c, status: c.status === "Active" ? "Frozen" : "Active" } : c));
  };

  const toggleShow = (id: string) => {
    setShowNumbers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const addVirtualCard = () => {
    const newCard: CardItem = {
      id: Date.now().toString(),
      holder: "Marteen Praz",
      last4: Math.floor(1000 + Math.random() * 9000).toString(),
      type: "Virtual",
      status: "Active",
      expiry: "12/31",
      balance: 0,
    };
    setCards([newCard, ...cards]);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Cards</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your physical and virtual cards, limits, and security.</p>
        </div>
        <button onClick={addVirtualCard} className="inline-flex items-center gap-2 rounded-lg bg-teal-600 text-white px-3 py-2 text-sm font-medium hover:bg-teal-700 transition-colors">
          <Plus className="w-4 h-4" /> New Virtual Card
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Primary card summary */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-4">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg p-4 text-white mb-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs/4 opacity-90">{cards[0]?.holder}</p>
                <p className="text-lg font-bold mt-1">**** **** **** {cards[0]?.last4}</p>
              </div>
              <span className="text-xs bg-teal-700 px-2 py-1 rounded">{cards[0]?.type || "Physical"}</span>
            </div>
            <div className="flex justify-between items-end text-sm">
              <div>
                <p className="text-xs/4 opacity-90">Expiry</p>
                <p className="font-medium">{cards[0]?.expiry}</p>
              </div>
              <div className="text-right">
                <p className="text-xs/4 opacity-90">Balance</p>
                <p className="font-semibold">${(cards[0]?.balance ?? 0).toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Card list */}
          <div className="space-y-2">
            {cards.map(card => (
              <div key={card.id} className="flex items-center justify-between border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-gray-900">**** **** **** {card.last4}</p>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${card.type === 'Virtual' ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'}`}>{card.type}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${card.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-800'}`}>{card.status}</span>
                    </div>
                    <p className="text-xs text-gray-500">Expiry {card.expiry}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => toggleShow(card.id)} className="rounded-md border border-gray-300 px-2 py-1 text-xs text-gray-600 hover:border-gray-400">
                    {showNumbers[card.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                  <button onClick={() => toggleFreeze(card.id)} className="rounded-md border border-gray-300 px-2 py-1 text-xs text-gray-600 hover:border-gray-400">
                    {card.status === 'Active' ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Settings panel */}
        <div className="bg-white rounded-xl shadow p-4 space-y-4">
          <div>
            <p className="text-xs text-gray-500">Spend Limit</p>
            <div className="mt-1 flex items-center justify-between">
              <p className="text-sm font-medium">$12,372.92 per month</p>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-10 h-5 bg-gray-300 peer-checked:bg-teal-500 rounded-full p-0.5 transition-colors">
                  <div className="w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                </div>
              </label>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500">Online Payments</p>
            <div className="mt-1 flex items-center justify-between">
              <p className="text-sm font-medium">Enabled</p>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-10 h-5 bg-gray-300 peer-checked:bg-teal-500 rounded-full p-0.5 transition-colors">
                  <div className="w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                </div>
              </label>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500">ATM Withdrawals</p>
            <div className="mt-1 flex items-center justify-between">
              <p className="text-sm font-medium">Disabled</p>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-10 h-5 bg-gray-300 peer-checked:bg-teal-500 rounded-full p-0.5 transition-colors">
                  <div className="w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
