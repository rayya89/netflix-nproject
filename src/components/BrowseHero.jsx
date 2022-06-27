//Project Files
import heroLogo from "../assets/pictures/heroLogo.png";
import logo from "../assets/pictures/logo.png";

export default function BrowseHero() {
  const link = "https://www.youtube.com/watch?v=E26VtF4dURE";
  return (
    <div className="browse-hero">
      <header>
        <img className="logo" src={logo} alt="Netflix" />
      </header>
      <img className="film-logo" src={heroLogo} alt="Toscana movie logo" />
      <a className="link" href={link} target="_blank" rel="noreferrer noopener">
        Play
      </a>
      <span>+16</span>
    </div>
  );
}
