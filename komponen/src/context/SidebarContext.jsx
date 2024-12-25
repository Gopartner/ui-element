import React, { createContext, useContext, useState } from 'react';

// Membuat Context untuk Sidebar
const SidebarContext = createContext();

// Custom hook untuk mengakses context
export const useSidebar = () => useContext(SidebarContext);

// Provider untuk membungkus komponen
export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
