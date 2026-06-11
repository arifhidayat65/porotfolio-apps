import React from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="loader-content">
        <div className="logo-loader">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="20" fill="#669db3"/>
            <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="800" font-size="60" fill="white">A</text>
          </svg>
        </div>
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
        <p className="loading-text">Crafting Experience...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
