import { NavLink } from "react-router-dom";

import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav>
      <div className="button-logo">
        <div className="greendoor-pot" />
        <div className="greendoor-pot-green" />
      </div>
      <h2>
        <strong>green</strong>Door
      </h2>
      <ul>
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
