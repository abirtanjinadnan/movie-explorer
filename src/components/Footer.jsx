import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07080a]">
      <div className="mx-auto flex w-[calc(100%-40px)] max-w-[1180px] flex-col justify-between gap-8 py-14 md:flex-row">
        
        <div>
          <Link
            to="/"
            className="text-lg font-bold"
          >
            🎬 Movie<span className="text-[#e9a83b]">Explorer</span>
          </Link>

          <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">
            Discover stories, explore worlds, and find your next favorite
            show.
          </p>
        </div>

        <div className="flex items-start gap-6 text-sm text-gray-400">
          {/* <Link
            to="/"
            className="transition hover:text-[#e9a83b]"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="transition hover:text-[#e9a83b]"
          >
            Movies
          </Link> */}

          <a
            href="https://github.com/abirtanjinadnan/movie-explorer"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#e9a83b]"
          >
            GitHub
          </a>

          <a
            href="https://www.tvmaze.com/api"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#e9a83b]"
          >
            API Docs
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1180px] py-5 text-xs text-gray-600">
          © 2026 MovieExplorer · Built with React, Tailwind CSS & TVMaze API
        </div>
      </div>
    </footer>
  );
}