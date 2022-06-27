export default function ImageInput({ label, setter }) {
  //Properties
  const imageFormats = "image/png, image/jpeg";

  //Methods
  async function onImageChoose(event) {
    const file = event.target.files[0];
    setter(file);
  }

  return (
    <label className="image-input">
      <span>{label}</span>
      <input type="file" accept={imageFormats} onChange={onImageChoose} />
    </label>
  );
}
