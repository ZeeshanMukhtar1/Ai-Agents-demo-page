import React from "react";

const VELTRA_PURPLE = "#A259FF";

export const HeroSection = () => (
  <main className="flex flex-col items-center text-center max-w-4xl mx-auto mt-16 px-4">
    {/* Live AI Voice Demo Badge */}
    <div
      className="text-xs font-semibold py-1 px-3 mb-4 rounded-full border"
      style={{
        color: VELTRA_PURPLE,
        borderColor: VELTRA_PURPLE,
        backgroundColor: `${VELTRA_PURPLE}20`, // 20% opacity for the background glow
      }}
    >
      Live AI Voice Demo
    </div>

    {/* Title */}
    <h1 className="text-6xl font-extrabold mb-4 text-white">
      Experience <span style={{ color: VELTRA_PURPLE }}>Veltra Voice</span>
    </h1>

    {/* Subtitle */}
    <p className="text-lg text-gray-400 mb-12 max-w-md">
      Start a secure browser call with our AI assistant. Make sure your
      microphone is enabled for the best experience.
    </p>
  </main>
);
