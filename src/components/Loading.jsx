export default function Loading() {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center text-gray-400">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-[#e9a83b]" />

      <p className="mt-4 text-sm">
        Discovering titles...
      </p>
    </div>
  );
}