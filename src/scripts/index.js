import 'regenerator-runtime';
// eslint-disable-next-line import/no-unresolved
import '../styles/main.scss';

import App from './views/app';

const app = new App({
  button: document.querySelector('#btn-menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});
window.addEventListener('load', () => {
  app.renderPage();
});
