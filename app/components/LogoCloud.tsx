export function LogoCloud() {
  const logos = [
    {
      name: "Acme",
      className: "font-bold text-xl",
    },
    {
      name: "Tuple",
      className: "font-serif text-xl italic",
    },
    {
      name: "Mirage",
      className: "font-mono text-lg tracking-widest",
    },
    {
      name: "Static",
      className: "font-sans font-black text-xl",
    },
    {
      name: "Workcation",
      className: "font-semibold text-lg",
    },
    {
      name: "Level",
      className: "font-light text-2xl",
    },
  ];
  return (
    <section className="py-16 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
          Trusted by innovative companies
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.name} className={`text-slate-900 ${logo.className}`}>
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
