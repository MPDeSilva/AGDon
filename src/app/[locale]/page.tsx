import { TopBar } from '@/components/layout/TopBar'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { WhyMe } from '@/components/sections/WhyMe'
import { Process } from '@/components/sections/Process'
import { Faq } from '@/components/sections/Faq'
import { ContactSection } from '@/components/sections/ContactSection'
import { SiteFooter } from '@/components/layout/SiteFooter'

export default function HomePage() {
  return (
    <>
      <TopBar />
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyMe />
        <Process />
        <Faq />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
