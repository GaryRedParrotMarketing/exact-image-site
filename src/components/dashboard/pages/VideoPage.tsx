
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "How the WNBA is Changing the Game",
    thumbnail: "https://i.cbc.ca/1.7473308.1741024698!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/serena-williams-temp.jpg?im=Resize%3D780",
    views: "234K",
    likes: "15K",
    comments: "2.8K",
    creator: "SportsTalk",
    duration: "12:45"
  },
  {
    id: 2,
    title: "The Future of Electric Vehicles - 2025 and Beyond",
    thumbnail: "/placeholder.svg",
    views: "1.2M",
    likes: "87K",
    comments: "12K",
    creator: "TechInsider",
    duration: "18:26"
  },
  {
    id: 3,
    title: "Learn Tailwind CSS in 60 Minutes - Complete Tutorial",
    thumbnail: "/placeholder.svg",
    views: "542K",
    likes: "35K",
    comments: "4.2K",
    creator: "CodeWithMike",
    duration: "58:12"
  },
  {
    id: 4,
    title: "How to Make Perfect Sourdough Bread at Home",
    thumbnail: "/placeholder.svg",
    views: "876K",
    likes: "52K",
    comments: "7.8K",
    creator: "ChefClara",
    duration: "24:37"
  },
  {
    id: 5,
    title: "The History of African Fashion - A Documentary",
    thumbnail: "/placeholder.svg",
    views: "312K",
    likes: "28K",
    comments: "3.5K",
    creator: "CultureDocs",
    duration: "42:18"
  },
  {
    id: 6,
    title: "10 Morning Habits That Will Change Your Life",
    thumbnail: "/placeholder.svg",
    views: "1.8M",
    likes: "124K",
    comments: "15K",
    creator: "LifeCoach",
    duration: "15:42"
  }
];

const VideoPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Videos</h1>
      
      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Videos</TabsTrigger>
          <TabsTrigger value="sports">Sports</TabsTrigger>
          <TabsTrigger value="news">News</TabsTrigger>
          <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full aspect-video object-cover" 
                  />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition-opacity">
                    <div className="bg-white bg-opacity-90 rounded-full p-3">
                      <Play className="h-8 w-8 text-yahoo-purple" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{video.creator}</span>
                    <span className="mx-2">•</span>
                    <span>{video.views} views</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{video.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{video.comments}</span>
                    </div>
                    <div>
                      <Share2 className="h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="sports" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Sports Videos</h3>
              <p>Filter applied for sports videos.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="news" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">News Videos</h3>
              <p>Filter applied for news videos.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="entertainment" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Entertainment Videos</h3>
              <p>Filter applied for entertainment videos.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="trending" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Trending Videos</h3>
              <p>Filter applied for trending videos.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VideoPage;
