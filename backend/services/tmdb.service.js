import axios from 'axios';
import { ENV_VARS } from '../config/envVars.js';


export const fetchFromTMDB = async (url) => {
    try {
        const options = {      
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${ENV_VARS.TMDB_API_KEY}`,
            },
        };
        const response = await axios.get(url, options);
        return response.data;
    } catch (error) {
        console.error('TMDB API Error:', error);
        throw error;
    }
}; 