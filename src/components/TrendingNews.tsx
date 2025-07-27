
import React, { useState, useEffect } from 'react';
import { GoogleNewsRSSService } from '@/services/GoogleNewsRSSService';
import { Skeleton } from '@/components/ui/skeleton';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  source: string;
  pubDate: string;
  image?: string;
}

const TrendingNews: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const newsData = await GoogleNewsRSSService.getTrendingNews(5);
        setNews(newsData);
        setError(null);
      } catch (err) {
        console.error('Error fetching trending news:', err);
        setError('Failed to load news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <h2 className="font-semibold text-base">Trending</h2>
          <span className="text-xs text-gray-500">Refresh</span>
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-100" />
              <div className="flex-1">
                <div className="flex gap-3">
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-3 w-3/4" />
                  </div>
                  <Skeleton className="w-16 h-16 rounded-md" />
                </div>
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
        <div className="flex items-center gap-2 mb-3">
          <h2 className="font-semibold text-base">Trending</h2>
          <span className="text-xs text-gray-500">Refresh</span>
        </div>
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
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <h2 className="font-semibold text-base">Trending</h2>
        <span className="text-xs text-gray-500">Live from Google News</span>
      </div>
      
      <div className="space-y-4">
        {news.map((item, index) => (
          <div key={item.id} className="news-item">
            <div className="news-item-number">{index + 1}</div>
            <div className="flex-1">
              <div className="flex">
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-left line-clamp-2">{item.title}</h3>
                  <p className="text-xs text-left text-gray-700 line-clamp-2 mt-1">{item.description}</p>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <span>{item.source}</span>
                    <span className="mx-1">•</span>
                    <span>{GoogleNewsRSSService.formatTimeAgo(item.pubDate)}</span>
                  </div>
                </div>
                <div className="ml-3">
                  <img 
                    src={item.image || "/placeholder.svg"} 
                    alt={item.title} 
                    className="w-16 h-16 object-cover rounded-md" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
