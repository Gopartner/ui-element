import React, { useEffect, useRef } from "react";
import ThemeDropdown from "./ThemeDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faEnvelope,
  faTable,
  faImage,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import NavLinkItem from "./NavLinkItem";

const SidebarMenu = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef(null);

  // Event listener untuk mendeteksi klik di luar sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar(); // Tutup sidebar jika klik di luar sidebar
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener saat komponen unmount atau isOpen berubah
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-full w-64 bg-gray-100 dark:bg-gray-800 dark:text-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      {/* Tombol Tutup */}
      <button
        className="text-3xl text-gray-800 dark:text-white absolute top-4 right-4 focus:outline-none"
        onClick={toggleSidebar}
      >
        &times;
      </button>

      {/* Logo atau Header Sidebar */}
      <div className="p-6 text-center text-xl font-bold dark:text-gray-200">
        Sidebar Menu
      </div>

      {/* Daftar Menu */}

      <ul className="mt-4 space-y-4">
        {" "}
        <NavLinkItem
          to="/"
          label="Home"
          icon={() => <FontAwesomeIcon icon={faHome} />}
          onClick={toggleSidebar} // Event ditambahkan di sini
        />
        <NavLinkItem
          to="/about"
          label="About"
          icon={() => <FontAwesomeIcon icon={faInfoCircle} />}
          onClick={toggleSidebar}
        />
        <NavLinkItem
          to="/contact"
          label="Contact"
          icon={() => <FontAwesomeIcon icon={faEnvelope} />}
          onClick={toggleSidebar}
        />
        <NavLinkItem
          to="data-display"
          label="Data Display"
          icon={() => <FontAwesomeIcon icon={faTable} />} // Ikon tabel untuk data display
          onClick={toggleSidebar}
        />
        <NavLinkItem
          to="image-processing"
          label="Images processing"
          icon={() => <FontAwesomeIcon icon={faImage} />} // Ikon gambar untuk image processing
          onClick={toggleSidebar}
        />
      </ul>

      {/* Komponen untuk dark mode */}
      <div className="mt-auto p-6">
        <ThemeDropdown />
      </div>
    </div>
  );
};

export default SidebarMenu;
