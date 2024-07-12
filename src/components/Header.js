import React from 'react';
import myntraLogo from '../assets/logo-myntra.png'; 
import chatbotLogo from '../assets/Chatbot_logo.png';

const Header = () => {
  return (
    <div className="bg-white shadow-md p-2 sm:p-4 flex justify-between items-center">
      <div className="flex items-center mx-8">
        <div className="text-xl sm:text-3xl font-bold text-pink-600 mr-2 sm:mr-4 sm:ml-4">
          ChatBot
        </div>
        <img src={chatbotLogo} alt="Chatbot Logo" className="h-8 sm:h-12 w-8 sm:w-12 mr-1 sm:mr-2"/>
      </div>
      <div>
        <img src={myntraLogo} alt="Logo" className="h-10 sm:h-20 w-auto inline-block mr-2"/>
      </div>
    </div>
  );
};

export default Header;
