import PropTypes from "prop-types";
import WaterNeeds from "./WaterNeeds";
import LightNeeds from "./LightNeeds";
import waterIconInactive from "../assets/icons/WaterGrey.png";
import waterIconActive from "../assets/icons/WaterBlue.png";
import lightIconInactive from "../assets/icons/SunGrey.png";
import lightIconActive from "../assets/icons/SunYellow.png";

function PlantCard({
  img,
  commonName,
  latinName,
  watering,
  growth,
  heightPotential,
  pruning,
  temperatureMin,
  temperatureMax,
  insects,
  disease,
  lightIdeal,
  lightTolered,
}) {
  return (
    <article>
      <figure>
        <img src={img} alt={commonName} />
        <figcaption>
          <hgroup>
            <h2>{commonName}</h2>
            <h3>{latinName}</h3>
          </hgroup>
<section className = "needsIcons">
          <WaterNeeds
            watering={watering}
            iconActive={waterIconActive}
            iconInactive={waterIconInactive}
          />


          <LightNeeds
            lightIdeal={lightIdeal}
            lightTolered={lightTolered}
            iconActive={lightIconActive}
            iconInactive={lightIconInactive}
          />
</section>
          <h4>Entretien :</h4>
          <p>
            Plants with {growth} growth, can reach an average size of{" "}
            {heightPotential} cm, {pruning}, keep between {temperatureMin} °C
            and {temperatureMax} °C
          </p>
          <p>Main diseases : {disease}</p>
          <p>Main pest : {insects}</p>
          {/* ne pas afficher les message si contenu = N/A */}
        </figcaption>
      </figure>
    </article>
  );
}

PlantCard.propTypes = {
  img: PropTypes.string.isRequired,
  commonName: PropTypes.string.isRequired,
  latinName: PropTypes.string.isRequired,
  pruning: PropTypes.string.isRequired,
  watering: PropTypes.string.isRequired,
  heightPotential: PropTypes.number.isRequired,
  growth: PropTypes.string.isRequired,
  temperatureMax: PropTypes.number.isRequired,
  temperatureMin: PropTypes.number.isRequired,
  insects: PropTypes.string.isRequired,
  disease: PropTypes.string.isRequired,
  lightIdeal: PropTypes.string.isRequired,
  lightTolered: PropTypes.string.isRequired,
};

export default PlantCard;
