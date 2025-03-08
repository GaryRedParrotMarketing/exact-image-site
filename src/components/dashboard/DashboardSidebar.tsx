
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, FilePlus, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={cn(
      "bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        {!collapsed && <h2 className="text-xl font-bold text-yahoo-purple">Afroist</h2>}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          <Menu size={20} />
        </Button>
      </div>
      
      <div className="p-2">
        <nav className="space-y-1">
          <NavItem 
            to="/dashboard" 
            icon={<Home size={20} />} 
            label="Dashboard" 
            active={location.pathname === '/dashboard'} 
            collapsed={collapsed}
          />
          <NavItem 
            to="/dashboard/publishers" 
            icon={<Users size={20} />} 
            label="Publishers" 
            active={location.pathname.includes('/dashboard/publishers')} 
            collapsed={collapsed}
          />
          <NavItem 
            to="/dashboard/new-article" 
            icon={<FilePlus size={20} />} 
            label="New Article" 
            active={location.pathname === '/dashboard/new-article'} 
            collapsed={collapsed}
          />
        </nav>
      </div>
      
      <div className="absolute bottom-0 w-full border-t border-gray-200 p-4">
        <Link to="/">
          <Button variant="outline" className={cn("w-full", collapsed && "justify-center p-2")}>
            {collapsed ? <Home size={20} /> : "Back to Site"}
          </Button>
        </Link>
      </div>
    </aside>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
  collapsed: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, active, collapsed }) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
        active 
          ? "bg-gray-100 text-yahoo-purple" 
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      )}
    >
      <span className="mr-3">{icon}</span>
      {!collapsed && <span>{label}</span>}
    </Link>
  );
};

export default DashboardSidebar;
