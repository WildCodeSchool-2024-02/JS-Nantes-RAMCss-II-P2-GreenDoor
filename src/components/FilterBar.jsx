import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Filter from "./Filter";
import "../styles/StickyFilterParent.css";
import { useFilters } from "../contexts/FiltersProvider";

function FilterBar({ maxScroll }) {
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

  const [isVisible, setIsvisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mobileDisplay = window.innerWidth <= 800;

      if (mobileDisplay && window.scrollY > window.innerHeight) {
        setIsvisible(true);
      } else if (
        !mobileDisplay &&
        window.scrollY > 500 &&
        window.scrollY < maxScroll - 500
      ) {
        setIsvisible(true);
      } else {
        setIsvisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [maxScroll]);

  return (
    <section
      className={`sticky-filters-parent ${isVisible ? "visible" : "hidden"}`}
    >
      <Filter
        filtersDescriptions={waterFiltersDescriptions}
        iconActive={waterIconActive}
        iconInactive={waterIconInactive}
        filter={waterFilter}
        setFilter={setWaterFilter}
      />
      <Filter
        filtersDescriptions={lightFiltersDescriptions}
        iconActive={lightIconActive}
        iconInactive={lightIconInactive}
        filter={lightFilter}
        setFilter={setLightFilter}
      />
    </section>
  );
}

FilterBar.propTypes = {
  maxScroll: PropTypes.number.isRequired,
};

export default FilterBar;
