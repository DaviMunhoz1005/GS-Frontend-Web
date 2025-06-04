export function initCarousel(rootSelector) {
    const root = document.querySelector(rootSelector);
    if (!root) return;

    const track = root.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = root.querySelector('.carousel-btn.next');
    const prevButton = root.querySelector('.carousel-btn.prev');
    let currentIndex = 0;

    function updateSlidePosition() {
        const slideWidth = root.querySelector('.carousel-slide').getBoundingClientRect().width + 15;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextButton?.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlidePosition();
        }
    });

    prevButton?.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePosition();
        }
    });
}