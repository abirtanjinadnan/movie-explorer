import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] w-[calc(100%-40px)] max-w-[1180px] items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-2 text-lg font-bold"
        >
          <span className="text-2xl">🎬</span>

          <span>
            Movie<span className="text-[#e9a83b]">Explorer</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-base font-medium text-[#e9a83b]"
                : "text-base font-medium text-gray-300 transition hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "text-base font-medium text-[#e9a83b]"
                : "text-base font-medium text-gray-300 transition hover:text-white"
            }
          >
            Movies
          </NavLink>

        </nav>

        {/* Desktop Explore Button */}
        <NavLink
          to="/movies"
          className="hidden rounded-lg bg-[#e9a83b] px-4 py-2 text-sm font-bold text-black transition hover:bg-[#f5c56d] md:block"
        >
          Explore Movies
        </NavLink>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#090a0d]/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex w-[calc(100%-40px)] max-w-[1180px] flex-col gap-1 py-4">

            <NavLink
              to="/"
              end
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "rounded-lg bg-[#e9a83b]/10 px-4 py-3 text-base font-medium text-[#e9a83b]"
                  : "rounded-lg px-4 py-3 text-base font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/movies"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "rounded-lg bg-[#e9a83b]/10 px-4 py-3 text-base font-medium text-[#e9a83b]"
                  : "rounded-lg px-4 py-3 text-base font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
              }
            >
              Movies
            </NavLink>

            <NavLink
              to="/movies"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-lg bg-[#e9a83b] px-4 py-3 text-center text-sm font-bold text-black transition hover:bg-[#f5c56d]"
            >
              Explore Movies →
            </NavLink>

          </nav>
        </div>
      )}
    </header>
  );
}
