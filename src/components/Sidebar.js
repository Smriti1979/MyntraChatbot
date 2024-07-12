import React, { useState } from 'react';
import { FaBars, FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-pink-100 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} p-4 flex flex-col`}>
      <button className="text-2xl text-pink-600 mb-4 mt-4np" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <button className="text-2xl text-pink-600 mb-4">
        <FaPlus />
      </button>
    </div>
  );
};

export default Sidebar;
