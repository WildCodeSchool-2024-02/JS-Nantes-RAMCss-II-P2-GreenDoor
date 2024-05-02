import ExplicitFilter from "./ExplicitFilter";
import { useFilters } from "../contexts/FiltersProvider";

function FiltersTutorial() {
  const {
    waterIconActive,
    waterIconInactive,
    waterFilter,
    setWaterFilter,
    lightIconActive,
    lightIconInactive,
    lightFilter,
    setLightFilter,
  } = useFilters();
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

export default FiltersTutorial;
