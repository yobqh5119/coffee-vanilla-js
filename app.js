import Store from './services/Store.js'
import { loadData } from './services/Menu.js';

// window that is being used here is part of DOM API
window.app = {}
app.store = Store;

// To work with the DOM its always better to wait for DOM to completely load.
window.addEventListener("DOMContentLoaded", function renderDomManipulation() {
  loadData()
})
