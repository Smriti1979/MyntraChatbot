// src/ChatBotDashboard.js
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

const ChatBotDashboard = () => {
  const userName = 'Divyanshi'; // Replace with dynamic user name as needed

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <MainContent name={userName} />
      </div>
    </div>
  );
};

export default ChatBotDashboard;
