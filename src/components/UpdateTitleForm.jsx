//NPM packages
import { useState } from "react";

//Project files
import { useItems } from "../state/ItemsContext";
import { useModal } from "../state/ModalContext";
import { updateDocument } from "../scripts/fireStore";
import { createFile } from "../scripts/cloudStorage";
import InputField from "../components/InputField";
import ImageInput from "./ImageInput";
import form from "../data/titleForm.json";

export default function UpdateTitleForm({ item, category }) {
  const { items, setItems } = useItems();
  const { setModal } = useModal();

  //Localstate
  const [name, setName] = useState(item.name);
  const [desc, setDesc] = useState(item.description);
  const [image, setImage] = useState(null);
  const [logo, setLogo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [ranking, setRanking] = useState(item.ranking);
  const [link, setLink] = useState(item.link);
  const [year, setYear] = useState(item.year);

  //Properties
  const path = `titles/${category}/content`;
  const imagePath = `${category}/${name}-image.png`;
  const logoPath = `${category}/${name}-logo.png`;
  const thumbnailPath = `${category}/${name}-thumbnail.png`;

  //Methods
  async function onUpdate(event) {
    event.preventDefault();

    const imageURL = await createFile(imagePath, image).catch(onFail);
    const logoURL = await createFile(logoPath, logo).catch(onFail);
    const thumbnailURL = await createFile(thumbnailPath, thumbnail).catch(
      onFail
    );

    const editedTitle = {
      id: item.id,
      name: name,
      description: desc,
      imageURL: imageURL,
      thumbnailURL: thumbnailURL,
      logoURL: logoURL,
      ranking: ranking,
      link: link,
      year: year,
    };
    const updated = await updateDocument(path, editedTitle).catch(onFail);
    if (updated) onSuccess(editedTitle);
  }

  function onSuccess(editedTitle) {
    const clonedItems = [...items];
    const index = clonedItems.findIndex((item) => item.id === editedTitle.id);

    clonedItems[index] = editedTitle;
    setItems(clonedItems);
    setModal(null);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not update a document.");
  }

  return (
    <form className="form" onSubmit={onUpdate}>
      <h2>Edit Title</h2>
      <InputField setup={form.name} state={[name, setName]} />
      <InputField setup={form.desc} state={[desc, setDesc]} />
      <ImageInput label="Image" setter={setImage} />
      <ImageInput label="Logo" setter={setLogo} />
      <ImageInput label="Thumbnail" setter={setThumbnail} />
      <InputField setup={form.ranking} state={[ranking, setRanking]} />
      <InputField setup={form.link} state={[link, setLink]} />
      <InputField setup={form.year} state={[year, setYear]} />
      <button className="button primary">Edit existing title</button>
      <button className="button secondary" onClick={() => setModal(null)}>
        Cancel Edit
      </button>
    </form>
  );
}
