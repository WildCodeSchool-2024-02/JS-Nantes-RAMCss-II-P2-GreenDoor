import PropTypes from "prop-types";
import "../styles/StickyFilter.css";

function StickyFilter({
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

StickyFilter.propTypes = {
  filtersDescriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  iconActive: PropTypes.string.isRequired,
  iconInactive: PropTypes.string.isRequired,
  filter: PropTypes.number.isRequired,
  setFilter: PropTypes.func.isRequired,
};

function scrollFunction() {
  const stickyFilter = document.getElementById("sticky-filter");
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    stickyFilter.style.display = "block"; // Afficher l'élément lorsque le défilement dépasse 800 pixels
  } else {
    stickyFilter.style.display = "none"; // Masquer l'élément lorsque le défilement est inférieur à 800 pixels
  }
}

window.onscroll = function () {
  scrollFunction();
};

export default StickyFilter;
