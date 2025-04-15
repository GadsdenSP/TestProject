// main.js
import { Toolbar } from './components/Toolbar.js';

document.addEventListener('DOMContentLoaded', () => {
  const toolbarEl = document.getElementById('toolbar');
  const canvasEl = document.getElementById('canvas');

  const toolbar = new Toolbar(toolbarEl, canvasEl);
  toolbar.render();
});
