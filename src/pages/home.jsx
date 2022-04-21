import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FilmsCards from "../components/films-cards";

const Home = () => {
  const [allFilms, setAllFilms] = useState([]);
  const [cache, setCache] = useState({});

  useEffect(async () => {
    const data = await getUrl("https://swapi.dev/api/films");
    setAllFilms(data.results);
  }, []);

  const isCached = (url) => {
    if (cache[url]) {
      return true
    }
    else return false
  }

  const getFromCache = (url) => {
    return cache[url]
  }

  const setIntoCache = (url, data) => {
    setCache(
      oldCache => {
        const newCache = {...oldCache}
        newCache[url] = data
        return newCache
      }
    )
  }

  const getUrl = async (url) => {
    if (isCached(url)) {
      return getFromCache(url);
    } else {
      const response = await axios(url);
      const data = response.data
      setIntoCache(url, data)
      return data;
    }
  };

  return (
    <div className="container-home">
      <FilmsCards data={allFilms} />
    </div>
  );
};

export default Home;
