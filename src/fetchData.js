import axios from 'axios'; // HTTP client for making requests
import apiKey from './config'; // API key for Flickr

const FLICKR_API_URL = 'https://api.flickr.com/services/rest/';

export const searchPhotos = async (query) => {
    const params = {
        method: 'flickr.photos.search',
        api_key: apiKey,
        text: query,
        format: 'json',
        nojsoncallback: 1,
        per_page: 24,
        extras: 'url_s'
    };

    try {
        const response = await axios.get(FLICKR_API_URL, { params });
        return response.data.photos.photo;
    } catch (error) {
        console.error('Error fetching photos from Flickr:', error);
        throw error;
    }
};
