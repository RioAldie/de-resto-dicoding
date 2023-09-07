import CONFIG from '../../global/config';

const createRestaurantItem = (
  resto
) => `<a href="/#/detail/${resto.id}">
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

const createDetailRestaurant = (resto) => `
<img
    src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}"
    alt="${resto.name} photo"
     />
  <div class="info-detail">
    <h4 class="tes">${resto.name}</h4> 
    <h5 class="tes">Rating : ${resto.rating} <span> ★ </span></h5>
    <h5 class="tes">City: ${resto.city}</h5>
    <h5>Address: ${resto.address} </h5>
    <p> ${resto.description}</p>
  </div>`;
export { createRestaurantItem, createDetailRestaurant };
