/**
 * @file
 * Contains the GeolocationService class.
 */

import axios from 'axios';

const GEOLOCATION_API_ENDPOINT = `http://api.ipstack.com/check`;

/**
 * Class GeolocationService.
 *
 * IP Geolocation using the requesters IP address.
 */
class GeolocationService {


  constructor(apikey) {
    this.api_request = `${GEOLOCATION_API_ENDPOINT}?access_key=${apikey}`;
  }

  async getLocationData() {
    let apiData = await axios.get(this.api_request);
    const location = ((apiData || {})
      .data || {});
    return location;
  }

}

export default GeolocationService;
