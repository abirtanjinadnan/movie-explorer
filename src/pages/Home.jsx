import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <div
        className="relative flex min-h-[720px] items-center overflow-hidden bg-cover bg-center"
        style={{
        backgroundImage: `
            linear-gradient(
            90deg,
            rgba(5,6,9,0.98) 0%,
            rgba(5,6,9,0.90) 38%,
            rgba(5,6,9,0.58) 70%,
            rgba(5,6,9,0.72) 100%
            ),
            linear-gradient(
            180deg,
            rgba(5,6,9,0.15) 0%,
            rgba(5,6,9,0.95) 100%
            ),
            url("https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=2200&q=85")
        `,
        }}
      >
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1180px] pt-16">
          
          <span className="text-xs font-bold tracking-[0.18em] text-[#e9a83b]">
            YOUR NEXT STORY STARTS HERE
          </span>

          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-bold leading-[1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Discover Movies.
            <br />
            <span className="italic text-[#e9a83b]">
              Explore Stories.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
            Browse a world of entertainment, search for titles you love,
            and uncover details about shows waiting to be discovered.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/movies"
              className="rounded-lg bg-[#e9a83b] px-6 py-4 text-center font-bold text-black transition hover:bg-[#f5c56d]"
            >
              Explore Now →
            </Link>

            <a
              href="#features"
              className="rounded-lg border border-white/25 bg-white/5 px-6 py-4 text-center font-bold text-white transition hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-[10px] tracking-[0.2em] text-gray-500 sm:block">
          SCROLL TO EXPLORE ↓
        </div>
      </div>

      <div
        id="features"
        className="mx-auto w-[calc(100%-40px)] max-w-[1180px] py-24"
      >
        <span className="text-xs font-bold tracking-[0.16em] text-[#e9a83b]">
          Why MovieExplorer
        </span>

        <h2 className="mt-4 max-w-2xl font-serif text-4xl font-bold leading-tight md:text-5xl">
          Everything you need to find your next watch.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          
          <Feature
            icon="🔎"
            title="Search Easily"
            text="Find shows by title with live search results powered by TVMaze."
          />

          <Feature
            icon="🎞️"
            title="Browse Freely"
            text="Explore a responsive collection of titles from the TVMaze catalog."
          />

          <Feature
            icon="✨"
            title="Explore Details"
            text="Open any card to see rating, genres, release date and overview."
          />

        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#121419] p-8 transition hover:-translate-y-1 hover:border-[#e9a83b]/30">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-2 leading-7 text-gray-400">
        {text}
      </p>
    </div>
  );
}