import { useState } from 'react';

/**
 * Custom hook untuk membuka dan menutup sidebar.
 * @returns {object} - Berisi state `isOpen` dan fungsi `toggleSidebar`
 */
const useSidebarToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk toggle state sidebar
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, toggleSidebar };
};

export default useSidebarToggle;
