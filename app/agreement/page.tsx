"use client";

import { Download, FileText } from "lucide-react";
import Link from "next/link";
import ThemedPageWrapper from "@/components/ThemedPageWrapper";

export default function AgreementPage() {
  return (
    <ThemedPageWrapper>
      <div className="pb-20 relative overflow-hidden">
        {/* Header */}
        <section className="px-4 mb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white/70 mb-6">
              <FileText size={32} />
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3 font-semibold">Legal</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Client Agreement</h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Our standard service agreement outlines the terms of our working
              relationship. Review it before we begin your project.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 mb-16 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8 sm:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Web Development Service Agreement</h2>
                <p className="text-white/50">
                  This agreement is between Jay Parrack Website Publishing (&quot;Developer&quot;)
                  and the client (&quot;Client&quot;) for website design and development services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">1. Scope of Work</h2>
                <p className="text-white/50">
                  The specific scope of work, deliverables, and timeline will be detailed
                  in a separate project proposal. This proposal becomes part of this
                  agreement upon client approval.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">2. Project Process</h2>
                <ul className="list-disc list-inside text-white/50 space-y-2">
                  <li><strong className="text-white">Discovery:</strong> Initial consultation to understand requirements</li>
                  <li><strong className="text-white">Design:</strong> Wireframes and mockups for approval</li>
                  <li><strong className="text-white">Development:</strong> Building the website according to approved designs</li>
                  <li><strong className="text-white">Review:</strong> Client feedback and revisions</li>
                  <li><strong className="text-white">Launch:</strong> Deployment and handover</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">3. Payment Terms</h2>
                <ul className="list-disc list-inside text-white/50 space-y-2">
                  <li>50% deposit due before work begins</li>
                  <li>Remaining 50% due upon project completion, before launch</li>
                  <li>Payment accepted via credit card, bank transfer, or Stripe</li>
                  <li>Invoices are due within 14 days of issue</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">4. Revisions & Changes</h2>
                <p className="text-white/50">
                  The number of revision rounds is specified in your project proposal.
                  Additional revisions or scope changes may incur extra charges. Major
                  changes to project scope will require a revised proposal.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">5. Client Responsibilities</h2>
                <p className="text-white/50 mb-4">The client agrees to:</p>
                <ul className="list-disc list-inside text-white/50 space-y-2">
                  <li>Provide necessary content, images, and information in a timely manner</li>
                  <li>Respond to requests and provide feedback within 7 business days</li>
                  <li>Designate a single point of contact for the project</li>
                  <li>Make payments according to the agreed schedule</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">6. Ownership & Rights</h2>
                <p className="text-white/50">
                  Upon full payment, all custom code and designs become the property of
                  the client. The Developer retains the right to display the work in
                  portfolio and marketing materials unless otherwise agreed.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">7. Confidentiality</h2>
                <p className="text-white/50">
                  Both parties agree to keep confidential any proprietary information
                  shared during the project. This includes business strategies, customer
                  data, and technical specifications.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">8. Cancellation</h2>
                <p className="text-white/50">
                  Either party may terminate this agreement with written notice. In case
                  of cancellation, the client pays for all work completed to date. The
                  initial deposit is non-refundable once work has begun.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">9. Warranty & Support</h2>
                <p className="text-white/50">
                  The Developer provides a 30-day warranty after launch for bug fixes
                  related to the delivered work. Support packages are available for
                  ongoing maintenance and updates.
                </p>
              </section>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Download Full Agreement
              </h3>
              <p className="text-white/50 mb-6">
                Get the complete agreement as a PDF for your records.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
              >
                <Download size={18} />
                Download PDF
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ThemedPageWrapper>
  );
}
