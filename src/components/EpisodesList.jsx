//Program packages
import EpisodeCard from "./EpisodeCard";

export default function EpisodesList({ episods }) {
  //Components
  const episodsList = episods.map((item) => (
    <EpisodeCard key={item.id} item={item} />
  ));

  return <div>{episodsList}</div>;
}
