import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { movies } from "@/data/movies";

const HeroBanner = () => {
  const featuredMovies = movies.filter((movie) => movie.isFeatured);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredMovies.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
  };

  const currentMovie = featuredMovies[currentIndex];

  return (
    <section className="relative h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden bg-gradient-to-b from-background to-muted">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${currentMovie.poster})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-500">
            {currentMovie.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {currentMovie.genres.map((genre) => (
              <span
                key={genre}
                className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-full border border-border"
              >
                {genre}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground mb-6 hidden md:block">
            {currentMovie.description}
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
            Book Now
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 text-foreground"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 text-foreground"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
