export const __getToken = async (clientId: string, clientSecret: string) => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
        },
        body: "grant_type=client_credentials",
    });

    const data = await result.json();
    return data.access_token;
}


export const __getCategories = async (token: string) => {
    const result = await fetch(
        `https://api.spotify.com/v1/browse/categories`,
        {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
        }
    );
    const data = await result.json();
    return data.categories.items;
}