"use client";

import ThemedPageWrapper from "@/components/ThemedPageWrapper";

export default function TermsPage() {
  return (
    <ThemedPageWrapper>
      <div className="pb-20 relative overflow-hidden">
        {/* Header */}
        <section className="px-4 mb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3 font-semibold">Legal</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Terms & Conditions</h1>
            <p className="text-white/50">Last updated: January 2024</p>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8 sm:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Services</h2>
                <p className="text-white/50">
                  Jay Parrack Website Publishing provides custom website design and
                  development services. All services are provided according to the
                  specifications agreed upon in the project proposal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Payment Terms</h2>
                <p className="text-white/50 mb-4">
                  Payment terms are outlined in each project proposal. Standard terms include:
                </p>
                <ul className="list-disc list-inside text-white/50 space-y-2">
                  <li>50% deposit required before work begins</li>
                  <li>Remaining balance due upon project completion</li>
                  <li>All prices are in USD unless otherwise specified</li>
                  <li>Late payments may incur additional fees</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Project Timeline</h2>
                <p className="text-white/50">
                  Estimated timelines are provided in good faith but may vary based on
                  project complexity, client feedback response times, and scope changes.
                  Delays caused by client may result in adjusted timelines.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Revisions</h2>
                <p className="text-white/50">
                  Each package includes a specified number of revision rounds. Additional
                  revisions beyond the included amount may be billed at an hourly rate.
                  Revisions should be submitted in writing within 7 days of receiving
                  deliverables.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                <p className="text-white/50">
                  Upon full payment, all custom code and designs created for your project
                  become your property. Third-party assets (fonts, images, plugins) remain
                  subject to their respective licenses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Hosting & Maintenance</h2>
                <p className="text-white/50">
                  Initial hosting setup is included. Ongoing hosting fees and domain
                  renewals are the client&apos;s responsibility. Maintenance packages are
                  available for ongoing support.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                <p className="text-white/50">
                  Jay Parrack Website Publishing&apos;s liability is limited to the amount
                  paid for services. We are not liable for indirect, incidental, or
                  consequential damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
                <p className="text-white/50">
                  For questions about these terms, please contact us at{" "}
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
