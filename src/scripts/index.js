import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';

import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './global/config';

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
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
