
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GoogleNewsRSSService } from '@/services/GoogleNewsRSSService';
import { Skeleton } from '@/components/ui/skeleton';

interface CarouselItem {
  id: string;
  title: string;
  image?: string;
  category: string;
  link: string;
  description: string;
}

const MainCarousel: React.FC = () => {
  const [items, setItems] = useState<CarouselItem[]>([]);
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarouselNews = async () => {
      try {
        setLoading(true);
        const newsData = await GoogleNewsRSSService.getGeneralNews(3);
        const carouselItems = newsData.map(item => ({
          id: item.id,
          title: item.title,
          image: item.image || '/lovable-uploads/32c2eb19-f992-4ece-ae2d-2ce38042cba9.png',
          category: item.category,
          link: item.link,
          description: item.description
        }));
        setItems(carouselItems);
      } catch (error) {
        console.error('Error fetching carousel news:', error);
        // Fallback to default items
        setItems([
          {
            id: '1',
            title: 'Atlantic City Boardwalk Renovation Project Enters Final Phase',
            image: '/lovable-uploads/32c2eb19-f992-4ece-ae2d-2ce38042cba9.png',
            category: 'DEVELOPMENT',
            link: '#',
            description: 'Major infrastructure improvements coming to AC boardwalk'
          },
          {
            id: '2',
            title: 'Newark Tech Hub Attracts Major Companies to New Jersey',
            image: '/lovable-uploads/52b1ec67-e180-4c9a-b6da-e9003cdb123c.png',
            category: 'TECHNOLOGY',
            link: '#',
            description: 'Tech companies choosing NJ for their headquarters'
          },
          {
            id: '3',
            title: 'Jersey Shore Tourism Breaks Records This Summer',
            image: '/lovable-uploads/d57c93af-93b6-4723-8930-e20ef9f24310.png',
            category: 'TOURISM',
            link: '#',
            description: 'Record-breaking visitor numbers at NJ beaches'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCarouselNews();
  }, []);

  const next = () => {
    setCurrent(current === items.length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    setCurrent(current === 0 ? items.length - 1 : current - 1);
  };

  useEffect(() => {
    if (!autoplay || items.length === 0) return;
    
    const timer = setTimeout(() => {
      next();
    }, 5000);

    return () => clearTimeout(timer);
  }, [current, autoplay, items.length]);

  if (loading) {
    return (
      <div className="relative h-[250px] md:h-[400px] rounded-lg overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="relative h-[250px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Unable to load news</p>
      </div>
    );
  }

  return (
    <div className="relative h-[250px] md:h-[400px] rounded-lg overflow-hidden">
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
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/lovable-uploads/32c2eb19-f992-4ece-ae2d-2ce38042cba9.png';
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-gradient-to-t from-black to-transparent">
            <span className="text-xs font-semibold text-white bg-yahoo-purple px-2 py-1 rounded">
              {item.category}
            </span>
            <h2 className="text-base md:text-xl lg:text-2xl font-bold text-white mt-2 leading-tight">
              {item.title}
            </h2>
            <p className="text-sm text-white/90 mt-1 line-clamp-2 hidden md:block">
              {item.description}
            </p>
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
