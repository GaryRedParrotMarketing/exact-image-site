
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
    title: "7 spring style trends you should skip this season — and what to buy instead",
    source: "Yahoo Shopping",
    sourceImage: "/placeholder.svg"
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "Martha Stewart's must-haves under $100: Skechers slip-ons, a puffer vest and more",
    source: "Yahoo Shopping",
    sourceImage: "/placeholder.svg"
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Take up to 40% off at The North Face — shop the product our editors love",
    source: "Yahoo Shopping",
    sourceImage: "/placeholder.svg"
  }
];

const shoppingItems: ShoppingItem[] = [
  {
    id: 1,
    image: "/placeholder.svg",
    title: "Zesica Two Piece Set",
    price: "$50",
    merchant: "Amazon",
    link: "#"
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "Skechers Women's Martha Stewart Pier Lite",
    price: "$45",
    originalPrice: "$74",
    merchant: "Amazon",
    link: "#"
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "North Face Women's Jacket",
    price: "$99",
    originalPrice: "$150",
    merchant: "North Face",
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
