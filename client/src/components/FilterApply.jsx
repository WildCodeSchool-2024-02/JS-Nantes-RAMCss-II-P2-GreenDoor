// // import React, { useState, useEffect } from "react";
// import PlantCards from "../PlantCards";
// import plants from "../plants.json";
// import waterIconInactive from "../assets/icons/WaterGrey.png";
// import waterIconActive from "../assets/icons/WaterBlue.png";
// import lightIconInactive from "../assets/icons/SunGrey.png";
// import lightIconActive from "../assets/icons/SunYellow.png";

// function FilterApply() {
//   const [suitablePlants, setSuitablePlants] = useState(plants);
//   // const [waterIconActiveState, setWaterIconActiveState] = useState(false);
//   // const [lightIconActiveState, setLightIconActiveState] = useState(false);

//   useEffect(() => {
//     setSuitablePlants(
//       plants.filter((plant) => {
//         let plantFitsCriteria = true;

//         if (waterIconActiveState && !plant.waterIconActive) {
//           plantFitsCriteria = false;
//         }

//         if (lightIconActiveState && !plant.lightIconActive) {
//           plantFitsCriteria = false;
//         }

//         return plantFitsCriteria;
//       })
//     );
//   }, [waterIconActiveState, lightIconActiveState]);

//   return (
//     <section className="compact-cards-container">
//       {suitablePlants.map((el) => (
//         <PlantCards
//           key={el.id}
//           img={el.img}
//           commonName={el.commonName}
//           latinName={el.latinName}
//           watering={el.watering}
//           growth={el.growth}
//           heightPotential={el.heightPotential.CM}
//           pruning={el.pruning}
//           temperatureMax={el.temperatureMax.C}
//           temperatureMin={el.temperatureMin.C}
//           disease={el.disease}
//           insects={el.insects}
//           waterIconActive={waterIconActive}
//           waterIconInactive={waterIconInactive}
//           lightIconActive={lightIconActive}
//           lightIconInactive={lightIconInactive}
//           lightIdeal={el.lightIdeal}
//           lightTolered={el.lightTolered}
//           compactDisplay
//         />
//       ))}
//     </section>
//   );
// }

// export default FilterApply;
