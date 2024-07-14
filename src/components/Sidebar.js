import React, { useState } from 'react';
import { FaBars, FaPlus, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-pink-100 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} p-4 flex flex-col justify-between h-screen`}>
      <div>
        <button className="text-2xl text-pink-600 mb-4 mt-4" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div className="flex items-center">
          <FaPlus className="text-2xl text-pink-600 mr-2" />
          <span className={`text-pink-600 overflow-hidden transition-all duration-300 ${isOpen ? 'max-w-xs' : 'max-w-0'}`} style={{ whiteSpace: 'nowrap' }}>
            New Chat
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <FaUser className="text-2xl text-pink-600 mr-2" />
        <span className={`text-pink-600 overflow-hidden transition-all duration-300 ${isOpen ? 'max-w-xs' : 'max-w-0'}`} style={{ whiteSpace: 'nowrap' }}>
          Profile
        </span>
      </div>
    </div>
  );
};

export default Sidebar;





