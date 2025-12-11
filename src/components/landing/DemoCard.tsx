import { Button } from "@/components/ui/button";
const VELTRA_PURPLE = "#A259FF";

export const DemoCard = () => (
  <div className="w-full max-w-xl bg-gray-900/40 border border-gray-800 rounded-xl p-8 shadow-2xl mx-auto">
    {/* Demo Scenario Box */}
    <div className="bg-gray-800/80 rounded-lg p-4 mb-8">
      <h3 className="text-lg font-semibold flex items-center mb-2 text-white">
        Demo Scenario (Pest Control)
      </h3>
      <p className="text-sm text-gray-400">
        This is Tom, the voice receptionist for a UK pest control company. Try
        asking for a quote for Rats, Wasps, or Fleas, and see how he handles the
        booking! 😉
      </p>
    </div>

    {/* Call Status */}
    <div className="flex justify-center items-center mb-6">
      <span className="text-sm text-gray-400 mr-2">Call Status:</span>
      <span
        className="text-sm font-semibold"
        style={{ color: VELTRA_PURPLE }}
      >
        Ready
      </span>
    </div>

    {/* Start Call Button */}
    <Button
      className="w-full h-12 text-lg text-white shadow-lg border border-transparent hover:scale-[1.01] transition-transform cursor-pointer"
      style={{
        backgroundColor: VELTRA_PURPLE,
        boxShadow: `0 8px 15px -5px ${VELTRA_PURPLE}50`,
      }}
    >
      {/* Microphone Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 mr-2"
      >
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
        <line
          x1="12"
          x2="12"
          y1="19"
          y2="23"
        ></line>
        <line
          x1="8"
          x2="16"
          y1="23"
          y2="23"
        ></line>
      </svg>
      Start Call
    </Button>
  </div>
);
