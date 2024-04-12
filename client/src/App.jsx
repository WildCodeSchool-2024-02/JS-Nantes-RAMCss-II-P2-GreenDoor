import "./App.css";
import { Outlet, Link } from "react-router-dom"


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
