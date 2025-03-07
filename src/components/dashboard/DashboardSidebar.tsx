
import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
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
  TrendingUp,
  Tag,
  User,
  Video,
  Settings,
  LogOut
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon, label }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
        isActive 
          ? "bg-yahoo-purple text-white" 
          : "text-gray-700 hover:bg-gray-100"
      )}
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

const DashboardSidebar: React.FC = () => {
  const { logout, user } = useAuth();

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-yahoo-purple">Afroist CRM</h1>
      </div>
      
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yahoo-purple text-white flex items-center justify-center">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <div>
            <p className="font-medium">{user?.name || 'User'}</p>
            <p className="text-xs text-gray-500">{user?.email || 'user@example.com'}</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        <SidebarLink to="/dashboard" icon={<User size={18} />} label="For You" />
        <SidebarLink to="/dashboard/news" icon={<Newspaper size={18} />} label="News" />
        <SidebarLink to="/dashboard/finance" icon={<LineChart size={18} />} label="Finance" />
        <SidebarLink to="/dashboard/sports" icon={<Volleyball size={18} />} label="Sports" />
        <SidebarLink to="/dashboard/mail" icon={<Mail size={18} />} label="Mail" />
        <SidebarLink to="/dashboard/search" icon={<Search size={18} />} label="Search" />
        <SidebarLink to="/dashboard/games" icon={<Gamepad size={18} />} label="Games" />
        <SidebarLink to="/dashboard/shopping" icon={<ShoppingBag size={18} />} label="Shopping" />
        <SidebarLink to="/dashboard/creators" icon={<PenTool size={18} />} label="Creators" />
        <SidebarLink to="/dashboard/entertainment" icon={<Tv size={18} />} label="Entertainment" />
        <SidebarLink to="/dashboard/life" icon={<Heart size={18} />} label="Life" />
        <SidebarLink to="/dashboard/trending" icon={<TrendingUp size={18} />} label="Trending" />
        <SidebarLink to="/dashboard/deals" icon={<Tag size={18} />} label="Top Deals" />
        <SidebarLink to="/dashboard/video" icon={<Video size={18} />} label="Video" />
      </nav>
      
      <div className="p-3 border-t border-gray-200">
        <SidebarLink to="/dashboard/settings" icon={<Settings size={18} />} label="Settings" />
        <button 
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-red-600 hover:bg-red-50 w-full text-left"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
