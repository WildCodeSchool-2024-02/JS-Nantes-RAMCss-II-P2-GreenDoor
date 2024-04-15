import "./App.css";
import { Outlet, Link } from "react-router-dom"

// this is a modificationfor test purposes, you can delete it without consequences.
// and another test line


function App() {
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
      <h1>
        GREENDOOR

      </h1>

      <Outlet />
    </>
  );
}

export default App;
