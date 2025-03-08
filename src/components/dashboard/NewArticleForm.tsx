
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { usePublisher } from '@/contexts/PublisherContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';

const categories = ['News', 'Politics', 'Business', 'Entertainment', 'Sports', 'Technology', 'Health', 'Opinion'];

const NewArticleForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedPublisherId = searchParams.get('publisher');
  const navigate = useNavigate();
  const { publishers, addArticle } = usePublisher();
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [publisherId, setPublisherId] = useState(preselectedPublisherId || '');
  
  useEffect(() => {
    if (preselectedPublisherId) {
      setPublisherId(preselectedPublisherId);
    }
  }, [preselectedPublisherId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !content || !excerpt || !publisherId) {
      alert('Please fill in all required fields');
      return;
    }
    
    addArticle(publisherId, {
      title,
      content,
      excerpt,
      image,
      category,
    });
    
    navigate(`/dashboard/publishers/${publisherId}`);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mr-4">
          <ArrowLeft size={16} className="mr-2" /> Back
        </Button>
        <h1 className="text-2xl font-bold">Create New Article</h1>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Article Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="publisher">Publisher *</Label>
              <select
                id="publisher"
                value={publisherId}
                onChange={(e) => setPublisherId(e.target.value)}
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                required
              >
                <option value="">Select a publisher</option>
                {publishers.map((publisher) => (
                  <option key={publisher.id} value={publisher.id}>
                    {publisher.company}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter article title"
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="excerpt">Excerpt *</Label>
              <Input
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Brief summary of the article"
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="content">Content *</Label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your article content here..."
                className="min-h-[200px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Enter image URL (optional)"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat.toLowerCase()}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button type="submit">Save Article</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default NewArticleForm;
