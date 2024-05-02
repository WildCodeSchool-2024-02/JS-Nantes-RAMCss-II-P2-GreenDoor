import PropTypes from "prop-types";

function Filter({
  filtersDescriptions,
  iconActive,
  iconInactive,
  filter,
  setFilter,
}) {
  return (
    <div id="sticky-filter">
      <ul>
        {[0, 1, 2].map((index) => (
          <li key={index}>
            <button type="button" onClick={() => setFilter(() => index)}>
              <img
                src={filter >= index ? iconActive : iconInactive}
                alt={filtersDescriptions[filter]}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Filter.propTypes = {
  filtersDescriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  iconActive: PropTypes.string.isRequired,
  iconInactive: PropTypes.string.isRequired,
  filter: PropTypes.number.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
