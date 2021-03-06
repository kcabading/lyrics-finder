const EscapeToJson = require('../helpers/escapeStringToJson')

var myInit = { 
    method: 'GET',
    headers: new Headers({        
        "Content-type": "text/json",
        "Connection": "keep-alive"
    })     
}

export const searchTerm = (term) => {
    console.log('searching for' + term);
    return fetch(`/api/search?q=` + term, myInit)
        .then(res => res.text())
}

export const getMoreResults = (query) => {
    console.log('getting more results');
    return fetch(`/api/moreresults` + query, myInit )
        .then(res => res.text())
}

export const getLyrics = (url) => {
    console.log('getting lyrics for: ' + url);
    return fetch(`/api/lyrics?p=` + encodeURI(url), myInit)
        .then(res => res.text())
}

export const asyncSetAsFavorite = (id) => {
    
    return fetch(`/api/lyrics/favorite/${id}`, { 
                method: 'POST',                
                headers: new Headers({                     
                    "Content-type": "application/json",
                })
            })
            .then(res => res.json())
}

export const asyncDeleteSong = (id) => {
    
    return fetch(`/api/lyrics/${id}`, { 
                method: 'DELETE',                
                headers: new Headers({                     
                    "Content-type": "application/json",
                })     
            })
            .then(res => res.json())
}


export const saveLyrics = (data, cb) => {
    let strPostData = EscapeToJson(data);    
    return fetch(`/api/lyrics`, { 
                method: 'POST',
                body: strPostData,
                headers: new Headers({                     
                    "Content-type": "application/json",
                })     
            })
            .then(res => res.text())
}

export const getDefault = () => {

    return fetch('http://localhost:3004/default')
        .then(res => res.json())
}

export const getSavedData = () => {

    return fetch(`/api/saved`)
        .then(res => res.json())
}