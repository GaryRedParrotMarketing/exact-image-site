import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const scrollItems = [
  {
    id: 1,
    icon: '♓',
    title: 'Pisces',
    description: 'Expect a little sprinkling of romance...',
    hasDropdown: true,
  },
  {
    id: 2,
    icon: '🤖',
    title: 'AI Chat:',
    description: 'What were the big moments at the Oscars?',
    hasDropdown: false,
  },
  {
    id: 3,
    icon: '🎬',
    title: 'What to Watch',
    description: 'Yellowjackets',
    hasDropdown: false,
  },
  {
    id: 4,
    icon: '📆',
    title: 'This Week in History',
    description: 'Yahoo is incorporated',
    hasDropdown: false,
  },
  {
    id: 5,
    icon: '🎮',
    title: 'Play Solitaire Classic',
    description: '52.2K people playing',
    hasDropdown: false,
  },
  {
    id: 6,
    icon: '⚾',
    title: 'ATH 3',
    description: 'End 5th',
    hasDropdown: false,
  },
  {
    id: 7,
    icon: '🏈',
    title: '4 CWS',
    description: 'End 5th',
    hasDropdown: false,
  },
];

const ScrollSection: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 200;
      if (direction === 'left') {
        current.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
        });
      } else {
        current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className='relative border-b border-gray-100 py-2 bg-transparent'>
      <div className='container mx-auto relative'>
        <button
          onClick={() => scroll('left')}
          className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md'
          aria-label='Scroll left'
        >
          <ChevronLeft size={16} className='text-gray-600' />
        </button>

        <div
          ref={scrollRef}
          className='flex overflow-x-auto py-2 px-8 scrollbar-hide no-scrollbar'
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {scrollItems.map((item, index) => (
            <div key={item.id} className='flex-shrink-0'>
              <div
                className={`flex items-center space-x-2 cursor-pointer hover:bg-gray-50 bg-white px-3 py-2 rounded-lg ${
                  index < scrollItems.length - 1 ? 'mr-5' : ''
                }`}
              >
                <span className='text-2xl'>{item.icon}</span>
                <div className='flex flex-col min-w-[120px]'>
                  <div className='flex items-center'>
                    <span className='font-medium text-sm'>{item.title}</span>
                    {item.hasDropdown && (
                      <span className='ml-1 text-xs'>▾</span>
                    )}
                  </div>
                  <span className='text-xs text-gray-600 line-clamp-1'>
                    {item.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md'
          aria-label='Scroll right'
        >
          <ChevronRight size={16} className='text-gray-600' />
        </button>
      </div>
    </div>
  );
};

export default ScrollSection;
