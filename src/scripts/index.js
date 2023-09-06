/* eslint-disable import/extensions */

import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

import { exploreDisplay } from './restaurants.js';

exploreDisplay();
document.getElementById('btn-menu').addEventListener('click', () => {
  document.getElementById('drawer').classList.toggle('open');
});
document.querySelectorAll('a, button, input').forEach((e) => {
  if (e.offsetWidth < 44 || e.offsetHeight < 44) {
    console.log(e);
  }
});
