
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
      
      {/* Mobile-first container with proper spacing */}
      <div className='w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-4'>
        <div className='flex flex-col lg:grid lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6'>
          
          {/* Left Sidebar - Desktop only */}
          <aside className='hidden lg:block lg:col-span-3'>
            <div className='space-y-4 sticky top-4'>
              <ExploreMore />
              <WeatherWidget />
            </div>
          </aside>

          {/* Main Content Column */}
          <main className='w-full lg:col-span-6'>
            <div className='space-y-4'>
              {/* Hero Carousel */}
              <MainCarousel />

              {/* Quick Action Cards */}
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                <div className='bg-white rounded-lg p-3 sm:p-4 shadow-sm flex items-start'>
                  <div className='bg-[#f0f3f5] p-2 rounded mr-3 flex-shrink-0'>
                    <Zap size={14} className='text-yahoo-purple' />
                  </div>
                  <div className='text-left min-w-0 flex-1'>
                    <div className='text-xs sm:text-sm text-gray-700 leading-tight'>
                      AI Quiz: What was the big headline at the Oscars?
                    </div>
                  </div>
                </div>

                <div className='bg-white rounded-lg p-3 sm:p-4 shadow-sm flex items-start'>
                  <div className='bg-[#f0f3f5] p-2 rounded mr-3 flex-shrink-0'>
                    <PieChart size={14} className='text-yahoo-purple' />
                  </div>
                  <div className='text-left min-w-0 flex-1'>
                    <div className='text-xs sm:text-sm text-gray-700'>What to Watch</div>
                  </div>
                </div>

                <div className='bg-white rounded-lg p-3 sm:p-4 shadow-sm flex items-start sm:col-span-2 lg:col-span-1'>
                  <div className='bg-[#f0f3f5] p-2 rounded mr-3 flex-shrink-0'>
                    <Zap size={14} className='text-yahoo-purple' />
                  </div>
                  <div className='text-left min-w-0 flex-1'>
                    <div className='text-xs sm:text-sm text-gray-700 leading-tight'>
                      This Week in History
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Sections */}
              <ForYouSection />
              <TrendingVideos />
              <ShoppingSection />
              <PopularStories />
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className='w-full lg:col-span-3'>
            <div className='space-y-4'>
              <TrendingNews />
              <TopDeals />
              
              {/* Mobile: Show left sidebar content here */}
              <div className='lg:hidden space-y-4'>
                <ExploreMore />
                <WeatherWidget />
              </div>
              
              <YahooFooter />
            </div>
          </aside>
          
        </div>
      </div>
    </div>
  );
};

export default Index;
