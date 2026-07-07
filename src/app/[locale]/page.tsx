import { TopBar } from '@/components/layout/TopBar'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { TrustBar } from '@/components/sections/TrustBar'
import { About } from '@/components/sections/About'
import { WhyMe } from '@/components/sections/WhyMe'
import { Process } from '@/components/sections/Process'
import { Faq } from '@/components/sections/Faq'
import { ContactSection } from '@/components/sections/ContactSection'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { HeroRenderer, ServicesRenderer } from '@/components/designs/DesignRenderer'

export default function HomePage() {
  return (
    <>
      <TopBar />
      <SiteHeader />
      <main id="main-content">
        <HeroRenderer />
        <TrustBar />
        <About />
        <ServicesRenderer />
        <WhyMe />
        <Process />
        <Faq />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
