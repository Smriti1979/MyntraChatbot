// src/MainContent.js
import React from 'react';
import color from '../assets/color.png';
import body1 from '../assets/body_1.png';
import body2 from '../assets/body_2.png';
const MainContent = ({ name }) => {
  return (
    <div className="flex-1 p-8">
      <div className="text-6xl font-bold text-pink-500">
        Hey <span className="text-pink-700">{name}!</span>
      </div>
      <p className="text-gray-700 mt-2">
        Let's unlock your best self with our playful color and body analysis tests!
      </p>

      <div className="flex justify-center mt-8">
        <div className="flex gap-8">
          <div className="flex-1 border border-gray-300 rounded-3xl p-4 text-center shadow-md w-[400px] h-[250px] relative group">
            <h3 className="text-lg font-bold">Color Analysis Test</h3>
            <br/>
            <img src={color} alt="Color Analysis" className="mx-auto mt-4" />
            <style jsx>{`
              .group:hover {
                background-image: linear-gradient(to bottom, #feebf8 0%, #fff4ea 90%);
              }
              .group:active {
                background-image: linear-gradient(to bottom, #fcd5f0 0%, #fae2cc 90%);
              }
            `}</style>
          </div>
          <div className="flex-1 border border-gray-300 rounded-3xl p-4 text-center shadow-md w-[400px] h-[250px] relative group">
            <h3 className="text-lg font-bold">Body Analysis Test</h3>
            <div className="flex justify-center">
              <img src={body2} alt="Body Analysis" className="mx-auto mt-4 w-[180px]" /> 
              <img src={body1} alt="Body Analysis" className="mx-auto mt-4 w-[190px]" />
            </div>
            <style jsx>{`
              .group:hover {
                background-image: linear-gradient(to bottom, #feebf8 0%, #fff4ea 90%);
              }
              .group:active {
                background-image: linear-gradient(to bottom, #fcd5f0 0%, #fae2cc 90%);
              }
            `}</style>
          </div>
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
