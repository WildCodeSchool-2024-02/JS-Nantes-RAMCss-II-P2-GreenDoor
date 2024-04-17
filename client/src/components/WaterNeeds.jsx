import PropTypes from "prop-types";

function WaterNeeds({ watering, iconActive, iconInactive }) {
  function waterIcons() {
    let value = 0;
    if (watering.includes("Water when soil is half dry")) {
      value = 1;
    } else if (watering.includes("Must not dry between watering")) {
      value = 2;
    }
    return value;
  }

  return (
    <ul className="waterIcons">
      {[0, 1, 2].map((index) => (
        <li key={index}>
          <img
            src={waterIcons(watering) >= index ? iconActive : iconInactive}
            alt={watering}
          />
        </li>
      ))}
      <li>{watering}</li>
    </ul>
  );
}

WaterNeeds.propTypes = {
  watering: PropTypes.string.isRequired,
  iconActive: PropTypes.element.isRequired,
  iconInactive: PropTypes.element.isRequired,
};
export default WaterNeeds;
