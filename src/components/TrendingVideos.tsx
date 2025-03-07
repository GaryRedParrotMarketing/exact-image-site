
import React from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const videoItems = [
  {
    id: 1,
    thumbnail: "/placeholder.svg",
    title: "Residents return home after South Carolina wildfires",
    duration: "0:41"
  },
  {
    id: 2,
    thumbnail: "/placeholder.svg",
    title: "Highlights from Oscars monologue",
    duration: "2:12"
  }
];

const TrendingVideos: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h2 className="font-semibold text-base mb-4">Trending Videos</h2>
      
      <div className="relative">
        <div className="mb-4">
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Oscar audience" 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center">
                <Play fill="white" size={24} className="text-white ml-1" />
              </div>
            </div>
            <div className="absolute top-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
              Clip Courtesy
            </div>
            <div className="absolute top-6 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
              A.M.P.A.S.® 2025
            </div>
            <div className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
              LIVE
            </div>
            <div className="absolute bottom-2 left-2">
              <img src="/placeholder.svg" alt="ET" className="w-10 h-10 bg-yellow-400 p-1" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="font-medium text-sm mb-2">Up Next</div>
          <div className="grid grid-cols-2 gap-4">
            {videoItems.map((video) => (
              <div key={video.id} className="flex gap-2">
                <div className="relative w-24 h-16 flex-shrink-0">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover rounded"
                  />
                  <div className="absolute bottom-1 right-1 bg-black/70 px-1 text-xs text-white rounded">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 bg-black/30 rounded-full flex items-center justify-center">
                      <Play fill="white" size={12} className="text-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium line-clamp-2">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute -bottom-4 right-0 flex space-x-2">
          <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center border border-gray-200">
            <ChevronLeft size={16} />
          </button>
          <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center border border-gray-200">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingVideos;
