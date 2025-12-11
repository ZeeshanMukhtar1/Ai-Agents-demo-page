// components/landing/Header.tsx
import Link from "next/link";
import Logo from "../common/Logo";

export const Header = () => (
  <header className="flex justify-between items-center max-w-4xl mx-auto py-6 px-4">
    <Logo />

    <Link
      href="https://veltraai.net/"
      className="text-sm text-gray-400 hover:text-white transition"
    >
      Back to Home
    </Link>
  </header>
);
