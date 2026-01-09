import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CategoryFilters from "@/components/CategoryFilters";
import MovieSection from "@/components/MovieSection";
import Footer from "@/components/Footer";
import { movies } from "@/data/movies";

const Index = () => {
  const nowShowingMovies = movies.filter((movie) => movie.isNowShowing);
  const comingSoonMovies = movies.filter((movie) => !movie.isNowShowing);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <CategoryFilters />
      <MovieSection title="Now Showing" movies={nowShowingMovies} />
      <MovieSection title="Coming Soon" movies={comingSoonMovies} />
      <Footer />
    </div>
  );
};

export default Index;
