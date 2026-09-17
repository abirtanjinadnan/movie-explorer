export default function MovieCard({ show, onSelect }) {
  const poster =
    show.image?.medium ||
    show.image?.original;

  const year =
    show.premiered
      ? show.premiered.slice(0, 4)
      : "N/A";

  const rating =
    show.rating?.average ?? "N/A";

  return (
    <article className="overflow-hidden rounded-xl border border-white/10 bg-[#121419] transition duration-300 hover:-translate-y-1 hover:border-[#e9a83b]/40 hover:shadow-2xl">
      
      <div className="relative h-[320px] bg-[#1b1d23]">
        
        {poster ? (
          <img
            src={poster}
            alt={`${show.name} poster`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-4xl text-gray-600">
            🎬
            <span className="mt-2 text-xs">
              No Poster
            </span>
          </div>
        )}

        <div className="absolute right-3 top-3 rounded-md bg-black/80 px-2 py-1 text-xs">
          ⭐ {rating}
        </div>
      </div>

      <div className="p-5">
        <h3
          title={show.name}
          className="truncate font-bold"
        >
          {show.name}
        </h3>

        <div className="mt-2 mb-5 flex gap-3 text-xs text-gray-500">
          <span>📅 {year}</span>
          <span>
            {show.genres?.[0] || "Drama"}
          </span>
        </div>

        <button
          onClick={() => onSelect(show)}
          className="w-full rounded-lg border border-white/10 px-3 py-2 text-sm font-semibold transition hover:border-[#e9a83b] hover:text-[#e9a83b]"
        >
          See Details
        </button>
      </div>
    </article>
  );
}