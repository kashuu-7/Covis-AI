export default function CenterAnimation() {
  return (
    <div className="absolute top-24 bottom-0 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-4 py-12 lg:flex">
      <div className="relative w-px flex-1 bg-linear-to-b from-transparent via-purple-300 to-transparent">
        <div className="absolute inset-0 w-2 -translate-x-1/2 animate-pulse bg-linear-to-b from-purple-500/0 via-fuchsia-500/30 to-purple-500/0 blur-sm"></div>
        <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-linear-to-br from-purple-500 to-fuchsia-600 shadow-lg shadow-purple-500/50"></div>
        <div className="absolute top-1/4 left-1/2 h-1.5 w-1.5 -translate-x-1/2 animate-pulse rounded-full bg-linear-to-br from-purple-400 to-fuchsia-500 shadow-md shadow-purple-400/50"></div>
        <div className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-linear-to-br from-fuchsia-500 to-purple-600 shadow-lg shadow-fuchsia-500/60">
          <div className="absolute inset-0 animate-ping rounded-full bg-linear-to-br from-fuchsia-400 to-purple-500 opacity-75"></div>
        </div>
        <div className="absolute top-3/4 left-1/2 h-1.5 w-1.5 -translate-x-1/2 animate-pulse rounded-full bg-linear-to-br from-purple-400 to-fuchsia-500 shadow-md shadow-purple-400/50" style={{animationDelay:"1s"}}></div>
        <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-linear-to-br from-purple-500 to-fuchsia-600 shadow-lg shadow-purple-500/50"></div>
        <div className="absolute left-1/2 h-6 w-1 -translate-x-1/2 rounded-full bg-linear-to-b from-transparent via-fuchsia-400 to-transparent blur-sm" style={{ animation: "slideVertical 3s ease-in-out infinite" }}></div>
      </div>
    </div>
  );
}
