import { Section, SectionHeader, GlassCard, Button, IconCheck, IconArrowRight, IconMessageCircle, IconLayout, IconRocket, IconUsers, IconCode, IconGlobe, IconShield } from '@/components/ui';
import { Nav } from '@/components/Nav';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero Section */}
        <section className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden pt-16">
        {/* Subtle gradient orb backgrounds - Orange + Blue accent */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        {/* BLUE ACCENT ORB - delete this div to remove */}
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--color-blue) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="container-content text-center relative z-10">
          <span className="inline-block text-sm font-medium tracking-wider uppercase text-[var(--color-accent)] mb-4">
            Small Town. Big Results.
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Websites That Put Your
            <br />
            <span className="text-gradient-accent">Business on the Map</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-8">
            Custom-built, lightning-fast websites for local businesses.
            No templates. No monthly website builders. Just clean code that works.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#contact" size="lg">
              Get Started
              <IconArrowRight className="ml-2" size={20} />
            </Button>
            <Button href="#process" variant="secondary" size="lg">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* About / Story Section */}
      <Section id="about" className="bg-[var(--color-bg-secondary)]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-[var(--color-accent)] mb-3">
              About
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
              Your Neighbor, Not a Faceless Agency
            </h2>
            <div className="space-y-4 text-[var(--color-text-secondary)]">
              <p>
                I&apos;m Jay Parrack — insurance agent by day, dad, city councilman, and EDA board member.
                I wear a lot of hats, but my evenings are dedicated to something I&apos;m passionate about:
                helping local businesses thrive online.
              </p>
              <p>
                I&apos;ve seen too many small businesses struggle with overpriced website builders or
                cookie-cutter templates that don&apos;t convert. You deserve better than that. You deserve
                a site that&apos;s as unique as your business — built with modern technology, optimized for
                speed, and priced fairly.
              </p>
              <p className="text-[var(--color-text-primary)] font-medium">
                This isn&apos;t a side hustle for profit. It&apos;s about putting our community on the map.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <GlassCard accent className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-accent)] mb-2">100%</div>
              <div className="text-sm text-[var(--color-text-muted)]">Custom Built</div>
            </GlassCard>
            <GlassCard accent className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-accent)] mb-2">Local</div>
              <div className="text-sm text-[var(--color-text-muted)]">Community Focused</div>
            </GlassCard>
            <GlassCard accent className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-accent)] mb-2">$0</div>
              <div className="text-sm text-[var(--color-text-muted)]">Hosting Fees*</div>
            </GlassCard>
            <GlassCard accent className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-accent)] mb-2">Fast</div>
              <div className="text-sm text-[var(--color-text-muted)]">Near-Instant Loads</div>
            </GlassCard>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-subtle)] mt-8 text-center">
          *Vercel&apos;s free tier covers most small business websites. Paid upgrades available at your expense if needed.
        </p>
      </Section>

      {/* Why Choose Custom Section */}
      <Section id="why">
        <SectionHeader
          label="Why Custom?"
          title="Better Than GoDaddy. Better Than WordPress."
          description="Template builders charge you monthly for something you never truly own. I build you a real website with real code that you actually control."
        />

        <div className="grid md:grid-cols-3 gap-6">
          <GlassCard className="p-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
              <IconRocket className="text-[var(--color-accent)]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Blazing Fast</h3>
            <p className="text-[var(--color-text-muted)]">
              Modern tech stack means your site loads in milliseconds, not seconds.
              Better user experience, better SEO rankings.
            </p>
          </GlassCard>

          {/* BLUE ICON - change var(--color-blue) to var(--color-accent) to remove */}
          <GlassCard className="p-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-blue)]/10 flex items-center justify-center mb-6">
              <IconCode className="text-[var(--color-blue)]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">You Own It</h3>
            <p className="text-[var(--color-text-muted)]">
              No vendor lock-in. You get full access to your code, your hosting accounts,
              and your domain. Walk away anytime with everything.
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
              <IconShield className="text-[var(--color-accent)]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">No Hidden Fees</h3>
            <p className="text-[var(--color-text-muted)]">
              One fair price for the build. Small monthly fee for maintenance.
              No surprise charges, no nickel-and-diming.
            </p>
          </GlassCard>
        </div>
      </Section>

      {/* Process Section */}
      <Section id="process" className="bg-[var(--color-bg-secondary)]">
        <SectionHeader
          label="The Process"
          title="Simple. Collaborative. Stress-Free."
          description="I don't just build you a website — I build it with you. Every step of the way."
        />

        <div className="space-y-6 max-w-3xl mx-auto">
          <ProcessStep
            number={1}
            title="Show Me What You Like"
            description="Send me 3-4 examples of modern websites that catch your eye. I'll study the themes, colors, fonts, and layouts that resonate with you."
          />
          <ProcessStep
            number={2}
            title="Product & Service Discovery"
            description="We sit down (coffee's on me) and map out exactly what your website needs to showcase. What do you sell? Who's your customer? What makes you different?"
          />
          <ProcessStep
            number={3}
            title="Review & Refine"
            description="I'll present you with options. We'll tweak, adjust, and perfect until it feels right. This is your business — you have the final say."
          />
          <ProcessStep
            number={4}
            title="Build & Launch"
            description="I set up your GitHub, Vercel, and Cloudflare accounts (or connect your existing domain). Your site goes live, and you get all the credentials."
          />
        </div>
      </Section>

      {/* Pricing Section */}
      <Section id="pricing">
        <SectionHeader
          label="Pricing"
          title="Start Small. Grow When Ready."
          description="Your investment grows with your business. Upgrade anytime — just pay the difference."
        />

        {/* Grow With You Callout */}
        <div className="glass-accent p-6 rounded-2xl max-w-2xl mx-auto mb-12 text-center">
          <p className="text-lg md:text-xl font-medium">
            Already a client?
            <span className="text-[var(--color-accent)]"> Get 25% off </span>
            when you upgrade to the next tier.
          </p>
          <p className="text-sm text-[var(--color-text-muted)] mt-2">
            Loyalty pays. You never pay for the same work twice.
          </p>
        </div>

        {/* Build Pricing Tiers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <GlassCard className="p-6 text-center">
            <h3 className="text-lg font-bold mb-1">Starter</h3>
            <p className="text-xs text-[var(--color-text-muted)] mb-4">1-2 pages</p>
            <div className="text-3xl font-bold text-[var(--color-accent)]">$200</div>
          </GlassCard>

          <GlassCard accent className="p-6 text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-[var(--color-accent)] text-xs font-bold px-2 py-1 rounded-bl-lg">POPULAR</span>
            <h3 className="text-lg font-bold mb-1">Standard</h3>
            <p className="text-xs text-[var(--color-text-muted)] mb-4">3-5 pages</p>
            <div className="text-3xl font-bold text-[var(--color-accent)]">$400</div>
          </GlassCard>

          <GlassCard className="p-6 text-center">
            <h3 className="text-lg font-bold mb-1">Full Site</h3>
            <p className="text-xs text-[var(--color-text-muted)] mb-4">6-10 pages</p>
            <div className="text-3xl font-bold text-[var(--color-accent)]">$600</div>
          </GlassCard>

          <GlassCard className="p-6 text-center">
            <h3 className="text-lg font-bold mb-1">Enterprise</h3>
            <p className="text-xs text-[var(--color-text-muted)] mb-4">10+ pages</p>
            <div className="text-3xl font-bold text-[var(--color-accent)]">$800+</div>
          </GlassCard>
        </div>

        {/* What's Included + Maintenance */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <GlassCard accent className="p-8">
            <h3 className="text-2xl font-bold mb-6">Every Build Includes</h3>

            <ul className="space-y-3">
              <PricingFeature>100% custom design (no templates)</PricingFeature>
              <PricingFeature>Mobile-first, responsive layout</PricingFeature>
              <PricingFeature>SEO-optimized from day one</PricingFeature>
              <PricingFeature>Lightning-fast performance</PricingFeature>
              <PricingFeature>Domain setup assistance</PricingFeature>
              <PricingFeature>Full code ownership</PricingFeature>
              <PricingFeature>GitHub, Vercel & Cloudflare setup</PricingFeature>
              <PricingFeature>You get all the credentials</PricingFeature>
            </ul>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold mb-2">Monthly Monitoring</h3>
            <p className="text-[var(--color-text-muted)] mb-6">Set it and forget it</p>

            <div className="mb-6">
              <span className="text-4xl md:text-5xl font-bold text-[var(--color-accent)]">$15</span>
              <span className="text-xl text-[var(--color-text-muted)]">/month</span>
            </div>

            <ul className="space-y-3 mb-6">
              <PricingFeature>Uptime monitoring</PricingFeature>
              <PricingFeature>Automated security updates</PricingFeature>
              <PricingFeature>Performance monitoring</PricingFeature>
              <PricingFeature>Priority support</PricingFeature>
            </ul>

            <div className="pt-6 border-t border-[var(--color-glass-border)]">
              <p className="text-sm text-[var(--color-text-muted)]">
                <span className="font-semibold text-[var(--color-text-primary)]">Need changes?</span> Content updates billed at <span className="text-[var(--color-accent)] font-semibold">$50/hour</span> — or upgrade to the next tier.
              </p>
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* Who It's For Section */}
      <Section id="for-you" className="bg-[var(--color-bg-secondary)]">
        <SectionHeader
          label="Is This For You?"
          title="Built for Local Businesses Like Yours"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard className="p-6">
            <IconUsers className="text-[var(--color-accent)] mb-4" />
            <h3 className="text-lg font-semibold mb-2">Small Businesses</h3>
            <p className="text-sm text-[var(--color-text-muted)]">
              Starting out and need a professional web presence without the big agency price tag.
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <IconLayout className="text-[var(--color-accent)] mb-4" />
            <h3 className="text-lg font-semibold mb-2">Established Companies</h3>
            <p className="text-sm text-[var(--color-text-muted)]">
              Been around for years but your website looks like it&apos;s from 2005. Time for an upgrade.
            </p>
          </GlassCard>

          {/* BLUE ICON - change var(--color-blue) to var(--color-accent) to remove */}
          <GlassCard className="p-6">
            <IconGlobe className="text-[var(--color-blue)] mb-4" />
            <h3 className="text-lg font-semibold mb-2">Anyone Stuck on GoDaddy</h3>
            <p className="text-sm text-[var(--color-text-muted)]">
              Tired of paying monthly fees for a slow, templated site you can&apos;t fully control.
            </p>
          </GlassCard>
        </div>

        <div className="mt-12 glass-accent p-8 rounded-2xl max-w-3xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">What I Don&apos;t Build</h3>
          <p className="text-[var(--color-text-secondary)]">
            Social media platforms, complex web apps, e-commerce with thousands of products,
            or anything requiring sensitive data handling. I keep it focused:
            <span className="text-[var(--color-text-primary)] font-medium"> beautiful, fast websites that help you get found.</span>
          </p>
        </div>
      </Section>

      {/* CTA / Contact Section */}
      <Section id="contact">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-sm font-medium tracking-wider uppercase text-[var(--color-accent)] mb-3">
            Let&apos;s Talk
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] mb-8">
            No pressure, no hard sell. Just a conversation about what you need
            and how I can help. Reach out anytime.
          </p>

          <GlassCard accent className="p-8 text-left">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <IconMessageCircle className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <div className="font-semibold">Email Me</div>
                  <a
                    href="mailto:parracj4@gmail.com"
                    className="text-[var(--color-accent)] hover:underline"
                  >
                    parracj4@gmail.com
                  </a>
                </div>
              </div>

              <p className="text-sm text-[var(--color-text-muted)]">
                Tell me about your business and what you&apos;re looking for.
                I&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </GlassCard>
        </div>
      </Section>

        {/* Footer */}
        <footer className="py-8 border-t border-[var(--color-glass-border)]">
          <div className="container-content text-center">
            <p className="text-sm text-[var(--color-text-subtle)]">
              {new Date().getFullYear()} Jay Parrack Website Publishing. Built with care for the local community.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

/* Helper Components */

function ProcessStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 text-xl font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[var(--color-text-muted)]">{description}</p>
      </div>
    </div>
  );
}

function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3">
      <IconCheck className="text-[var(--color-accent)] shrink-0" size={20} />
      <span className="text-[var(--color-text-secondary)]">{children}</span>
    </li>
  );
}
