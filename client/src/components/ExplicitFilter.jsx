import PropTypes from "prop-types";

function ExplicitFilter({
  title,
  filtersDescriptions,
  iconActive,
  iconInactive,
  filter,
  setFilter,
}) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {[0, 1, 2].map((index) => (
          <li key={index}>
            <button type="button" onClick={() => setFilter(index)}>
              <img
                src={filter >= index ? iconActive : iconInactive}
                alt={filtersDescriptions[filter]}
              />
            </button>
          </li>
        ))}
      </ul>
      <p>{filtersDescriptions[filter]}</p>
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
