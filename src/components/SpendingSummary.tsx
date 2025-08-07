"use client";

interface SpendingCategory {
  name: string;
  amount: number;
  size: 'large' | 'medium' | 'small';
}

interface SpendingSummaryProps {
  spendingCategories: SpendingCategory[];
}

const SpendingSummary = ({ spendingCategories }: SpendingSummaryProps) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-base font-bold text-gray-800 mb-3">Spending Summary</h3>

      <div className="grid grid-cols-2 gap-2">
        {spendingCategories.map((category, index) => (
          <div
            key={index}
            className={`rounded-lg p-2 flex flex-col justify-between ${
              category.size === 'large' ? 'col-span-2 row-span-2' : ''
            }`}
            style={{
              backgroundColor: `rgba(20, 184, 166, ${0.2 - index * 0.03})`,
              minHeight: category.size === 'large' ? '100px' : '60px',
            }}
          >
            <div>
              <p className="font-medium text-gray-800 text-sm">{category.name}</p>
              <p className="text-gray-600 text-sm">${category.amount.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-500">
                {((category.amount / 849.35) * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpendingSummary; 