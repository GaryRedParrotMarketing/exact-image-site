
import React from 'react';
import { Card } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

interface Story {
  id: number;
  image: string;
  category: string;
  categoryColor: string;
  title: string;
  source: string;
  sourceIcon?: string;
  comments: string;
}

const stories: Story[] = [
  {
    id: 1,
    image: "/lovable-uploads/e248afe6-1151-42e2-81fa-d8147d52f287.png",
    category: "SHORE",
    categoryColor: "bg-blue-600",
    title: "Jersey Shore Beach Safety: What Every Visitor Should Know This Summer",
    source: "NJ Coast Guard",
    sourceIcon: "/placeholder.svg",
    comments: "319"
  },
  {
    id: 2,
    image: "/placeholder.svg",
    category: "EDUCATION",
    categoryColor: "bg-green-600",
    title: "Rutgers University Announces Free Tuition Program for NJ Residents",
    source: "Education NJ",
    comments: "2.1K"
  },
  {
    id: 3,
    image: "/placeholder.svg",
    category: "SPORTS",
    categoryColor: "bg-red-600",
    title: "NJ Devils Make Historic Trade Deal for Championship Run",
    source: "NJ Sports Network",
    sourceIcon: "/placeholder.svg",
    comments: "5.9K"
  },
  {
    id: 4,
    image: "/placeholder.svg",
    category: "DINING",
    categoryColor: "bg-orange-600",
    title: "Best NJ Diners: Local Favorites That Have Stood the Test of Time",
    source: "NJ Eats",
    sourceIcon: "/placeholder.svg",
    comments: "1.2K"
  },
  {
    id: 5,
    image: "/placeholder.svg",
    category: "TECH",
    categoryColor: "bg-purple-600",
    title: "Princeton Startup Develops Revolutionary Clean Energy Solution",
    source: "TechCrunch",
    sourceIcon: "/placeholder.svg",
    comments: "854"
  }
];

const PopularStories: React.FC = () => {
  return (
    <Card className="bg-white p-4 shadow-sm">
      <h2 className="font-semibold text-base mb-4">Popular Stories</h2>
      
      <div className="space-y-4">
        {stories.map((story) => (
          <div key={story.id} className="flex gap-2 sm:gap-3 cursor-pointer hover:bg-gray-50 rounded-md transition-colors p-1">
            <div className="w-1/3 sm:w-1/3 flex-shrink-0">
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full aspect-[4/3] object-cover rounded-md" 
              />
            </div>
            <div className="w-2/3 sm:w-2/3 flex flex-col">
              <div className="mb-1">
                <span className={`${story.categoryColor} text-white text-xs px-2 py-0.5 rounded inline-block`}>
                  {story.category}
                </span>
              </div>
              <h3 className="font-medium text-xs sm:text-sm mb-2 leading-tight line-clamp-3">{story.title}</h3>
              <div className="flex items-center mt-auto text-xs text-gray-500">
                {story.sourceIcon && (
                  <div className="w-5 h-5 rounded-full bg-gray-200 mr-1 flex items-center justify-center overflow-hidden">
                    <img src={story.sourceIcon} alt={story.source} className="w-full h-full object-cover" />
                  </div>
                )}
                <span>{story.source}</span>
                {story.comments && (
                  <div className="flex items-center ml-2">
                    <MessageCircle size={12} className="mr-1" />
                    <span>{story.comments}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PopularStories;
