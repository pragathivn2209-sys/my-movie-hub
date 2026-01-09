import { Star, Bell } from "lucide-react";
import { Movie } from "@/data/movies";
import { Button } from "./ui/button";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="group cursor-pointer">
      {/* Poster */}
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-3">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Rating Badge */}
        {movie.rating > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-3">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-primary fill-primary" />
              <span className="text-foreground font-semibold">{movie.rating}/10</span>
              <span className="text-muted-foreground text-sm ml-1">{movie.votes} Votes</span>
            </div>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {movie.isNowShowing ? (
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Book Now
            </Button>
          ) : (
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Bell className="h-4 w-4 mr-2" />
              Notify Me
            </Button>
          )}
        </div>
      </div>

      {/* Movie Info */}
      <div>
        <h3 className="font-semibold text-foreground mb-1 truncate group-hover:text-primary transition-colors">
          {movie.title}
        </h3>
        <div className="flex flex-wrap gap-1 mb-1">
          {movie.genres.slice(0, 2).map((genre) => (
            <span key={genre} className="text-xs text-muted-foreground">
              {genre}
            </span>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          {movie.language} • {movie.releaseDate}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
