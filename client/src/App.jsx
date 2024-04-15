import "./App.css";
import { Outlet, Link } from "react-router-dom"
// import { useState } from "react";

// import plantsDB from './plants.json';




function App() {

  // This state is used to store the whole plants database
  // const [plants, setPlants] = useState(plantsDB);


  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to="quizz">Quizz</Link>
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
