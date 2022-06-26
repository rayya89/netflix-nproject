//NPM Packages
import { useState, useEffect } from "react";

//project files
import { onFail } from "../scripts/onFail";
import { readCollection } from "../scripts/fireStore";
import EpisodesList from "./EpisodesList";

export default function SeasonsList({ item }) {
  const { id } = item;

  //Local state
  const [seasons, setSeasons] = useState([]);
  const [episods, setEpisods] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  //Properties
  const seriesPath = `titles/series/content/${id}/content`;
  let seasonPath = `titles/series/content/${id}/content/season1/content`;

  // Method
  useEffect(() => {
    async function loadData() {
      const seasonsData = await readCollection(seriesPath).catch(onLoadFail);
      if (seasonsData) setSeasons(seasonsData);
      const episodsData = await readCollection(seasonPath).catch(onLoadFail);
      if (episodsData) setEpisods(episodsData);
      setStatus(1);
    }
    loadData();
  }, []);

  function onLoadFail() {
    onFail();
    setStatus(2);
  }

  async function handleSelection(event) {
    seasonPath = `titles/series/content/${id}/content/${event.target.value}/content`;
    const episodsData = await readCollection(seasonPath).catch(onLoadFail);
    if (episodsData) setEpisods(episodsData);
  }

  //Safeguard
  if (status === 0) return <p>Loading</p>;
  if (status === 2) return <p>error</p>;

  //Components
  const seasonsList = seasons.map((item, index) => (
    <option key={index} value={item.id}>
      {item.id}
    </option>
  ));

  return (
    <section>
      <h2>Episodes</h2>
      <select onChange={handleSelection}>{seasonsList}</select>
      <EpisodesList episods={episods} />
    </section>
  );
}
