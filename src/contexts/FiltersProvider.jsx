import { useState, useContext, createContext} from "react";
import PropTypes from "prop-types";
import waterIconInactive from "../assets/icons/WaterGrey.png";
import waterIconActive from "../assets/icons/WaterBlue.png";
import lightIconInactive from "../assets/icons/SunGrey.png";
import lightIconActive from "../assets/icons/SunYellow.png";

const FiltersContext = createContext();

function FiltersProvider({ children }) {

  // these filters can have three values : 0,1 and 2.
  const [waterFilter, setWaterFilter] = useState(0);
  const [lightFilter, setLightFilter] = useState(0);

  // these explain what the filters correspond to.
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

  const contextValue = {
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
  };

  return (
    <FiltersContext.Provider value={contextValue}>
      {children}
    </FiltersContext.Provider>
  );
}

export const useFilters = () => useContext(FiltersContext);

export default FiltersProvider;

FiltersProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
