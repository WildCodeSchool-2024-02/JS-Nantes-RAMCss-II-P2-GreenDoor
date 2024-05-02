import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import burger from "../assets/icons/burgerMenu_white.svg";
import cross from "../assets/icons/cross_green.svg";
import whiteLogo from "../assets/images/greenDoorPot.svg";
import greenLogo from "../assets/images/greenDoorPot_Green.svg";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoIsHovered, setLogoIsHovered] = useState(false);

  function menuClick() {
    setMenuOpen(!menuOpen);
  }

  function autoCloseMenu() {
    setTimeout(() => setMenuOpen(false), 500);
  }

  const navigate = useNavigate();

  return (
    <nav>
      <button
        onClick={() => navigate(`/`)}
        className="button-logo"
        onMouseEnter={() => setLogoIsHovered(true)}
        onMouseLeave={() => setLogoIsHovered(false)}
      >
        <img
          src={logoIsHovered ? greenLogo : whiteLogo}
          alt="greenDoor logo, a minimalist pot"
        />
      </button>
      <h2>
        <strong>green</strong>Door
      </h2>
      <button
        className="burger-button"
        type="button"
        alt={menuOpen ? "close dropdown menu" : "open dropdown menu"}
        onClick={menuClick}
      >
        <img
          src={menuOpen ? cross : burger}
          className="burger"
          alt="burger menu"
        />
      </button>
      <ul
        className={
          menuOpen
            ? "navigation-menu mobile-menu-on"
            : "navigation-menu mobile-menu-off"
        }
      >
        <li>
          <NavLink onClick={autoCloseMenu} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={autoCloseMenu} to="quizz">
            Plant Quizz
          </NavLink>
        </li>
        <li>
          <NavLink onClick={autoCloseMenu} to="myplants">
            My Plants
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
