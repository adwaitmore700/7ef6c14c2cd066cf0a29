import {URLS} from '../utils/constants';
import axios from 'axios';

export const getCountryDetails = async (countryName)=>{
    try {
        const response = await axios.get(`${URLS.COUNTRY_API_BASE_URL}${countryName}`);
        if(response && response.data){
            return {
                capital:response.data[0].capital,
                population:response.data[0].population,
                latlng:response.data[0].latlng,
                flag:response.data[0].flag
            }
        }
        else{
            return null;
        }
    } catch (error) {
        return null;
    }
}

export const getWeatherDetails = async (cityName)=>{
    try {
        const response = await axios.get(`${URLS.WEATHER_API_BASE_URL}${cityName}`);
        if(response && response.data){
            return {
                temperature:response.data.current.temperature,
                weather_icon:response.data.current.weather_icons[0],
                wind_speed:response.data.current.wind_speed,
                precip:response.data.current.precip
            }
        }
        else{
            return null;
        }
    } catch (error) {
        return null;
    }
}