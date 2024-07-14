// src/ChatBotDashboard.js
// import React from 'react';
// import Header from './Header';
// import MainContent from './MainContent';
// import Sidebar from './Sidebar';

// const ChatBotDashboard = () => {
//   const userName = 'Divyanshi'; // Replace with dynamic user name as needed

//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         {/* Main content area */}
//         <div className="p-4">
//           {/* Other content goes here */}
//           <MainContent name={userName}/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatBotDashboard;

// import React from 'react';
// import Header from './Header';
// import MainContent from './MainContent';
// import Sidebar from './Sidebar';
// import { Link } from 'react-router-dom'; // Import Link for navigation

// const ChatBotDashboard = () => {
//   const userName = 'Divyanshi'; // Replace with dynamic user name as needed

//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         {/* Main content area */}
//         <div className="p-4">
//           {/* Other content goes here */}
//           <MainContent name={userName}/>
//         </div>
//         <div className="flex justify-center mt-4">
//           <Link to="/qColorAnalysis" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Go to Color Analysis
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatBotDashboard;
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom'; // Import Link for navigation

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
        <div className="flex justify-center mt-4">
          <Link to="/qColorAnalysis" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to Color Analysis
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChatBotDashboard;

