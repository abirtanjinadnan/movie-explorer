function stripHtml(value = "") {
  const doc = new DOMParser().parseFromString(
    value,
    "text/html"
  );

  return doc.body.textContent || "";
}

export default function MovieModal({
  show,
  onClose,
}) {
  const image =
    show.image?.original ||
    show.image?.medium;

  const year =
    show.premiered
      ? show.premiered.slice(0, 4)
      : "N/A";

  const rating =
    show.rating?.average ?? "N/A";

  const genres =
    show.genres?.length
      ? show.genres.join(" • ")
      : "Not specified";

  const summary =
    stripHtml(show.summary) ||
    "No summary is available for this title.";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-5 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="movie-modal-title"
        className="relative max-h-[92vh] w-full max-w-4xl overflow-auto rounded-2xl border border-white/10 bg-[#111318] shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition hover:bg-[#e9a83b] hover:text-black"
        >
          ✕
        </button>

        {image ? (
          <img
            src={image}
            alt={`${show.name} backdrop`}
            className="h-[230px] w-full object-cover md:h-[320px]"
          />
        ) : (
          <div className="flex h-[230px] items-center justify-center bg-[#1a1c21] text-5xl md:h-[320px]">
            🎬
          </div>
        )}

        <div className="p-7 md:p-9">
          <span className="text-xs font-bold tracking-[0.16em] text-[#e9a83b]">
            SHOW DETAILS
          </span>

          <h2
            id="movie-modal-title"
            className="mt-2 font-serif text-4xl font-bold md:text-5xl"
          >
            {show.name}
          </h2>

          <div className="mt-5 flex flex-wrap gap-2 text-sm text-gray-300">
            <span className="rounded-md bg-[#1c1e24] px-3 py-2">
              ⭐ {rating}
            </span>

            <span className="rounded-md bg-[#1c1e24] px-3 py-2">
              📅 {year}
            </span>

            <span className="rounded-md bg-[#1c1e24] px-3 py-2">
              🎭 {genres}
            </span>
          </div>

          <h3 className="mt-8 text-xl font-bold">
            Overview
          </h3>

          <p className="mt-3 leading-8 text-gray-400">
            {summary}
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
            <Info
              label="Status"
              value={show.status || "N/A"}
            />

            <Info
              label="Language"
              value={show.language || "N/A"}
            />

            <Info
              label="Runtime"
              value={
                show.runtime
                  ? `${show.runtime} min`
                  : "N/A"
              }
            />

            <Info
              label="Network"
              value={
                show.network?.name ||
                show.webChannel?.name ||
                "N/A"
              }
            />
          </div>

          <button
            onClick={onClose}
            className="mt-7 rounded-lg bg-[#e9a83b] px-5 py-3 font-bold text-black transition hover:bg-[#f5c56d]"
          >
            Close
          </button>
        </div>
      </section>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-lg bg-[#181a20] p-4">
      <strong className="block text-[10px] uppercase tracking-wider text-gray-600">
        {label}
      </strong>

      <span className="mt-1 block text-sm text-gray-200">
        {value}
      </span>
    </div>
  );
}