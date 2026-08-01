import Navbar from "../home/Navbar";

export default function PageHero({
  icon: Icon,
  title,
  highlight,
  description,
  badges = [],
}) {
  return (
    <div className="relative border-b border-white/10 bg-linear-to-br from-slate-950 via-purple-950 to-slate-950 px-4 pt-28 sm:pt-32 pb-28 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-72 w-72 -translate-y-1/2 animate-pulse rounded-full bg-purple-600/20 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-0 h-72 w-72 translate-y-1/2 animate-pulse rounded-full bg-fuchsia-600/20 blur-3xl [animation-delay:1s]"></div>
      </div>

      <Navbar />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <Icon className="h-5 w-5 text-[#c084fc]" />
        </div>

        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}&nbsp;
          <span className="text-[#c084fc]">{highlight}</span>
        </h1>

        <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {badges.map((badge, index) => (
            <span
              key={index}
              className={badge.className}
            >
              {badge.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}