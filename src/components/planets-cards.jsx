import React from 'react';

const PlanetsCards = ({ data }) => {
    return (
        <div className="container-cards-planets">
            <h2>Planets</h2>
            <ul>
            {
                data.map((planet) => (
                    <li key={planet.url}>
                        {planet.name}
                    </li>
                ))
            }
            </ul>

        </div>
    );
};

export default PlanetsCards;