import PropTypes from "prop-types";
import StickyFilter from "./StickyFilter";
import "../styles/StickyFilterParent.css";

function StickyFilterParent({
  waterFilter,
  setWaterFilter,
  waterIconActive,
  waterIconInactive,
  lightFilter,
  setLightFilter,
  lightIconActive,
  lightIconInactive,
}) {
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
    <section className="sticky-filters-parent">
      <StickyFilter
        filtersDescriptions={waterFiltersDescriptions}
        iconActive={waterIconActive}
        iconInactive={waterIconInactive}
        filter={waterFilter}
        setFilter={setWaterFilter}
      />
      <StickyFilter
        filtersDescriptions={lightFiltersDescriptions}
        iconActive={lightIconActive}
        iconInactive={lightIconInactive}
        filter={lightFilter}
        setFilter={setLightFilter}
      />
    </section>
  );
}

StickyFilterParent.propTypes = {
  waterFilter: PropTypes.number.isRequired,
  setWaterFilter: PropTypes.func.isRequired,
  waterIconActive: PropTypes.string.isRequired,
  waterIconInactive: PropTypes.string.isRequired,
  lightFilter: PropTypes.number.isRequired,
  setLightFilter: PropTypes.func.isRequired,
  lightIconActive: PropTypes.string.isRequired,
  lightIconInactive: PropTypes.string.isRequired,
};

export default StickyFilterParent;
