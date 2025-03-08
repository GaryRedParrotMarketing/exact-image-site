
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Publisher, Article, publishers as initialPublishers } from '../data/publishers';
import { useToast } from '@/hooks/use-toast';

interface PublisherContextType {
  publishers: Publisher[];
  getPublisher: (id: string) => Publisher | undefined;
  getArticle: (id: string) => Article | undefined;
  addArticle: (publisherId: string, article: Omit<Article, "id" | "publisherId" | "publishedDate">) => void;
  updateArticle: (articleId: string, article: Partial<Article>) => void;
  deleteArticle: (articleId: string) => void;
}

const PublisherContext = createContext<PublisherContextType | undefined>(undefined);

export const usePublisher = () => {
  const context = useContext(PublisherContext);
  if (!context) {
    throw new Error('usePublisher must be used within a PublisherProvider');
  }
  return context;
};

export const PublisherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [publishers, setPublishers] = useState<Publisher[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Load publishers from localStorage or use initial data
    const storedPublishers = localStorage.getItem('publishers');
    if (storedPublishers) {
      setPublishers(JSON.parse(storedPublishers));
    } else {
      setPublishers(initialPublishers);
    }
  }, []);

  useEffect(() => {
    // Save publishers to localStorage whenever they change
    if (publishers.length > 0) {
      localStorage.setItem('publishers', JSON.stringify(publishers));
    }
  }, [publishers]);

  const getPublisher = (id: string) => {
    return publishers.find(publisher => publisher.id === id);
  };

  const getArticle = (id: string) => {
    for (const publisher of publishers) {
      if (publisher.articles) {
        const article = publisher.articles.find(article => article.id === id);
        if (article) return article;
      }
    }
    return undefined;
  };

  const addArticle = (publisherId: string, article: Omit<Article, "id" | "publisherId" | "publishedDate">) => {
    const newArticle: Article = {
      ...article,
      id: Date.now().toString(),
      publisherId,
      publishedDate: new Date().toISOString(),
    };

    setPublishers(prevPublishers => 
      prevPublishers.map(publisher => 
        publisher.id === publisherId 
          ? { 
              ...publisher, 
              articles: [...(publisher.articles || []), newArticle] 
            } 
          : publisher
      )
    );

    toast({
      title: "Article added",
      description: `${article.title} has been added successfully.`
    });
  };

  const updateArticle = (articleId: string, articleUpdate: Partial<Article>) => {
    setPublishers(prevPublishers => 
      prevPublishers.map(publisher => {
        if (!publisher.articles) return publisher;
        
        const articleIndex = publisher.articles.findIndex(a => a.id === articleId);
        if (articleIndex === -1) return publisher;
        
        const updatedArticles = [...publisher.articles];
        updatedArticles[articleIndex] = {
          ...updatedArticles[articleIndex],
          ...articleUpdate,
        };
        
        return {
          ...publisher,
          articles: updatedArticles
        };
      })
    );

    toast({
      title: "Article updated",
      description: "The article has been updated successfully."
    });
  };

  const deleteArticle = (articleId: string) => {
    setPublishers(prevPublishers => 
      prevPublishers.map(publisher => {
        if (!publisher.articles) return publisher;
        
        return {
          ...publisher,
          articles: publisher.articles.filter(article => article.id !== articleId)
        };
      })
    );

    toast({
      title: "Article deleted",
      description: "The article has been deleted successfully."
    });
  };

  return (
    <PublisherContext.Provider
      value={{
        publishers,
        getPublisher,
        getArticle,
        addArticle,
        updateArticle,
        deleteArticle,
      }}
    >
      {children}
    </PublisherContext.Provider>
  );
};
