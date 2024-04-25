import { useState, useEffect } from "react";
import Header from "../components/Header";
import FiltersTutorial from "../components/FiltersTutorial";
import PlantCards from "../components/PlantCards";
import QuizzRedirection from "../components/QuizzRedirection";
import Footer from "../components/Footer";

import plants from "../plants.json";
import waterIconInactive from "../assets/icons/WaterGrey.png";
import waterIconActive from "../assets/icons/WaterBlue.png";
import lightIconInactive from "../assets/icons/SunGrey.png";
import lightIconActive from "../assets/icons/SunYellow.png";

function Home() {
  const [search, setSearch] = useState("");
  const [filteredPlant, setFilteredPlant] = useState([]);

  useEffect(() => {
    const filteredData = plants.filter((el) => {
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
    setFilteredPlant(filteredData);
  }, [search]);

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.scrollIntoView({ bahavior: "smooth" });
    const targetSection = document.getElementById("target-section"); // Remplacez 'target-section' par l'ID de la section vers laquelle vous voulez faire défiler
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" }); // Faites défiler en douceur (smooth)
    }
  };

  return (
    <main>
      <Header
        inputHandler={inputHandler}
        handleSubmit={handleSubmit}
        setSearch={setSearch}
        search={search}
      />
      <FiltersTutorial />
      <section className="cards-container">
        {filteredPlant.map((el) => (
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
          />
        ))}
      </section>
      <QuizzRedirection />
      <Footer />
    </main>
  );
}

export default Home;
