import PropTypes from "prop-types";
import "../styles/Header.css";
import searchIcon from "../assets/icons/SearchIcon.png";

function Header({ filteredPlant, search, inputHandler, handleSubmit }) {
  return (
    <header>
      <h1>Find the perfect plants for your interior</h1>
      <h2>
        and learn to take <strong>good care</strong> of them
      </h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="search-form">
          <img src={searchIcon} alt="Search Icon" />
        </label>
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder="Search for a plant"
          onChange={inputHandler}
          autoComplete="off"
          list="browsers"
        />
        <datalist id="browsers" className="search-option">
          {search === ""
            ? ""
            : filteredPlant.map((plant) => (
                <option
                  className="search-option"
                  key={plant.id}
                  value={plant.commonName !== null && plant.commonName[0]}
                  alt="input"
                />
              ))}
        </datalist>
      </form>

      {search === "" ? (
        <h3>
          {" "}
          Use searchbar to find <strong>your plants</strong>{" "}
        </h3>
      ) : (
        <h3>
          {" "}
          We found <strong>{filteredPlant.length} plants</strong>, see it below
        </h3>
      )}
    </header>
  );
}

Header.propTypes = {
  search: PropTypes.string.isRequired,
  inputHandler: PropTypes.string.isRequired,
  handleSubmit: PropTypes.element.isRequired,
  filteredPlant: PropTypes.element.isRequired,
};
export default Header;
