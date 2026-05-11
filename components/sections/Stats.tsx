export default function Stats() {
  return (
    <section className="bg-cream-100 py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-bark-900/10">
          {/* Stat 1 */}
          <div className="flex-1 text-center py-10 md:py-0 px-8">
            <p className="font-display text-6xl md:text-7xl font-medium tracking-tight text-copper-500 mb-2">
              200+
            </p>
            <p className="font-sans text-sm text-stone-400 uppercase tracking-[0.12em]">
              événements réalisés
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex-1 text-center py-10 md:py-0 px-8">
            <p className="font-display text-6xl md:text-7xl font-medium tracking-tight text-copper-500 mb-2">
              98%
            </p>
            <p className="font-sans text-sm text-stone-400 uppercase tracking-[0.12em]">
              clients satisfaits
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex-1 text-center py-10 md:py-0 px-8">
            <p className="font-display text-6xl md:text-7xl font-medium tracking-tight text-copper-500 mb-2">
              15 ans
            </p>
            <p className="font-sans text-sm text-stone-400 uppercase tracking-[0.12em]">
              d&apos;expérience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
