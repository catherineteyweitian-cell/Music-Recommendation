import Link from "next/link";
import { artists } from "@/app/data/artists";
import Image from "next/image";

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

  const artistData = artists.find(
    (item) => item.name.toLowerCase() === artistName.toLowerCase()
  );

  if (!artistData) {
    return (
      <main className="min-h-screen bg-gray-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-bold">
            Artist not found
          </h1>

          <Link
            href="/"
            className="mt-6 inline-block text-blue-400 hover:text-blue-300"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white">

    {/* Artist Header */}
    <section className="relative h-[500px] w-full overflow-hidden">
            <Image
                src = {artistData.image}
                alt = {artistData.name}
                fill
                className="object-cover"
                priority
            />

        {/*Make the image darker with a gradient overlay*/}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-black/30 to-transparent" />  
        
        {/*Back button*/}
        <div className="absolute left-6 top-6 z-10">
            <Link
                href="/"
                className="text-gray-300 hover:text-white"
            >
                ← Back
            </Link>
        </div>

        {/*Artist Info*/}
        <div className="absolute bottom-0 left-0 z-10 p-10">
                {artistData.verified && (
                    <p className="text-sm font-semibold text-white">
                        ✔ Verified Artist
                    </p>
                )}

              <h1 className="mt-2 text-6xl font-bold">
                {artistData.name}
              </h1>

              <p className="mt-3 text-gray-300">
                {artistData.genre}
              </p>
        </div>
    </section>


      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-6 py-10">

        {/* Popular Songs */}
        <section>

          <h2 className="text-3xl font-bold">
            Popular
          </h2>

          <div className="mt-6">

            {artistData.popularSongs.map((song, index) => (
            <div
                key={song.title}
                className="flex items-center gap-5 rounded-lg px-4 py-3 hover:bg-gray-800"
            >

                <span className="w-6 text-gray-400">
                  {index + 1}
                </span>

                <div className="flex-1">
                  <h3 className="font-semibold">
                    {song.title}
                  </h3>
                  
                  <p className="w-30 text-left text-gray-300">
                    {song.album}
                </p>
                </div>

                <p className="w-12 text-right text-gray-400">
                    {song.duration}
                </p>
            </div>
            ))}
          </div>
        </section>


        {/* Albums */}
        <section className="mt-16">

          <h2 className="text-3xl font-bold">
            Albums
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">

            {artistData.albums.map((album) => (
              <div
                key={album.name}
                className="cursor-pointer rounded-xl bg-gray-900 p-4 transition hover:bg-gray-800"
              >

                <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                        src={album.image}
                        alt={album.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <h3 className="mt-4 font-semibold">
                  {album.name}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  Album · {album.year}
                </p>

              </div>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}