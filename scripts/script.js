document.getElementById('modal-opener').addEventListener('click', function () {
    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.classList.add('is-open');
});

document.getElementById('modal-closer').addEventListener('click', function () {
    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.classList.remove('is-open');
});
