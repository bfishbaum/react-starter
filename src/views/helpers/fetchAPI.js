const defaultParams = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify({})
}

export function fetchJSON(url, params) {
    const updatedParams = Object.assign({}, defaultParams, params);
    return fetch(url, params)
    .then(response => response.json()) // parses response to JSON
}

export function fetchImage(url, params){
    const updatedParams = Object.assign({}, defaultParams, params);
    return fetch(url, params)
    .then(response => response.blob()) // parses response to JSON
}
