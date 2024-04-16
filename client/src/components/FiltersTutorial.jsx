import { useState } from "react";
import ExplicitFilter from "./ExplicitFilter";
import waterIconInactive from "../assets/icons/WaterGrey.png";
import waterIconActive from "../assets/icons/WaterBlue.png";
import lightIconInactive from "../assets/icons/SunGrey.png";
import lightIconActive from "../assets/icons/SunYellow.png";
import "../styles/FiltersTutorial.css";

function FiltersTutorial() {
  // these filters can have three values : 0,1 and 2.
  const [waterFilter, setWaterFilter] = useState(1);
  const [lightFilter, setLightFilter] = useState(1);
  // TODO : Ask Theo if he's okay to change the desciptions with "water me every now and then", "i need to be watered regularly","i need to be watered every couple of days" or smth
  const waterFiltersDescriptions = [
    "Little need for water",
    "Average need for water",
    "High need for water",
  ];
  const lightFiltersDescriptions = [
    "Can withstand poorly lit environnement",
    "Needs a relatively well lit environement",
    "High need for sunlight",
  ];

  return (
    <section className="filters-tutorial">
      <h2>Filter by what the plant needs</h2>
      <ExplicitFilter
        title="Watering"
        filtersDescriptions={waterFiltersDescriptions}
        iconActive={waterIconActive}
        iconInactive={waterIconInactive}
        filter={waterFilter}
        setFilter={setWaterFilter}
      />
      <ExplicitFilter
        title="Sunlight"
        filtersDescriptions={lightFiltersDescriptions}
        iconActive={lightIconActive}
        iconInactive={lightIconInactive}
        filter={lightFilter}
        setFilter={setLightFilter}
      />
    </section>
  );
}

export default FiltersTutorial;
