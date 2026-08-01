export default function Sidebar({ title, links }) {
  return (
    <aside className="sticky top-8 hidden w-60 shrink-0 self-start lg:block xl:w-72">
      <div className="relative overflow-hidden rounded-2xl border border-[#8500db]/25 bg-gradient-to-b from-[#0d0020] to-[#110028] p-5 shadow-[0_0_40px_rgba(133,0,219,0.12)]">

        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#8500db]/20 blur-2xl pointer-events-none"></div>

        <div className="mb-4 flex items-center gap-2">
          <span className="h-4 w-1 rounded-full bg-gradient-to-b from-[#8500db] to-[#c500db]"></span>

          <p className="text-[10px] font-bold uppercase tracking-widest text-[#8500db]">
            {title}
          </p>
        </div>

        <div className="mb-4 h-px bg-gradient-to-r from-[#8500db]/40 to-transparent"></div>

        <nav className="space-y-0.5">
          {links.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center gap-2.5 rounded-lg px-2 py-2 text-xs text-gray-400 transition-all duration-150 hover:bg-[#8500db]/15 hover:text-white"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8500db]/40 transition-all group-hover:bg-[#8500db] group-hover:shadow-[0_0_6px_rgba(133,0,219,0.8)]"></span>

              {index + 1}. {item.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}