import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 text-blue-600 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
