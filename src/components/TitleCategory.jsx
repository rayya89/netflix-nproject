import TitleCard from "./TitleCard";

export default function TitleCategory({ category, list }) {
  //Components
  const categoryList = list.map((item) => (
    <TitleCard key={item.id} item={item} category={category} />
  ));

  return (
    <section>
      <h2>{category}</h2>
      {categoryList}
    </section>
  );
}
