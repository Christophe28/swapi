import axios from "axios";
import React from "react";

const useCache = () => {
  const [cache, setCache] = React.useState({});

  const isCached = (url) => {
    if (cache[url]) {
      return true;
    } else return false;
  };

  const getFromCache = (url) => {
    return cache[url];
  };

  const setIntoCache = (url, data) => {
    setCache((oldCache) => {
      const newCache = { ...oldCache };
      newCache[url] = data;
      return newCache;
    });
  };

  const getUrl = async (url) => {
    if (isCached(url)) {
      return getFromCache(url);
    } else {
      const response = await axios(url);
      const data = response.data;
      setIntoCache(url, data);
      return data;
    }
  };
  return getUrl;
};
export default useCache
