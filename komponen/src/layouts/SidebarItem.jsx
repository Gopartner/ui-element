import { useState } from "react";

const SidebarItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="mb-2">
      <button onClick={toggleItem} className="w-full text-left hover:underline">
        {title} {isOpen ? "▼" : "▶"}
      </button>
      {isOpen && <ul className="ml-4 text-sm">{children}</ul>}
    </li>
  );
};

export default SidebarItem;
