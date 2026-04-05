document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const body = document.body;

    if (hamburger && mobileNavOverlay) {
        hamburger.addEventListener('click', () => {
            body.classList.toggle('mobile-menu-open');
            hamburger.classList.toggle('open'); // Optional: for animating hamburger icon
        });

        // Close menu if a link is clicked (for single-page navigation or general UX)
        mobileNavOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                body.classList.remove('mobile-menu-open');
                hamburger.classList.remove('open');
            });
        });
    }
});
