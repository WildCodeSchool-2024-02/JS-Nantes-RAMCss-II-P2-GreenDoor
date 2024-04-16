import "../styles/Header.css";
import searchIcon from "../assets/icons/SearchIcon.png";

function Header() {
  return (
    <header>
      <h1>Find the perfect plants for your interior</h1>
      <h2>
        and learn to take <strong>good care</strong> of them
      </h2>
      <form>
        <label htmlFor="search-form">
          <img src={searchIcon} alt="Search Icon" />
        </label>
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder="Search for a plant"
        />
      </form>
    </header>
  );
}

export default Header;
