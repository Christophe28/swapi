import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FilmsCards from "../components/films-cards";

const Home = () => {
  const [allFilms, setAllFilms] = useState([]);
  const [cache, setCache] = useState({});

  useEffect(async () => {
    const response = await axios("https://swapi.dev/api/films");
    setAllFilms(response.data.results);
  }, []);

  return (
    <div className="container-home">
      <FilmsCards data={allFilms} />
    </div>
  );
};

export default Home;
