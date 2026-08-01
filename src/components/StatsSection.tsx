export default function StatsSection({ totalFiles, totalDownloads }: { totalFiles: number; totalDownloads: number }) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="card p-8 text-center">
          <h3 className="text-6xl font-display font-bold gradient-text">{totalFiles}</h3>
          <p className="text-neutral-400 mt-2">Total Files</p>
        </div>
        <div className="card p-8 text-center">
          <h3 className="text-6xl font-display font-bold gradient-text">{totalDownloads}</h3>
          <p className="text-neutral-400 mt-2">Total Downloads</p>
        </div>
      </div>
    </section>
  );
}
