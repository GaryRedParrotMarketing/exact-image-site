
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface PlaceholderPageProps {
  title: string;
  icon: React.ReactNode;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, icon }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        {icon}
      </div>
      
      <Card>
        <CardContent className="p-6 flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            {React.cloneElement(icon as React.ReactElement, { className: "h-8 w-8 text-yahoo-purple" })}
          </div>
          <h2 className="text-xl font-semibold mb-2">{title} Dashboard</h2>
          <p className="text-gray-500 text-center max-w-md">
            This section will contain {title.toLowerCase()} related content and features.
            Visit the other sections to explore the fully implemented parts of the dashboard.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaceholderPage;
