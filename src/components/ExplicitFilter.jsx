import { useState } from "react";
import PropTypes from "prop-types";

function ExplicitFilter({
  title,
  filtersDescriptions,
  iconActive,
  iconInactive,
  filter,
  setFilter,
}) {
  const [displayedDescription, setDisplayedDescription] = useState(filter);
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {[0, 1, 2].map((index) => (
          <li key={index}>
            <button
              type="button"
              onClick={() => setFilter(() => index)}
              onMouseEnter={() => setDisplayedDescription(index)}
              onMouseLeave={() => setDisplayedDescription(filter)}
            >
              <img
                src={
                  filter >= index || displayedDescription >= index
                    ? iconActive
                    : iconInactive
                }
                alt={filtersDescriptions[filter]}
              />
            </button>
          </li>
        ))}
      </ul>
      <p>{filtersDescriptions[displayedDescription]}</p>
    </div>
  );
}

ExplicitFilter.propTypes = {
  title: PropTypes.string.isRequired,
  filtersDescriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  iconActive: PropTypes.string.isRequired,
  iconInactive: PropTypes.string.isRequired,
  filter: PropTypes.number.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default ExplicitFilter;
