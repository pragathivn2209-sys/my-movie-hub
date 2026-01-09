import { ChevronRight } from "lucide-react";
import { Movie } from "@/data/movies";
import MovieCard from "./MovieCard";
import { Button } from "./ui/button";

interface MovieSectionProps {
  title: string;
  movies: Movie[];
  showSeeAll?: boolean;
}

const MovieSection = ({ title, movies, showSeeAll = true }: MovieSectionProps) => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">{title}</h2>
          {showSeeAll && (
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              See All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          )}
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieSection;
