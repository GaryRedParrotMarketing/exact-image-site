
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import { PublisherProvider } from '../contexts/PublisherContext';

const PublishersDashboard: React.FC = () => {
  return (
    <PublisherProvider>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <DashboardSidebar />
        <main className="flex-1 p-4 sm:p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </PublisherProvider>
  );
};

export default PublishersDashboard;
