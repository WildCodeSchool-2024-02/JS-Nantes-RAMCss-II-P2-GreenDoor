import { Outlet } from "react-router-dom";
// import { useState } from "react";

// import plantsDB from './plants.json';

import "./styles/Import.css";
import NavBar from "./components/NavBar";
import LikedPlantsProvider from "./contexts/LikedPlantsProvider";

function App() {
  // This state is used to store the whole plants database
  // const [plants, setPlants] = useState(plantsDB);

  return (
    <LikedPlantsProvider>
      <NavBar />
      <Outlet />
    </LikedPlantsProvider>
  );
}

export default App;
