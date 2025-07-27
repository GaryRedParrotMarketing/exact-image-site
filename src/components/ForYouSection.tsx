
import React from 'react';

const newsItems = [
  {
    id: 1,
    category: "TRENDING NJ",
    categoryColor: "bg-purple-600",
    title: "Camden Waterfront Development Brings 5,000 New Jobs to South Jersey",
    image: "/lovable-uploads/d57c93af-93b6-4723-8930-e20ef9f24310.png",
    source: "NJ.com",
    comments: "5.9K",
    sourceIcon: "/placeholder.svg"
  },
  {
    id: 2,
    category: "SHORE LIFE",
    categoryColor: "bg-blue-500",
    title: "Why These NJ Beach Towns Are Perfect for Year-Round Living",
    image: "/placeholder.svg",
    source: "Shore Guide",
    comments: "929",
    sourceIcon: null
  },
  {
    id: 3,
    category: "NJ POLITICS",
    categoryColor: "bg-purple-700",
    title: "Governor Murphy Signs Historic Climate Bill for New Jersey",
    image: "/placeholder.svg",
    source: "Politico NJ",
    comments: "4.3K",
    sourceIcon: "/placeholder.svg"
  },
  {
    id: 4,
    category: "NJ BUSINESS",
    categoryColor: "bg-green-600",
    title: "Jersey City Startup Ecosystem Grows 40% This Year",
    image: "/placeholder.svg",
    source: "NJ Business",
    comments: "499",
    sourceIcon: "/placeholder.svg"
  }
];

const ForYouSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h2 className="font-semibold text-base mb-4">For You</h2>
      
      <div className="space-y-6">
        {newsItems.map((item) => (
          <div key={item.id} className="flex gap-2 sm:gap-3 cursor-pointer hover:bg-gray-50 rounded-md transition-colors p-1">
            <div className="w-1/3 sm:w-1/3 flex-shrink-0">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full aspect-[4/3] object-cover rounded-md" 
              />
            </div>
            <div className="w-2/3 sm:w-2/3 flex flex-col">
              <div className="mb-1">
                <span className={`${item.categoryColor} text-white text-xs px-2 py-0.5 rounded inline-block`}>
                  {item.category}
                </span>
              </div>
              <h3 className="font-bold text-sm sm:text-[15px] mb-2 leading-tight">{item.title}</h3>
              <div className="flex items-center mt-auto text-xs text-gray-500">
                {item.sourceIcon ? (
                  <div className="w-5 h-5 rounded-full bg-gray-200 mr-1 flex items-center justify-center overflow-hidden">
                    <img src={item.sourceIcon} alt={item.source} className="w-full h-full object-cover" />
                  </div>
                ) : null}
                <span>{item.source}</span>
                {item.comments && (
                  <>
                    <span className="mx-1">•</span>
                    <span>{item.comments}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForYouSection;
