import { useState, useEffect } from "react";
import Header from "../components/Header";
import FiltersTutorial from "../components/FiltersTutorial";
import StickyFilterParent from "../components/StickyFilterParent";
import PlantCards from "../components/PlantCards";
import QuizzRedirection from "../components/QuizzRedirection";
import Footer from "../components/Footer";

import {
  assignLightFilterValue,
  assignWaterFilterValue,
} from "../components/assignFilterValue";

import plants from "../plants.json";
import waterIconInactive from "../assets/icons/WaterGrey.png";
import waterIconActive from "../assets/icons/WaterBlue.png";
import lightIconInactive from "../assets/icons/SunGrey.png";
import lightIconActive from "../assets/icons/SunYellow.png";

function Home() {
  const [waterFilter, setWaterFilter] = useState(0);
  const [lightFilter, setLightFilter] = useState(0);

  const [search, setSearch] = useState("");
  const [foundPlants, setFoundPlants] = useState([]);

  useEffect(() => {
    const foundData = plants.filter((el) => {
      if (search === "") {
        return true;
      }
      if (
        el.commonName !== null &&
        el.commonName.join("").toLowerCase().includes(search)
      ) {
        return true;
      }
      return false;
    });
    setFoundPlants(foundData);
  }, [search]);

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  };

  const handleSubmit = (e) => {
    const targetSection = document.getElementsByClassName("cards-container")[0];
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // this clears the search field whenever a fliter is activated
  useEffect(() => {
    const searchInput = document.getElementById("search-form");
    searchInput.value = "";
    setSearch("");
  }, [waterFilter, lightFilter]);

  const filteredPlants = plants.filter((plant) => {
    if (
      waterFilter === assignWaterFilterValue(plant.watering) &&
      lightFilter ===
        assignLightFilterValue(plant.lightIdeal, plant.lightTolered)
    ) {
      return true;
    }
    return false;
  });

  return (
    <main>
      <Header
        inputHandler={inputHandler}
        handleSubmit={handleSubmit}
        setSearch={setSearch}
        search={search}
        foundPlants={foundPlants}
        setFoundPlants={setFoundPlants}
      />

      <FiltersTutorial
        waterFilter={waterFilter}
        setWaterFilter={setWaterFilter}
        waterIconActive={waterIconActive}
        waterIconInactive={waterIconInactive}
        lightFilter={lightFilter}
        setLightFilter={setLightFilter}
        lightIconActive={lightIconActive}
        lightIconInactive={lightIconInactive}
      />

      <section className="cards-container">
        {(search === "" ? filteredPlants : foundPlants).map((el) => (
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
          />
        ))}
      </section>
      <QuizzRedirection />
      <Footer />
      <StickyFilterParent
        waterFilter={waterFilter}
        setWaterFilter={setWaterFilter}
        waterIconActive={waterIconActive}
        waterIconInactive={waterIconInactive}
        lightFilter={lightFilter}
        setLightFilter={setLightFilter}
        lightIconActive={lightIconActive}
        lightIconInactive={lightIconInactive}
      />
    </main>
  );
}

export default Home;
