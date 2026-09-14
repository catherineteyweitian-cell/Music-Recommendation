type ArtistPageProps = {
  params: Promise<{
    artist: string;
  }>;
};

export default async function ArtistPage({
  params,
}: ArtistPageProps) {
  const { artist } = await params;

  const artistName = decodeURIComponent(artist);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-gray-400">
          Artist
        </p>

        <h1 className="mt-2 text-5xl font-bold">
          {artistName}
        </h1>

        <p className="mt-6 text-gray-400">
          This is the artist detail page.
        </p>
      </div>
    </main>
  );
}