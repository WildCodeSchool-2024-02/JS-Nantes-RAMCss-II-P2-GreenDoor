import ExplicitFilter from "./ExplicitFilter";
import { useFilters } from "../contexts/FiltersProvider";

function FiltersTutorial() {
  const {
    waterFilter,
    setWaterFilter,
    waterIconActive,
    waterIconInactive,
    waterFiltersDescriptions,
    lightFilter,
    setLightFilter,
    lightIconActive,
    lightIconInactive,
    lightFiltersDescriptions,
  } = useFilters();


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
