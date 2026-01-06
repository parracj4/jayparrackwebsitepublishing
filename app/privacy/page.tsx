// HONDA RACING RED THEME: #3b82f6 (orange) + #60a5fa (purple)

export default function PrivacyPage() {
  return (
    <div className="bg-[#0f1419] min-h-screen pt-24 pb-20 relative">
      {/* Floating elements */}
      <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-[#3b82f6] float-slow opacity-60" />
      <div className="absolute top-60 left-40 w-1 h-1 rounded-full bg-[#60a5fa] float-medium opacity-40" />
      <div className="absolute bottom-40 right-40 w-1.5 h-1.5 rounded-full bg-[#3b82f6] float-medium opacity-50" />

      {/* Header */}
      <section className="px-6 md:px-12 lg:px-20 mb-16 relative">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#3b82f6]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" style={{ boxShadow: '0 0 20px #3b82f6' }} />
            <span className="text-xs uppercase tracking-[0.4em] text-[#a8b5c4]">Legal</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">Privacy Policy</span>
          </h1>
          <p className="text-[#a8b5c4]">Last updated: January 2024</p>
        </div>
      </section>

      <div className="h-px max-w-3xl mx-auto mb-12 bg-gradient-to-r from-transparent via-[#3b82f6]/30 to-transparent" />

      {/* Content */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8 sm:p-12 space-y-8 relative overflow-hidden">
            <div className="absolute inset-0 shimmer" />

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-[#a8b5c4] mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-[#a8b5c4] space-y-2">
                <li>Name and contact information</li>
                <li>Project details and requirements</li>
                <li>Payment information (processed securely via Stripe)</li>
                <li>Communications between us</li>
              </ul>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-[#a8b5c4] mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-[#a8b5c4] space-y-2">
                <li>Provide and improve our services</li>
                <li>Communicate with you about your project</li>
                <li>Process payments</li>
                <li>Send project updates and invoices</li>
                <li>Respond to your inquiries</li>
              </ul>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p className="text-[#a8b5c4]">
                We do not sell, trade, or rent your personal information to third parties.
                We may share information with service providers who assist in our operations
                (such as payment processors) under strict confidentiality agreements.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-[#a8b5c4]">
                We implement appropriate security measures to protect your personal
                information. However, no method of transmission over the Internet is
                100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-4">Cookies & Analytics</h2>
              <p className="text-[#a8b5c4]">
                This website may use cookies and analytics tools to improve user
                experience and understand how visitors interact with our site.
                You can disable cookies in your browser settings.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-[#a8b5c4] mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-[#a8b5c4] space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="text-[#a8b5c4]">
                We may update this privacy policy from time to time. We will notify
                you of any changes by posting the new policy on this page.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-[#a8b5c4]">
                If you have questions about this privacy policy, please contact us at{" "}
                <a href="mailto:jay@example.com" className="text-[#3b82f6] hover:text-[#60a5fa] transition-colors">
                  jay@example.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}




