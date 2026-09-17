import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";

import { API_BASE } from "../App";

export default function Movies({ onSelect }) {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadShows();
  }, []);

  async function loadShows() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_BASE}/shows`);

      if (!response.ok) {
        throw new Error("Failed to load shows");
      }

      const data = await response.json();

      setShows(data);
    } catch (error) {
      setError(
        "We couldn't load the movie catalog. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const trimmedQuery = query.trim();

    // If search box is empty,
    // load all movies again.
    if (!trimmedQuery) {
      loadShows();
      return;
    }

    const controller = new AbortController();

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_BASE}/search/shows?q=${encodeURIComponent(
            trimmedQuery
          )}`,
          {
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error("Search failed");
        }

        const results = await response.json();

        setShows(results.map((item) => item.show));
      } catch (error) {
        if (error.name !== "AbortError") {
          setError("Search failed. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    }, 350);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return (
    <section className="min-h-screen bg-[#090a0d] pb-24 pt-32">
      <div className="mx-auto w-[calc(100%-28px)] max-w-[1180px] md:w-[calc(100%-40px)]">

        {/* HEADER */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold tracking-[0.16em] text-[#e9a83b]">
              MOVIE LIBRARY
            </span>

            <h1 className="mt-3 font-serif text-4xl font-bold md:text-6xl">
              Explore the collection
            </h1>

            <p className="mt-3 text-gray-400">
              Search by title or browse the available TVMaze shows.
            </p>
          </div>

          <div className="text-sm font-bold text-[#e9a83b]">
            {shows.length} titles
          </div>
        </div>

        {/* SEARCH */}
        <div className="mb-9 flex h-16 items-center rounded-xl border border-white/10 bg-[#121419] px-5 focus-within:border-[#e9a83b]/60">
          <span className="mr-3 text-2xl text-[#e9a83b]">
            ⌕
          </span>

          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for a movie or show..."
            aria-label="Search for a movie"
            className="flex-1 bg-transparent text-white outline-none placeholder:text-gray-600"
          />

          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="text-gray-500 transition hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-6 flex items-center gap-3 rounded-lg border border-red-900 bg-red-950/50 p-4 text-red-300">
            <span>⚠️</span>

            <span>{error}</span>

            <button
              onClick={loadShows}
              className="ml-auto rounded border border-red-700 px-3 py-1 text-sm text-white"
            >
              Retry
            </button>
          </div>
        )}

        {/* CONTENT */}
        {loading ? (
          <Loading />
        ) : shows.length === 0 ? (
          <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
            <div className="text-5xl">🎬</div>

            <h2 className="mt-4 text-2xl font-bold">
              No titles found
            </h2>

            <p className="mt-2 text-gray-500">
              Try a different movie or show title.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {shows.map((show) => (
              <MovieCard
                key={show.id}
                show={show}
                onSelect={onSelect}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
