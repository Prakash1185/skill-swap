import { Globe } from "@/components/ui/globe"
import HeroSection from "./hero-section"

export function GlobeDemo() {
  return (
    <div className="relative flex flex-col size-full max-w-3xl items-center justify-center overflow-hidden rounded-lg border bg-background px-6 pb-40 pt-8 mt-2 md:pb-60 md:shadow-xl">
      <HeroSection />
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  )
}
