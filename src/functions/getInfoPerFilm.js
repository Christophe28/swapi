const getInfoPerFilm = async (info, getUrl, setInfo) => {
    setInfo([]);

    for(let element of info) {
        const data = await getUrl(element);
        setInfo((oldInfo) => [...oldInfo, data])
    }
}

export default getInfoPerFilm