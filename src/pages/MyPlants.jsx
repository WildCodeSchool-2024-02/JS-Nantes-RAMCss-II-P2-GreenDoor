import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLikedPlants } from "../contexts/LikedPlantsProvider";
import PlantCards from "../components/PlantCards";
import Footer from "../components/Footer";
import plants from "../plants.json";
import waterIconInactive from "../assets/icons/WaterGrey.png";
import waterIconActive from "../assets/icons/WaterBlue.png";
import lightIconInactive from "../assets/icons/SunGrey.png";
import lightIconActive from "../assets/icons/SunYellow.png";

// IMPORTANT : a lot of the CSS for this page is contained in Results.css

function MyPlants() {
  const { likedPlants } = useLikedPlants();
  const [displayedPlants, setDisplayedPlants] = useState([]);

  useEffect(() => {
    setDisplayedPlants(() =>
      plants.filter((plant) =>
        likedPlants.some((plantId) => plantId === plant.id)
      )
    );
  }, [likedPlants]);

  return (
    <>
      <hgroup className="results-header">
        <h1>
          {likedPlants.length === 0
            ? "Like any plant to see it appear here"
            : "Here are your favorite plants"}
        </h1>
      </hgroup>
      <section className="compact-cards-container">
        {displayedPlants.map((el) => (
          <PlantCards
            key={el.id}
            plantId={el.id}
            img={el.img}
            commonName={el.commonName}
            latinName={el.latinName}
            watering={el.watering}
            growth={el.growth}
            heightPotential={el.heightPotential.CM}
            pruning={el.pruning}
            temperatureMax={el.temperatureMax.C}
            temperatureMin={el.temperatureMin.C}
            disease={el.disease}
            insects={el.insects}
            waterIconActive={waterIconActive}
            waterIconInactive={waterIconInactive}
            lightIconActive={lightIconActive}
            lightIconInactive={lightIconInactive}
            lightIdeal={el.lightIdeal}
            lightTolered={el.lightTolered}
            compactDisplay
          />
        ))}
      </section>
      {likedPlants.length === 0 && (
        <section className="my-plants-redirect">
          <h2>{`Don't know where to start ?`}</h2>
          <NavLink className="redirect" to="/quizz">
            TAKE OUR QUIZZ
          </NavLink>
        </section>
      )}
      <Footer />
    </>
  );
}

export default MyPlants;
