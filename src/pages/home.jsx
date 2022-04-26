//React import
import React from "react";
import { useState, useEffect } from "react";

//Components import
import FilmsCards from "../components/films-cards";
import CharactersCards from "../components/characters-cards";
import PlanetsCards from "../components/planets-cards";
import SpeciesCards from "../components/species-cards";

//Logic import
import useCache from "../hooks/use-cache.js";
import getInfoPerFilm from "../functions/getInfoPerFilm";

const Home = () => {
  const [allFilms, setAllFilms] = useState([]);
  const [currentFilmCharacters, setCurrentFilmCharacters] = useState([]);
  const [currentFilmPlanets, setCurrentFilmPlanets] = useState([]);
  const [currentFilmSpecies, setCurrentFilmSpecies] = useState([]);

  const getUrl = useCache();

  useEffect(async () => {
    const data = await getUrl("https://swapi.dev/api/films");
    setAllFilms(data.results);
  }, []);

  return (
    <div className="container-home">
      <FilmsCards 
        data={allFilms} 
        getCharacter={getInfoPerFilm}
        getPlanets={getInfoPerFilm}
        getSpecies={getInfoPerFilm}
        getUrl={getUrl}
        setCurrentFilmCharacters={setCurrentFilmCharacters}
        setCurrentFilmPlanets={setCurrentFilmPlanets}
        setCurrentSpecies={setCurrentFilmSpecies}
      />
      <section className="container-infos-films">
        <CharactersCards
          data={currentFilmCharacters}
        />
        <PlanetsCards 
          data={currentFilmPlanets}
        />
        <SpeciesCards 
          data={currentFilmSpecies}
        />
      </section>
    </div>
  );
};

export default Home;
