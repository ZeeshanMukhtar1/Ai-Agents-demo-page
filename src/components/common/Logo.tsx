import Link from "next/link";

const VeltraLogoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-8 h-8 flex-shrink-0"
    fill="currentColor"
  >
    <path d="M16 0L4 12V20L16 32L28 20V12L16 0Z M16 4.3L25.3 12L16 19.7L6.7 12L16 4.3Z" />
    <path
      d="M16 19.7L6.7 12L16 4.3L25.3 12L16 19.7Z"
      fill="#000000"
    />{" "}
  </svg>
);

const Logo = () => (
  <Link
    href="/"
    className="flex items-center space-x-2 text-white hover:text-gray-200 transition"
  >
    <VeltraLogoIcon />

    {/* Text Element: Veltra AI */}
    <div
      className="text-xl font-bold tracking-tight"
      style={{
        fontFamily: '"Figtree", sans-serif',
        fontWeight: 700,
        letterSpacing: "-0.06em",
      }}
    >
      Veltra AI
    </div>
  </Link>
);

export default Logo;
