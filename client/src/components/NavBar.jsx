import { NavLink } from "react-router-dom";
import greenDoorPot from "../assets/images/greenDoorPot.svg";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav>
      <img className="buttonLogo" src={greenDoorPot} alt="Logo greendoor" />
      <h1>
        <div>green</div>Door
      </h1>
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
