/**
 * @file
 * Contains the WeatherService class.
 */

import axios from 'axios';

const WEATHER_API_BASE_URL = 'http://query.yahooapis.com/v1/public/yql';

/**
 * Class WeatherService.
 *
 * API calls for weather data.
 */
class WeatherService {

  /**
   * Makes a call to the yahoo weather api.
   *
   * @param location
   *   A location (zip code) used to query the weather api.
   *
   * @return {Promise<*>}
   *   Resolves data from the weather api.
   *
   * @see https://developer.yahoo.com/weather/
   */
  async getWeatherData(location) {
    let locationQuery = encodeURIComponent(`select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}")`);
    let apiRequest = `${WEATHER_API_BASE_URL}?q=${locationQuery}&format=json`;
    let apiData = await axios.get(apiRequest);
    const queryResult = ((((apiData || {})
      .data || {})
      .query || {})
      .results || {})
    return queryResult;
  }

}

export default WeatherService;
