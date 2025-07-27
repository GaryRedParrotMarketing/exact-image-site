
import React from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface ShoppingItem {
  id: number;
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  merchant: string;
  link: string;
}

interface ShoppingArticle {
  id: number;
  image: string;
  title: string;
  source: string;
  sourceImage: string;
}

const shoppingArticles: ShoppingArticle[] = [
  {
    id: 1,
    image: "/lovable-uploads/52b1ec67-e180-4c9a-b6da-e9003cdb123c.png",
    title: "Best NJ Shore fashion trends for summer 2024 — boardwalk style guide",
    source: "NJ Shore Guide",
    sourceImage: "/placeholder.svg"
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "Local NJ brands to support: Garden State made products under $50",
    source: "Made in NJ",
    sourceImage: "/placeholder.svg"
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Devils vs Rangers gear: Show your NJ pride with team merchandise",
    source: "NJ Sports Shop",
    sourceImage: "/placeholder.svg"
  }
];

const shoppingItems: ShoppingItem[] = [
  {
    id: 1,
    image: "/placeholder.svg",
    title: "Jersey Shore Beach Tote",
    price: "$35",
    merchant: "Shore Store",
    link: "#"
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "NJ Devils Fan Jersey",
    price: "$85",
    originalPrice: "$120",
    merchant: "Devils Store",
    link: "#"
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Garden State Coffee Blend",
    price: "$19",
    originalPrice: "$28",
    merchant: "NJ Roasters",
    link: "#"
  }
];

const ShoppingSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h2 className="font-semibold text-base">Shopping</h2>
          <ChevronRight size={16} className="text-yahoo-purple ml-1" />
        </div>
        
        <div className="flex space-x-2">
          <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center border border-gray-200">
            <ChevronLeft size={16} />
          </button>
          <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center border border-gray-200">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {shoppingArticles.map((article) => (
          <div key={article.id} className="rounded-lg overflow-hidden">
            <div className="relative">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-40 object-cover" 
              />
            </div>
            <div className="pt-3">
              <h3 className="text-sm font-medium line-clamp-2 mb-2">{article.title}</h3>
              <div className="flex items-center">
                <img 
                  src={article.sourceImage} 
                  alt={article.source} 
                  className="w-6 h-6 rounded-full mr-2" 
                />
                <span className="text-xs text-gray-600">{article.source}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-4">
        {shoppingItems.map((item) => (
          <div key={item.id} className="flex items-center">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-14 h-14 object-contain mr-3" 
            />
            <div>
              <p className="text-xs font-medium line-clamp-2 mb-1">{item.title}</p>
              <div className="flex items-center">
                <span className="text-xs font-semibold">{item.price}</span>
                {item.originalPrice && (
                  <span className="text-xs text-gray-500 line-through ml-1">{item.originalPrice}</span>
                )}
                <span className="text-xs text-gray-500 mx-1">•</span>
                <div className="flex items-center">
                  <span className="text-xs text-gray-600">{item.merchant}</span>
                  <ExternalLink size={10} className="ml-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingSection;
