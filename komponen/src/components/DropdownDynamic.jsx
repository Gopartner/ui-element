import { useState, useRef, useEffect } from "react";

export default function DropdownDynamic({ position = "right", wrapperRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState(position);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleOpenMenu = () => {
    if (buttonRef.current && wrapperRef?.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      if (buttonRect.right + 200 > wrapperRect.right || buttonRect.right + 200 > viewportWidth) {
        setMenuPosition("right");
      } else if (buttonRect.left - 200 < wrapperRect.left || buttonRect.left - 200 < 0) {
        setMenuPosition("left");
      } else {
        setMenuPosition(position);
      }
    }
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        ref={buttonRef}
        onClick={handleOpenMenu}
        className="inline-flex justify-center rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
      >
        Options
      </button>

      {isOpen && (
        <div
          className={`absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black/5 dark:ring-gray-600 focus:outline-none ${
            menuPosition === "right" ? "right-0" : "left-0"
          }`}
        >
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
            >
              Account settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
            >
              Support
            </a>

            {/* Divider */}
            <div className="divider" />

            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
            >
              License
            </a>

            {/* Divider */}
            <div className="divider" />

            <button
              onClick={() => alert("Signed out")}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

