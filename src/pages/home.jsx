import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../components/cards';

const Home = () => {
    const [data, setData] = useState([]);
    const [people, setPeople] = useState([]);
    const [cache, setCache] = useState({});

    console.log("cache");
    useEffect(async () => {
        const result = await axios("https://swapi.dev/api/films");
        setData(result.data.results);
    }, []);

    useEffect(
        () => {
            people.forEach(peopleUrl => getPeople(peopleUrl))
        },
        [people]
    )

    const getPeople = async (peopleUrl) => {
        if (cache[peopleUrl]) {
            console.log('en cache !')
            return cache[peopleUrl]
        } else {
            console.log('PAS en cache !')
            const result = await axios(peopleUrl);
            setCache(cache => {
                cache[peopleUrl] = result.data
                return cache
            })
            return result.data
        }
    }

    const getPlanets = async (planetUrls) => {
        if (cache[planetUrls]) {
            return cache[planetUrls]
        } else {
            const result = await axios(planetUrls);
            setCache(cache => {
                cache[planetUrls] = result.data
                return cache
            })
            return result.data
        }
    }

    return (
        <div className='container-home'>
            <Cards
                data={data}
                setPeople={setPeople}
            />
            <section className="container-people">
                {people.map(people => <p>{cache[people] && cache[people].name}</p>)}
            </section>
        </div>
    );
};

export default Home;