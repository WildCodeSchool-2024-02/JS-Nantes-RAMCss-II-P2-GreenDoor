import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav>
      <div className="buttonLogo">
        <div className="greenDoorPot" />
        <div className="greenDoorPotGreen" />
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
