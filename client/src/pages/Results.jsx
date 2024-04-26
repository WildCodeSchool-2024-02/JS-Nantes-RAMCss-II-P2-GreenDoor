import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlantCards from "../components/PlantCards";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import plants from "../plants.json";
import waterIconInactive from "../assets/icons/WaterGrey.png";
import waterIconActive from "../assets/icons/WaterBlue.png";
import lightIconInactive from "../assets/icons/SunGrey.png";
import lightIconActive from "../assets/icons/SunYellow.png";

function Results() {
  const { answers } = useParams();
  const [suitablePlants, setSuitablePlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Launch the spinner

    const filteredPlants = plants.filter((plant) => {
      let plantFitsCriteria = true;

      const toxicityCriteria = answers[1];
      if (toxicityCriteria === "0" && plant.toxic === true)
        plantFitsCriteria = false;

      // Growth `["Yes, i want to see it grow", "No, i prefer that it stays the same", "Skip question"]`
      const growthCriteria = answers[2];
      if (growthCriteria === "0" && plant.growth === "slow") {
        plantFitsCriteria = false;
      } else if (growthCriteria === "1" && plant.growth !== "slow") {
        plantFitsCriteria = false;
      }

      // treat care levels `["Once a day", "Once a week", "Once a month", "Once a year"]`
      const careCriteria = answers[0];
      // if you want to water yout plants less often than once a month, exclude those that cannot dry
      if (
        careCriteria >= 2 &&
        (plant.watering.includes("Water when soil is half dry") ||
          plant.watering.includes("Must not dry between watering"))
      ) {
        plantFitsCriteria = false;
        // if you want to water yout plants once a week at max, exclude those that cannot dry
      } else if (
        careCriteria >= 1 &&
        plant.watering.includes("Must not dry between watering")
      ) {
        plantFitsCriteria = false;
      }

      const roomOrientationCriteria = answers[3];
      if (
        (roomOrientationCriteria === "0" || roomOrientationCriteria === "2") &&
        plant.lightIdeal.includes("Full sun")
      ) {
        plantFitsCriteria = false;
      } else if (
        roomOrientationCriteria === "1" &&
        (plant.lightTolered ? plant.lightTolered.includes("Diffuse") : true)
      ) {
        plantFitsCriteria = false;
        // for south oriented plants, and those that tolerate only "strong" light conditions
      }

      return plantFitsCriteria;
    });

    setTimeout(() => {
      setSuitablePlants(filteredPlants);
      setLoading(false); // Stop the spinner
    }, 5000);
  }, [answers]);

  return (
    <>
      <hgroup className="results-header">
        <h1>
          {loading
            ? "We are actively searching the best of the best plants for you"
            : "Here are the plants that match your criteria"}
        </h1>
      </hgroup>
      {loading ? (
        <Spinner />
      ) : (
        <section className="compact-cards-container">
          {suitablePlants.map((el) => (
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
      )}
      <Footer />
    </>
  );
}

export default Results;
