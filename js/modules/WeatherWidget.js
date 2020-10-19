/**
 * @file
 * Contains the weather widget class.
 */

import WeatherIcons from "./WeatherIcons";
import WeatherService from './WeatherService';
import GeolocationService from './GeolocationService';

// Visit ipstack.com and get a (free) api key for their ip geolocation service.
const GEOLOCATION_API_KEY = '<insert_key_here>';
const weatherService = new WeatherService();
const geolocationService = new GeolocationService(GEOLOCATION_API_KEY);

/**
 * Class WeatherWidget.
 *
 * Renders the weather widget.
 */
class WeatherWidget {

  /**
   * Constructor for a weather widget.
   *
   * @param {HTMLElement} widget
   *   The weather widget DOM element.
   */
  constructor(widget) {
    this.widget = widget;
  }

  /**
   * Factory method to create a new WeatherWidget instance.
   *
   * @param {Node} widget
   *   The weather widget DOM element required by the WeatherWidget constructor.
   *
   * @returns {WeatherWidget}
   *   A weather widget instance.
   */
  static create(widget) {
    const instance = new WeatherWidget(widget);

    // Render initial output.
    // weatherWidget::refresh() is an async method that returns a promise, but
    // since we're not doing anything with the resolved promise, no need to wait.
    instance.refresh();
    return instance;
  }

  /**
   * Get weather data then render the widget.
   */
  async refresh() {
    // @todo: fetch weather data from the weather service, then render it.
    const location = await geolocationService.getLocationData();
    const forecast = await weatherService.getWeatherData(location.zip);
    this.render(forecast);
  }

  /**
   * Renders weather data in the weather widget.
   *
   * @param weatherData
   *   Weather data returned from the weather service.
   */
  render(weatherData) {
    if (!weatherData.channel) {
      // @todo: api response was not what we expected.
      return;
    }

    let container = document.createElement('div');
    container.classList.add('weather-widget--inner');

    container.innerHTML = this.constructor.renderHeader(weatherData.channel.location);
    const forecastData = ((weatherData.channel.item || {}).forecast || []);
    forecastData.forEach(day => {
      let dateString = new Date(day.date).toLocaleString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
      container.innerHTML += this.constructor.renderWeatherCard(dateString, day.code, day.low, day.high);
    })

    // Render the widget to the dom.
    this.widget.innerHTML = '';
    this.widget.append(container);
  }

  static renderHeader(location) {
    return `<h2 class="weather-header">${location.city}, ${location.region}</h2>`;
  }

  static renderWeatherCard(date, weatherCode, low, high) {
    let iconClass = WeatherIcons.getIconClass(weatherCode);
    let conditions = WeatherIcons.getDescription(weatherCode);
    return `<div class="weather-card">
      <i class="wi ${iconClass}"></i>
      <h4 class="weather-card-date">${date}</h4>
      <div>${conditions}</div>
      <div>High: ${high}</div>
      <div>Low: ${low}</div>
    </div>`
  }

}

/**
 * A default selector for weather widget dom elements.
 */
export const DEFAULTWIDGETSELECTOR = '.weather-widget-example-widget';

export default WeatherWidget;
