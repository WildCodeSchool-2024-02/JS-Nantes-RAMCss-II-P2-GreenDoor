import PropTypes from "prop-types";

function PlantCard({ img, commonName, latinName, pruning }) {
  return (
    <article>
      <figure>
        <img src={img} alt={commonName} />
        <figcaption>
          <hgroup>
            <h2>{commonName}</h2>
            <h3>{latinName}</h3>
          </hgroup>
          {/* {lightIdeal.includes("Strong") ? (
            <> */}
          <section>
            <div className="waterIcons">
              <img src="./src/assets/icons/WaterBlue.png" alt="SunYellow1" />
              <img src="./src/assets/icons/WaterBlue.png" alt="SunYellow2" />
              <img src="./src/assets/icons/WaterBlue.png" alt="SunYellow3" />
            </div>
            {/* </>
          ) : (
            <p>Autres</p>
          )} */}
            <div className="sunIcons">
              <img src="./src/assets/icons/SunYellow.png" alt="SunYellow1" />
              <img src="./src/assets/icons/SunYellow.png" alt="SunYellow2" />
              <img src="./src/assets/icons/SunYellow.png" alt="SunYellow3" />
            </div>
          </section>
          <h4>Entretien</h4>
          <p>Pruning:{pruning}</p>
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
};

export default PlantCard;
