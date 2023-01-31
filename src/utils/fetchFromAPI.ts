import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '7f0834bd79msh480b4f1ef5f113dp16b8a6jsna92d72f2b089',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url: any) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}