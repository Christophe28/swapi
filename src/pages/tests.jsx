


getUrl('http://swapi/people/5')

const getUrl = (url) => {
    if (isCached(url)) {
        return getFromCache(url)
    }
    else {
        const response = fetch(url)
        if (response.data) {
            return result
        }
        else throw new Error('ERROR !')
    }
}