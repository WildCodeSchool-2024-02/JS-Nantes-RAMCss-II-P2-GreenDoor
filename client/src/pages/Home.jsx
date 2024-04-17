import Header from "../components/Header";
import FiltersTutorial from "../components/FiltersTutorial";
import PlantCards from "../components/PlantCards";
import waterIconInactive from "../assets/icons/WaterGrey.png";
import waterIconActive from "../assets/icons/WaterBlue.png";
import plants from "../plants.json";

function Home() {
  return (
    <main>
      <Header />
      <FiltersTutorial />
      {plants.map((el) => (
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
          iconActive={waterIconActive}
          iconInactive={waterIconInactive}
          lightIdeal={el.lightIdeal}
          lightTolered={el.lightTolered}
        />
      ))}
    </main>
  );
}

export default Home;
