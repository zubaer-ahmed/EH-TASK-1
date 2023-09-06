import { Outlet, Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <nav className="shrink-0 h-14 w-full border-b bg-gray-100 space-y-8">
        <ul className="flex items-center h-full space-x-4 px-4 font-medium">
          <li>
            <Link to="/customer">Customer</Link>
          </li>
          <li>
            <Link to="/worker">Worker</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopNav;
