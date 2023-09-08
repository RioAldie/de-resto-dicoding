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
  </div>
  <div id="menu">
    <h4>Food Menu</h4>
    <div id="box-food"></div>
    <h4>Drink Menu</h4>
    <div id="box-drink"></div>
  </div>
  <div id="review">
  <h4>Customer Review</h4>
  </div>
  `;

const createMenuItemTemplate = (item) => `<div class="menu-item">
  ${item.name}
</div>`;

const createReviewTemplate = (review) => `<div>
  <h5>${review.name}</h5>
  <h6>${review.date}</h6>
  <p>"${review.review}"</p>
</div>`;

const createLikeButtonTemplate = () => `
  <button aria-label="add this resto to favorite " id="likeButton" class="like">
  <i class="fa fa-star-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unfavorite this resto" id="likeButton" class="like">
  <i class="fa fa-star" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItem,
  createDetailRestaurant,
  createMenuItemTemplate,
  createReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
