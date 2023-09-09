import RestaurantsSource from '../../data/restaurants-source.js';
import {
  createLoadingTemplate,
  createRestaurantItem,
} from '../templates/template-creator.js';

const Home = {
  async render() {
    return `<header id="hero">
    <div id="thumbnail">
      <img
        src="./images/heros/hero-image_1.jpg"
        alt="thumbnail image"
        id="thumbnail-img"
        width="100%" />
    </div>
    <div class="hero-detail">
      <h1>De Resto.</h1>
      <h2>Find best Restaurants Where Ever You Are</h2>
    </div>
  </header>
  <section id="container"></section>`;
  },

  async afterRender() {
    const container = document.querySelector('#container');
    container.innerHTML = createLoadingTemplate();
    const restaurants =
      await RestaurantsSource.listRestaurants().finally(() => {
        container.innerHTML = '';
      });

    restaurants.forEach((resto) => {
      container.innerHTML += createRestaurantItem(resto);
    });
  },
};

export default Home;
