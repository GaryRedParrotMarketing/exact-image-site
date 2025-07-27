
import React from 'react';

const trendingNews = [
  {
    id: 1,
    title: "Governor Murphy",
    subtitle: "NJ Governor announces new clean energy initiatives for 2024",
    imageSrc: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Jersey Shore",
    subtitle: "Best beach towns in New Jersey ranked by visitors this summer",
    imageSrc: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Newark Airport",
    subtitle: "EWR expansion project enters final phase, adding new international terminal",
    imageSrc: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Atlantic City",
    subtitle: "New boardwalk attractions bring record tourism numbers to AC",
    imageSrc: "/placeholder.svg"
  },
  {
    id: 5,
    title: "NJ Transit",
    subtitle: "Major rail service improvements announced for North Jersey commuters",
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
