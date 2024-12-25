import { useState, useEffect } from "react";

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Fungsi untuk mengatur tema
  const applyTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Mengatur dark mode saat komponen pertama kali dimuat
  useEffect(() => {
    const userPreference = localStorage.getItem("theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (userPreference === "dark" || (!userPreference && systemPreference)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Fungsi untuk toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      applyTheme(newMode);
      return newMode;
    });
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" checked={darkMode} onChange={toggleDarkMode} />
      <div className="w-10 h-5 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:bg-yellow-400">
        <div className={`absolute w-4 h-4 bg-white rounded-full transition-transform ${darkMode ? "translate-x-5" : "translate-x-0"}`} />
      </div>
      <span className="ml-2 text-gray-700 dark:text-gray-200">{darkMode ? "🌙" : "☀️"}</span>
    </label>
  );
};

export default DarkModeSwitch;
