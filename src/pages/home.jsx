import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../components/cards';

const Home = () => {
    const [data, setData] = useState([]);
    const [people, setPeople] = useState([]);
    useEffect(async () => {
        const result = await axios("https://swapi.dev/api/films");
        setData(result.data.results);
    }, []);

    return (
        <div className='container-home'>
            <h1>Home</h1>
            <Cards
                data={data}
                setElement={setPeople}
            />
            <section className="container-people">
                {people}
            </section>
        </div>
    );
};

export default Home;