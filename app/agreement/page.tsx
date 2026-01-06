import { Download, FileText } from "lucide-react";
import Link from "next/link";

// HONDA RACING RED THEME: #3b82f6 (orange) + #60a5fa (purple)

export default function AgreementPage() {
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
            <FileText size={32} />
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" style={{ boxShadow: '0 0 20px #3b82f6' }} />
            <span className="text-xs uppercase tracking-[0.4em] text-[#a8b5c4]">Legal</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6">
            <span className="text-white">Client </span>
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">Agreement</span>
          </h1>
          <p className="text-lg text-[#a8b5c4] max-w-2xl mx-auto">
            Our standard service agreement outlines the terms of our working
            relationship. Review it before we begin your project.
          </p>
        </div>
      </section>

      <div className="h-px max-w-3xl mx-auto mb-12 bg-gradient-to-r from-transparent via-[#3b82f6]/30 to-transparent" />

      {/* Content */}
      <section className="px-6 md:px-12 lg:px-20 mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8 sm:p-12 space-y-8 relative overflow-hidden">
            <div className="absolute inset-0 shimmer" />

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-4">Web Development Service Agreement</h2>
              <p className="text-[#a8b5c4]">
                This agreement is between Jay Parrack Website Publishing (&quot;Developer&quot;)
                and the client (&quot;Client&quot;) for website design and development services.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-xl font-bold text-white mb-4">1. Scope of Work</h2>
              <p className="text-[#a8b5c4]">
                The specific scope of work, deliverables, and timeline will be detailed
                in a separate project proposal. This proposal becomes part of this
                agreement upon client approval.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-xl font-bold text-white mb-4">2. Project Process</h2>
              <ul className="list-disc list-inside text-[#a8b5c4] space-y-2">
                <li><strong className="text-white">Discovery:</strong> Initial consultation to understand requirements</li>
                <li><strong className="text-white">Design:</strong> Wireframes and mockups for approval</li>
                <li><strong className="text-white">Development:</strong> Building the website according to approved designs</li>
                <li><strong className="text-white">Review:</strong> Client feedback and revisions</li>
                <li><strong className="text-white">Launch:</strong> Deployment and handover</li>
              </ul>
            </section>

            <section className="relative">
              <h2 className="text-xl font-bold text-white mb-4">3. Payment Terms</h2>
              <ul className="list-disc list-inside text-[#a8b5c4] space-y-2">
                <li>50% deposit due before work begins</li>
                <li>Remaining 50% due upon project completion, before launch</li>
                <li>Payment accepted via credit card, bank transfer, or Stripe</li>
                <li>Invoices are due within 14 days of issue</li>
              </ul>
            </section>

            <section className="relative">
              <h2 className="text-xl font-bold text-white mb-4">4. Revisions & Changes</h2>
              <p className="text-[#a8b5c4]">
                The number of revision rounds is specified in your project proposal.
                Additional revisions or scope changes may incur extra charges. Major
                changes to project scope will require a revised proposal.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-xl font-bold text-white mb-4">5. Client Responsibilities</h2>
              <p className="text-[#a8b5c4] mb-4">The client agrees to:</p>
              <ul className="list-disc list-inside text-[#a8b5c4] space-y-2">
                <li>Provide necessary content, images, and information in a timely manner</li>
                <li>Respond to requests and provide feedback within 7 business days</li>
                <li>Designate a single point of contact for the project</li>
                <li>Make payments according to the agreed schedule</li>
              </ul>
            </section>

            <section className="relative">
              <h2 className="text-xl font-bold text-white mb-4">6. Ownership & Rights</h2>
              <p className="text-[#a8b5c4]">
                Upon full payment, all custom code and designs become the property of
                the client. The Developer retains the right to display the work in
                portfolio and marketing materials unless otherwise agreed.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-xl font-bold text-white mb-4">7. Confidentiality</h2>
              <p className="text-[#a8b5c4]">
                Both parties agree to keep confidential any proprietary information
                shared during the project. This includes business strategies, customer
                data, and technical specifications.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-xl font-bold text-white mb-4">8. Cancellation</h2>
              <p className="text-[#a8b5c4]">
                Either party may terminate this agreement with written notice. In case
                of cancellation, the client pays for all work completed to date. The
                initial deposit is non-refundable once work has begun.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-xl font-bold text-white mb-4">9. Warranty & Support</h2>
              <p className="text-[#a8b5c4]">
                The Developer provides a 30-day warranty after launch for bug fixes
                related to the delivered work. Support packages are available for
                ongoing maintenance and updates.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="max-w-xl mx-auto text-center">
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden magnetic-hover">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#60a5fa]/10 rounded-full blur-[100px]" />

            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                Download Full Agreement
              </h3>
              <p className="text-[#a8b5c4] mb-6">
                Get the complete agreement as a PDF for your records.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-sm uppercase tracking-[0.15em] rounded-xl transition-all hover:scale-105"
                style={{ boxShadow: '0 0 40px rgba(255, 109, 90, 0.3)' }}
              >
                <Download size={18} />
                Download PDF
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




