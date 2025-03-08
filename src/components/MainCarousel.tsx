
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarouselItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

const items: CarouselItem[] = [
  {
    id: 1,
    title: 'AFRO News Celebrates 128 Years of African-American Journalism',
    image: '/lovable-uploads/32c2eb19-f992-4ece-ae2d-2ce38042cba9.png',
    category: 'HISTORY'
  },
  {
    id: 2,
    title: 'The Atlanta Voice Expands Digital Distribution Across Georgia',
    image: '/lovable-uploads/52b1ec67-e180-4c9a-b6da-e9003cdb123c.png',
    category: 'TECHNOLOGY'
  },
  {
    id: 3,
    title: 'Dallas Weekly Recognized for Excellence in Community Journalism',
    image: '/lovable-uploads/d57c93af-93b6-4723-8930-e20ef9f24310.png',
    category: 'AWARDS'
  }
];

const MainCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent(current === items.length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    setCurrent(current === 0 ? items.length - 1 : current - 1);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setTimeout(() => {
      next();
    }, 5000);

    return () => clearTimeout(timer);
  }, [current, autoplay]);

  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "absolute top-0 left-0 w-full h-full transition-opacity duration-500",
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <img
            src={item.image}
            alt={item.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
            <span className="text-xs font-semibold text-white bg-yahoo-purple px-2 py-1 rounded">
              {item.category}
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-2">
              {item.title}
            </h2>
          </div>
        </div>
      ))}

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75"
        onClick={prev}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75"
        onClick={next}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={cn(
              "carousel-dot",
              index === current && "active"
            )}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainCarousel;
