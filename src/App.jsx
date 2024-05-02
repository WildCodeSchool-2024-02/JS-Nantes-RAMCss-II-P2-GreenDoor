import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import LikedPlantsProvider from "./contexts/LikedPlantsProvider";
import FiltersProvider from "./contexts/FiltersProvider";

import "./styles/Import.css";

function App() {
  return (
    <LikedPlantsProvider>
      <NavBar />
      <FiltersProvider>
        <Outlet />
      </FiltersProvider>
    </LikedPlantsProvider>
  );
}

export default App;
