import PropTypes from "prop-types";
import { assignWaterFilterValue } from "./assignFilterValue";

function WaterNeeds({ watering, iconActive, iconInactive }) {
  return (
    <div>
      <ul className="waterIcons">
        {[0, 1, 2].map((index) => (
          <li key={index}>
            <img
              src={
                assignWaterFilterValue(watering) >= index
                  ? iconActive
                  : iconInactive
              }
              alt={watering}
            />
          </li>
        ))}
      </ul>
      <p className="waterInstruction">{watering}</p>
    </div>
  );
}

WaterNeeds.propTypes = {
  watering: PropTypes.string.isRequired,
  iconActive: PropTypes.element.isRequired,
  iconInactive: PropTypes.element.isRequired,
};
export default WaterNeeds;
