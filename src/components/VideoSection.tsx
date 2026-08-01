export default function VideoSection() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-center">YouTube</h2>
      <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="ChiezK3q" allowFullScreen />
      </div>
    </section>
  );
}
