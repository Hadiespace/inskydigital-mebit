import 'focus-visible/dist/focus-visible.min.js';
import 'wicg-inert';
import { testSupportWebp } from './modules/webp.js';
import { changeMenuHeight } from './modules/vh.js';
import { resizeCatalogList } from './modules/product-navigation.js';
import { generateSwiper } from './modules/swiper.js';
import { scrollHeader } from './modules/header.js';
import { initScroll } from './modules/scroll.js';
import { clickCatalogHomeTag } from './modules/home-catalog.js';
import { findVideos } from './modules/video.js';
import { createMap } from './modules/map.js';
import { getAnother } from './modules/another.js';
import { getShipPay } from './modules/ship-pay.js';
import { toggleLetters } from './modules/factories.js';
import { createStepper } from './modules/stepper.js';
import { createRange } from './modules/range.js';
import { createCost } from './modules/cost.js';
import { changeColor } from './modules/color.js';
import { createModal } from './modules/modal.js';
import { toggleFilters } from './modules/filter.js';
import { toggleFavorites } from './modules/favorite.js';
import { toggleBookmarks } from './modules/bookmark.js';
import { createUserCart } from './modules/cart.js';
import { toggleProduct } from './modules/product.js';
import { addToCart } from './modules/card.js';
import { createChoice } from './modules/choice.js';

testSupportWebp();
changeMenuHeight();
scrollHeader();
initScroll();
resizeCatalogList();
generateSwiper();
clickCatalogHomeTag();
findVideos();
createMap();
getAnother();
getShipPay();
toggleLetters();
createStepper();
createRange();
createCost();
changeColor();
createModal();
toggleFilters();
toggleFavorites();
toggleBookmarks();
createUserCart();
toggleProduct();
addToCart();
createChoice();
