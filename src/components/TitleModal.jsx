//project files
import { useModal } from "../state/ModalContext";
import SeasonsList from "./SeasonsList";

export default function TitleModal({ item, category }) {
  const { id, logoURL, imageURL, description, year, ranking, link } = item;
  const { setModal } = useModal();

  //Properties
  const youtubeLink = `https://www.youtube.com/watch?v=${link}`;

  return (
    <div>
      <button onClick={() => setModal(null)}>x</button>
      <img src={imageURL} alt="title poster" />
      <img src={logoURL} alt="title logo" />
      <a href={youtubeLink} target="_blank" rel="noreferrer noopener">
        Play
      </a>
      <span>{year}</span>
      <span>{ranking}</span>
      <p>{description}</p>
      {category === "Series" && <SeasonsList key={id} item={item} />}
    </div>
  );
}
