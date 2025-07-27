
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
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center mb-3">
        <h2 className="font-semibold text-base">Top Deals</h2>
      </div>
      
      <div className="space-y-4">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-item">
            <div className="deal-item-number">{deal.id}</div>
            <div className="flex-1">
              <div className="flex">
                <div className="flex-1">
                  <h3 className="text-xs text-left font-medium">{deal.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs font-semibold">{deal.price}</span>
                    <span className="text-xs text-gray-500 mx-1">•</span>
                    <span className="text-xs text-gray-500">{deal.store}</span>
                  </div>
                </div>
                <div className="ml-3">
                  <img 
                    src={deal.imageSrc} 
                    alt={deal.title} 
                    className="w-12 h-12 object-contain" 
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-xs text-gray-500 mt-3">
        When you buy something, we may get a commission. See how this works.
      </div>
    </div>
  );
};

export default TopDeals;
