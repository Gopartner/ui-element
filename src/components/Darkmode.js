import React, { useState, useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const Darkmode = () => {
  const [mode, setMode] = useState(() => {
    const storedMode = localStorage.getItem('mode');
    const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    return storedMode || systemMode || 'light';
  });

  useEffect(() => {
    document.body.classList.add(mode);
    localStorage.setItem('mode', mode);
  }, [mode]);

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(mode);
  }, [mode]);

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const handleSystemMode = () => {
    const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setMode(systemMode);
    localStorage.removeItem('mode');
  };

  return (
    <div>
      <button onClick={toggleMode}>
        {mode === 'light' ? <FiMoon /> : <FiSun />}
      </button>
      <button onClick={handleSystemMode}>
        Sistem
      </button>
      <span>Mode: {mode}</span>
    </div>
  );
};

export default Darkmode;