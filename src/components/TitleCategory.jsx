import TitleCard from "./TitleCard";

export default function TitleCategory({ category, list }) {
  //Components
  const categoryList = list.map((item) => (
    <TitleCard key={item.id} item={item} category={category} />
  ));

  return (
    <section className="title-category">
      <h2>{category}</h2>
      <div className="category">{categoryList}</div>
    </section>
  );
}
