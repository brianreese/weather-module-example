/**
 * @file
 * Contains the weather widget class.
 */

import WeatherIcons from "./WeatherIcons";
import WeatherService from './WeatherService';
const weatherService = new WeatherService();

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
   * @param {HTMLElement} widget
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
   * Renders weather data in the weather widget.
   *
   * @param data
   *   Weather data returned from the weather service.
   */
  render(data) {
    console.log(data);
    if (!data.channel) {
      // @todo: api response was not what we expected.
      return;
    }

    let container = document.createElement('div');
    container.classList.add('weather-widget--inner');

    container.innerHTML = this.constructor.renderHeader(data.channel.location);
    const forecastData = ((data.channel.item || {}).forecast || []);
    forecastData.forEach(day => {
      container.innerHTML += this.constructor.renderWeatherCard(day.day, day.code, day.low, day.high);
    })
    console.log(forecastData);



    // @todo: render the widget to the dom.
    this.widget.innerHTML = '';
    this.widget.append(container);
  }

  static renderHeader(location) {
    return `<h2>${location.city}, ${location.region}</h2>`;
  }

  static renderWeatherCard(date, weatherCode, low, high) {
    let iconClass = WeatherIcons.getIconClass(weatherCode);
    let conditions = WeatherIcons.getDescription(weatherCode);
    return `<div>
      <i class="wi ${iconClass}"></i>
      <h4>${date}</h4>
      <span>${conditions}</span>
      <span>High: ${high}</span>
      <span>Low: ${low}</span>
    </div>`
  }

  /**
   * Get weather data then render the widget.
   */
  async refresh() {
    // @todo: fetch weather data from the weather service, then render it.
    const data = await weatherService.getWeatherData(10027);
    this.render(data);
  }

}

/**
 * A default selector for weather widget dom elements.
 */
export const DEFAULTWIDGETSELECTOR = '.weather-widget-example-widget';

export default WeatherWidget;
