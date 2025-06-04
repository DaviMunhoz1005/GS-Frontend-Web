import { initCarousel } from './carousel.js';
import { initSectionObserver } from './observer-section.js';

initCarousel('#section-our-goals');
initCarousel('#section-everyday-solution');

initSectionObserver((visibleSectionId) => {
    const indicator = document.getElementById('current-section');
    if (indicator) {
        indicator.textContent = visibleSectionId.replace('section-', '').replaceAll('-', ' ');
    }
});

const select = document.getElementById("menu-select");

select.addEventListener("change", function () {
    const value = this.value;
    if (!value) return;
    if (value.startsWith("#")) {
        const section = document.querySelector(value);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    } else {
        window.location.href = value;
    }
    this.selectedIndex = 0;
});