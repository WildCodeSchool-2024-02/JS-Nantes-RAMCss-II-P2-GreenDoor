import PropTypes from "prop-types";

function PlantCard({ img, commonName, latinName, maintenance }) {
  return (
    <article>
      <figure>
        <img src={img} alt={commonName} />
        <figcaption>
          <h1>{commonName}</h1>
          <h2>{latinName}</h2>
          <h3>{maintenance}</h3>
          <p>Text</p>
        </figcaption>
      </figure>
    </article>
  );
}

PlantCard.propTypes = {
  img: PropTypes.string.isRequired,
  commonName: PropTypes.string.isRequired,
  latinName: PropTypes.string.isRequired,
  maintenance: PropTypes.string.isRequired,
};

export default PlantCard;
