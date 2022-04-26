import React from "react";

const SpeciesCards = ({ data }) => {

  return (
    <div className="container-cards-species">
      <h2>Species</h2>
      <ul>
        {data.map((specie) => (
          <li key={specie.url}>{specie.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpeciesCards;
