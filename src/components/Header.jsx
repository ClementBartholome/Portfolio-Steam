import logoGitHub from "../assets/logo_github.svg";
import logoLinkedin from "../assets/logo_linkedin.svg";

export default function Header() {
  return (
    <header>
      <span>
        Tous les développeurs {">"} JavaScript - React {">"} Clément Bartholomé
      </span>
      <div className="header-info">
        <h1>Clément Bartholomé</h1>
        <div className="social-links">
          <a
            href="https://www.google.com/maps/place/La+Rochelle/data=!4m2!3m1!1s0x48015383c9253d75:0x405d39260ee9640?sa=X&ved=2ahUKEwix3aHPvqeAAxU_UqQEHY8lBYYQ8gF6BAgTEAA&ved=2ahUKEwix3aHPvqeAAxU_UqQEHY8lBYYQ8gF6BAgUEAI"
            target="_blank"
            rel="noreferrer">
            <span className="location">📍 La Rochelle</span>
          </a>
          <a
            href="https://github.com/ClementBartholome"
            target="_blank"
            rel="noreferrer">
            <img src={logoGitHub} alt="Logo GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/clementbartholome/"
            target="_blank"
            rel="noreferrer">
            <img src={logoLinkedin} alt="Logo LinkedIn" />
          </a>
        </div>
      </div>
    </header>
  );
}
