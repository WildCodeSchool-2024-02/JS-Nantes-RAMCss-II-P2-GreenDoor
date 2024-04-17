import "../styles/Footer.css";

function Footer() {
  const handleClick = () => {
    alert("Vous allez être redirigée sur la police Champagne&Limousines");
  };

  const LinkedinProfil = () => {
    alert("Voir le Linkedin");
  };

  return (
    <footer>
      <h6 className="credit">
        <p>
          Developed by
          <a
            href="https://www.linkedin.com/in/alexis-guillon-9301252b9/"
            target="_blank"
            rel="noreferrer"
            onClick={LinkedinProfil}
          >
            {" "}
            Alexis Guillon
          </a>
          ,
          <a
            href="https://www.linkedin.com/in/micka%C3%ABl-d-07a2722a2/"
            target="_blank"
            rel="noreferrer"
            onClick={LinkedinProfil}
          >
            {" "}
            Mickaël Démoléon
          </a>
          ,
          <a
            href="https://www.linkedin.com/in/th%C3%A9o-degorre-a89086133/"
            target="_blank"
            rel="noreferrer"
            onClick={LinkedinProfil}
          >
            {" "}
            Théo Degorre
          </a>{" "}
          and
          <a
            href="https://www.linkedin.com/in/davidlegall/"
            target="_blank"
            rel="noreferrer"
            onClick={LinkedinProfil}
          >
            {" "}
            David Le Gall
          </a>
        </p>
        <p>
          Typo :{" "}
          <a
            href="https://www.dafont.com/fr/champagne-limousines.font?text=greenDOOR&psize=l&back=theme"
            target="_blank"
            rel="noreferrer"
            onClick={handleClick}
          >
            Champagne&Limousines
          </a>
        </p>
      </h6>
    </footer>
  );
}

export default Footer;
