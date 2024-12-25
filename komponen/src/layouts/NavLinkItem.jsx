import { Link } from 'react-router-dom';

const NavLinkItem = ({ to, label, icon: Icon }) => {
  return (
    <li className="flex items-center space-x-3 px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-md transition-colors">
      <Link to={to} className="flex items-center space-x-3 w-full">
        {Icon && <Icon className="text-xl" />}
        <span className="text-lg">{label}</span>
      </Link>
    </li>
  );
};

export default NavLinkItem;

