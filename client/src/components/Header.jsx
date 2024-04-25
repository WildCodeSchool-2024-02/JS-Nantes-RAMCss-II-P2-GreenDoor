import PropTypes from "prop-types";
import "../styles/Header.css";
import searchIcon from "../assets/icons/SearchIcon.png";

function Header({ search, inputHandler, handleSubmit }) {
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
        />
      </form>
      {search === "" ? "" : <h3> We found {} plants, see it below</h3>}
    </header>
  );
}

Header.propTypes = {
  search: PropTypes.string.isRequired,
  inputHandler: PropTypes.string.isRequired,
  handleSubmit: PropTypes.element.isRequired,
};
export default Header;
