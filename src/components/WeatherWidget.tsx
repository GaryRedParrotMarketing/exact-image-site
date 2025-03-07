
import React from 'react';
import { Info } from 'lucide-react';

const WeatherWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-base">Weather</h2>
        <div className="text-xs text-gray-500 flex items-center">
          Newark <Info size={14} className="ml-1" />
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <img 
            src="/placeholder.svg" 
            alt="Partly Sunny" 
            className="weather-icon" 
          />
          <div className="ml-2">
            <span className="text-4xl font-bold">39°</span>
          </div>
        </div>
        <div className="text-xs text-gray-600 text-right">
          <p>Mostly sunny, feels like 37°</p>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-2 mb-3">
        <div className="text-center">
          <div className="text-xs text-gray-500">TODAY</div>
          <img src="/placeholder.svg" alt="Weather" className="mx-auto w-8 h-8" />
          <div className="text-xs font-semibold">39°</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500">WED</div>
          <img src="/placeholder.svg" alt="Weather" className="mx-auto w-8 h-8" />
          <div className="text-xs font-semibold">52°</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500">THU</div>
          <img src="/placeholder.svg" alt="Weather" className="mx-auto w-8 h-8" />
          <div className="text-xs font-semibold">62°</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500">FRI</div>
          <img src="/placeholder.svg" alt="Weather" className="mx-auto w-8 h-8" />
          <div className="text-xs font-semibold">54°</div>
        </div>
      </div>
      
      <div className="flex justify-between items-center text-xs">
        <div className="text-xs text-gray-500">Powered by AccuWeather</div>
        <a href="#" className="text-blue-600 hover:underline text-xs">Full Forecast</a>
      </div>
    </div>
  );
};

export default WeatherWidget;
