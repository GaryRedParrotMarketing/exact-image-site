
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { usePublisher } from '@/contexts/PublisherContext';
import { Facebook, Twitter, Instagram, Youtube, FilePlus, FilePen, FileX, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDistanceToNow } from 'date-fns';

const PublisherDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getPublisher, deleteArticle } = usePublisher();
  const navigate = useNavigate();
  
  const publisher = getPublisher(id || '');
  
  if (!publisher) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-gray-800">Publisher Not Found</h2>
        <p className="mt-2 text-gray-600">The publisher you're looking for doesn't exist.</p>
        <Button className="mt-4" onClick={() => navigate('/dashboard/publishers')}>
          Back to Publishers
        </Button>
      </div>
    );
  }

  const handleDeleteArticle = (articleId: string) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      deleteArticle(articleId);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => navigate('/dashboard/publishers')} className="mr-4">
          <ArrowLeft size={16} className="mr-2" /> Back
        </Button>
        <h1 className="text-2xl font-bold">{publisher.company}</h1>
      </div>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Publisher Information</CardTitle>
          <CardDescription>{publisher.name}, {publisher.location}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">{publisher.description}</p>
          
          <div className="flex space-x-3">
            {publisher.socialMedia.facebook && (
              <a href={publisher.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                <Facebook size={20} />
              </a>
            )}
            {publisher.socialMedia.twitter && (
              <a href={publisher.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400">
                <Twitter size={20} />
              </a>
            )}
            {publisher.socialMedia.instagram && (
              <a href={publisher.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600">
                <Instagram size={20} />
              </a>
            )}
            {publisher.socialMedia.youtube && (
              <a href={publisher.socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600">
                <Youtube size={20} />
              </a>
            )}
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Articles</h2>
        <Link to={`/dashboard/new-article?publisher=${publisher.id}`}>
          <Button>
            <FilePlus className="mr-2 h-4 w-4" /> Add New Article
          </Button>
        </Link>
      </div>
      
      {publisher.articles && publisher.articles.length > 0 ? (
        <div className="space-y-4">
          {publisher.articles.map((article) => (
            <Card key={article.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{article.title}</CardTitle>
                <CardDescription>
                  {article.category && <span className="mr-2">#{article.category}</span>}
                  {article.publishedDate && (
                    <span>
                      Published {formatDistanceToNow(new Date(article.publishedDate), { addSuffix: true })}
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-gray-700 line-clamp-2">{article.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-end pt-2 space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/dashboard/edit-article/${article.id}`}>
                    <FilePen className="mr-2 h-4 w-4" /> Edit
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleDeleteArticle(article.id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <FileX className="mr-2 h-4 w-4" /> Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">No articles yet.</p>
          <Link to={`/dashboard/new-article?publisher=${publisher.id}`}>
            <Button className="mt-4" variant="outline">
              <FilePlus className="mr-2 h-4 w-4" /> Add Your First Article
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PublisherDetail;
