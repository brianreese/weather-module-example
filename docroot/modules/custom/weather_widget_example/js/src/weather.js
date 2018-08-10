/**
 * @file
 * Provides a drupal behavior for the weather widget.
 */

import WeatherWidget, { DEFAULTWIDGETSELECTOR } from '../modules/weatherWidget';

((Drupal) => {
  "use strict";

  /**
   * Initializes a weather widget.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.weather = {
    attach: context => {
      const widgetElements = context.querySelectorAll(DEFAULTWIDGETSELECTOR);
      if (widgetElements) {
        Array.from(widgetElements).forEach(WeatherWidget.create);
      }
    }
  }

  /**
   * Define Theme functions for the weather widget.
   *
   * Clone original render methods before overriding the WeatherWidget with our
   * own theme function. This will allow other modules and themes to provide
   * their own theme implementations.
   */
  const WeatherWidgetRenderMethods = Object.assign({}, {
    renderHeader: WeatherWidget.renderHeader,
    renderWeatherCard: WeatherWidget.renderWeatherCard,
  });

  Drupal.theme.weatherCardHeader = WeatherWidgetRenderMethods.renderHeader;
  Drupal.theme.weatherCard = WeatherWidgetRenderMethods.renderWeatherCard;

  /**
   * Override WeatherWidget's render methods to leverage drupal's theme system.
   *
   * This will allow other modules and themes to provide their own
   * implementations of Drupal.theme.weatherCard.
   */
  WeatherWidget.renderWeatherCard = (...args) => Drupal.theme('weatherCard', ...args);
  WeatherWidget.renderHeader = (...args) => Drupal.theme('weatherCardHeader', ...args);

})(Drupal);
