import React, { useState } from 'react';
import YahooHeader from '@/components/YahooHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Search, Filter } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample news data
const allNewsItems = [
  {
    id: 1,
    title: "AFRO Flipbook: A look at Baltimore's 2025 CIAA Men's and Women's Basketball Tournament",
    description: "The 2025 CIAA Men's and Women's Basketball Tournament took place in Baltimore at the CFG Bank Arena from February 25 to March 1, featuring athletes from 12 historically Black colleges and universities.",
    image: "https://i0.wp.com/afro.com/wp-content/uploads/2025/03/54-scaled.jpg?resize=1200%2C581&ssl=1",
    category: "Sports",
    date: "Mar 12, 2025",
    author: "James Wilson",
    content: "The 2025 CIAA Men's and Women's Basketball Tournament was a resounding success, bringing together athletes from 12 historically Black colleges and universities to compete at Baltimore's CFG Bank Arena. The tournament, which ran from February 25 to March 1, featured thrilling matchups, passionate fan engagement, and a celebration of HBCU athletics and culture."
  },
  {
    id: 2,
    title: "The Lion's Den: City of Stonecrest opens Dekalb's first free grocery store inside Martin Luther King Jr. High School",
    description: "Goodr, in partnership with Martin Luther King Jr. High School and the City of Stonecrest opens The Lion's Den Grocery Store, the first-ever free grocery store within the DeKalb County School District.",
    image: "https://i0.wp.com/theatlantavoice.com/wp-content/uploads/2025/02/IMG_4832-scaled.jpeg?resize=2000%2C1500&quality=89&ssl=1",
    category: "Community",
    date: "Mar 10, 2025",
    author: "Sarah Johnson",
    content: "In an innovative approach to addressing food insecurity among students, Goodr has partnered with Martin Luther King Jr. High School and the City of Stonecrest to open The Lion's Den Grocery Store. This groundbreaking initiative represents the first free grocery store within the DeKalb County School District, providing students and their families with access to nutritious food options without financial barriers."
  },
  {
    id: 3,
    title: "Zoe Saldaña wins first Oscar, sweeping awards season as best supporting actress in 'Emilia Pérez'",
    description: "Zoe Saldaña has won her first Academy Award for her role in 'Emilia Pérez', completing a sweep of the major awards this season.",
    image: "https://dims.apnews.com/dims4/default/3290b59/2147483647/strip/true/crop/5313x3542+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F78%2F8e%2Faeec68bb9e2dd4820f7f8961f523%2F6963ffee484442aa8a092308e25df317",
    category: "Entertainment",
    date: "Mar 11, 2025",
    author: "Michael Brown",
    content: "In a triumphant night for her career, Zoe Saldaña has claimed her first Oscar for Best Supporting Actress for her powerful performance in 'Emilia Pérez'. This victory caps an impressive awards season where she also secured wins at the Golden Globes, SAG Awards, and BAFTAs for the same role. Saldaña's portrayal in the critically acclaimed film has been praised for its emotional depth and nuance."
  },
  {
    id: 4,
    title: "Texas officials still don't know how West Texas measles outbreak started",
    description: "Health officials are investigating the source of a measles outbreak in West Texas that has affected several communities.",
    image: "https://i0.wp.com/dallasweekly.com/wp-content/uploads/2025/03/image-5.png?resize=800%2C600&ssl=1",
    category: "Health",
    date: "Mar 9, 2025",
    author: "Dr. Emily Chen",
    content: "Health authorities in Texas continue to investigate the origins of a concerning measles outbreak in the western part of the state. The outbreak, which has now spread to multiple communities, has health officials puzzled as they work to identify patient zero. Officials are urging residents to verify their vaccination status and to be vigilant for symptoms of the highly contagious disease."
  },
  {
    id: 5,
    title: "Tennis legend Serena Williams joins WNBA expansion team Toronto Tempo as part owner",
    description: "Tennis champion Serena Williams has joined the ownership group of WNBA expansion team Toronto Tempo, bringing her sports expertise to basketball.",
    image: "https://i.cbc.ca/1.7473308.1741024698!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/serena-williams-temp.jpg?im=Resize%3D780",
    category: "Sports",
    date: "Mar 8, 2025",
    author: "Jessica Taylor",
    content: "Tennis icon Serena Williams is expanding her influence in professional sports by joining the ownership group of WNBA expansion team Toronto Tempo. Williams, who dominated women's tennis for over two decades with 23 Grand Slam singles titles, brings valuable experience as both an elite athlete and successful businesswoman to the franchise. Her involvement signals growing momentum for women's professional basketball in Canada."
  },
  {
    id: 6,
    title: "New climate report warns of escalating risks for coastal communities",
    description: "A comprehensive climate study highlights increased flooding threats for coastal areas over the next decade.",
    image: "/placeholder.svg",
    category: "Environment",
    date: "Mar 7, 2025",
    author: "Dr. Robert Miller",
    content: "A newly released climate report paints a concerning picture for coastal communities worldwide. The study, compiled by an international team of researchers, indicates that sea levels are rising faster than previously projected, leading to increased risks of flooding and erosion. The report calls for urgent adaptation measures and emphasizes that communities must prepare for more frequent extreme weather events in the coming decades."
  },
  {
    id: 7,
    title: "Tech giant unveils revolutionary AI assistant with unprecedented reasoning capabilities",
    description: "The latest AI system demonstrates advanced problem-solving skills that rival human experts.",
    image: "/placeholder.svg",
    category: "Technology",
    date: "Mar 6, 2025",
    author: "Thomas Wright",
    content: "A leading technology company has revealed its most advanced artificial intelligence assistant to date, featuring remarkable reasoning capabilities that approach human-level performance in complex tasks. The system, which underwent extensive testing across multiple domains including medicine, law, and engineering, demonstrated an ability to synthesize information and draw conclusions that surprised even its developers. Experts suggest this represents a significant leap forward in AI development."
  },
  {
    id: 8,
    title: "Global economy shows signs of recovery amid policy shifts",
    description: "Economic indicators point to growth as central banks adjust interest rates and inflation cools.",
    image: "/placeholder.svg",
    category: "Business",
    date: "Mar 5, 2025",
    author: "Jennifer Lopez",
    content: "After a challenging period of inflation and market volatility, the global economy appears to be entering a recovery phase according to multiple economic indicators. Central banks have begun adjusting interest rates as inflation pressures ease, and consumer confidence is gradually rising. Analysts note that while challenges remain, particularly in supply chain resilience and employment markets, the overall trajectory suggests a more stable economic environment may be emerging."
  }
];

const AllNewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredNews = allNewsItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-[#F4F3F0]">
      <YahooHeader />
      
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">All News</h1>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search news articles..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              Filters
            </Button>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6 flex flex-wrap gap-1 h-auto p-1">
              <TabsTrigger value="all" className="text-xs sm:text-sm">All Categories</TabsTrigger>
              <TabsTrigger value="sports" className="text-xs sm:text-sm">Sports</TabsTrigger>
              <TabsTrigger value="entertainment" className="text-xs sm:text-sm">Entertainment</TabsTrigger>
              <TabsTrigger value="health" className="text-xs sm:text-sm">Health</TabsTrigger>
              <TabsTrigger value="business" className="text-xs sm:text-sm">Business</TabsTrigger>
              <TabsTrigger value="technology" className="text-xs sm:text-sm">Technology</TabsTrigger>
              <TabsTrigger value="environment" className="text-xs sm:text-sm">Environment</TabsTrigger>
              <TabsTrigger value="community" className="text-xs sm:text-sm">Community</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredNews.map((news) => (
                  <Link to={`/news/${news.id}`} key={news.id}>
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-video w-full overflow-hidden">
                        <img 
                          src={news.image} 
                          alt={news.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium px-2 py-1 rounded bg-yahoo-purple text-white">
                            {news.category}
                          </span>
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar size={12} className="mr-1" />
                            {news.date}
                          </div>
                        </div>
                        <h2 className="text-base sm:text-lg font-bold mb-2 line-clamp-2">{news.title}</h2>
                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 mb-4">{news.description}</p>
                        <div className="flex justify-between items-center mt-auto">
                          <span className="text-xs text-gray-500">By {news.author}</span>
                          <div className="text-yahoo-purple flex items-center text-sm font-medium">
                            Read more <ArrowRight size={14} className="ml-1" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              
              {filteredNews.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">No results found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria</p>
                </div>
              )}
            </TabsContent>
            
            {/* Other tab contents would filter by category */}
            {["sports", "entertainment", "health", "business", "technology", "environment", "community"].map((category) => (
              <TabsContent key={category} value={category} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredNews
                    .filter(news => news.category.toLowerCase() === category.toLowerCase())
                    .map((news) => (
                      <Link to={`/news/${news.id}`} key={news.id}>
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                          <div className="aspect-video w-full overflow-hidden">
                            <img 
                              src={news.image} 
                              alt={news.title} 
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                            />
                          </div>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-medium px-2 py-1 rounded bg-yahoo-purple text-white">
                                {news.category}
                              </span>
                              <div className="flex items-center text-xs text-gray-500">
                                <Calendar size={12} className="mr-1" />
                                {news.date}
                              </div>
                            </div>
                            <h2 className="text-lg font-bold mb-2 line-clamp-2">{news.title}</h2>
                            <p className="text-sm text-gray-600 line-clamp-3 mb-4">{news.description}</p>
                            <div className="flex justify-between items-center mt-auto">
                              <span className="text-xs text-gray-500">By {news.author}</span>
                              <div className="text-yahoo-purple flex items-center text-sm font-medium">
                                Read more <ArrowRight size={14} className="ml-1" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
                
                {filteredNews.filter(news => news.category.toLowerCase() === category.toLowerCase()).length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-2">No {category} news found</h3>
                    <p className="text-gray-600">Try adjusting your search criteria</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AllNewsPage;
