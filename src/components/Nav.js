import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  return (
    <nav className="Nav">
      <ul className="Nav_Links">
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active-link" : ""}
          >
            A Propos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
