import "../styles/Header.css";

function Header() {
  return (
    <header>
      <h1>Find the perfect plants for your interior</h1>
      <h2>and learn to take good care of them</h2>
      <form>
        <label htmlFor="search-form" >
          <img src="../assets/icons/SearchIcon.png" alt="Search Icon" />
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
