
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Heart, Clock, Coffee, Bike, Utensils, User, Moon } from 'lucide-react';

const lifeArticles = [
  {
    id: 1,
    title: "10 Morning Habits That Will Change Your Life",
    category: "Wellness",
    image: "https://i0.wp.com/theatlantavoice.com/wp-content/uploads/2025/02/IMG_4832-scaled.jpeg?resize=2000%2C1500&quality=89&ssl=1",
    description: "Start your day right with these science-backed habits that boost productivity and wellbeing.",
    date: "March 15, 2025"
  },
  {
    id: 2,
    title: "The Mediterranean Diet: A Complete Guide for Beginners",
    category: "Nutrition",
    image: "/placeholder.svg",
    description: "Learn about the health benefits of this heart-healthy eating plan and how to incorporate it into your lifestyle.",
    date: "March 12, 2025"
  },
  {
    id: 3,
    title: "How to Create a Work-Life Balance in the Digital Age",
    category: "Wellness",
    image: "/placeholder.svg",
    description: "Practical tips for maintaining balance when work and personal life increasingly blend together.",
    date: "March 10, 2025"
  },
  {
    id: 4,
    title: "The Science of Sleep: Why Quality Rest Matters",
    category: "Health",
    image: "/placeholder.svg",
    description: "Understand the importance of good sleep habits and how they impact your overall health and wellbeing.",
    date: "March 8, 2025"
  }
];

const LifePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Life & Wellness</h1>
        <Button>Browse All</Button>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="mb-4 flex w-full overflow-x-auto overflow-hidden">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="wellness">Wellness</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          <TabsTrigger value="fitness">Fitness</TabsTrigger>
          <TabsTrigger value="mental">Mental Health</TabsTrigger>
          <TabsTrigger value="sleep">Sleep</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Wellness Score</CardTitle>
                <Heart className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87/100</div>
                <p className="text-xs text-muted-foreground">+3 from last week</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Sleep Quality</CardTitle>
                <Moon className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7.5 hrs</div>
                <p className="text-xs text-muted-foreground">Good quality sleep</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Daily Steps</CardTitle>
                <User className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8,254</div>
                <p className="text-xs text-muted-foreground">Target: 10,000</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Water Intake</CardTitle>
                <Coffee className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.8L</div>
                <p className="text-xs text-muted-foreground">Target: 2.5L</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Weekly Activity</h2>
            <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Activity chart placeholder</p>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold mb-4">Recommended Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifeArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded bg-red-100 text-red-600">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="font-bold mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{article.description}</p>
                  <Button variant="outline" size="sm">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="wellness">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Wellness Content</h3>
              <p>Wellness-focused content will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="nutrition">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Nutrition Content</h3>
              <p>Nutrition-focused content will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="fitness">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Fitness Content</h3>
              <p>Fitness-focused content will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="mental">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Mental Health Content</h3>
              <p>Mental health-focused content will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sleep">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Sleep Content</h3>
              <p>Sleep-focused content will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LifePage;
