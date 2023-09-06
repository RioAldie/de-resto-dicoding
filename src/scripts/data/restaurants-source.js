import API_ENDPOINT from '../global/api-endpoint.js';

class RestaurantsSource {
  static async listRestaurants() {
    console.log(API_ENDPOINT.LIST_RESTAURANT);
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);

    const responseJson = await response.json();

    console.log(responseJson);
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantsSource;
