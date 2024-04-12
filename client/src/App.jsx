import "./App.css";
import { Outlet, Link } from "react-router-dom"


function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="home">Home</Link>
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
