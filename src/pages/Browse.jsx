//NPM Packages
import { useState, useEffect } from "react";

// Project files

import { readCollection } from "../scripts/fireStore";
import { onFail } from "../scripts/onFail";
import TitleCategory from "../components/TitleCategory";
import BrowseHero from "../components/BrowseHero";

export default function Browse() {
  // Local state
  const [films, setFilms] = useState([]);
  const [series, setSeries] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);
  const [topTen, setTopTen] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  //Properties
  const filmsPath = "titles/films/content";
  const seriesPath = "titles/series/content";
  const docPath = "titles/documentaries/content";
  const topTenPath = "titles/top-ten/content";

  // Method
  useEffect(() => {
    async function loadData() {
      readCategory(filmsPath, setFilms);
      readCategory(seriesPath, setSeries);
      readCategory(docPath, setDocumentaries);
      readCategory(topTenPath, setTopTen);
      setStatus(1);
    }
    loadData();
  }, []);

  async function readCategory(path, setter) {
    const categoryData = await readCollection(path).catch(onLoadFail);
    if (categoryData) setter(categoryData);
  }

  function onLoadFail() {
    onFail();
    setStatus(2);
  }

  //Safeguard
  if (status === 0) return <p>Loading</p>;
  if (status === 2) return <p>error</p>;

  return (
    <div className="browse">
      <BrowseHero />
      <section className="categories">
        <TitleCategory category="Films" list={films} />
        <TitleCategory category="Series" list={series} />
        <TitleCategory category="Documentaries" list={documentaries} />
        <TitleCategory category="Top 10 in Sweden Today" list={topTen} />
      </section>
    </div>
  );
}
