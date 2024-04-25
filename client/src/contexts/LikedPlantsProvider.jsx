import { useState, useContext, createContext, useMemo } from "react";
import PropTypes from "prop-types";

const LikedPlantsContext = createContext();

// this is the context provider that goes with it.
function LikedPlantsProvider({ children }) {
  const [likedPlants, setLikedPlants] = useState([]);

  function addToLikedPlants(id) {
    setLikedPlants((prevLikedPlants) => [...prevLikedPlants, id]);
  }

  function isLiked(id) {
    return likedPlants.some((likedPlantId) => likedPlantId === id);
  }

  // introduced because of an ESLint error that i didn't understand completely
  const contextValue = useMemo(
    () => ({
      likedPlants,
      addToLikedPlants,
      isLiked,
    }),
    [likedPlants, addToLikedPlants, isLiked]
  );

  return (
    <LikedPlantsContext.Provider value={contextValue}>
      {children}
    </LikedPlantsContext.Provider>
  );
}

export const useLikedPlants = () => useContext(LikedPlantsContext);

export default LikedPlantsProvider;

LikedPlantsProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
