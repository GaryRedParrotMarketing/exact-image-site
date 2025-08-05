
import React from 'react';

const deals = [
  {
    id: 1,
    title: "Jersey Shore Beach Pass - Season Access",
    price: "$35",
    store: "NJ Parks",
    imageSrc: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Six Flags Great Adventure Tickets",
    price: "$49",
    store: "Six Flags",
    imageSrc: "/placeholder.svg"
  },
  {
    id: 3,
    title: "NJ Devils Official Winter Jacket",
    price: "$89",
    store: "Fanatics",
    imageSrc: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Atlantic City Casino Resort Package",
    price: "$179",
    store: "Borgata",
    imageSrc: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Princeton University Alumni Sweatshirt",
    price: "$65",
    store: "Campus Store",
    imageSrc: "/placeholder.svg"
  },
];

const TopDeals: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
      <div className="flex items-center mb-3">
        <h2 className="font-semibold text-sm sm:text-base">Top Deals</h2>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-item">
            <div className="deal-item-number text-xs">{deal.id}</div>
            <div className="flex-1">
              <div className="flex gap-2 sm:gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm text-left font-medium line-clamp-2 leading-tight">{deal.title}</h3>
                  <div className="flex items-center mt-1 text-xs">
                    <span className="font-semibold">{deal.price}</span>
                    <span className="text-gray-500 mx-1">•</span>
                    <span className="text-gray-500 truncate">{deal.store}</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src={deal.imageSrc} 
                    alt={deal.title} 
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain" 
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-xs text-gray-500 mt-3 leading-relaxed">
        When you buy something, we may get a commission. See how this works.
      </div>
    </div>
  );
};

export default TopDeals;
