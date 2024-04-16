import Header from "../components/Header";
import FiltersTutorial from "../components/FiltersTutorial";
import PlantCards from "../components/PlantCards";
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
        />
      ))}
    </main>
  );
}

export default Home;
