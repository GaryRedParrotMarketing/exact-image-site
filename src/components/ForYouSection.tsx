
import React, { useState, useEffect } from 'react';
import { GoogleNewsRSSService } from '@/services/GoogleNewsRSSService';
import { Skeleton } from '@/components/ui/skeleton';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  source: string;
  category: string;
  pubDate: string;
  image?: string;
}

const categoryColors: Record<string, string> = {
  'TRENDING NJ': 'bg-purple-600',
  'NJ BUSINESS': 'bg-green-600',
  'NJ SPORTS': 'bg-red-600',
  'SHORE': 'bg-blue-600',
  'NJ POLITICS': 'bg-purple-700',
  'NJ EDUCATION': 'bg-indigo-600',
  'NEWS': 'bg-gray-600',
  'DEFAULT': 'bg-blue-500'
};

const ForYouSection: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const newsData = await GoogleNewsRSSService.getMixedNews(8);
        
        if (newsData && newsData.length > 0) {
          setNews(newsData);
          setError(null);
        } else {
          // Fallback to NJ-focused content
          setNews([
            {
              id: '1',
              title: 'Princeton University Research Breakthrough in Clean Energy',
              description: 'Researchers at Princeton develop new solar panel technology.',
              source: 'Princeton Today',
              category: 'NJ EDUCATION',
              pubDate: new Date().toISOString(),
              image: '/placeholder.svg'
            },
            {
              id: '2',
              title: 'Jersey City Waterfront Development Progresses',
              description: 'New mixed-use development brings jobs and housing to Jersey City.',
              source: 'Hudson County News',
              category: 'NJ BUSINESS', 
              pubDate: new Date(Date.now() - 3600000).toISOString(),
              image: '/placeholder.svg'
            },
            {
              id: '3',
              title: 'Rutgers Football Prepares for Bowl Season',
              description: 'Scarlet Knights look ahead to postseason opportunities.',
              source: 'NJ Sports Network',
              category: 'NJ SPORTS',
              pubDate: new Date(Date.now() - 7200000).toISOString(), 
              image: '/placeholder.svg'
            }
          ]);
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to load news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const getCategoryColor = (category: string): string => {
    return categoryColors[category] || categoryColors.DEFAULT;
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h2 className="font-semibold text-base mb-4">For You</h2>
        <div className="space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-2 sm:gap-3">
              <Skeleton className="w-1/3 aspect-[4/3] rounded-md" />
              <div className="w-2/3 space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h2 className="font-semibold text-base mb-4">For You</h2>
        <div className="text-center py-8 text-gray-500">
          <p className="text-sm">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="text-xs text-blue-600 hover:underline mt-2"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
      <h2 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">For You</h2>
      
      <div className="space-y-4 sm:space-y-6">
        {news.map((item) => (
          <div key={item.id} className="flex gap-2 sm:gap-3 cursor-pointer hover:bg-gray-50 rounded-md transition-colors p-1">
            <div className="w-1/3 flex-shrink-0">
              <img 
                src={item.image || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop"} 
                alt={item.title} 
                className="w-full aspect-[4/3] object-cover rounded-md" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop";
                }}
              />
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="mb-1 sm:mb-1.5">
                <span className={`${getCategoryColor(item.category)} text-white text-xs px-1.5 sm:px-2 py-0.5 rounded inline-block`}>
                  {item.category}
                </span>
              </div>
              <h3 className="font-bold text-xs sm:text-sm lg:text-[15px] mb-1 sm:mb-2 leading-tight line-clamp-2 sm:line-clamp-3">{item.title}</h3>
              <div className="flex items-center mt-auto text-xs text-gray-500">
                <span className="truncate max-w-16 sm:max-w-none">{item.source}</span>
                <span className="mx-1">•</span>
                <span className="whitespace-nowrap">{GoogleNewsRSSService.formatTimeAgo(item.pubDate)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForYouSection;
