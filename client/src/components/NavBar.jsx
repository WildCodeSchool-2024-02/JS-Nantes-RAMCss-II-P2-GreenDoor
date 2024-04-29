import { NavLink } from "react-router-dom";
import { useState } from "react";
import burger from "../assets/icons/burger-bar.png";
import cross from "../assets/icons/green-cross.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function menuClick() {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav>
      <div className="button-logo">
        <div className="greendoor-pot" />
        <div className="greendoor-pot-green" />
      </div>
      <h2>
        <strong>green</strong>Door
      </h2>
      <button
        className="burger-button"
        type="button"
        alt="menu déroulant"
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
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="quizz">Plant Quizz</NavLink>
        </li>
        <li>
          <NavLink to="myplants">My Plants</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
