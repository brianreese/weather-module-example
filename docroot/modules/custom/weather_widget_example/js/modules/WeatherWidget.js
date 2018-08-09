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
    const instance = new this(widget);

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
    // @todo: render the widget to the dom.
  }

  /**
   * Get weather data then render the widget.
   */
  async refresh() {
    // @todo: fetch weather data from the weather service, then render it.
    await weatherService.getWeatherData(10027);
  }

}

/**
 * A default selector for weather widget dom elements.
 */
export const DEFAULTWIDGETSELECTOR = '.weather-widget-example-widget';

export default WeatherWidget;
