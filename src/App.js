// import React from 'react';
// import ChatBotDashboard from './components/ChatBotDashboard';

// function App() {
//   return (
//     <div className="App">
//       <ChatBotDashboard />
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ChatBotDashboard from './components/ChatBotDashboard';
// import QColorAnalysis from './components/qColorAnalysis'; // Import the component for the new page

// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<ChatBotDashboard />} />
//       <Route path="/qColorAnalysis" element={<QColorAnalysis />} />
//     </Routes>
//   </Router>,
//   document.getElementById('root')
// );
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ChatBotDashboard from './components/ChatBotDashboard';
// import QColorAnalysis from './components/qColorAnalysis'; // Corrected import

// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<ChatBotDashboard />} />
//       <Route path="/qColorAnalysis" element={<QColorAnalysis />} />
//     </Routes>
//   </Router>,
//   document.getElementById('root')
// );
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

