// Browser-compatible RSS parsing using native DOMParser

interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  creator?: string;
  content?: string;
  contentSnippet?: string;
  guid?: string;
  categories?: string[];
  isoDate?: string;
}

interface ParsedNewsItem {
  id: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  category: string;
  image?: string;
}

export class GoogleNewsRSSService {
  private static parseRSSString(rssString: string): RSSItem[] {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(rssString, 'text/xml');
      const items = doc.querySelectorAll('item');
      
      return Array.from(items).map(item => {
        const title = item.querySelector('title')?.textContent || '';
        const link = item.querySelector('link')?.textContent || '';
        const pubDate = item.querySelector('pubDate')?.textContent || '';
        const description = item.querySelector('description')?.textContent || '';
        const guid = item.querySelector('guid')?.textContent || '';
        
        return {
          title,
          link,
          pubDate,
          content: description,
          contentSnippet: description,
          guid
        };
      });
    } catch (error) {
      console.error('Error parsing RSS:', error);
      return [];
    }
  }

  // Google News RSS URLs for New Jersey content
  private static readonly RSS_URLS = {
    general: 'https://news.google.com/rss/search?q=New+Jersey&hl=en-US&gl=US&ceid=US:en',
    business: 'https://news.google.com/rss/search?q=New+Jersey+business&hl=en-US&gl=US&ceid=US:en',
    sports: 'https://news.google.com/rss/search?q=New+Jersey+sports&hl=en-US&gl=US&ceid=US:en',
    politics: 'https://news.google.com/rss/search?q=New+Jersey+politics&hl=en-US&gl=US&ceid=US:en',
    weather: 'https://news.google.com/rss/search?q=New+Jersey+weather&hl=en-US&gl=US&ceid=US:en',
    education: 'https://news.google.com/rss/search?q=New+Jersey+education&hl=en-US&gl=US&ceid=US:en',
    shore: 'https://news.google.com/rss/search?q=Jersey+Shore&hl=en-US&gl=US&ceid=US:en',
    newark: 'https://news.google.com/rss/search?q=Newark+New+Jersey&hl=en-US&gl=US&ceid=US:en',
    atlanticCity: 'https://news.google.com/rss/search?q=Atlantic+City&hl=en-US&gl=US&ceid=US:en'
  };

  private static async fetchRSSFeed(url: string): Promise<RSSItem[]> {
    try {
      // Use a CORS proxy service to bypass CORS restrictions
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
      const response = await fetch(proxyUrl);
      const data = await response.json();
      
      if (data.contents) {
        return this.parseRSSString(data.contents);
      }
      return [];
    } catch (error) {
      console.error('Error fetching RSS feed:', error);
      return [];
    }
  }

  private static parseNewsItem(item: RSSItem, category: string = 'NEWS'): ParsedNewsItem {
    // Extract source from Google News format
    const source = item.creator || this.extractSourceFromTitle(item.title) || 'Google News';
    
    return {
      id: item.guid || item.link || Math.random().toString(36),
      title: this.cleanTitle(item.title),
      description: item.contentSnippet || item.content || '',
      link: item.link || '',
      pubDate: item.pubDate || new Date().toISOString(),
      source: source,
      category: category.toUpperCase(),
      image: this.extractImageUrl(item)
    };
  }

  private static extractSourceFromTitle(title: string): string {
    // Google News titles often have format "Title - Source"
    const parts = title.split(' - ');
    if (parts.length > 1) {
      return parts[parts.length - 1];
    }
    return '';
  }

  private static cleanTitle(title: string): string {
    // Remove source from title if present
    const parts = title.split(' - ');
    return parts.length > 1 ? parts.slice(0, -1).join(' - ') : title;
  }

  private static extractImageUrl(item: any): string | undefined {
    // Try to extract image from media content or use placeholder
    if (item['media:content'] && item['media:content']['$'] && item['media:content']['$'].url) {
      return item['media:content']['$'].url;
    }
    if (item['media:thumbnail'] && item['media:thumbnail']['$'] && item['media:thumbnail']['$'].url) {
      return item['media:thumbnail']['$'].url;
    }
    return undefined;
  }

  public static async getGeneralNews(limit: number = 10): Promise<ParsedNewsItem[]> {
    const items = await this.fetchRSSFeed(this.RSS_URLS.general);
    return items.slice(0, limit).map(item => this.parseNewsItem(item, 'NEWS'));
  }

  public static async getTrendingNews(limit: number = 5): Promise<ParsedNewsItem[]> {
    const items = await this.fetchRSSFeed(this.RSS_URLS.general);
    return items.slice(0, limit).map(item => this.parseNewsItem(item, 'TRENDING'));
  }

  public static async getBusinessNews(limit: number = 5): Promise<ParsedNewsItem[]> {
    const items = await this.fetchRSSFeed(this.RSS_URLS.business);
    return items.slice(0, limit).map(item => this.parseNewsItem(item, 'BUSINESS'));
  }

  public static async getSportsNews(limit: number = 5): Promise<ParsedNewsItem[]> {
    const items = await this.fetchRSSFeed(this.RSS_URLS.sports);
    return items.slice(0, limit).map(item => this.parseNewsItem(item, 'SPORTS'));
  }

  public static async getPoliticsNews(limit: number = 5): Promise<ParsedNewsItem[]> {
    const items = await this.fetchRSSFeed(this.RSS_URLS.politics);
    return items.slice(0, limit).map(item => this.parseNewsItem(item, 'POLITICS'));
  }

  public static async getShoreNews(limit: number = 5): Promise<ParsedNewsItem[]> {
    const items = await this.fetchRSSFeed(this.RSS_URLS.shore);
    return items.slice(0, limit).map(item => this.parseNewsItem(item, 'SHORE'));
  }

  public static async getWeatherNews(limit: number = 3): Promise<ParsedNewsItem[]> {
    const items = await this.fetchRSSFeed(this.RSS_URLS.weather);
    return items.slice(0, limit).map(item => this.parseNewsItem(item, 'WEATHER'));
  }

  public static async getEducationNews(limit: number = 3): Promise<ParsedNewsItem[]> {
    const items = await this.fetchRSSFeed(this.RSS_URLS.education);
    return items.slice(0, limit).map(item => this.parseNewsItem(item, 'EDUCATION'));
  }

  public static async getCategoryNews(category: 'general' | 'business' | 'sports' | 'politics' | 'shore' | 'newark' | 'atlanticCity', limit: number = 10): Promise<ParsedNewsItem[]> {
    const items = await this.fetchRSSFeed(this.RSS_URLS[category]);
    return items.slice(0, limit).map(item => this.parseNewsItem(item, category.toUpperCase()));
  }

  public static async getMixedNews(limit: number = 20): Promise<ParsedNewsItem[]> {
    try {
      // Fetch from multiple categories in parallel
      const [general, business, sports, shore] = await Promise.all([
        this.fetchRSSFeed(this.RSS_URLS.general),
        this.fetchRSSFeed(this.RSS_URLS.business),
        this.fetchRSSFeed(this.RSS_URLS.sports),
        this.fetchRSSFeed(this.RSS_URLS.shore)
      ]);

      const allItems: ParsedNewsItem[] = [
        ...general.slice(0, 8).map(item => this.parseNewsItem(item, 'TRENDING NJ')),
        ...business.slice(0, 4).map(item => this.parseNewsItem(item, 'NJ BUSINESS')),
        ...sports.slice(0, 4).map(item => this.parseNewsItem(item, 'NJ SPORTS')),
        ...shore.slice(0, 4).map(item => this.parseNewsItem(item, 'SHORE'))
      ];

      // Sort by date and return limited results
      return allItems
        .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
        .slice(0, limit);
    } catch (error) {
      console.error('Error fetching mixed news:', error);
      return [];
    }
  }

  public static formatTimeAgo(dateString: string): string {
    const now = new Date();
    const date = new Date(dateString);
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }
  }
}