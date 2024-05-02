import { NavLink } from "react-router-dom";

function Footer() {
  const linkedinProfiles = [
    {
      name: "Alexis Guillon",
      linkedin: "https://www.linkedin.com/in/alexis-guillon-9301252b9/",
    },
    {
      name: "Mickaël Démoléon",
      linkedin: "https://www.linkedin.com/in/micka%C3%ABl-d-07a2722a2/",
    },
    {
      name: "Théo Degorre",
      linkedin: "https://www.linkedin.com/in/th%C3%A9o-degorre-a89086133/",
    },
    {
      name: "David Le Gall",
      linkedin: "https://www.linkedin.com/in/davidlegall/",
    },
  ];

  return (
    <footer>
      <h6 className="credit">
        <p>
          Developed by :{" "}
          {linkedinProfiles.map((profile, indx) => (
            <NavLink
              key={profile.name}
              to={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {indx === linkedinProfiles.length - 1
                ? `${profile.name}`
                : `${profile.name}, `}
            </NavLink>
          ))}
        </p>
        <p>
          Typo :{" "}
          <NavLink
            to="https://www.dafont.com/fr/champagne-limousines.font?text=greenDOOR&psize=l&back=theme"
            target="_blank"
            rel="noreferrer"
          >
            Champagne&Limousines
          </NavLink>
        </p>
      </h6>
    </footer>
  );
}

export default Footer;
