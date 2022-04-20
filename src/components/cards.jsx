import React from "react";

const Cards = ({ data, setElement }) => {
    console.log(data);
  return (
    <div className="container-cards">
      {data.map((element) => (
        <section key={element.episode_id} onClick={() => console.log(element)}>
          <h3>{element.title}</h3>
          <section className="info">
              <p>Episode : {element.episode_id}</p>
              <p>Director : {element.director}</p>
              <p>Producer : {element.producer}</p>
          </section>
        </section>
      ))}
    </div>
  );
};

export default Cards;
