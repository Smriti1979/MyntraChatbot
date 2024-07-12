// src/ChatBotDashboard.js
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

const ChatBotDashboard = () => {
  const userName = 'Divyanshi'; // Replace with dynamic user name as needed

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        {/* Main content area */}
        <div className="p-4">
          {/* Other content goes here */}
          <MainContent name={userName}/>
        </div>
      </div>
    </div>
  );
};

export default ChatBotDashboard;
