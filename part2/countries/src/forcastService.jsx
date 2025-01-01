import axios from 'axios'

const api_key = import.meta.env.VITE_FORCAST_API
const baseUrl = 'https://api.openweathermap.org/data/2.5'

const getCurrent = (lat, lng) => {
    if (!api_key) {
      console.error("API key is missing");
      return Promise.reject("API key is missing");
    }
    if (!lat || !lng) {
      console.error("Latitude or Longitude is missing");
      return Promise.reject("Latitude or Longitude is missing");
    }
    
    const url = `${baseUrl}/weather?lat=${lat}&lon=${lng}&appid=${api_key}&units=metric`;

    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        console.error(`GET: error=${error}`);
        throw error;
      });
  };
  

export default {
    getCurrent
}