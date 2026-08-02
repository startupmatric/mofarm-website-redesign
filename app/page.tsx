import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Problem } from '@/components/problem'
import { HowItWorks } from '@/components/how-it-works'
import { Features } from '@/components/features'
import { DashboardPreview } from '@/components/dashboard-preview'
import { Impact } from '@/components/impact'
import { Testimonials } from '@/components/testimonials'
import { Partners } from '@/components/partners'
import { FAQ } from '@/components/faq'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <DashboardPreview />
      <Impact />
      <Testimonials />
      <Partners />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
