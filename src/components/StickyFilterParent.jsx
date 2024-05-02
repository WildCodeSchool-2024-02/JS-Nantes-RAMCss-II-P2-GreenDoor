import { useState, useEffect } from "react";
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
  maxScroll,
}) {
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
    <section
      className={`sticky-filters-parent ${isVisible ? "visible" : "hidden"}`}
    >
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
