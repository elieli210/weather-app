import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav className="primary-nav">
      <NavLink to="/" style={navLinkStyles}>
        Weather
      </NavLink>
      <NavLink to="/blog" style={navLinkStyles}>
        Blogs of Weather
      </NavLink>
      <NavLink to="/posts" style={navLinkStyles}>
        Posts of Weather
      </NavLink>
    </nav>
  );
};
