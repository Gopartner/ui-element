import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faDesktop, faTimes } from '@fortawesome/free-solid-svg-icons';

const ThemeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const setAppTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    document.documentElement.classList.toggle('dark', selectedTheme === 'dark');
    localStorage.setItem('theme', selectedTheme);
    console.log(`Tema yang dipilih: ${selectedTheme}`);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setAppTheme(storedTheme);
  }, []);

  const handleSelect = (selectedTheme) => {
    setAppTheme(selectedTheme);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
        onClick={() => setIsOpen(true)}
      >
        <span className="flex items-center">
          {theme === 'dark' ? (
            <FontAwesomeIcon icon={faMoon} className="mr-2" />
          ) : theme === 'light' ? (
            <FontAwesomeIcon icon={faSun} className="mr-2" />
          ) : (
            <FontAwesomeIcon icon={faDesktop} className="mr-2" />
          )}
          {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-slate-50 dark:bg-gray-800 rounded-lg shadow-lg w-96 p-6 relative transition-transform transform duration-300 ease-in-out">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
            >
              <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
            </button>
            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Pilih Tema</h2>
            <button
              onClick={() => handleSelect('light')}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <FontAwesomeIcon icon={faSun} className="mr-2" /> Light Mode
            </button>
            <button
              onClick={() => handleSelect('dark')}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <FontAwesomeIcon icon={faMoon} className="mr-2" /> Dark Mode
            </button>
            <button
              onClick={() => handleSelect('system')}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <FontAwesomeIcon icon={faDesktop} className="mr-2" /> System Default
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full px-4 py-2 text-sm text-white bg-gray-500 rounded-md hover:bg-gray-600"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeDropdown;
