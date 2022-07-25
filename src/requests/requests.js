const baseUrl = "http://localhost:8000"

export const whoami = async (token) => {
    return await fetch(baseUrl + "/whoami/", {
        method: "GET",
        headers: {
            Authorization: "Token " + token,
        },
    })
}
