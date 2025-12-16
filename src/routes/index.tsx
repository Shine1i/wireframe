import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from "@/components/Hero.tsx";

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
    </div>
  )
}
