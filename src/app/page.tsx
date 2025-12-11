// app/page.tsx
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { DemoCard } from "@/components/landing/DemoCard";
import { FeatureStrip } from "@/components/landing/FeatureStrip";

export default function PistonAILandingPage() {
  return (
    // Set the overall background to black and default text to white
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />

      {/* Container to center the Demo Card and Features */}
      <div className="flex flex-col items-center justify-center pt-8">
        <DemoCard />
        <FeatureStrip />
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-600 mt-20 max-w-4xl mx-auto py-4">
        Powered by Retel AI • Enterprise-grade voice technology
      </footer>
    </div>
  );
}
