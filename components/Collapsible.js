"use client"
import React, { useState } from 'react';

const Collapsible = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggle}
        className="w-full text-left text-lg font-medium py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring"
      >
        {trigger}
      </button>
      {isOpen && <div className="mt-2 p-4 border rounded-lg">{children}</div>}
    </div>
  );
};

export default Collapsible;
