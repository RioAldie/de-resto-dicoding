import RestaurantsSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import { createDetailRestaurant } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="detail-restaurant"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantsSource.detailRestaurant(url.id);
    console.log(resto.restaurant);
    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = createDetailRestaurant(
      resto.restaurant
    );
  },
};

export default Detail;
