import CONFIG from '../../global/config';

const createRestaurantItem = (resto) => `<a href="#">
<article class="card">
  <img
    src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}"
    alt="${resto.name} photo"
    width="300px" height="200px" />
  <div class="card-detail">
    <h6 class="tes">Rating : ${resto.rating} ★</h6>
    <h5 class="tes">${resto.city}</h5>
    <h4 class="tes">${resto.name}</h4>
  </div>
</article>
</a>`;

// eslint-disable-next-line import/prefer-default-export
export { createRestaurantItem };
