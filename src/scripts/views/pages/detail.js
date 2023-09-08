import RestaurantsSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import {
  createDetailRestaurant,
  createMenuItemTemplate,
  createReviewTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="detail-restaurant"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const result = await RestaurantsSource.detailRestaurant(url.id);
    const { restaurant } = result;
    const { menus, customerReviews } = restaurant;
    const { foods, drinks } = menus;
    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = createDetailRestaurant(restaurant);
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

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector(
        '#likeButtonContainer'
      ),
      resto: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;
