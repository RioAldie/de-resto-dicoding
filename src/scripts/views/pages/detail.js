import RestaurantsSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import {
  createDetailRestaurant,
  createMenuItemTemplate,
  createReviewTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="detail-restaurant"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantsSource.detailRestaurant(url.id);

    const { menus, customerReviews } = resto.restaurant;
    const { foods, drinks } = menus;
    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = createDetailRestaurant(
      resto.restaurant
    );
    const foodContainer = document.querySelector('#box-food');
    const drinkContainer = document.querySelector('#box-drink');
    const reviewContainer = document.querySelector('#review');
    foods.forEach((food) => {
      foodContainer.innerHTML += createMenuItemTemplate(food);
    });
    drinks.forEach((drink) => {
      drinkContainer.innerHTML += createMenuItemTemplate(drink);
    });
    customerReviews.forEach((review) => {
      reviewContainer.innerHTML += createReviewTemplate(review);
    });
  },
};

export default Detail;
