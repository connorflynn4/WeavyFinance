inspired by https://dribbble.com/shots/25680428-Weavy-Finance-Dashboard

# Weavy Financial Dashboard

A modern, responsive financial dashboard built with Next.js, React, TypeScript, and Tailwind CSS. This application provides a comprehensive view of financial data including balance tracking, spending analysis, card management, and currency exchange functionality.

## ✨ Features

### 📊 **Dashboard Overview**
- **Balance Tracking**: Interactive chart with weekly/monthly/yearly views
- **Income & Expense Summary**: Real-time financial overview with trend indicators
- **Welcome Banner**: Personalized onboarding experience

### 💳 **Card Management**
- **Credit Card Display**: Visual card representation with status indicators
- **Spend Limit Controls**: Toggle functionality for spending limits
- **Card Details**: Expiry dates, balances, and card status

### 📈 **Financial Analytics**
- **Spending Categories**: Visual breakdown of expenses by category
- **Interactive Charts**: Responsive balance visualization
- **Trend Analysis**: Month-over-month comparison indicators

### 💱 **Currency Exchange**
- **Real-time Conversion**: IDR to USD exchange functionality
- **Rate Display**: Current conversion rates with fee calculations
- **Interactive Inputs**: Dynamic currency conversion interface

### 🎨 **User Interface**
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Sidebar**: Professional navigation with categorized menu
- **Modern UI**: Clean, intuitive interface with smooth animations

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Client Components** - Interactive UI components with "use client" directive

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd App-Testing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open in your browser at `http://localhost:3000`.

### Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm start` - Starts the production server
- `npm run lint` - Runs the linter

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Sidebar.tsx      # Navigation sidebar
│   ├── Header.tsx       # Top navigation bar
│   ├── WelcomeBanner.tsx # Welcome section
│   ├── BalanceChart.tsx # Balance visualization
│   ├── IncomeExpenseSummary.tsx # Financial overview
│   ├── CardsSection.tsx # Credit card management
│   ├── SpendingSummary.tsx # Spending categories
│   ├── ExchangeSection.tsx # Currency exchange
│   └── index.ts         # Component exports
├── data/
│   └── mockData.ts      # Mock data and TypeScript interfaces
├── App.tsx              # Main dashboard component
└── index.css            # Global styles with Tailwind

app/
├── layout.tsx           # Root layout component
└── page.tsx             # Main page component
```

## 🧩 Component Architecture

### **Modular Design**
The application follows a modular component architecture for maintainability and reusability:

- **Sidebar**: Navigation menu with categorized sections
- **Header**: Top bar with search, notifications, and user profile
- **WelcomeBanner**: Onboarding and promotional content
- **BalanceChart**: Interactive financial chart with time period tabs
- **IncomeExpenseSummary**: Financial overview cards
- **CardsSection**: Credit card display and management
- **SpendingSummary**: Categorized spending visualization
- **ExchangeSection**: Currency conversion interface

### **Data Management**
- Centralized mock data in `src/data/mockData.ts`
- TypeScript interfaces for type safety
- Props-based data flow between components

## 🎨 Styling & Design

### **Tailwind CSS Implementation**
- Utility-first approach for rapid development
- Responsive design with mobile-first methodology
- Custom color palette with teal primary colors
- Smooth transitions and hover effects

### **Design System**
- Consistent spacing and typography
- Professional color scheme
- Accessible contrast ratios
- Modern card-based layout

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- **Desktop**: Full-featured layout with sidebar navigation
- **Tablet**: Adaptive grid layouts
- **Mobile**: Stacked layout with touch-friendly interactions

## 🔧 Configuration

### **Tailwind Configuration**
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
}
```

### **Next.js Configuration**
```javascript
// next.config.js
const nextConfig = {
  // App directory is now stable in Next.js 13+
}

module.exports = nextConfig
```

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Start Production Server**
```bash
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with Next.js and React
- Styled with Tailwind CSS
- Icons from Lucide React
- Modern financial dashboard design patterns 
