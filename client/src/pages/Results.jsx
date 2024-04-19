import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlantCards from "../components/PlantCards";
import plants from "../plants.json";
import waterIconInactive from "../assets/icons/WaterGrey.png";
import waterIconActive from "../assets/icons/WaterBlue.png";
import lightIconInactive from "../assets/icons/SunGrey.png";
import lightIconActive from "../assets/icons/SunYellow.png";

function Results() {
  const { answers } = useParams();
  const [suitablePlants, setSuitablePlants] = useState(plants);

  // this hook will trigger an effect at page loadup
  useEffect(() => {
    setSuitablePlants(() =>
      plants.filter((plant) => {
        let plantFitsCriteria = true;

        // toxicity : ignore for now
        // const toxicityCriteria = answers[1];

        // Growth `["Yes, i want to see it grow", "No, i prefer that it stays the same", "Skip question"]`
        // const growthCriteria = answers[2];

        // first approach : return false if one of the criteria doesn't match

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

        // Room orientation [0 : North, 1 : South, 2 : East, 3 West]
        const roomOrientationCriteria = answers[3];
        // Sunlight `["I'm drowning in sunlight","A little bit of light","I'm a vampire","Skip question"]`
        // const sunlightCriteria = answers[4];

        // For north or east-oriented rooms, whatever the light they get
        if (
          (roomOrientationCriteria === "0" ||
            roomOrientationCriteria === "2") &&
          plant.lightIdeal.includes("Full sun")
        ) {
          plantFitsCriteria = false;
          // for south oriented plants, and those that tolerate only "strong" light conditions
        } else if (
          roomOrientationCriteria === "1" &&
          (plant.lightTolered ? plant.lightTolered.includes("Diffuse") : true)
        ) {
          plantFitsCriteria = false;
        }

        return plantFitsCriteria;
      })
    );
  }, [answers]);

  return (
    <>
      <hgroup className="results-header">
        <h1>Here are the plants that match your criteria</h1>
      </hgroup>
      <section className="compact-cards-container">
        {suitablePlants.map((el) => (
          <PlantCards
            key={el.id}
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
    </>
  );
}

export default Results;
