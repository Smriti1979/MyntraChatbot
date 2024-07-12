// src/Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-pink-600">
        ChatBot
      </div>
      <div>
        <img src="path_to_logo.png" alt="Logo" className="h-8 w-8 inline-block mr-2"/>
      </div>
    </div>
  );
};

export default Header;
