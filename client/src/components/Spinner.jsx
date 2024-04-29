// import React, { useState, useEffect } from "react";
import greenDoorPotGreen from "../assets/images/greenDoorPot_Green.svg";
// import greenDoorPot from "../assets/images/greenDoorPot_Green.svg";
import "../styles/Spinner.css"; // Assurez-vous d'importer le fichier CSS approprié

function Spinner() {
  return (
    <div className="spinner-zone">
      <img
        className="spinner-logo"
        src={greenDoorPotGreen}
        alt="Logo greendoor"
      />
    </div>
  );
}

export default Spinner;
