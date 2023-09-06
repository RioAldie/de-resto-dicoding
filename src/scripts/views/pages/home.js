import ElementHero from '../../components/hero-element.js';
import RestaurantsSource from '../../data/restaurants-source.js';

const Home = {
  async render() {
    return ElementHero;
  },

  async afterRender() {
    const restaurants = await RestaurantsSource.listRestaurants();
    console.log(restaurants);
  },
};

export default Home;
