
import React from 'react';

const trendingNews = [
  {
    id: 1,
    title: "Aurora",
    subtitle: "What is Aurora about? Everything you need to know about the Oscar winner",
    imageSrc: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Sema Hakeem",
    subtitle: "Sema Hakeem's death: Which investigation stands, which didn't?",
    imageSrc: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Pope Francis",
    subtitle: "Pope Francis health update: Diagnosed with influenza, respiratory insufficiency, Vatican says",
    imageSrc: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Adam Sandler",
    subtitle: "Adam Sandler 'Crashes Oscars Watch Party' - 'Making Mrs. Yolk Christmas' in theaters later",
    imageSrc: "/placeholder.svg"
  },
  {
    id: 5,
    title: "South Carolina Fires",
    subtitle: "Emergency declared in North and South Carolina as wildfire force evacuations",
    imageSrc: "/placeholder.svg"
  }
];

const TrendingNews: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <h2 className="font-semibold text-base">Trending</h2>
        <span className="text-xs text-gray-500">Refresh</span>
      </div>
      
      <div className="space-y-4">
        {trendingNews.map((item) => (
          <div key={item.id} className="news-item">
            <div className="news-item-number">{item.id}</div>
            <div className="flex-1">
              <div className="flex">
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-left">{item.title}</h3>
                  <p className="text-xs text-left text-gray-700">{item.subtitle}</p>
                </div>
                <div className="ml-3">
                  <img 
                    src={item.imageSrc} 
                    alt={item.title} 
                    className="w-16 h-16 object-cover rounded-md" 
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
