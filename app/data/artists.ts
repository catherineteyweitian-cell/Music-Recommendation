type Song = { 
    title: string; 
    album: string; 
    duration: string 
};
type Album = {
    name: string;
    image: string; 
    year: number 
};
type Artist = { 
    name: string;
    image: string;
    genre: string;
    verified: boolean;
    popularSongs: Song[];
    albums: Album[] 
};

export const artists: Artist[] = [
  {name: "Justin Bieber",image: "/images/justin-bieber.jpg",genre: "Pop / R&B",verified: true,
    popularSongs: [
      {title: "Baby", album: "My World 2.0", duration: "3:36"},
      {title: "Sorry", album: "Purpose", duration: "3:20" },
      {title: "Love Yourself", album: "Purpose", duration: "3:53" },
      {title: "Peaches", album: "Justice", duration: "3:18" },
      {title: "Intentions", album: "Changes", duration: "3:32" }
    ],
    albums: [
      {name: "My World 2.0", image: "/images/justin-bieber-my-world-2.0.jpg", year: 2010 },
      {name: "Purpose", image: "/images/justin-bieber-purpose.jpg", year: 2015 },
      {name: "Changes", image: "/images/justin-bieber-changes.jpg", year: 2020 },
      {name: "Justice", image: "/images/justin-bieber-justice.jpg", year: 2021 }
    ]
  },

  {name: "Dua Lipa",image: "/images/dua-lipa.jpg",genre: "Pop",verified: true,
    popularSongs: [
      {title: "Levitating", album: "Future Nostalgia", duration: "3:23" },
      {title: "Don't Start Now", album: "Future Nostalgia", duration: "3:03" },
      {title: "New Rules", album: "Dua Lipa", duration: "3:29" },
      {title: "Physical", album: "Future Nostalgia", duration: "3:13" },
      {title: "Break My Heart", album: "Future Nostalgia", duration: "3:41" }
    ],
    albums: [
      {name: "Dua Lipa", image: "/images/dua-lipa-dualipa.jpg", year: 2017 },
      {name: "Future Nostalgia", image: "/images/dua-lipa-future-nostalgia.jpg", year: 2020 },
      {name: "Holdini", image: "/images/dua-lipa-holdini.jpg", year: 2023},
      {name: "Radical Optimism", image: "/images/dua-lipa-radical-optimism.jpg", year: 2024 }
    ]
  },

  {name: "Taylor Swift",image: "/images/taylor-swift.jpg",genre: "Pop",verified: true,
    popularSongs: [
      {title: "Anti-Hero", album: "Midnights", duration: "3:20" },
      {title: "Blank Space", album: "1989", duration: "3:51" },
      {title: "Love Story", album: "Fearless", duration: "3:55" },
      {title: "You Belong With Me", album: "Fearless", duration: "3:51" },
      {title: "Shake It Off", album: "1989", duration: "3:39" }
    ],
    albums: [
      {name: "Fearless", image: "/images/taylor-swift-fearless.jpg", year: 2008 },
      {name: "1989", image: "/images/taylor-swift-1989.jpg", year: 2014 },
      {name: "Reputation", image: "/images/taylor-swift-reputation.jpg", year: 2017 },
      {name: "Lover", image: "/images/taylor-swift-lover.jpg", year: 2019 },
      {name: "Midnights", image: "/images/taylor-swift-midnights.jpg", year: 2022 }
    ]
  },

  {name: "BLACKPINK",image: "/images/blackpink.jpg",genre: "K-Pop",verified: true,
    popularSongs: [
      {title: "How You Like That", album: "The Album", duration: "3:01" },
      {title: "Kill This Love", album: "Kill This Love", duration: "3:10" },
      {title: "DDU-DU DDU-DU", album: "Square Up", duration: "3:29" },
      {title: "BOOMBAYAH", album: "Square One", duration: "4:00" },
      {title: "As If It's Your Last", album: "Square Two", duration: "3:31" }
    ],
    albums: [
      {name: "Square One", image: "/images/blackpink-square-one.jpg", year: 2016 },
      {name: "Square Two", image: "/images/blackpink-square-two.jpg", year: 2016 },
      {name: "Square Up", image: "/images/blackpink-square-up.jpg", year: 2018 },
      {name: "The Album", image: "/images/blackpink-the-album.jpg", year: 2020 },
      {name: "Born Pink", image: "/images/blackpink-born-pink.jpg", year: 2022 }
    ]
  },

  {name: "TWICE",image: "/images/twice.jpg",genre: "K-Pop",verified: true,
    popularSongs: [
      {title: "Fancy", album: "Fancy You", duration: "3:35" },
      {title: "TT", album: "Twicecoaster: Lane 1", duration: "3:35" },
      {title: "Cheer Up", album: "Page Two", duration: "3:30" },
      {title: "Likey", album: "Twicecoaster: Lane 2", duration: "3:30" },
      {title: "What Is Love?", album: "What Is Love?", duration: "3:30" }
    ],
    albums: [
      {name: "The Story Begins", image: "/images/twice-story.jpg", year: 2015 },
      {name: "Page Two", image: "/images/twice-page-two.jpg", year: 2016 },
      {name: "Twicecoaster: Lane 1", image: "/images/twice-lane1.jpg", year: 2016 },
      {name: "Twicecoaster: Lane 2", image: "/images/twice-lane2.jpg", year: 2017 },
      {name: "Formula of Love", image: "/images/twice-formula-of-love.jpg", year: 2021 }
    ]
  },

  {name: "keshi",image: "/images/keshi.jpg",genre: "R&B",verified: true,
    popularSongs: [
      {title: "right here", album: "bandaids", duration: "3:30" },
      {title: "2 soon", album: "bandaids", duration: "3:30" },
      {title: "like i need u", album: "bandaids", duration: "3:30" },
      {title: "drunk", album: "bandaids", duration: "3:30" },
      {title: "LIMBO", album: "GABRIEL", duration: "3:32" }
    ],
    albums: [
      {name: "WANTCHU", image: "/images/keshi-wantchu.jpg", year: 2025 },
      {name: "skeletons", image: "/images/keshi-skeletons.jpg", year: 2019 },
      {name: "GABRIEL", image: "/images/keshi-gabriel.jpg", year: 2022 },
      {name: "Requiem", image: "/images/keshi-requiem.jpg", year: 2024 }
    ]
  },

  {name: "Drake",image: "/images/drake.jpg",genre: "Hip-Hop / R&B",verified: true,
    popularSongs: [
      {title: "God's Plan", album: "Scorpion", duration: "3:19" },
      {title: "In My Feelings", album: "Scorpion", duration: "3:37" },
      {title: "One Dance", album: "Views", duration: "2:54" },
      {title: "Hotline Bling", album: "Views", duration: "4:27" }
    ],
    albums: [
      {name: "ICEMAN", image: "/images/drake-iceman.jpg", year: 2026 },
      {name: "Certified Lover Boy", image: "/images/drake-certified-lover-boy.jpg", year: 2021 },
      {name: "Scorpion", image: "/images/drake-scorpion.jpg", year: 2018 },
      {name: "For All the Dogs", image: "/images/drake-for-all-the-dogs.jpg", year: 2023 }
    ]
  }
];