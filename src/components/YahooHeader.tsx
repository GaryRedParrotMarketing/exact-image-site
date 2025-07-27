
import React from 'react';
import { Search, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const YahooHeader: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const handleAuth = () => {
    if (isAuthenticated) {
      logout();
    } else {
      navigate('/login');
    }
  };

  return (
    <header className='bg-white py-2 border-b border-gray-100'>
      <div className='container mx-auto px-4 md:px-10 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <a href='/' className='text-yahoo-purple font-bold text-2xl md:text-3xl'>
            NJ Today
          </a>
        </div>

        <div className='hidden md:flex flex-1 max-w-xl mx-5'>
          <div className='relative w-full'>
            <input
              type='text'
              placeholder='Search New Jersey news'
              className='w-full px-4 py-2 bg-[#f5f8fa] border border-[#e0e4e9] rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-yahoo-purple'
            />
            <button className='absolute right-0 top-0 h-full bg-yahoo-purple text-white px-4 rounded-r-full'>
              <Search size={16} />
            </button>
          </div>
        </div>

        <div className='flex items-center gap-2 md:gap-4'>
          <Button
            variant='ghost'
            size='sm'
            className='rounded-full flex items-center text-xs md:text-sm'
            onClick={() => navigate('/dashboard')}
          >
            <LayoutDashboard size={14} className="mr-1 md:mr-1.5" /> 
            <span className="hidden sm:inline">Publishers</span>
          </Button>
          
          <div className='flex items-center gap-2'>
            {isAuthenticated ? (
              <Button
                variant='outline'
                size='sm'
                className='rounded-full text-xs md:text-sm'
                onClick={handleAuth}
              >
                <span className="hidden sm:inline">Sign out</span>
                <span className="sm:hidden">Out</span>
              </Button>
            ) : (
              <Button
                variant='outline'
                size='sm'
                className='rounded-full text-xs md:text-sm'
                onClick={handleAuth}
              >
                <span className="hidden sm:inline">Publisher Sign in</span>
                <span className="sm:hidden">Sign in</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default YahooHeader;
