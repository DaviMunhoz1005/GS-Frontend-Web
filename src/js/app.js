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

const root = document.documentElement;

document.getElementById("theme-default").addEventListener("click", () => {
    root.style.setProperty('--color-bg-header', 'rgb(30, 58, 138, 0.9)');
    root.style.setProperty('--color-bg-footer', 'rgb(30, 58, 138)');
    root.style.setProperty('--color-bg-ligth-body', 'rgb(240, 248, 255)');
    root.style.setProperty('--color-bg-darker-body', 'rgb(206, 228, 255)');
    root.style.setProperty('--color-blue-darker', 'rgb(30, 58, 138)');
    root.style.setProperty('--color-link-menu', 'rgb(2, 221, 255)');
    root.style.setProperty('--color-text-ligth-grey', 'rgb(238, 247, 255)');
    root.style.setProperty('--color-text-darker-grey', 'rgb(41, 47, 58)');
    root.style.setProperty('--color-button-gradient', 'linear-gradient(270deg, rgb(145, 190, 246), rgb(59, 130, 246))');
});

document.getElementById("theme-dark").addEventListener("click", () => {
    root.style.setProperty('--color-bg-header', 'rgb(26, 26, 26, 0.9)');
    root.style.setProperty('--color-bg-footer', 'rgb(18, 18, 18)');
    root.style.setProperty('--color-bg-ligth-body', 'rgb(43, 43, 43)');
    root.style.setProperty('--color-bg-darker-body', 'rgb(185, 170, 170)');
    root.style.setProperty('--color-blue-darker', 'rgb(51, 51, 51)');
    root.style.setProperty('--color-link-menu', 'rgb(118, 146, 150)');
    root.style.setProperty('--color-text-ligth-grey', 'rgb(245, 245, 245)');
    root.style.setProperty('--color-text-darker-grey', 'rgb(123, 113, 113)');
    root.style.setProperty('--color-button-gradient', 'linear-gradient(270deg, rgb(90, 90, 90), rgb(40, 40, 40))');
});

document.getElementById("theme-earth").addEventListener("click", () => {
    root.style.setProperty('--color-bg-header', 'rgb(75, 46, 31, 0.9)');
    root.style.setProperty('--color-bg-footer', 'rgb(58, 37, 24)');
    root.style.setProperty('--color-bg-ligth-body', 'rgb(243, 231, 211)');
    root.style.setProperty('--color-bg-darker-body', 'rgb(230, 211, 179)');
    root.style.setProperty('--color-blue-darker', 'rgb(107, 79, 58)');
    root.style.setProperty('--color-link-menu', 'rgb(181, 145, 119)');
    root.style.setProperty('--color-text-ligth-grey', 'rgb(255, 249, 240)');
    root.style.setProperty('--color-text-darker-grey', 'rgb(80, 60, 42)');
    root.style.setProperty('--color-button-gradient', 'linear-gradient(270deg, rgb(181, 138, 104), rgb(107, 79, 58))');
});
