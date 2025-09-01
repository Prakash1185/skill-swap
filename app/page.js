import { GlobeDemo } from "@/components/homepage/globe-demo"
import HeroSection from "@/components/homepage/hero-section"
import Skillsbase from "@/components/Skills/Skillsbase"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-16">
      <GlobeDemo />
      <Skillsbase />
    </main>
  )
}

