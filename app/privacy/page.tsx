"use client";

import ThemedPageWrapper from "@/components/ThemedPageWrapper";

export default function PrivacyPage() {
  return (
    <ThemedPageWrapper>
      <div className="pb-20 relative overflow-hidden">
        {/* Header */}
        <section className="px-4 mb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3 font-semibold">Legal</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Privacy Policy</h1>
            <p className="text-white/50">Last updated: January 2024</p>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8 sm:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <p className="text-white/50 mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-white/50 space-y-2">
                  <li>Name and contact information</li>
                  <li>Project details and requirements</li>
                  <li>Payment information (processed securely via Stripe)</li>
                  <li>Communications between us</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-white/50 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-white/50 space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about your project</li>
                  <li>Process payments</li>
                  <li>Send project updates and invoices</li>
                  <li>Respond to your inquiries</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
                <p className="text-white/50">
                  We do not sell, trade, or rent your personal information to third parties.
                  We may share information with service providers who assist in our operations
                  (such as payment processors) under strict confidentiality agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p className="text-white/50">
                  We implement appropriate security measures to protect your personal
                  information. However, no method of transmission over the Internet is
                  100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Cookies & Analytics</h2>
                <p className="text-white/50">
                  This website may use cookies and analytics tools to improve user
                  experience and understand how visitors interact with our site.
                  You can disable cookies in your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <p className="text-white/50 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-white/50 space-y-2">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
                <p className="text-white/50">
                  We may update this privacy policy from time to time. We will notify
                  you of any changes by posting the new policy on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-white/50">
                  If you have questions about this privacy policy, please contact us at{" "}
                  <a href="mailto:jay@example.com" className="text-white/70 hover:text-white transition-colors">
                    jay@example.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
    </ThemedPageWrapper>
  );
}
