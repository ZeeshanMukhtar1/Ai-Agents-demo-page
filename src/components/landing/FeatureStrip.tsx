import React from "react";

const VELTRA_PURPLE = "#A259FF";

const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-start text-left w-1/2 p-2">
    <div
      className="flex items-center mb-1"
      style={{ color: VELTRA_PURPLE }}
    >
      {icon}
      <span className="text-sm font-semibold text-white ml-2">{title}</span>
    </div>
    <p className="text-xs text-gray-500">{description}</p>
  </div>
);

export const FeatureStrip = () => (
  <div className="flex justify-center space-x-12 mt-12 w-full max-w-xl mx-auto">
    {/* Crystal Clear Audio */}
    <FeatureItem
      title="Crystal Clear Audio"
      description="High-quality voice transmission for natural conversations."
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 5L6 9H2v6h4l5 4z"></path>
        </svg>
      }
    />

    {/* Secure & Private */}
    <FeatureItem
      title="Secure & Private"
      description="End-to-end encrypted, your data stays protected."
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect
            x="3"
            y="11"
            width="18"
            height="11"
            rx="2"
            ry="2"
          ></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      }
    />
  </div>
);
