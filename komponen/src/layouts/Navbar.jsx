import React from "react";
import useToggle from "@h/useToggle";
import SidebarMenu from "./SidebarMenu";
import DropdownMenu from "@c/DropdownMenu";
import DropdownMenuDinamis from "@c/DropdownMenuDinamis";
import {
  faHome,
  faInfoCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLinkItem from "./NavLinkItem";

const Navbar = () => {
  const [isOpen, toggle] = useToggle(false);

  const handleToggle = () => {
    toggle();
  };

  return (
    <>
      <nav className="bg-gray-800 text-white flex items-center justify-between p-4 shadow-md">
        <div
          className="text-lg font-bold cursor-pointer"
          onClick={handleToggle}
        > 
        <DropdownMenu />
        </div>
        <DropdownMenu />
        <DropdownMenuDinamis />
        <button
          onClick={handleToggle}
          className="md:hidden flex items-center justify-center w-10 h-10 focus:outline-none"
        >
          <svg
            className={`w-8 h-8 text-white transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
            viewBox="0 0 100 80"
          >
            <rect
              width="100"
              height="10"
              rx="5"
              fill="#fff"
              className={`${
                isOpen ? "translate-y-3.5 rotate-45" : ""
              } transition-all duration-300`}
            />
            <rect
              width="100"
              height="10"
              rx="5"
              fill="#fff"
              className={`${
                isOpen ? "opacity-0" : ""
              } transition-all duration-300`}
            />
            <rect
              width="100"
              height="10"
              rx="5"
              fill="#fff"
              className={`${
                isOpen ? "-translate-y-3.5 -rotate-45" : ""
              } transition-all duration-300`}
            />
          </svg>
        </button>
        <div className="hidden md:flex space-x-4">
          <NavLinkItem
            to="/"
            label="Home"
            icon={() => <FontAwesomeIcon icon={faHome} />}
          />
          <NavLinkItem
            to="/about"
            label="About"
            icon={() => <FontAwesomeIcon icon={faInfoCircle} />}
          />
          <NavLinkItem
            to="/contact"
            label="Contact"
            icon={() => <FontAwesomeIcon icon={faEnvelope} />}
          />
        </div>
      </nav>
      <SidebarMenu isOpen={isOpen} toggleSidebar={handleToggle} />
    </>
  );
};

export default Navbar;
