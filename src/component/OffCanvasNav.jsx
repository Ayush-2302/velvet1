import React, { useState } from "react";

const OffCanvasNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = ["Home", "About", "Services", "Contact"];

  return (
    <div className="relative z-50">
      <button
        onClick={toggleSidebar}
        className="p-2 bg-blue-500 text-white rounded-md"
      >
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>

      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      >
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white p-4 transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h2 className="font-bold text-xl mb-4">Menu</h2>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <a href="#" className="text-gray-800 hover:text-blue-500">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OffCanvasNav;
