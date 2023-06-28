import { routes } from "../../routes";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function Navbar() {
  let homepage = routes[0];
  return (
    <header className="header">
      <nav className="nav max-width-inhibitor">
        <h6 className="app-name">WeatherAPP</h6>
        {
          <NavLink key={homepage.key} to={homepage.path} className="nav-link">
            <h6>{homepage.title}</h6>
          </NavLink>
        }
      </nav>
    </header>
  );
}
