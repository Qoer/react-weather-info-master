import api from '../axios';

export class WeatherService {
  
  static getCurrentWeather(city) {
    return api.get(`/weather?q=${city}`);
  }
}

