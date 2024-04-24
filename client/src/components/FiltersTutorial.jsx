// import { useState } from "react";
import PropTypes from "prop-types";
import ExplicitFilter from "./ExplicitFilter";
// import waterIconInactive from "../assets/icons/WaterGrey.png";
// import waterIconActive from "../assets/icons/WaterBlue.png";
// import lightIconInactive from "../assets/icons/SunGrey.png";
// import lightIconActive from "../assets/icons/SunYellow.png";

function FiltersTutorial({
  waterFilter,
  setWaterFilter,
  waterIconActive,
  waterIconInactive,
  lightFilter,
  setLightFilter,
  lightIconActive,
  lightIconInactive,
}) {
  // these filters can have three values : 0,1 and 2.

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

FiltersTutorial.propTypes = {
  waterFilter: PropTypes.number.isRequired,
  setWaterFilter: PropTypes.func.isRequired,
  waterIconActive: PropTypes.string.isRequired,
  waterIconInactive: PropTypes.string.isRequired,
  lightFilter: PropTypes.number.isRequired,
  setLightFilter: PropTypes.func.isRequired,
  lightIconActive: PropTypes.string.isRequired,
  lightIconInactive: PropTypes.string.isRequired,
};

export default FiltersTutorial;
