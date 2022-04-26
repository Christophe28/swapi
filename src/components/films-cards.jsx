import React from "react";

const FilmsCards = ({ 
  data, 
  getCharacter, 
  getPlanets, 
  getSpecies, 
  getUrl, 
  setCurrentFilmCharacters, 
  setCurrentFilmPlanets, 
  setCurrentSpecies }) => {
  return (
    <div className="container-films-cards">
      {data.map((film) => (
        <section key={film.episode_id} onClick={() => {
          getCharacter(film.characters, getUrl, setCurrentFilmCharacters);
          getPlanets(film.planets, getUrl, setCurrentFilmPlanets);
          getSpecies(film.species, getUrl, setCurrentSpecies)
        }}>
          <h3>{film.title}</h3>
          <section className="info">
            <p>Episode : {film.episode_id}</p>
            <p>Director : {film.director}</p>
            <p>Producer : {film.producer}</p>
          </section>
        </section>
      ))}
    </div>
  );
};

export default FilmsCards;
