import React from 'react';
import { usePublisher } from '@/contexts/PublisherContext';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
const PublishersList: React.FC = () => {
  const {
    publishers
  } = usePublisher();
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Publishers</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {publishers.map(publisher => <Card key={publisher.id} className="overflow-hidden">
            <CardHeader className="border-b">
              <CardTitle>{publisher.company}</CardTitle>
              <CardDescription className="text-gray-600">{publisher.name}, {publisher.location}</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-sm line-clamp-3 mb-4">{publisher.description}</p>
              
              <div className="flex space-x-2 mb-4">
                {publisher.socialMedia.facebook && <a href={publisher.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                    <Facebook size={18} />
                  </a>}
                {publisher.socialMedia.twitter && <a href={publisher.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400">
                    <Twitter size={18} />
                  </a>}
                {publisher.socialMedia.instagram && <a href={publisher.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600">
                    <Instagram size={18} />
                  </a>}
                {publisher.socialMedia.youtube && <a href={publisher.socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600">
                    <Youtube size={18} />
                  </a>}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  {publisher.articles?.length || 0} articles
                </div>
                <Link to={`/dashboard/publishers/${publisher.id}`} className="text-yahoo-purple text-sm font-medium hover:underline">
                  View Publisher
                </Link>
              </div>
            </CardContent>
          </Card>)}
      </div>
    </div>;
};
export default PublishersList;