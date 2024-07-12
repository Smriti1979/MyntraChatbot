// src/MainContent.js
import React from 'react';

const MainContent = ({ name }) => {
  return (
    <div className="flex-1 p-8">
      <div className="text-3xl font-bold text-pink-500">
        Hey <span className="text-pink-700">{name}!</span>
      </div>
      <p className="text-gray-700 mt-2">
        Let's unlock your best self with our playful color and body analysis tests!
      </p>

      <div className="mt-8 flex gap-8">
        <div className="flex-1 bg-white border-2 border-gray-300 rounded-lg p-4 text-center shadow-md">
          <img src="path_to_color_analysis_image.png" alt="Color Analysis" className="mx-auto" />
          <h3 className="mt-4 text-lg font-semibold">Color Analysis Test</h3>
        </div>
        <div className="flex-1 bg-white border-2 border-gray-300 rounded-lg p-4 text-center shadow-md">
          <img src="path_to_body_analysis_image.png" alt="Body Analysis" className="mx-auto" />
          <h3 className="mt-4 text-lg font-semibold">Body Analysis Test</h3>
        </div>
      </div>

      <div className="mt-8 flex items-center">
        <input
          type="text"
          placeholder="Ask for best recommendation"
          className="flex-1 p-4 border-2 border-gray-300 rounded-l-lg focus:outline-none focus:border-pink-500"
        />
        <button className="p-4 bg-pink-500 text-white rounded-r-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.93 17.07a1 1 0 011.414 0L10 22.828l5.657-5.657a1 1 0 011.414 1.414l-6.364 6.364a1 1 0 01-1.414 0L2.93 18.485a1 1 0 010-1.414z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainContent;
