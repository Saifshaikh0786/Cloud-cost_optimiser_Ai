import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { DemoSection } from "@/components/demo-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <ArchitectureSection />
        <DemoSection />
      </main>
      <Footer />
    </div>
  )
}
