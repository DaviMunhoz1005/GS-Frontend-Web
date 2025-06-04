import { initCarousel } from './carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    initCarousel('.carousel-track', '.carousel-btn.prev', '.carousel-btn.next');
});
