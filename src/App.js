import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatBotDashboard from './components/ChatBotDashboard';
import QColorAnalysis from './components/qColorAnalysis'; // Corrected import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatBotDashboard />} />
        <Route path="/qColorAnalysis" element={<QColorAnalysis />} />
      </Routes>
    </Router>
  );
}

export default App;

