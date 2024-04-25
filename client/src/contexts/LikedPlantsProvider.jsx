import { useState, useContext, createContext, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

const LikedPlantsContext = createContext();

function LikedPlantsProvider({ children }) {
  // retrieve last session data if it exists
  const [likedPlants, setLikedPlants] = useState(
    JSON.parse(localStorage.getItem("GreenDoor_likedPlants"))
  );

  function isLiked(id) {
    return likedPlants.some((likedPlantId) => likedPlantId === id);
  }

  function addToLikedPlants(id) {
    // prevent a plant from being liked twice
    if (!isLiked(id)) {
      setLikedPlants((prevLikedPlants) => [...prevLikedPlants, id]);
    }
  }

  function removeFromLikedPlants(id) {
    setLikedPlants((prevLikedPlants) =>
      [...prevLikedPlants].filter((el) => el !== id)
    );
  }

  useEffect(
    () =>
      localStorage.setItem(
        "GreenDoor_likedPlants",
        JSON.stringify(likedPlants)
      ),
    [likedPlants]
  );

  const contextValue = useMemo(
    () => ({
      likedPlants,
      addToLikedPlants,
      removeFromLikedPlants,
      isLiked,
    }),
    [likedPlants, addToLikedPlants, removeFromLikedPlants, isLiked]
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
