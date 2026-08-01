import { prisma } from "../../lib/prisma";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DownloadButton from "../../components/DownloadButton";

export default async function FilePage({ params }: { params: { slug: string } }) {
  const file = await prisma.file.findUnique({ where: { slug: params.slug } });
  if (!file || !file.isPublished) return <div className="text-center py-20">Not found</div>;

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <img src={file.thumbnail || ""} alt={file.title} className="w-full h-96 object-cover rounded-2xl mb-8" />
        <h1 className="text-4xl font-display font-bold mb-4">{file.title}</h1>
        <p className="text-neutral-300 mb-8">{file.description}</p>
        <div className="flex gap-4 mb-8 text-sm text-neutral-400">
          <span>Size: {file.fileSize}</span>
          <span>Category: {file.category}</span>
          <span>Downloads: {file.downloadCount}</span>
        </div>
        <div className="mb-8">
          <span className="text-sm text-neutral-500">Short Link:</span>
          <div className="font-mono bg-neutral-900 rounded-xl px-4 py-3 text-cheese-500">{`${process.env.NEXT_PUBLIC_SITE_URL}/d/${file.shortcode}`}</div>
        </div>
        {file.youtubeLink && (
          <a href={file.youtubeLink} target="_blank" rel="noopener noreferrer" className="btn-secondary mb-8 inline-block">YouTube</a>
        )}
        <DownloadButton fileId={file.id} fileUrl={file.fileUrl} />
      </div>
      <Footer />
    </>
  );
}
