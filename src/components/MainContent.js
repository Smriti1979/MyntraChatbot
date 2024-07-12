import React from 'react';
import color from '../assets/color.png';
import body3 from '../assets/body_3.png';
const MainContent = ({ name }) => {
  return (
    <div className="flex-1 p-8">
      <div className="text-6xl font-bold text-pink-500 text-center mb-8">
        Hey <span className="text-pink-700">{name}!</span>
      </div>
      <p className="text-gray-700 text-2xl text-center mb-8">
        Let's unlock your best self with our playful color and body analysis tests!
      </p>
      <div className="flex justify-center mt-20">
        <div className="flex gap-8">
          <div className="flex-1 border border-gray-300 rounded-3xl p-4 text-center shadow-md max-w-[30vw] h-[30vh] md:w-30vw relative group">
            <h2 className="text-xl font-bold">Color Analysis Test</h2>
            <br/>
            <img src={color} alt="Color Analysis" className="mx-auto mt-2 w-[13vh] flex justify-center" />
            <style jsx>{`
              .group:hover {
                background-image: linear-gradient(to bottom, #feebf8 0%, #fff4ea 90%);
              }
              .group:active {
                background-image: linear-gradient(to bottom, #fcd5f0 0%, #fae2cc 90%);
              }
            `}</style>
          </div>
          <div className="flex-1 border border-gray-300 rounded-3xl p-4 text-center shadow-md max-w-[30vw] h-[30vh] md:w-30vw relative group">
            <h3 className="text-xl font-bold">Body Analysis Test</h3>
            <div className="flex justify-center">
              <img src={body3} alt="Body Analysis" className="mx-auto mt-4 w-[25vh] flex justify-center" /> 

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

      <div className="p-4 flex justify-center fix-bottom-2 mt-40">
      <input
      type="text"
      placeholder="Ask for best recommendation"
      className="w-1/2 p-4 border-2 border-gray-300 rounded-l-lg focus:outline-none focus:border-pink-500"
      />
        <button className="p-4 bg-pink-500 text-white rounded-r-lg">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.15849 29.8499L29.0625 16.6248C29.3406 16.4889 29.5777 16.2623 29.7444 15.9731C29.9111 15.6839 30 15.3448 30 14.9982C30 14.6515 29.9111 14.3125 29.7444 14.0233C29.5777 13.7341 29.3406 13.5074 29.0625 13.3716L2.15849 0.146419C1.92553 0.0298942 1.67093 -0.0182886 1.41768 0.00621732C1.16442 0.0307232 0.920467 0.127147 0.707827 0.28679C0.495186 0.446432 0.320548 0.664272 0.199667 0.920655C0.0787862 1.17704 0.0154656 1.4639 0.0154177 1.75536L0 9.90614C0 10.7902 0.570457 11.5504 1.34134 11.6565L23.1266 14.9982L1.34134 18.3221C0.570457 18.4459 0 19.2062 0 20.0902L0.0154177 28.241C0.0154177 29.4963 1.14091 30.3627 2.15849 29.8499Z" fill="#F7F7F7"/>
        </svg>
        </button>
      </div>
    </div>
  );
};

export default MainContent;

