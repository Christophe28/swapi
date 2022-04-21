import React from "react";
import { useState, useEffect } from "react";
import FilmsCards from "../components/films-cards";
import useCache from "../hooks/use-cache";

const Home = () => {
  const [allFilms, setAllFilms] = useState([]);
  const getUrl = useCache();

  useEffect(async () => {
    const data = await getUrl("https://swapi.dev/api/films");
    setAllFilms(data.results);
  }, []);
  
  return (
    <div className="container-home">
      <FilmsCards data={allFilms} />
    </div>
  );
};

export default Home;
