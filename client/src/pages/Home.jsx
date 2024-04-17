import { useState } from "react";
import Header from "../components/Header";
import FiltersTutorial from "../components/FiltersTutorial";

import waterIconInactive from "../assets/icons/WaterGrey.png";
import waterIconActive from "../assets/icons/WaterBlue.png";
import lightIconInactive from "../assets/icons/SunGrey.png";
import lightIconActive from "../assets/icons/SunYellow.png";
import StickyFilter from "../components/StickyFilter";

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
      <StickyFilter
        filtersDescriptions={FiltersTutorial}
        iconActive={waterIconActive}
        iconInactive={waterIconInactive}
        filter={waterFilter}
        lightFilter={lightFilter}
        setFilter={setWaterFilter}
      />
    </main>
  );
}

export default Home;
