
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, FilePlus, Menu, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      
      {/* Mobile Toggle Button */}
      <Button
        variant="outline"
        size="sm"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <Menu size={16} />
      </Button>

      <aside className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden",
        // Desktop behavior
        "lg:static lg:block lg:translate-x-0 z-10",
        collapsed ? "lg:w-16" : "lg:w-64",
        // Mobile behavior  
        "fixed inset-y-0 left-0 w-64 z-50 lg:z-10",
        mobileOpen 
          ? "translate-x-0" 
          : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          {!collapsed && <h2 className="text-lg lg:text-xl font-bold text-yahoo-purple">NJ Today</h2>}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto hidden lg:flex"
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
            <NavItem 
              to="/" 
              icon={<ArrowLeft size={20} />} 
              label="Back to Site" 
              active={false} 
              collapsed={collapsed}
            />
          </nav>
        </div>
      </aside>
    </>
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

