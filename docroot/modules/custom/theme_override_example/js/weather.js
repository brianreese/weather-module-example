(function (Drupal){
  "use strict";

  /**
   * Override the weatherCardHeader theme function provided by the weather widget example module.
   */
  Drupal.theme.weatherCardHeader = function(location) {
    console.log(location);
    return `<h2 class="weather-header custom-weather-header">Weather forecast for ${location.city}, ${location.region}</h2>`;
  }

})(Drupal);
