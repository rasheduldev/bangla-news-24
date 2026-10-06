import React from "react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo / Brand */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600">
          News<span className="text-gray-900">24</span>
        </h1>

        <p className="mt-2 text-gray-500">
          Stay updated with the latest news
        </p>

        {/* Loading Spinner */}
        <div className="mt-8 flex justify-center">
          <div className="w-12 h-12 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <p className="mt-5 text-red-600 font-semibold">
          Loading news...
        </p>

        {/* Loading Lines */}
        <div className="mt-6 space-y-3 w-64 mx-auto">
          <div className="h-3 bg-red-100 rounded-full animate-pulse"></div>
          <div className="h-3 bg-red-100 rounded-full animate-pulse w-5/6 mx-auto"></div>
          <div className="h-3 bg-red-100 rounded-full animate-pulse w-4/6 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;