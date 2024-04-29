import PropTypes from "prop-types";

function LightNeeds({ lightIdeal, lightTolered, iconActive, iconInactive }) {
  function lightIcons() {
    let valueIdeal = 0;
    let valueTolered = 0;

    if (lightTolered !== null) {
      if (lightTolered.includes("Strong")) {
        valueTolered = 1;
      }
      valueTolered = 0;
    }

    if (lightIdeal.includes("Strong")) {
      valueIdeal = 1;
    } else if (lightIdeal.includes("Full sun")) {
      valueIdeal = 2;
    }
    // valueTolered = 0;
    return valueIdeal === 2 ? 2 : Math.min(valueTolered, valueIdeal);
  }

  return (
    <div>
      <ul className="sunIcons">
        {[0, 1, 2].map((index) => (
          <li key={index}>
            <img
              src={
                lightIcons(lightIdeal, lightTolered) >= index
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
