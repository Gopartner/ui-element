import React from 'react';

const LoadingButton = ({ isLoading, text }) => {
  return (
    <button 
      type="button" 
      className={`bg-indigo-500 text-white font-bold py-2 px-4 rounded inline-flex items-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} 
      disabled={isLoading}
    >
      {isLoading && (
        <svg 
          className="animate-spin h-5 w-5 mr-3 text-white" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" cy="12" r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {text}
    </button>
  );
};

export default LoadingButton;
/*
 * di pakai About.jsx
 * */
