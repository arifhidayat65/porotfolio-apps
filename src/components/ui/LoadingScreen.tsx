import React from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="loader-content">
        <div className="logo-loader">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="24" fill="#4f46e5"/>
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Plus Jakarta Sans, Arial, sans-serif" fontWeight="800" fontSize="55" fill="white">AH</text>
          </svg>
        </div>
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
        <p className="loading-text">Preparing Professional Excellence...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
