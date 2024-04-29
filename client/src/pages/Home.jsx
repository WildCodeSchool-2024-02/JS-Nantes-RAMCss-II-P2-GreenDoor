import { useState } from "react";
import Header from "../components/Header";
import FiltersTutorial from "../components/FiltersTutorial";
import StickyFilterParent from "../components/StickyFilterParent";
import PlantCards from "../components/PlantCards";
import QuizzRedirection from "../components/QuizzRedirection";
import Footer from "../components/Footer";

import plants from "../plants.json";
import waterIconInactive from "../assets/icons/WaterGrey.png";
import waterIconActive from "../assets/icons/WaterBlue.png";
import lightIconInactive from "../assets/icons/SunGrey.png";
import lightIconActive from "../assets/icons/SunYellow.png";

function Home() {
  // these filters can have three values : 0,1 and 2.
  const [waterFilter, setWaterFilter] = useState(1);
  const [lightFilter, setLightFilter] = useState(1);

  return (
    <main>
      <Header />
      <FiltersTutorial
        waterFilter={waterFilter}
        setWaterFilter={setWaterFilter}
        waterIconActive={waterIconActive}
        waterIconInactive={waterIconInactive}
        lightFilter={lightFilter}
        setLightFilter={setLightFilter}
        lightIconActive={lightIconActive}
        lightIconInactive={lightIconInactive}
      />
      <StickyFilterParent
        waterFilter={waterFilter}
        setWaterFilter={setWaterFilter}
        waterIconActive={waterIconActive}
        waterIconInactive={waterIconInactive}
        lightFilter={lightFilter}
        setLightFilter={setLightFilter}
        lightIconActive={lightIconActive}
        lightIconInactive={lightIconInactive}
      />
      <section className="cards-container">
        {plants.map((el) => (
          <PlantCards
            key={el.id}
            img={el.img}
            commonName={el.commonName}
            latinName={el.latinName}
            watering={el.watering}
            growth={el.growth}
            heightPotential={el.heightPotential.CM}
            pruning={el.pruning}
            temperatureMax={el.temperatureMax.C}
            temperatureMin={el.temperatureMin.C}
            disease={el.disease}
            insects={el.insects}
            waterIconActive={waterIconActive}
            waterIconInactive={waterIconInactive}
            lightIconActive={lightIconActive}
            lightIconInactive={lightIconInactive}
            lightIdeal={el.lightIdeal}
            lightTolered={el.lightTolered}
          />
        ))}
      </section>
      <QuizzRedirection />
      <Footer />
    </main>
  );
}

export default Home;
