
import React from 'react';

const YahooFooter: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex flex-col space-y-4">
        <div>
          <h3 className="font-semibold text-sm mb-2">What do you think of the new Yahoo?</h3>
          <p className="text-xs text-gray-500">We're working to improve your experience. Let us know what you think could be better.</p>
          <button className="mt-2 bg-[#f0f3f5] hover:bg-[#e4e8ec] text-xs px-3 py-1.5 rounded">Share feedback</button>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Wake up with Yahoo</h3>
          <p className="text-xs text-gray-500">Get the latest headlines delivered to your inbox daily.</p>
          <div className="flex items-center mt-2">
            <button className="bg-[#f0f3f5] hover:bg-[#e4e8ec] text-xs px-3 py-1.5 rounded flex items-center">
              <img src="/placeholder.svg" alt="Finance Morning Brief" className="w-6 h-6 mr-2" />
              <div className="text-left">
                <div className="font-medium">Finance Morning Brief</div>
                <div className="text-[10px] text-gray-500">What you need to know for your money</div>
              </div>
              <span className="ml-auto">→</span>
            </button>
          </div>
          <div className="flex items-center mt-2">
            <button className="bg-[#f0f3f5] hover:bg-[#e4e8ec] text-xs px-3 py-1.5 rounded flex items-center">
              <img src="/placeholder.svg" alt="Yahoo Sports AM" className="w-6 h-6 mr-2" />
              <div className="text-left">
                <div className="font-medium">Yahoo Sports AM</div>
                <div className="text-[10px] text-gray-500">All the sports, all in one email, 6x/week</div>
              </div>
              <span className="ml-auto">→</span>
            </button>
          </div>
          <div className="flex items-center mt-2">
            <button className="bg-[#f0f3f5] hover:bg-[#e4e8ec] text-xs px-3 py-1.5 rounded flex items-center">
              <img src="/placeholder.svg" alt="The Toast" className="w-6 h-6 mr-2" />
              <div className="text-left">
                <div className="font-medium">The Toast</div>
                <div className="text-[10px] text-gray-500">Rise and shine with news, life and more</div>
              </div>
              <span className="ml-auto">→</span>
            </button>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Weekly Newsletter</h3>
          <div className="flex items-center mt-2">
            <button className="bg-[#f0f3f5] hover:bg-[#e4e8ec] text-xs px-3 py-1.5 rounded flex items-center">
              <img src="/placeholder.svg" alt="In this" className="w-6 h-6 mr-2" />
              <div className="text-left">
                <div className="font-medium">In this:</div>
                <div className="text-[10px] text-gray-500">Pop what to watch, listen to and read about in entertainment</div>
              </div>
              <span className="ml-auto">→</span>
            </button>
          </div>
        </div>
        
        <div>
          <div className="mb-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-2 border border-gray-300 rounded text-sm" 
            />
            <button className="mt-2 bg-yahoo-purple hover:bg-[#3b0088] text-white text-xs px-3 py-1.5 rounded w-full">
              Sign up
            </button>
          </div>
          <p className="text-[10px] text-gray-500">
            By signing up, you agree to our <a href="#" className="text-yahoo-blue hover:underline">Terms</a> and <a href="#" className="text-yahoo-blue hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default YahooFooter;
