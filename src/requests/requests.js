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

export const enhanceImage = async (token, base64Image) => {
    return await fetch(baseUrl + "/validate-image/", {
        method: "POST",
        headers: {
            Authorization: "Token " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            image: base64Image
        })
    })
}

export const saveDocument = async (token, indicatorId, data) => {
    return await fetch(baseUrl + "/document/create/", {
        method: "POST",
        headers: {
            Authorization: "Token " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            indicator_id: indicatorId,
            content: JSON.stringify(data)
        })
    })
}
