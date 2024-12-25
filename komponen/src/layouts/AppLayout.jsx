import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SidebarMenu from "./SidebarMenu";
import useToggle from "@h/useToggle";
import Footer from "./Footer";

const AppLayout = () => {
  const [isSidebarOpen, toggleSidebar] = useToggle();

  return (
    <div className="min-h-screen flex">
      <SidebarMenu isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-grow">
        <Navbar onClick={toggleSidebar} />
        <main className="flex-grow container mx-auto p-0 dark:bg-gray-900">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
