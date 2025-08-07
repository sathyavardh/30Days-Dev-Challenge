export const fetchGifs = async (query: string) => {
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=12`;

    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}