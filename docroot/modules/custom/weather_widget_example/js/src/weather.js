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

})(Drupal);
