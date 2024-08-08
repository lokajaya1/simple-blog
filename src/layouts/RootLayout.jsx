import { NavLink, Outlet } from "react-router-dom";
import "./RootLayout.css";

function RootLayout() {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Home
        </NavLink>
        {" | "}
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Blog
        </NavLink>
        {" | "}
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          About
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default RootLayout;
