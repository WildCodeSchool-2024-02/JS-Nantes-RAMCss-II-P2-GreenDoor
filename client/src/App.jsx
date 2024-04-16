import "./App.css";
import { Outlet } from "react-router-dom";

import "./styles/Import.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
