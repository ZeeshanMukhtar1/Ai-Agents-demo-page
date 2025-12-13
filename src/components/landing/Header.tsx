import Link from "next/link";
import Logo from "../common/Logo";
import { Button } from "@/components/ui/button";

const VELTRA_PURPLE = "#A259FF";

export const Header = () => (
  <header className="flex justify-between items-center max-w-4xl mx-auto py-6 px-4">
    <Logo />

    <Button
      asChild
      style={{
        backgroundColor: VELTRA_PURPLE,
        boxShadow: `0 4px 10px -3px ${VELTRA_PURPLE}80`,
      }}
      className="
        text-white 
        px-4 py-2 
        h-auto 
        text-sm 
        font-medium
        border border-transparent 
        transition-all duration-200 
        hover:scale-[1.02] 
        active:scale-[0.98] 
        hover:shadow-lg 
      "
    >
      <Link
        href="https://veltraai.net/"
        // target="_blank"
        rel="noopener noreferrer"
      >
        Back to Home
      </Link>
    </Button>
  </header>
);
