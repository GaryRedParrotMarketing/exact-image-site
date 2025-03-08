
import React from 'react';
import YahooHeader from '@/components/YahooHeader';
import ScrollSection from '@/components/ScrollSection';
import MainCarousel from '@/components/MainCarousel';
import TrendingNews from '@/components/TrendingNews';
import WeatherWidget from '@/components/WeatherWidget';
import TopDeals from '@/components/TopDeals';
import ForYouSection from '@/components/ForYouSection';
import TrendingVideos from '@/components/TrendingVideos';
import ShoppingSection from '@/components/ShoppingSection';
import PopularStories from '@/components/PopularStories';
import ExploreMore from '@/components/ExploreMore';
import YahooFooter from '@/components/YahooFooter';
import { Bell, PieChart, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className='min-h-screen bg-[#F4F3F0] antialiased'>
      <YahooHeader />
      <ScrollSection />
      <div className='container mx-auto pb-4 px-4 md:px-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
          {/* Left Column */}
          <div className='lg:col-span-3'>
            <div className='space-y-4'>
              <ExploreMore />
              <WeatherWidget />
            </div>
          </div>

          {/* Middle Column */}
          <div className='lg:col-span-6 space-y-4'>
            <MainCarousel />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='bg-white rounded-lg p-4 shadow-sm flex items-start'>
                <div className='bg-[#f0f3f5] p-2 rounded mr-3'>
                  <Zap size={14} className='text-yahoo-purple' />
                </div>
                <div className='text-left'>
                  <div className='text-xs text-gray-700'>
                    AI Quiz: What was the big headline at the Oscars?
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-lg p-4 shadow-sm flex items-start'>
                <div className='bg-[#f0f3f5] p-2 rounded mr-3'>
                  <PieChart size={14} className='text-yahoo-purple' />
                </div>
                <div className='text-left'>
                  <div className='text-xs text-gray-700'>What to Watch</div>
                </div>
              </div>

              <div className='bg-white rounded-lg p-4 shadow-sm flex items-start'>
                <div className='bg-[#f0f3f5] p-2 rounded mr-3'>
                  <Zap size={14} className='text-yahoo-purple' />
                </div>
                <div className='text-left'>
                  <div className='text-xs text-gray-700'>
                    This Week in History
                  </div>
                </div>
              </div>
            </div>

            <ForYouSection />
            <TrendingVideos />
            <ShoppingSection />
            <PopularStories />
          </div>

          {/* Right Column */}
          <div className='lg:col-span-3 space-y-4'>
            <TrendingNews />
            <TopDeals />
            <YahooFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
