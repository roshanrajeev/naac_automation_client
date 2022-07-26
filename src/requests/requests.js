const baseUrl = "http://localhost:8000"

export const whoami = async (token) => {
    return await fetch(baseUrl + "/whoami/", {
        method: "GET",
        headers: {
            Authorization: "Token " + token,
        },
    })
}


export const fetchCriteria = async (token) => {
    return await fetch(baseUrl + "/criteria/", {
        method: "GET",
        headers: {
            Authorization: "Token " + token
        }
    })
}

export const fetchIndicators = async (token, criteria_id) => {
    return await fetch(baseUrl + "/criteria/" + criteria_id + "/indicators/", {
        method: "GET",
        headers: {
            Authorization: "Token " + token
        }
    })
}