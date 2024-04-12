import "./App.css";
import { Outlet, Link } from "react-router-dom";
import greenDoorPot from "./assets/images/greenDoorPot.svg";
import "./styles/Import.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <button type="button">
            <img src={greenDoorPot} alt="Logo greendoor" />
          </button>
          <h1>
            greenDoors
            
          </h1>

          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to="quizz">Plant Quizz</Link>
          </li>
          <li>
            <Link to="myplants">My Plants</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default App;
