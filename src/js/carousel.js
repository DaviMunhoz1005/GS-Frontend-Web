export function initCarousel(trackSelector, prevBtnSelector, nextBtnSelector) {
    const track = document.querySelector(trackSelector);
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(nextBtnSelector);
    const prevButton = document.querySelector(prevBtnSelector);
    let currentIndex = 0;

    function updateSlidePosition() {
        const slideWidth = document.querySelector('.carousel-slide').getBoundingClientRect().width + 15;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlidePosition();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePosition();
        }
    });

    // Expor manualmente se precisar usar fora
    return {
        next: () => {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
                updateSlidePosition();
            }
        },
        prev: () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlidePosition();
            }
        }
    };
}
