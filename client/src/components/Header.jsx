import '../styles/Header.css'

function Header() {
  return (
    <header>
      <h1>Find the perfect plants for your interior</h1>
      <h2>and learn to take good care of them</h2>
      <input
        type="search"
        name="search-form"
        id="search-form"
        className="search-input"
        placeholder="Search for a plant"
      />
    </header>
  );
}

export default Header;
