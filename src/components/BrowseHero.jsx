import hero from "../assets/pictures/hero.jpg";
import heroLogo from "../assets/pictures/heroLogo.png";

export default function BrowseHero() {
  const link = "https://www.youtube.com/watch?v=E26VtF4dURE";
  return (
    <div>
      <img src={hero} alt="Toscana movie poster" />
      <img src={heroLogo} alt="Toscana movie logo" />
      <a href={link} target="_blank" rel="noreferrer noopener">
        Play
      </a>
      <span>+16</span>
    </div>
  );
}
