"use client";

import { useState } from "react";
import Link from "next/link";

const artists = [
  {name: "Justin Bieber", genre: "Pop / R&B", description:"Justin Bieber is a Canadian singer and songwriter known for his pop and R&B-influenced sound, he has become one of the most successful and influential artists of his generation.",},
  {name: "Dua Lipa", genre: "Pop", description:"Dua Lipa is an English singer and songwriter known for her modern pop sound and dance-pop music.",},
  {name: "Taylor Swift", genre: "Pop", description:"Taylor Swift is an American singer-songwriter known for her storytelling, songwriting and evolution across multiple music genres.",},
  {name: "BLACKPINK", genre: "K-Pop", description:"BLACKPINK is a South Korean girl group known for their music combining K-Pop, pop, hip-hop and electronic sounds.",},
  {name: "TWICE",genre: "K-Pop", description:"TWICE is a South Korean girl group known for their energetic performances and catchy K-Pop songs.",},
  {name: "keshi", genre: "R&B", description:"keshi is an American singer, songwriter and producer known for his atmospheric R&B and alternative music.",},
  {name: "21 Savage", genre: "Hip-Hop", description:"21 Savage is a British-American rapper known for his distinctive flow and modern hip-hop sound.",},
  {name: "Drake", genre: "Hip-Hop / R&B", description:"Drake is a Canadian rapper, singer and songwriter known for blending hip-hop and R&B.",},
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">

        {/* Header Section */}
        <h1 className="text-5xl font-bold"> 
          Music Recommendation
        </h1>

        <p className="mt-4 text-gray-400">
          Discover artists and explore their music.
        </p>

        {/* Search Section */}
        <div className="mt-10 flex gap-3"> 
          <input
            type="text"
            placeholder="Search for an artist..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-lg bg-gray-800 px-4 py-3 outline-none"
          />

          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Artist Section */}
        <section className="mt-16">  
          <h2 className="text-2xl font-semibold">
            Artists
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArtists.map((artist) => (
              <Link
                key={artist.name}
                href={`/artists/${encodeURIComponent(artist.name)}`}  //Clicking on an artist will take you to their individual page
                className="cursor-pointer rounded-xl bg-gray-800 p-6 transition hover:bg-gray-700"
              >
                <h3 className="text-2xl font-semibold">
                  {artist.name}
                </h3>

                <p className="mt-2 text-blue-400">
                  {artist.genre}
                </p>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  {artist.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}