import Store from './services/Store.js'
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

// Link custom web component
import { MenuPage } from './components/MenuPage.js';
import { OrderPage } from './components/OrderPage.js';
import { DetailsPage } from './components/DetailsPage.js';

// window that is being used here is part of DOM API
window.app = {}
app.store = Store;
app.router = Router

// To work with the DOM its always better to wait for DOM to completely load.
window.addEventListener("DOMContentLoaded", function renderDomManipulation() {
  loadData()
  app.router.init()
})
