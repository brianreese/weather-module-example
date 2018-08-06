<?php

namespace Drupal\weather_widget_example\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Class WeatherForecast.
 *
 * @Block(
 *   id = "weather_forecast",
 *   admin_label = @Translation("Weather forecast example"),
 *   category = @Translation("Example"),
 * )
 */
class WeatherForecast extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      'weather_forecast' => [
        '#theme' => 'weather_forecast',
      ],
    ];
  }

}
