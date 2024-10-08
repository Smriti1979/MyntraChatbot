import React from 'react';
import chatbotLogo from '../assets/Chatbot_logo.png';

const Header = () => {
  return (
    <div className="bg-white shadow-md p-1 sm:p-0gi flex justify-between items-center">
      <div className="flex items-center mx-4">
        <div className="text-xl sm:text-3xl font-bold text-pink-600 mr-2 sm:mr-4 sm:ml-4">
          ChatBot
        </div>
        <img src={chatbotLogo} alt="Chatbot Logo" className="h-8 sm:h-12 w-8 sm:w-12 mr-1 sm:mr-2"/>
      </div>
    </div>
  );
};

export default Header;
