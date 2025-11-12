"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Shield, Zap, TrendingUp, BarChart3, Lock, CheckCircle2, Star, ChevronRight, Upload, FileText, Building2, Sparkles, Users, Briefcase, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigateToDashboard = () => {
    router.push("/dashboard");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-lg border-b border-gray-800" : "bg-gray-900/40 backdrop-blur-sm"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 min-w-0 flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="Go to home"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs sm:text-sm">W</span>
              </div>
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">
                Weavy<span className="hidden sm:inline"> Finance</span>
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm">Features</a>
              <a href="#security" className="text-gray-300 hover:text-white transition-colors text-sm">Security</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors text-sm">Reviews</a>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={navigateToDashboard}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium px-2 py-1.5"
              >
                Sign In
              </button>
              <button
                onClick={navigateToDashboard}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-medium text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 whitespace-nowrap"
              >
                <span className="hidden sm:inline">Dashboard Preview</span>
                <span className="sm:hidden">Preview</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-800 py-4 animate-fade-in">
              <div className="flex flex-col space-y-3">
                <a
                  href="#features"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors px-2 py-2"
                >
                  Features
                </a>
                <a
                  href="#security"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors px-2 py-2"
                >
                  Security
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors px-2 py-2"
                >
                  Reviews
                </a>
                <div className="pt-2 border-t border-gray-800 space-y-2">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigateToDashboard();
                    }}
                    className="w-full text-left text-gray-300 hover:text-white transition-colors px-2 py-2"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigateToDashboard();
                    }}
                    className="w-full px-4 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-teal-500/25"
                  >
                    Dashboard Preview
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-cyan-500/10 to-blue-500/10 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.3),transparent_50%)]" />
        
        {/* Floating orbs - smaller on mobile */}
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="space-y-6 sm:space-y-8 animate-fade-in max-w-screen-md mx-auto">
            <h1 className="text-[clamp(2rem,8vw,4.5rem)] sm:text-5xl lg:text-7xl font-bold leading-[1.1] sm:leading-tight px-2">
              <span className="bg-gradient-to-r from-white via-teal-100 to-cyan-100 bg-clip-text text-transparent">
                Finance, redefined
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                for clarity and control.
              </span>
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
              Your all-in-one finance platform built for insight, automation, and growth — <span className="text-teal-300 font-semibold">without linking your bank account.</span>
            </p>
            <div className="mt-4 sm:mt-6 inline-flex items-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-teal-500/10 border border-teal-500/30 backdrop-blur-sm max-w-[90%] sm:max-w-none">
              <Upload className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 flex-shrink-0" />
              <span className="text-teal-300 font-medium text-xs sm:text-sm text-center">
                <span className="hidden sm:inline">No bank linking required — just upload your statement</span>
                <span className="sm:hidden">Upload statements, no linking needed</span>
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4">
              <button
                onClick={navigateToDashboard}
                className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold text-base sm:text-lg transition-all duration-200 shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 flex items-center justify-center space-x-2 min-h-[44px]"
              >
                <span>View Dashboard Preview</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={navigateToDashboard}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-gray-700 hover:border-gray-600 text-white font-semibold text-base sm:text-lg transition-all duration-200 min-h-[44px]"
              >
                Explore Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" />
        </div>
      </section>

      {/* Problem / Value Proposition */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Where your money
                <br />
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  moves smarter.
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Tired of juggling multiple apps, spreadsheets, and bank statements? Weavy Finance brings everything together in one intelligent platform — <span className="text-teal-400 font-semibold">without requiring you to link your bank account.</span>
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-lg p-4 border border-teal-500/30">
                  <Upload className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-teal-300">Upload Bank Statements — No Linking Required</h3>
                    <p className="text-gray-300">Simply choose your bank, upload your statement, and our AI automatically parses transactions to give you powerful insights. Your privacy, your control.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Real-time insights</h3>
                    <p className="text-gray-400">See your financial health at a glance with live updates and predictive analytics.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Automated budgeting</h3>
                    <p className="text-gray-400">Set goals and let AI-powered tools help you stay on track automatically.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Card animation mockup */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse" />
                  <div className="h-4 bg-gray-700 rounded w-1/2 animate-pulse delay-100" />
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="h-20 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg border border-teal-500/30" />
                    <div className="h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30" />
                    <div className="h-20 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-lg border border-blue-500/30" />
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Bank Statement Upload - Key Differentiator */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-blue-500/5" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/30 mb-6">
              <Shield className="w-4 h-4 text-teal-400" />
              <span className="text-teal-300 text-sm font-medium">Privacy First</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              No bank account linking.
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Just upload and analyze.
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlike other platforms, we give you the choice. Upload your bank statement, select your bank, and get instant insights — all without connecting your accounts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-teal-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal-300">1. Choose Your Bank</h3>
              <p className="text-gray-400 leading-relaxed">
                Select from our supported banks. We support all major financial institutions and their statement formats.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-teal-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center mb-6">
                <Upload className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal-300">2. Upload Statement</h3>
              <p className="text-gray-400 leading-relaxed">
                Simply drag and drop or select your bank statement file. We support PDF, CSV, and other common formats.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-teal-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal-300">3. Get Insights</h3>
              <p className="text-gray-400 leading-relaxed">
                Our AI automatically parses your transactions, categorizes spending, and generates actionable insights — all in seconds.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30">
              <Lock className="w-5 h-5 text-teal-400" />
              <div className="text-left">
                <p className="font-semibold text-teal-300">Your data stays private</p>
                <p className="text-sm text-gray-400">No OAuth connections. No third-party access. Just you and your insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Everything you need to
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                master your finances
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful features designed to give you complete control and clarity over your financial future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Upload,
                title: "Statement Upload",
                description: "Upload your bank statement, choose your bank, and get instant insights. No account linking required — complete privacy and control.",
                gradient: "from-teal-500/20 to-cyan-500/20",
                border: "border-teal-500/30",
                highlight: true,
              },
              {
                icon: Zap,
                title: "Real-time Insights",
                description: "Live updates and instant notifications keep you informed about every transaction and trend.",
                gradient: "from-yellow-500/20 to-orange-500/20",
                border: "border-yellow-500/30",
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description: "AI-powered forecasts help you make smarter decisions and plan for the future.",
                gradient: "from-green-500/20 to-emerald-500/20",
                border: "border-green-500/30",
              },
              {
                icon: BarChart3,
                title: "Automated Budgeting",
                description: "Set goals and track spending automatically with intelligent categorization and alerts.",
                gradient: "from-blue-500/20 to-cyan-500/20",
                border: "border-blue-500/30",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  feature.highlight 
                    ? "border-teal-500/50 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 ring-2 ring-teal-500/20" 
                    : "border-gray-700 hover:border-gray-600"
                }`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} border ${feature.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${feature.highlight ? "text-teal-300" : ""}`}>
                  {feature.title}
                  {feature.highlight && <span className="ml-2 text-xs bg-teal-500/20 text-teal-300 px-2 py-1 rounded-full">Our Niche</span>}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              See your finances
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                in a whole new light
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A beautiful, intuitive dashboard that makes complex financial data simple and actionable.
            </p>
          </div>

          <div className="relative">
            {/* Glassmorphism dashboard mockup */}
            <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Balance Card */}
                <div className="lg:col-span-2 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-xl p-6 border border-teal-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-sm">Total Balance</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">$8,000.00</h3>
                  <div className="h-32 bg-gray-800/50 rounded-lg mt-4 flex items-center justify-center">
                    <BarChart3 className="w-12 h-12 text-teal-400/50" />
                  </div>
                </div>

                {/* Income/Expense */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                  <h4 className="text-sm text-gray-400 mb-4">This Month</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-300">Income</span>
                        <span className="text-sm font-semibold text-green-400">+$6,200</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 w-3/4" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-300">Expenses</span>
                        <span className="text-sm font-semibold text-red-400">-$1,200</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 w-1/4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transactions preview */}
              <div className="mt-6 bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg" />
                        <div>
                          <div className="h-3 bg-gray-700 rounded w-24 mb-2" />
                          <div className="h-2 bg-gray-800 rounded w-16" />
                        </div>
                      </div>
                      <div className="h-3 bg-gray-700 rounded w-16" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating UI elements */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Payment Models */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-800" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Choose your payment model
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible options designed to scale with you.
            </p>
            
            {/* Monthly/Annual Toggle */}
            <div className="mt-8 inline-flex items-center space-x-4 bg-gray-800/50 rounded-full p-1.5 border border-gray-700">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  !isAnnual
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isAnnual
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Annual
                <span className="ml-2 text-xs bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-full">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Starter Plan */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-gray-400 text-sm">Perfect for individuals or small teams.</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">Free</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Forever free plan</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Free analytics & insights",
                  "Basic transaction categorization",
                  "Bank statement upload",
                  "Email support",
                  "Up to 3 accounts",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={navigateToDashboard}
                className="w-full px-6 py-3 rounded-full border-2 border-gray-700 hover:border-gray-600 text-white font-semibold transition-all duration-200 hover:bg-gray-800/50"
              >
                Start Free
              </button>
            </div>

            {/* Growth Plan - Highlighted */}
            <div className="group relative bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-teal-500/50 hover:border-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-2xl shadow-teal-500/20 ring-2 ring-teal-500/20">
              {/* Recommended Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-semibold flex items-center space-x-1 shadow-lg">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Popular</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-teal-300">Growth</h3>
                <p className="text-gray-300 text-sm">Best for growing businesses.</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? "19" : "24"}
                  </span>
                  <span className="text-gray-400 text-lg ml-1">/mo</span>
                </div>
                {isAnnual && (
                  <p className="text-teal-300 text-sm mt-1">
                    <span className="line-through text-gray-500">$24/mo</span> billed annually
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Everything in Starter",
                  "Advanced automation & AI insights",
                  "Priority email & chat support",
                  "Unlimited accounts",
                  "Custom categories & tags",
                  "Export reports (PDF, CSV)",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={navigateToDashboard}
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold transition-all duration-200 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 flex items-center justify-center space-x-2"
              >
                <span>Upgrade to Growth</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-400 text-sm">Custom solutions for large organizations.</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Tailored pricing</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Everything in Growth",
                  "Dedicated account manager",
                  "Custom integrations & API access",
                  "Team training & onboarding",
                  "SLA guarantees",
                  "Advanced security features",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={navigateToDashboard}
                className="w-full px-6 py-3 rounded-full border-2 border-gray-700 hover:border-gray-600 text-white font-semibold transition-all duration-200 hover:bg-gray-800/50 flex items-center justify-center space-x-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>Contact Sales</span>
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              All plans include bank statement upload. No credit card required for Starter plan.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section id="testimonials" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Trusted by thousands
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                of smart investors
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Sarah Chen",
                role: "Entrepreneur",
                content: "Weavy Finance transformed how I manage my business finances. The insights are incredible.",
                rating: 5,
              },
              {
                name: "Michael Rodriguez",
                role: "Financial Advisor",
                content: "Finally, a platform that makes complex financial data accessible and actionable. Highly recommend.",
                rating: 5,
              },
              {
                name: "Emily Johnson",
                role: "Freelancer",
                content: "The automated budgeting feature alone is worth it. I've saved more in 3 months than the entire year before.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Company logos placeholder */}
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["TechCorp", "FinanceHub", "StartupX", "GlobalBank"].map((company, i) => (
              <div key={i} className="text-2xl font-bold text-gray-500">{company}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section id="security" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700">
                <Lock className="w-16 h-16 text-teal-400 mb-6" />
                <h3 className="text-3xl font-bold mb-4">Bank-level security</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Your financial data is protected with end-to-end encryption, multi-factor authentication, and regular security audits.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold">
                Your security is
                <br />
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  our priority
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                We use industry-leading security practices to keep your data safe and private.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <span className="text-gray-300">256-bit SSL encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <span className="text-gray-300">SOC 2 Type II certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <span className="text-gray-300">GDPR & CCPA compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <span className="text-gray-300">Regular security audits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-cyan-500/10 to-blue-500/10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Start mastering your
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              finances today.
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are taking control of their financial future with Weavy Finance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={navigateToDashboard}
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold text-lg transition-all duration-200 shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 flex items-center space-x-2"
            >
              <span>View Dashboard Preview</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={navigateToDashboard}
              className="px-8 py-4 rounded-full border-2 border-gray-700 hover:border-gray-600 text-white font-semibold text-lg transition-all duration-200"
            >
              Explore Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <span className="text-lg font-bold">Weavy Finance</span>
              </div>
              <p className="text-sm text-gray-400">
                The modern way to manage your money.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
                <li><button onClick={navigateToDashboard} className="hover:text-white transition-colors">Pricing</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400">
              © 2025 Weavy Finance. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {/* Social icons placeholder */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-5 h-5 border border-gray-400 rounded" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-5 h-5 border border-gray-400 rounded" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

