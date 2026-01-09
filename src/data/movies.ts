export interface Movie {
  id: string;
  title: string;
  poster: string;
  genres: string[];
  rating: number;
  votes: string;
  releaseDate: string;
  language: string;
  isNowShowing: boolean;
  isFeatured?: boolean;
  description?: string;
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "Pushpa 2: The Rule",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop",
    genres: ["Action", "Drama"],
    rating: 8.5,
    votes: "125K",
    releaseDate: "Dec 6, 2024",
    language: "Telugu",
    isNowShowing: true,
    isFeatured: true,
    description: "The continuation of Pushpa's journey as he rises to power."
  },
  {
    id: "2",
    title: "Mufasa: The Lion King",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=450&fit=crop",
    genres: ["Animation", "Adventure"],
    rating: 8.2,
    votes: "89K",
    releaseDate: "Dec 20, 2024",
    language: "English",
    isNowShowing: true,
    isFeatured: true,
    description: "Discover the rise of the future king of the Pride Lands."
  },
  {
    id: "3",
    title: "Baby John",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop",
    genres: ["Action", "Thriller"],
    rating: 7.8,
    votes: "45K",
    releaseDate: "Dec 25, 2024",
    language: "Hindi",
    isNowShowing: true,
    isFeatured: true,
    description: "A gripping action thriller that will keep you on the edge."
  },
  {
    id: "4",
    title: "Marco",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    genres: ["Action", "Crime"],
    rating: 8.0,
    votes: "67K",
    releaseDate: "Dec 20, 2024",
    language: "Malayalam",
    isNowShowing: true,
    isFeatured: true,
    description: "A tale of revenge and redemption in the underworld."
  },
  {
    id: "5",
    title: "Viduthalai Part 2",
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=300&h=450&fit=crop",
    genres: ["Drama", "Thriller"],
    rating: 8.7,
    votes: "78K",
    releaseDate: "Dec 20, 2024",
    language: "Tamil",
    isNowShowing: true,
    description: "The epic conclusion to the revolutionary saga."
  },
  {
    id: "6",
    title: "Moana 2",
    poster: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=300&h=450&fit=crop",
    genres: ["Animation", "Musical"],
    rating: 7.9,
    votes: "56K",
    releaseDate: "Nov 29, 2024",
    language: "English",
    isNowShowing: true,
    description: "Moana embarks on a new adventure across the seas."
  },
  {
    id: "7",
    title: "Kraven The Hunter",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop",
    genres: ["Action", "Superhero"],
    rating: 6.5,
    votes: "34K",
    releaseDate: "Dec 13, 2024",
    language: "English",
    isNowShowing: true,
    description: "The origin story of Marvel's most notorious villain."
  },
  {
    id: "8",
    title: "Singham Again",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
    genres: ["Action", "Drama"],
    rating: 7.4,
    votes: "92K",
    releaseDate: "Nov 1, 2024",
    language: "Hindi",
    isNowShowing: true,
    description: "Bajirao Singham returns for another action-packed adventure."
  },
  {
    id: "9",
    title: "Avatar 3",
    poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&h=450&fit=crop",
    genres: ["Sci-Fi", "Adventure"],
    rating: 0,
    votes: "0",
    releaseDate: "Dec 2025",
    language: "English",
    isNowShowing: false,
    description: "The next chapter in the Avatar saga."
  },
  {
    id: "10",
    title: "Mission Impossible 8",
    poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300&h=450&fit=crop",
    genres: ["Action", "Thriller"],
    rating: 0,
    votes: "0",
    releaseDate: "May 2025",
    language: "English",
    isNowShowing: false,
    description: "Ethan Hunt faces his most impossible mission yet."
  },
  {
    id: "11",
    title: "Thunderbolts",
    poster: "https://images.unsplash.com/photo-1618945524163-32451704cbb8?w=300&h=450&fit=crop",
    genres: ["Action", "Superhero"],
    rating: 0,
    votes: "0",
    releaseDate: "May 2025",
    language: "English",
    isNowShowing: false,
    description: "A team of antiheroes assembles for a dangerous mission."
  },
  {
    id: "12",
    title: "Dhoom 4",
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300&h=450&fit=crop",
    genres: ["Action", "Thriller"],
    rating: 0,
    votes: "0",
    releaseDate: "2025",
    language: "Hindi",
    isNowShowing: false,
    description: "The high-octane heist franchise returns."
  }
];

export const categories = [
  { id: "movies", label: "Movies", icon: "🎬" },
  { id: "events", label: "Events", icon: "🎤" },
  { id: "sports", label: "Sports", icon: "⚽" },
  { id: "plays", label: "Plays", icon: "🎭" },
  { id: "activities", label: "Activities", icon: "🎯" },
];
