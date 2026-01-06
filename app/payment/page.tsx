"use client";

import { useState } from "react";
import { CreditCard, Lock, CheckCircle, ArrowRight } from "lucide-react";

// HONDA RACING RED THEME: #3b82f6 (orange) + #60a5fa (purple)
const accent1 = "#3b82f6";
const accent2 = "#60a5fa";

export default function PaymentPage() {
  const [invoiceId, setInvoiceId] = useState("");

  return (
    <div className="bg-[#0f1419] min-h-screen pt-24 pb-20 relative">
      {/* Floating elements */}
      <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-[#3b82f6] float-slow opacity-60" />
      <div className="absolute top-60 left-40 w-1 h-1 rounded-full bg-[#60a5fa] float-medium opacity-40" />
      <div className="absolute bottom-40 right-40 w-1.5 h-1.5 rounded-full bg-[#3b82f6] float-medium opacity-50" />

      {/* Header */}
      <section className="px-6 md:px-12 lg:px-20 mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#3b82f6]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#3b82f6]/20 text-[#3b82f6] mb-6">
            <CreditCard size={32} />
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" style={{ boxShadow: '0 0 20px #3b82f6' }} />
            <span className="text-xs uppercase tracking-[0.4em] text-[#a8b5c4]">Payments</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
            <span className="text-white">Pay </span>
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">Invoice</span>
          </h1>
          <p className="text-lg text-[#a8b5c4] max-w-2xl mx-auto">
            Securely pay your invoice using credit card or bank transfer.
          </p>
        </div>
      </section>

      <div className="h-px max-w-xl mx-auto mb-12 bg-gradient-to-r from-transparent via-[#3b82f6]/30 to-transparent" />

      {/* Payment Form */}
      <section className="px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-xl mx-auto">
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden magnetic-hover">
            <div className="absolute inset-0 shimmer" />

            <div className="relative">
              <div className="mb-8">
                <label
                  htmlFor="invoiceId"
                  className="block text-sm font-medium text-[#a8b5c4] mb-2"
                >
                  Invoice ID
                </label>
                <input
                  type="text"
                  id="invoiceId"
                  value={invoiceId}
                  onChange={(e) => setInvoiceId(e.target.value)}
                  placeholder="Enter your invoice ID (e.g., INV-001)"
                  className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                />
              </div>

              <div className="glass-card rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
                  Payment Methods
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-lg border border-white/10 hover:border-[#3b82f6]/30 transition-colors">
                    <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
                      VISA
                    </div>
                    <span className="text-[#a8b5c4]">Credit / Debit Card</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-lg border border-white/10 hover:border-[#3b82f6]/30 transition-colors">
                    <div className="w-10 h-6 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded flex items-center justify-center text-white text-xs font-bold">
                      ACH
                    </div>
                    <span className="text-[#a8b5c4]">Bank Transfer</span>
                  </div>
                </div>
              </div>

              <button
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-sm uppercase tracking-[0.15em] rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ boxShadow: '0 0 40px rgba(255, 109, 90, 0.3)' }}
                onClick={() => {
                  alert("Stripe integration coming soon! For now, please contact me directly to process payment.");
                }}
              >
                Continue to Payment
                <ArrowRight size={18} />
              </button>

              <div className="flex items-center justify-center gap-2 mt-6 text-[#a8b5c4]/50 text-sm">
                <Lock size={14} />
                Secured by Stripe
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px max-w-4xl mx-auto mb-12 bg-gradient-to-r from-transparent via-[#3b82f6]/30 to-transparent" />

      {/* Security Info */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: Lock,
                title: "Secure Payment",
                description: "256-bit SSL encryption protects your data",
              },
              {
                icon: CreditCard,
                title: "Multiple Options",
                description: "Pay with card or bank transfer",
              },
              {
                icon: CheckCircle,
                title: "Instant Confirmation",
                description: "Receive receipt immediately via email",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-6 text-center magnetic-hover group relative"
              >
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#3b82f6]/30 group-hover:border-[#3b82f6] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#3b82f6]/30 group-hover:border-[#3b82f6] transition-colors" />

                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">{item.title}</h3>
                <p className="text-[#a8b5c4] text-sm">{item.description}</p>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-[#3b82f6] to-transparent rounded-b-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}




