import React from "react";

const FilmsCards = ({ data }) => {
  return (
    <div className="container-cards">
      {data.map((film) => (
        <section key={film.episode_id}>
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
