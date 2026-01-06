// HONDA RACING RED THEME: #3b82f6 (orange) + #60a5fa (purple)

export default function TermsPage() {
  return (
    <div className="bg-[#0f1419] min-h-screen pt-24 pb-20 relative">
      {/* Floating elements */}
      <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-[#3b82f6] float-slow opacity-60" />
      <div className="absolute top-60 left-40 w-1 h-1 rounded-full bg-[#60a5fa] float-medium opacity-40" />

      {/* Header */}
      <section className="px-6 md:px-12 lg:px-20 mb-16 relative">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#3b82f6]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" style={{ boxShadow: '0 0 20px #3b82f6' }} />
            <span className="text-xs uppercase tracking-[0.4em] text-[#a8b5c4]">Legal</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">Terms & Conditions</span>
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
              <h2 className="text-2xl font-bold text-white mb-4">1. Services</h2>
              <p className="text-[#a8b5c4]">
                Jay Parrack Website Publishing provides custom website design and
                development services. All services are provided according to the
                specifications agreed upon in the project proposal.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-4">2. Payment Terms</h2>
              <p className="text-[#a8b5c4] mb-4">
                Payment terms are outlined in each project proposal. Standard terms include:
              </p>
              <ul className="list-disc list-inside text-[#a8b5c4] space-y-2">
                <li>50% deposit required before work begins</li>
                <li>Remaining balance due upon project completion</li>
                <li>All prices are in USD unless otherwise specified</li>
                <li>Late payments may incur additional fees</li>
              </ul>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-4">3. Project Timeline</h2>
              <p className="text-[#a8b5c4]">
                Estimated timelines are provided in good faith but may vary based on
                project complexity, client feedback response times, and scope changes.
                Delays caused by client may result in adjusted timelines.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-4">4. Revisions</h2>
              <p className="text-[#a8b5c4]">
                Each package includes a specified number of revision rounds. Additional
                revisions beyond the included amount may be billed at an hourly rate.
                Revisions should be submitted in writing within 7 days of receiving
                deliverables.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-[#a8b5c4]">
                Upon full payment, all custom code and designs created for your project
                become your property. Third-party assets (fonts, images, plugins) remain
                subject to their respective licenses.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-4">6. Hosting & Maintenance</h2>
              <p className="text-[#a8b5c4]">
                Initial hosting setup is included. Ongoing hosting fees and domain
                renewals are the client&apos;s responsibility. Maintenance packages are
                available for ongoing support.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-[#a8b5c4]">
                Jay Parrack Website Publishing&apos;s liability is limited to the amount
                paid for services. We are not liable for indirect, incidental, or
                consequential damages.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
              <p className="text-[#a8b5c4]">
                For questions about these terms, please contact us at{" "}
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




