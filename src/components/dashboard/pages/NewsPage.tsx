
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Bookmark, Share2 } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "AFRO Flipbook: A look at Baltimore's 2025 CIAA Men's and Women's Basketball Tournament",
    description: "The 2025 CIAA Men's and Women's Basketball Tournament took place in Baltimore at the CFG Bank Arena from February 25 to March 1, featuring athletes from 12 historically Black colleges and universities.",
    image: "https://i0.wp.com/afro.com/wp-content/uploads/2025/03/54-scaled.jpg?resize=1200%2C581&ssl=1",
    category: "Sports",
    date: "Mar 12, 2025"
  },
  {
    id: 2,
    title: "The Lion's Den: City of Stonecrest opens Dekalb's first free grocery store inside Martin Luther King Jr. High School",
    description: "Goodr, in partnership with Martin Luther King Jr. High School and the City of Stonecrest opens The Lion's Den Grocery Store, the first-ever free grocery store within the DeKalb County School District.",
    image: "https://i0.wp.com/theatlantavoice.com/wp-content/uploads/2025/02/IMG_4832-scaled.jpeg?resize=2000%2C1500&quality=89&ssl=1",
    category: "Community",
    date: "Mar 10, 2025"
  },
  {
    id: 3,
    title: "Zoe Saldaña wins first Oscar, sweeping awards season as best supporting actress in 'Emilia Pérez'",
    description: "Heavy snow and rain expected this weekend in mountain areas, with potential for flooding in some regions.",
    image: "https://dims.apnews.com/dims4/default/3290b59/2147483647/strip/true/crop/5313x3542+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F78%2F8e%2Faeec68bb9e2dd4820f7f8961f523%2F6963ffee484442aa8a092308e25df317",
    category: "Entertainment",
    date: "Mar 11, 2025"
  },
  {
    id: 4,
    title: "Texas officials still don't know how West Texas measles outbreak started",
    description: "Health officials are investigating the source of a measles outbreak in West Texas that has affected several communities.",
    image: "https://i0.wp.com/dallasweekly.com/wp-content/uploads/2025/03/image-5.png?resize=800%2C600&ssl=1",
    category: "Health",
    date: "Mar 9, 2025"
  },
  {
    id: 5,
    title: "Tennis legend Serena Williams joins WNBA expansion team Toronto Tempo as part owner",
    description: "Tennis champion Serena Williams has joined the ownership group of WNBA expansion team Toronto Tempo, bringing her sports expertise to basketball.",
    image: "https://i.cbc.ca/1.7473308.1741024698!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/serena-williams-temp.jpg?im=Resize%3D780",
    category: "Sports",
    date: "Mar 8, 2025"
  }
];

const NewsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">News</h1>
        <Button>Refresh</Button>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All News</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
          <TabsTrigger value="sports">Sports</TabsTrigger>
          <TabsTrigger value="health">Health</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          {newsItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-60 md:h-auto">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-yahoo-purple text-white">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <Button variant="outline" size="sm">Read More</Button>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="business" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Business News Category</h3>
              <p>Filter applied for business news.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="entertainment" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Entertainment News Category</h3>
              <p>Filter applied for entertainment news.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sports" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Sports News Category</h3>
              <p>Filter applied for sports news.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="health" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Health News Category</h3>
              <p>Filter applied for health news.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NewsPage;
