//Project files
import { useModal } from "../state/ModalContext";
import UpdateTitleForm from "./UpdateTitleForm";
import DeleteTitleForm from "./DeleteTitleForm";
import TitleModal from "./TitleModal";

export default function AdminTitleCard({ item, category }) {
  const { name, thumbnailURL } = item;
  const { setModal } = useModal();

  return (
    <article>
      <div className="container">
        <button
          onClick={() =>
            setModal(<UpdateTitleForm item={item} category={category} />)
          }
        >
          Edit
        </button>
        <button
          onClick={() =>
            setModal(<DeleteTitleForm item={item} category={category} />)
          }
        >
          Delete
        </button>
        <img
          onClick={() => setModal(<TitleModal item={item} />)}
          src={thumbnailURL}
          alt="movie-poster"
        />
      </div>
      <h3>{name}</h3>
    </article>
  );
}
