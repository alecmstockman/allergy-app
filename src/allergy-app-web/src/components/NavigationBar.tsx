import { NavLink } from "react-router-dom";
import CalendarIcon from "../assets/CalendarIcon";
import HomeIcon from "../assets/HomeIcon";
import MenuIcon from "../assets/MenuIcon";
import OptionsIcon from "../assets/OptionsIcon";
import ProfileIcon from "../assets/ProfileIcon";

export default function NavigationBar() {
  return (
    <nav className="navigation-bar" aria-label="Main navigation">
      <NavLink className="icon-button" to="/" end aria-label="Home">
        <HomeIcon />
      </NavLink>

      <NavLink className="icon-button" to="/options" aria-label="Menu">
        <OptionsIcon />
      </NavLink>

      <NavLink
        className="icon-button"
        to="/calendar"
        aria-label="Allergy Menu Filter"
      >
        <CalendarIcon />
      </NavLink>

      <NavLink
        className="icon-button"
        to="/scanner"
        aria-label="Menu Scanner"
      >
        <MenuIcon />
      </NavLink>

      <NavLink
        className="icon-button"
        to="/profile"
        aria-label="User profile"
      >
        <ProfileIcon />
      </NavLink>
    </nav>
  );
}
