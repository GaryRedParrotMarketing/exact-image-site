
import React from 'react';
import { 
  Newspaper, 
  LineChart, 
  Volleyball, 
  Mail, 
  Search,
  Gamepad,
  ShoppingBag,
  PenTool,
  Tv,
  Heart,
  List
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExploreItemProps {
  icon: React.ReactNode;
  label: string;
  color?: string;
}

const ExploreItem: React.FC<ExploreItemProps> = ({ icon, label, color }) => {
  return (
    <a href="#" className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-100 rounded-md">
      <div className={cn("flex items-center justify-center", color)}>
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
};

const ExploreMore: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
      <h2 className="font-semibold text-base mb-4">Explore more</h2>
      
      <div className="flex flex-col">
        <ExploreItem 
          icon={<Newspaper size={20} className="text-blue-600" />} 
          label="News" 
        />
        <ExploreItem 
          icon={<LineChart size={20} className="text-green-600" />} 
          label="Finance" 
        />
        <ExploreItem 
          icon={<Volleyball size={20} className="text-orange-500" />} 
          label="Sports" 
        />
        <ExploreItem 
          icon={<Mail size={20} className="text-purple-600" />} 
          label="Mail" 
        />
        <ExploreItem 
          icon={<Search size={20} className="text-blue-400" />} 
          label="Search" 
        />
        <ExploreItem 
          icon={<Gamepad size={20} className="text-purple-500" />} 
          label="Games" 
        />
        <ExploreItem 
          icon={<ShoppingBag size={20} className="text-pink-500" />} 
          label="Shopping" 
        />
        <ExploreItem 
          icon={<PenTool size={20} className="text-yellow-500" />} 
          label="Creators" 
        />
        <ExploreItem 
          icon={<Tv size={20} className="text-slate-700" />} 
          label="Entertainment" 
        />
        <ExploreItem 
          icon={<Heart size={20} className="text-red-500" />} 
          label="Life" 
        />
        <ExploreItem 
          icon={<List size={20} className="text-purple-400" />} 
          label="Newsletters" 
        />
      </div>
    </div>
  );
};

export default ExploreMore;
