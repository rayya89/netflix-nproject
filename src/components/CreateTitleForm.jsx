//NPM packages
import { useState } from "react";

//Project files
import { useItems } from "../state/ItemsContext";
import { useModal } from "../state/ModalContext";
import { createDocument } from "../scripts/fireStore";
import { createFile } from "../scripts/cloudStorage";
import InputField from "../components/InputField";
import ImageInput from "./ImageInput";
import form from "../data/titleForm.json";

export default function CreateTitleForm({ category }) {
  const { items, setItems } = useItems();
  const { setModal } = useModal();

  //Localstate
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [logo, setLogo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [ranking, setRanking] = useState("");
  const [link, setLink] = useState("");
  const [year, setYear] = useState(0);

  //Properties
  const path = `titles/${category}/content`;
  const imagePath = `${category}/${name}-image.png`;
  const logoPath = `${category}/${name}-logo.png`;
  const thumbnailPath = `${category}/${name}-thumbnail.png`;

  async function onCreate(event) {
    event.preventDefault();

    const imageURL = await createFile(imagePath, image).catch(onFail);
    const logoURL = await createFile(logoPath, logo).catch(onFail);
    const thumbnailURL = await createFile(thumbnailPath, thumbnail).catch(
      onFail
    );

    let newTitle = {
      name: name,
      description: desc,
      imageURL: imageURL,
      thumbnailURL: thumbnailURL,
      logoURL: logoURL,
      ranking: ranking,
      link: link,
      year: year,
    };
    const createdId = await createDocument(path, newTitle).catch(onFail);
    if (createdId) onSuccess(newTitle, createdId);
  }

  function onSuccess(newTitle, createdId) {
    newTitle.id = createdId;
    setItems([...items, newTitle]);
    setModal(null);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not create a document.");
  }

  return (
    <form className="form" onSubmit={onCreate}>
      <h2>Add Title</h2>
      <InputField setup={form.name} state={[name, setName]} />
      <InputField setup={form.desc} state={[desc, setDesc]} />
      <ImageInput label="Image" setter={setImage} />
      <ImageInput label="Logo" setter={setLogo} />
      <ImageInput label="Thumbnail" setter={setThumbnail} />
      <InputField setup={form.ranking} state={[ranking, setRanking]} />
      <InputField setup={form.link} state={[link, setLink]} />
      <InputField setup={form.year} state={[year, setYear]} />
      <button className="button primary">Add new title</button>
      <button className="button secondary" onClick={() => setModal(null)}>
        Cancel title
      </button>
    </form>
  );
}
