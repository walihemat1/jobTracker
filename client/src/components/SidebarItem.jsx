import { Link, NavLink } from "react-router-dom";

function SidebarItem({ children, to }) {
  return (
    <li className="mb-2">
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}

export default SidebarItem;
