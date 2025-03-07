
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import YahooHeader from '@/components/YahooHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, Share2, Bookmark, ThumbsUp, MessageSquare } from 'lucide-react';

// Sample news data (same as in AllNewsPage)
const allNewsItems = [
  {
    id: 1,
    title: "AFRO Flipbook: A look at Baltimore's 2025 CIAA Men's and Women's Basketball Tournament",
    description: "The 2025 CIAA Men's and Women's Basketball Tournament took place in Baltimore at the CFG Bank Arena from February 25 to March 1, featuring athletes from 12 historically Black colleges and universities.",
    image: "https://i0.wp.com/afro.com/wp-content/uploads/2025/03/54-scaled.jpg?resize=1200%2C581&ssl=1",
    category: "Sports",
    date: "Mar 12, 2025",
    author: "James Wilson",
    content: "The 2025 CIAA Men's and Women's Basketball Tournament was a resounding success, bringing together athletes from 12 historically Black colleges and universities to compete at Baltimore's CFG Bank Arena. The tournament, which ran from February 25 to March 1, featured thrilling matchups, passionate fan engagement, and a celebration of HBCU athletics and culture.",
    readTime: "5 min read",
    relatedArticles: [2, 5]
  },
  {
    id: 2,
    title: "The Lion's Den: City of Stonecrest opens Dekalb's first free grocery store inside Martin Luther King Jr. High School",
    description: "Goodr, in partnership with Martin Luther King Jr. High School and the City of Stonecrest opens The Lion's Den Grocery Store, the first-ever free grocery store within the DeKalb County School District.",
    image: "https://i0.wp.com/theatlantavoice.com/wp-content/uploads/2025/02/IMG_4832-scaled.jpeg?resize=2000%2C1500&quality=89&ssl=1",
    category: "Community",
    date: "Mar 10, 2025",
    author: "Sarah Johnson",
    content: "In an innovative approach to addressing food insecurity among students, Goodr has partnered with Martin Luther King Jr. High School and the City of Stonecrest to open The Lion's Den Grocery Store. This groundbreaking initiative represents the first free grocery store within the DeKalb County School District, providing students and their families with access to nutritious food options without financial barriers.",
    readTime: "4 min read",
    relatedArticles: [6, 3]
  },
  {
    id: 3,
    title: "Zoe Saldaña wins first Oscar, sweeping awards season as best supporting actress in 'Emilia Pérez'",
    description: "Zoe Saldaña has won her first Academy Award for her role in 'Emilia Pérez', completing a sweep of the major awards this season.",
    image: "https://dims.apnews.com/dims4/default/3290b59/2147483647/strip/true/crop/5313x3542+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F78%2F8e%2Faeec68bb9e2dd4820f7f8961f523%2F6963ffee484442aa8a092308e25df317",
    category: "Entertainment",
    date: "Mar 11, 2025",
    author: "Michael Brown",
    content: "In a triumphant night for her career, Zoe Saldaña has claimed her first Oscar for Best Supporting Actress for her powerful performance in 'Emilia Pérez'. This victory caps an impressive awards season where she also secured wins at the Golden Globes, SAG Awards, and BAFTAs for the same role. Saldaña's portrayal in the critically acclaimed film has been praised for its emotional depth and nuance.",
    readTime: "3 min read",
    relatedArticles: [7, 2]
  },
  {
    id: 4,
    title: "Texas officials still don't know how West Texas measles outbreak started",
    description: "Health officials are investigating the source of a measles outbreak in West Texas that has affected several communities.",
    image: "https://i0.wp.com/dallasweekly.com/wp-content/uploads/2025/03/image-5.png?resize=800%2C600&ssl=1",
    category: "Health",
    date: "Mar 9, 2025",
    author: "Dr. Emily Chen",
    content: "Health authorities in Texas continue to investigate the origins of a concerning measles outbreak in the western part of the state. The outbreak, which has now spread to multiple communities, has health officials puzzled as they work to identify patient zero. Officials are urging residents to verify their vaccination status and to be vigilant for symptoms of the highly contagious disease.",
    readTime: "6 min read",
    relatedArticles: [6, 8]
  },
  {
    id: 5,
    title: "Tennis legend Serena Williams joins WNBA expansion team Toronto Tempo as part owner",
    description: "Tennis champion Serena Williams has joined the ownership group of WNBA expansion team Toronto Tempo, bringing her sports expertise to basketball.",
    image: "https://i.cbc.ca/1.7473308.1741024698!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/serena-williams-temp.jpg?im=Resize%3D780",
    category: "Sports",
    date: "Mar 8, 2025",
    author: "Jessica Taylor",
    content: "Tennis icon Serena Williams is expanding her influence in professional sports by joining the ownership group of WNBA expansion team Toronto Tempo. Williams, who dominated women's tennis for over two decades with 23 Grand Slam singles titles, brings valuable experience as both an elite athlete and successful businesswoman to the franchise. Her involvement signals growing momentum for women's professional basketball in Canada.",
    readTime: "4 min read",
    relatedArticles: [1, 7]
  },
  {
    id: 6,
    title: "New climate report warns of escalating risks for coastal communities",
    description: "A comprehensive climate study highlights increased flooding threats for coastal areas over the next decade.",
    image: "/placeholder.svg",
    category: "Environment",
    date: "Mar 7, 2025",
    author: "Dr. Robert Miller",
    content: "A newly released climate report paints a concerning picture for coastal communities worldwide. The study, compiled by an international team of researchers, indicates that sea levels are rising faster than previously projected, leading to increased risks of flooding and erosion. The report calls for urgent adaptation measures and emphasizes that communities must prepare for more frequent extreme weather events in the coming decades.",
    readTime: "7 min read",
    relatedArticles: [8, 4]
  },
  {
    id: 7,
    title: "Tech giant unveils revolutionary AI assistant with unprecedented reasoning capabilities",
    description: "The latest AI system demonstrates advanced problem-solving skills that rival human experts.",
    image: "/placeholder.svg",
    category: "Technology",
    date: "Mar 6, 2025",
    author: "Thomas Wright",
    content: "A leading technology company has revealed its most advanced artificial intelligence assistant to date, featuring remarkable reasoning capabilities that approach human-level performance in complex tasks. The system, which underwent extensive testing across multiple domains including medicine, law, and engineering, demonstrated an ability to synthesize information and draw conclusions that surprised even its developers. Experts suggest this represents a significant leap forward in AI development.",
    readTime: "5 min read",
    relatedArticles: [3, 8]
  },
  {
    id: 8,
    title: "Global economy shows signs of recovery amid policy shifts",
    description: "Economic indicators point to growth as central banks adjust interest rates and inflation cools.",
    image: "/placeholder.svg",
    category: "Business",
    date: "Mar 5, 2025",
    author: "Jennifer Lopez",
    content: "After a challenging period of inflation and market volatility, the global economy appears to be entering a recovery phase according to multiple economic indicators. Central banks have begun adjusting interest rates as inflation pressures ease, and consumer confidence is gradually rising. Analysts note that while challenges remain, particularly in supply chain resilience and employment markets, the overall trajectory suggests a more stable economic environment may be emerging.",
    readTime: "6 min read",
    relatedArticles: [6, 7]
  }
];

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const newsId = parseInt(id || '0');
  const newsItem = allNewsItems.find(item => item.id === newsId);
  
  if (!newsItem) {
    return (
      <div className="min-h-screen bg-[#F4F3F0]">
        <YahooHeader />
        <div className="container mx-auto py-16 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/news')}>
              <ArrowLeft size={16} className="mr-2" />
              Back to All News
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  // Find related articles
  const relatedArticles = newsItem.relatedArticles
    ? newsItem.relatedArticles.map(id => allNewsItems.find(item => item.id === id)).filter(Boolean)
    : [];
  
  return (
    <div className="min-h-screen bg-[#F4F3F0]">
      <YahooHeader />
      
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/news')}
            className="mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to All News
          </Button>
          
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <img 
                src={newsItem.image} 
                alt={newsItem.title} 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-yahoo-purple text-white inline-block mb-4 w-auto self-start">
                  {newsItem.category}
                </span>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">{newsItem.title}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/80">
                  <span>By {newsItem.author}</span>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {newsItem.date}
                  </div>
                  <span>{newsItem.readTime}</span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <ThumbsUp size={16} />
                    Like
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <MessageSquare size={16} />
                    Comment
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <Bookmark size={16} />
                    Save
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <Share2 size={16} />
                    Share
                  </Button>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg font-medium mb-4">{newsItem.description}</p>
                {newsItem.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
              
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                <div>
                  <h4 className="font-semibold">Author</h4>
                  <p>{newsItem.author}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Bookmark size={16} />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Share2 size={16} />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
        
        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                article && (
                  <Link to={`/news/${article.id}`} key={article.id}>
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-video w-full overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium px-2 py-1 rounded bg-yahoo-purple text-white">
                            {article.category}
                          </span>
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar size={12} className="mr-1" />
                            {article.date}
                          </div>
                        </div>
                        <h2 className="text-lg font-bold mb-2 line-clamp-2">{article.title}</h2>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{article.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetailPage;
