// src/Header.js
import React from 'react';
import myntraLogo from '../Assets/logo-myntra.png'; 
import chatbotLogo from '../Assets/Chatbot_logo.png';

const Header = () => {
  return (
    <div className="bg-white shadow-md p-1 flex justify-between items-center"> 
    <div className="flex items-center">
    <img src={chatbotLogo} alt="Chatbot Logo" className="h-16 w-16 mr-2"/>
        <div className="text-4xl font-bold text-pink-600">
            ChatBot
        </div>
    </div>
      <div>
        <img src={myntraLogo} alt="Logo" className="h-20 w-50 inline-block mr-2"/>
      </div>
    </div>
  );
};

export default Header;
