
import React from 'react';
import { usePublisher } from '@/contexts/PublisherContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardOverview: React.FC = () => {
  const { publishers } = usePublisher();
  
  const totalArticles = publishers.reduce((count, publisher) => 
    count + (publisher.articles?.length || 0), 0);
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard 
          title="Total Publishers" 
          value={publishers.length.toString()} 
          icon={<Users className="h-6 w-6 text-blue-500" />} 
          description="Active newspaper publishers"
        />
        <StatsCard 
          title="Total Articles" 
          value={totalArticles.toString()} 
          icon={<Book className="h-6 w-6 text-green-500" />} 
          description="Published across all publishers"
        />
        <StatsCard 
          title="Top Publisher" 
          value={getTopPublisher(publishers).company} 
          icon={<Award className="h-6 w-6 text-amber-500" />} 
          description="Most active publisher"
        />
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Publishers Directory</h2>
        <div className="space-y-4">
          {publishers.map((publisher) => (
            <Link
              key={publisher.id}
              to={`/dashboard/publishers/${publisher.id}`}
              className="block p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-yahoo-purple">{publisher.company}</h3>
                  <p className="text-sm text-gray-500">{publisher.name}, {publisher.location}</p>
                </div>
                <div className="text-sm text-gray-500">
                  {publisher.articles?.length || 0} articles
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, description }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </CardContent>
    </Card>
  );
};

function getTopPublisher(publishers: any[]): any {
  if (publishers.length === 0) return { company: "N/A" };
  
  return publishers.reduce((top, current) => {
    const topArticleCount = top.articles?.length || 0;
    const currentArticleCount = current.articles?.length || 0;
    return currentArticleCount > topArticleCount ? current : top;
  });
}

export default DashboardOverview;
