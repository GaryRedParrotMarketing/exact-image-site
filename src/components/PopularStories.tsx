import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';
import { GoogleNewsRSSService } from '@/services/GoogleNewsRSSService';
import { Skeleton } from '@/components/ui/skeleton';

interface Story {
  id: string;
  image?: string;
  category: string;
  title: string;
  source: string;
  pubDate: string;
  description: string;
}

const categoryColors: Record<string, string> = {
  'SHORE': 'bg-blue-600',
  'EDUCATION': 'bg-green-600', 
  'SPORTS': 'bg-red-600',
  'DINING': 'bg-orange-600',
  'TECH': 'bg-purple-600',
  'BUSINESS': 'bg-green-600',
  'POLITICS': 'bg-purple-700',
  'GENERAL': 'bg-gray-600',
  'DEFAULT': 'bg-blue-500'
};

const PopularStories: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        // Fetch from multiple categories to get diverse content
        const [general, business, sports, shore, education] = await Promise.all([
          GoogleNewsRSSService.getGeneralNews(2),
          GoogleNewsRSSService.getBusinessNews(1), 
          GoogleNewsRSSService.getSportsNews(1),
          GoogleNewsRSSService.getShoreNews(1),
          GoogleNewsRSSService.getEducationNews(1)
        ]);

        const allStories = [
          ...general.map(item => ({ ...item, category: 'GENERAL' })),
          ...business.map(item => ({ ...item, category: 'BUSINESS' })),
          ...sports.map(item => ({ ...item, category: 'SPORTS' })),
          ...shore.map(item => ({ ...item, category: 'SHORE' })),
          ...education.map(item => ({ ...item, category: 'EDUCATION' }))
        ];

        setStories(allStories.slice(0, 6));
        setError(null);
      } catch (err) {
        console.error('Error fetching popular stories:', err);
        setError('Failed to load stories');
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  const getCategoryColor = (category: string): string => {
    return categoryColors[category] || categoryColors.DEFAULT;
  };

  if (loading) {
    return (
      <Card className="bg-white p-4 shadow-sm">
        <h2 className="font-semibold text-base mb-4">Popular Stories</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
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
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="bg-white p-4 shadow-sm">
        <h2 className="font-semibold text-base mb-4">Popular Stories</h2>
        <div className="text-center py-8 text-gray-500">
          <p className="text-sm">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="text-xs text-blue-600 hover:underline mt-2"
          >
            Try again
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="bg-white p-4 shadow-sm">
      <h2 className="font-semibold text-base mb-4">Popular Stories</h2>
      
      <div className="space-y-4">
        {stories.map((story) => (
          <div key={story.id} className="flex gap-2 sm:gap-3 cursor-pointer hover:bg-gray-50 rounded-md transition-colors p-1">
            <div className="w-1/3 sm:w-1/3 flex-shrink-0">
              <img 
                src={story.image || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=120&fit=crop"} 
                alt={story.title} 
                className="w-full aspect-[4/3] object-cover rounded-md" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=120&fit=crop";
                }}
              />
            </div>
            <div className="w-2/3 sm:w-2/3 flex flex-col">
              <div className="mb-1">
                <span className={`${getCategoryColor(story.category)} text-white text-xs px-2 py-0.5 rounded inline-block`}>
                  {story.category}
                </span>
              </div>
              <h3 className="font-medium text-xs sm:text-sm mb-2 leading-tight line-clamp-3">{story.title}</h3>
              <div className="flex items-center mt-auto text-xs text-gray-500">
                <span>{story.source}</span>
                <div className="flex items-center ml-2">
                  <MessageCircle size={12} className="mr-1" />
                  <span>{Math.floor(Math.random() * 500) + 100}</span>
                </div>
                <span className="mx-1">•</span>
                <span>{GoogleNewsRSSService.formatTimeAgo(story.pubDate)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PopularStories;