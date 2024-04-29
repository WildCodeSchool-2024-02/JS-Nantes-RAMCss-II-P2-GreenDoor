import PropTypes from "prop-types";
import { assignLightFilterValue } from "./assignFilterValue";

function LightNeeds({ lightIdeal, lightTolered, iconActive, iconInactive }) {

  return (
    <div>
      <ul className="sunIcons">
        {[0, 1, 2].map((index) => (
          <li key={index}>
            <img
              src={
                assignLightFilterValue(lightIdeal, lightTolered) >= index
                  ? iconActive
                  : iconInactive
              }
              alt={lightIdeal}
            />
          </li>
        ))}
      </ul>
      <p className="sunInstruction">
        Can tolerate{" "}
        {lightTolered ? lightTolered.replace(/\((.*?)\)/g, "") : "missing info"}{" "}
        to {lightIdeal.replace(/\((.*?)\)/g, "")}
      </p>
    </div>
  );
}

LightNeeds.propTypes = {
  lightIdeal: PropTypes.string.isRequired,
  lightTolered: PropTypes.string.isRequired,
  iconActive: PropTypes.element.isRequired,
  iconInactive: PropTypes.element.isRequired,
};
export default LightNeeds;
