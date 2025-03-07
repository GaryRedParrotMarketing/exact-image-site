
import React from 'react';
import { Search } from 'lucide-react';
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
      <div className='container mx-auto md:px-10 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <a href='/' className='text-yahoo-purple font-bold text-3xl'>
            Afroist
          </a>
        </div>

        <div className='flex-1 max-w-xl mx-5'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search the web'
              className='w-full px-4 py-2 bg-[#f5f8fa] border border-[#e0e4e9] rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-yahoo-purple'
            />
            <button className='absolute right-0 top-0 h-full bg-yahoo-purple text-white px-4 rounded-r-full'>
              <Search size={16} />
            </button>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <nav className='flex items-center gap-6'>
            <a href='/news' className='text-sm hover:text-yahoo-purple'>
              News
            </a>
            <a href='/finance' className='text-sm hover:text-yahoo-purple'>
              Finance
            </a>
            <a href='/sports' className='text-sm hover:text-yahoo-purple'>
              Sports
            </a>
            <div className='relative group'>
              <a
                href='#'
                className='text-sm hover:text-yahoo-purple flex items-center'
              >
                More <span className='ml-1'>▾</span>
              </a>
            </div>
          </nav>

          <div className='flex items-center gap-2'>
            {isAuthenticated ? (
              <>
                <Button
                  variant='outline'
                  size='sm'
                  className='rounded-full border-yahoo-purple text-yahoo-purple hover:bg-yahoo-purple hover:text-white'
                  onClick={() => navigate('/dashboard/mail')}
                >
                  <span className='material-icons text-sm mr-1'>person</span>
                  Mail
                </Button>
                <Button 
                  variant='outline' 
                  size='sm' 
                  className='rounded-full'
                  onClick={handleAuth}
                >
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant='outline'
                  size='sm'
                  className='rounded-full border-yahoo-purple text-yahoo-purple hover:bg-yahoo-purple hover:text-white'
                  onClick={() => navigate('/login')}
                >
                  <span className='material-icons text-sm mr-1'>person</span>
                  Mail
                </Button>
                <Button 
                  variant='outline' 
                  size='sm' 
                  className='rounded-full'
                  onClick={handleAuth}
                >
                  Sign in
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default YahooHeader;
