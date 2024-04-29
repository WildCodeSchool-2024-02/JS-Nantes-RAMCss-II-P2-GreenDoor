import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import LikedPlantsProvider from "./contexts/LikedPlantsProvider";
import "./styles/Import.css";

function App() {
  return (
    <LikedPlantsProvider>
      <NavBar />
      <Outlet />
    </LikedPlantsProvider>
  );
}

export default App;
