import { Outlet } from "react-router-dom";
// import { useState } from "react";

// import plantsDB from './plants.json';

import "./styles/Import.css";
import NavBar from "./components/NavBar";

function App() {
  // This state is used to store the whole plants database
  // const [plants, setPlants] = useState(plantsDB);

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
