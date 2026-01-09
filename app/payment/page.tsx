"use client";

import { useState } from "react";
import { CreditCard, Lock, CheckCircle, ArrowRight } from "lucide-react";
import ThemedPageWrapper from "@/components/ThemedPageWrapper";

export default function PaymentPage() {
  const [invoiceId, setInvoiceId] = useState("");

  return (
    <ThemedPageWrapper>
      <div className="pb-20 relative overflow-hidden">
        {/* Header */}
        <section className="px-4 mb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white/70 mb-6">
              <CreditCard size={32} />
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3 font-semibold">Payments</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Pay Invoice</h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Securely pay your invoice using credit card or bank transfer.
            </p>
          </div>
        </section>

        {/* Payment Form */}
        <section className="px-4 mb-20 relative z-10">
          <div className="max-w-xl mx-auto">
            <div className="glass-card rounded-2xl p-8">
              <div className="mb-8">
                <label
                  htmlFor="invoiceId"
                  className="block text-sm font-medium text-white/50 mb-2"
                >
                  Invoice ID
                </label>
                <input
                  type="text"
                  id="invoiceId"
                  value={invoiceId}
                  onChange={(e) => setInvoiceId(e.target.value)}
                  placeholder="Enter your invoice ID (e.g., INV-001)"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                />
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-4">
                  Payment Methods
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
                    <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-white text-xs font-bold">
                      VISA
                    </div>
                    <span className="text-white/50">Credit / Debit Card</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
                    <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-white text-xs font-bold">
                      ACH
                    </div>
                    <span className="text-white/50">Bank Transfer</span>
                  </div>
                </div>
              </div>

              <button
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-all"
                onClick={() => {
                  alert("Stripe integration coming soon! For now, please contact me directly to process payment.");
                }}
              >
                Continue to Payment
                <ArrowRight size={18} />
              </button>

              <div className="flex items-center justify-center gap-2 mt-6 text-white/40 text-sm">
                <Lock size={14} />
                Secured by Stripe
              </div>
            </div>
          </div>
        </section>

        {/* Security Info */}
        <section className="px-4 relative z-10">
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
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass-card rounded-xl p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-white/70 mb-4">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </ThemedPageWrapper>
  );
}
