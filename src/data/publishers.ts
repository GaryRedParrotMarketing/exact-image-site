
export type Publisher = {
  id: string;
  name: string;
  company: string;
  location: string;
  description: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  articles?: Article[];
};

export type Article = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  publisherId: string;
  publishedDate: string;
  image?: string;
  category?: string;
};

export const publishers: Publisher[] = [
  {
    id: "afro-news",
    name: "Frances \"Toni\" Draper",
    company: "AFRO News",
    location: "Baltimore, MD, and Washington D.C.",
    description: "The AFRO-American Newspaper (the AFRO), with offices in Baltimore, MD and Washington, D.C., is the longest continuously running family-owned newspaper in the United States and was rated by Nielsen as the nation's #1 Black newspaper. For 128 years, The AFRO has acknowledged, celebrated, and preserved African-American history and is the premier source of information for our communities locally and globally.",
    socialMedia: {
      facebook: "https://facebook.com/afronews",
      twitter: "https://twitter.com/afronews",
      instagram: "https://instagram.com/afronews"
    },
    articles: []
  },
  {
    id: "atlanta-voice",
    name: "Janis Ware",
    company: "The Atlanta Voice",
    location: "Atlanta, GA",
    description: "For more than 50 years, The Atlanta Voice has ably provided a voice for the voiceless without fear or favor and is proud to continue its legacy as a voice for those who still need a platform to plead their causes. It is the largest audited African American community newspaper in Georgia with over 600 distribution locations throughout the Atlanta metropolitan area, with digital distribution on www.theatlantavoice.com, email, social and mobile apps. The Atlanta Voice has continued to evolve as it redefines, redirects and refocuses its efforts to better connect with the community it serves.",
    socialMedia: {
      facebook: "https://facebook.com/theatlantavoice",
      twitter: "https://twitter.com/theatlantavoice"
    },
    articles: []
  },
  {
    id: "dallas-weekly",
    name: "Patrick Washington",
    company: "Dallas Weekly",
    location: "Dallas, TX",
    description: "Continuously published, without missing a single issue for more than 60 years, the Dallas Weekly has emerged as the leading most trusted voice of the African American community in north Texas. The Dallas Weekly has been recognized and awarded for its impactful journalistic excellence not only locally, but also statewide, regionally and nationally; more than any other Black owned media enterprise of its kind in the area.",
    socialMedia: {
      facebook: "https://facebook.com/dallasweekly",
      twitter: "https://twitter.com/dallasweekly",
      youtube: "https://youtube.com/dallasweekly",
      instagram: "https://instagram.com/dallasweekly"
    },
    articles: []
  },
  {
    id: "houston-defender",
    name: "Sonny Messiah Jiles",
    company: "Houston Defender",
    location: "Houston, TX",
    description: "Houston is home to nearly 1 million Blacks. It is consistently ranked as one of the top ten cities based on median household income, households earning more than $100,000 annually, business ownership, college graduates and homeowners. Additionally, we have the lowest unemployment and home loan rejection rates. From 1930 to today, the Defender has served the Houston area as a trusted and credible source of information.",
    socialMedia: {
      facebook: "https://facebook.com/houstondefender",
      twitter: "https://twitter.com/houstondefender",
      instagram: "https://instagram.com/houstondefender",
      youtube: "https://youtube.com/houstondefender"
    },
    articles: []
  },
  {
    id: "michigan-chronicle",
    name: "Hiram Jackson",
    company: "Michigan Chronicle",
    location: "Detroit, MI",
    description: "The Michigan Chronicle is a news, information, and events company that covers the interests of the African American community. Leaders and readers in metropolitan Detroit look to the Michigan Chronicle to stay informed about issues that impact their lives. As the voice of the community for more than 80 years, we take great pride in having access to the grassroots community as well as connections and established relationships with influencers and opinion leaders.",
    socialMedia: {
      facebook: "https://facebook.com/michiganchronicle",
      twitter: "https://twitter.com/michiganchronicle"
    },
    articles: []
  },
  {
    id: "new-york-amsterdam-news",
    name: "Elinor Tatum",
    company: "New York Amsterdam News",
    location: "New York, NY",
    description: "The New York Amsterdam News was started more than a century ago, in 1909, with a $10 investment. It has gone on to become one of the most important Black newspapers in the country and today remains one of the most influential Black-owned and -operated media businesses in the nation, if not the world. While the Amsterdam News is \"The New Black View,\" it remains keenly aware and respectful of the fact that it serves an increasingly multi-racial and multi-ethnic community in New York and beyond.",
    socialMedia: {
      facebook: "https://facebook.com/nyamsterdamnews",
      twitter: "https://twitter.com/nyamsterdamnews"
    },
    articles: []
  },
  {
    id: "sacramento-observer",
    name: "Larry Lee",
    company: "Sacramento Observer",
    location: "Sacramento, CA",
    description: "Established in 1962, The Sacramento Observer has been one of the most decorated publications in the history of the Black Press. Over the course of its history, The Observer has received nearly 700 national, regional and local awards for journalism excellence and community service. The Observer has constantly challenged itself to evolve and deliver educational, empowering and enlightening information to its steady-growing audience through a variety of products. Over the last 35 years, Sacramento's Black community has grown by more than 250 percent, blossoming into one of the most important markets in the nation.",
    socialMedia: {
      facebook: "https://facebook.com/sacramentoobserver",
      twitter: "https://twitter.com/sacramentoobserver"
    },
    articles: []
  },
  {
    id: "seattle-medium",
    name: "Chris Bennett",
    company: "Seattle Medium",
    location: "Seattle, WA",
    description: "\"We produce and distribute the publications of choice that residents of the Seattle, Tacoma, and Portland areas read to stay informed regarding issues and events that affect and enhance the quality of life in the African American and minority communities.\"",
    socialMedia: {
      facebook: "https://facebook.com/seattlemedium",
      twitter: "https://twitter.com/seattlemedium"
    },
    articles: []
  },
  {
    id: "st-louis-american",
    name: "Donald M Suggs",
    company: "St. Louis American",
    location: "St. Louis, MO",
    description: "The only local African-American newspaper continuously published since 1928, distributed at more than 845 locations, and the longest continuously published weekly newspaper in the St. Louis area, The St. Louis American newspaper has emerged as the single largest weekly newspaper in the entire state of Missouri (now distributing 60,000 print copies every Thursday).",
    socialMedia: {
      facebook: "https://facebook.com/stlouisamerican",
      twitter: "https://twitter.com/stlouisamerican"
    },
    articles: []
  },
  {
    id: "washington-informer",
    name: "Denise Rolark-Barnes",
    company: "Washington Informer",
    location: "Washington D.C.",
    description: "\"Now published by Denise Rolark Barnes, The Washington Informer Newspaper Co. Inc. is a multimedia organization founded on Oct. 16, 1964, by Dr. Calvin Rolark in order to highlight positive images of African Americans. We continue to only do positive news, as we strive to EDUCATE, EMPOWER, and INFORM.\"",
    socialMedia: {
      facebook: "https://facebook.com/washingtoninformer",
      twitter: "https://twitter.com/washingtoninformer",
      instagram: "https://instagram.com/washingtoninformer"
    },
    articles: []
  }
];
