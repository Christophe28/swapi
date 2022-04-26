import React from "react";

const CharactersCards = ({ data }) => {

  return (
    <div className="container-cards-characters">
    <h2>Characters</h2>
      <section className="names-characters">
        <ul>
          {data.map((character) => (
            <li key={character.url}>{character.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CharactersCards;
