import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

document.getElementById('btn-menu').addEventListener('click', () => {
  document.getElementById('drawer').classList.toggle('open');
});
