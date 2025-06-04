export function initSectionObserver(callback) {
    const sections = document.querySelectorAll('.page-section');

    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            const value = entry.target.getAttribute('value');
            callback(value);
            }
        });
        },
        {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
        }
    );

    sections.forEach(section => observer.observe(section));
}