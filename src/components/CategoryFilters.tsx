import { useState } from "react";
import { categories } from "@/data/movies";

const CategoryFilters = () => {
  const [activeCategory, setActiveCategory] = useState("movies");

  return (
    <section className="py-6 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 border border-border"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilters;
