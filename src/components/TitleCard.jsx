//project Files
import { useModal } from "../state/ModalContext";
import TitleModal from "./TitleModal";

export default function TitleCard({ item, category }) {
  const { thumbnailURL } = item;
  const { setModal } = useModal();

  return (
    <div className="title-card">
      <img
        onClick={() => setModal(<TitleModal item={item} category={category} />)}
        src={thumbnailURL}
        alt="title-poster"
      />
    </div>
  );
}
