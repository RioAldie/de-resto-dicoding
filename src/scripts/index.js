import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import { restaurants } from '../public/data/data.js';
import { exploreDisplay } from './restaurants.js';

exploreDisplay();
document.getElementById('btn-menu').addEventListener('click', () => {
  document.getElementById('drawer').classList.toggle('open');
});
