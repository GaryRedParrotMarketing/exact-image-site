
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

// Dashboard content components
import NewsPage from '@/components/dashboard/pages/NewsPage';
import FinancePage from '@/components/dashboard/pages/FinancePage';
import SportsPage from '@/components/dashboard/pages/SportsPage';
import MailPage from '@/components/dashboard/pages/MailPage';
import SearchPage from '@/components/dashboard/pages/SearchPage';
import GamesPage from '@/components/dashboard/pages/GamesPage';
import ShoppingPage from '@/components/dashboard/pages/ShoppingPage';
import CreatorsPage from '@/components/dashboard/pages/CreatorsPage';
import EntertainmentPage from '@/components/dashboard/pages/EntertainmentPage';
import LifePage from '@/components/dashboard/pages/LifePage';
import TrendingPage from '@/components/dashboard/pages/TrendingPage';
import DealsPage from '@/components/dashboard/pages/DealsPage';
import ForYouPage from '@/components/dashboard/pages/ForYouPage';
import VideoPage from '@/components/dashboard/pages/VideoPage';
import SettingsPage from '@/components/dashboard/pages/SettingsPage';

const Dashboard: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  // Close sidebar on mobile view when changing routes
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-yahoo-purple border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-30 transition-transform duration-300 ease-in-out transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <DashboardSidebar />
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<ForYouPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/sports" element={<SportsPage />} />
            <Route path="/mail" element={<MailPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/shopping" element={<ShoppingPage />} />
            <Route path="/creators" element={<CreatorsPage />} />
            <Route path="/entertainment" element={<EntertainmentPage />} />
            <Route path="/life" element={<LifePage />} />
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/deals" element={<DealsPage />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
