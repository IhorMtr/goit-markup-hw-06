document.getElementById('modal-opener').addEventListener('click', function () {
    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.classList.add('is-open');
});

document.getElementById('modal-closer').addEventListener('click', function () {
    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.classList.remove('is-open');
});
document.getElementById('mobile-menu-opener').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('is-open');
});

document.getElementById('mobile-menu-closer').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.remove('is-open');
});
