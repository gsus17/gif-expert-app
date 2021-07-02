export const getGif = async (category) => {
    const baseUrl = 'https://api.giphy.com/v1/gifs';
    const limit = 10;
    const apiKey = 'tf9Qs0rYHcmRIQ8EKGrcLbKMOJwOGxgr';
    const url = `${baseUrl}/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;

    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((x) => {
        return {
            id: x.id,
            title: x.title,
            url: x.images?.downsized_medium.url,
        }
    });

    return gifs;
}