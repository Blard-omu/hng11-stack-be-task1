import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const getLocationAndWeather = async (ip) => {
  try {
    if (ip === '::1' || ip === '127.0.0.1') {
      ip = '102.216.201.34';
    }
    const locationResponse = await axios.get(`http://ip-api.com/json/${ip}`);
    
    if (!locationResponse.data || locationResponse.data.status !== 'success') {
      throw new Error('Failed to retrieve location data');
    }
    
    const { city = "Zazuland" } = locationResponse.data;
    const weatherApiKey = process.env.WEATHER_API_KEY;
    const weatherResponse = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${city}`);
    
    if (!weatherResponse.data || !weatherResponse.data.current) {
      throw new Error('Failed to retrieve weather data');
    }
    
    const temperature = weatherResponse.data.current.temp_c;

    return {
      location: city,
      temperature,
    };
  } catch (error) {
    console.error('Error in getLocationAndWeather:', error);
    throw new Error('Failed to retrieve location and weather information');
  }
};
