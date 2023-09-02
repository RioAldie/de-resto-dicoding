import { restaurants } from '../public/data/data.js';

const writeDataResto = (resto) => {
  document.getElementById('container').innerHTML += `<a href="#">
    <article class="card">
      <img
        src="${resto.pictureId}"
        alt=""
        width="300px" height="200px" />
      <div class="card-detail">
        <h6 class="tes">Rate : 4.6 ★</h6>
        <h5 class="tes">${resto.city}</h5>
        <h4 class="tes">${resto.name}</h4>
      </div>
    </article>
  </a>`;
};

const exploreDisplay = () => {
  if (restaurants === null) {
    return console.log('data kosong');
  }
  restaurants.map((resto, i) => {
    if (i < 4) {
      return writeDataResto(resto);
    }
  });
};

export { exploreDisplay };
