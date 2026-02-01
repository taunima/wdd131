const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');

btn.addEventListener('click', () => {
    nav.classList.toggle('show');
    btn.classList.toggle('change');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        nav.classList.remove('show');
        btn.classList.remove('change');
    }
});

const galleryImages = document.querySelectorAll('main img');

const modal = document.createElement('div');
modal.id = 'image-modal';
modal.style.display = 'none';
modal.innerHTML = `
    <span class="close">&times;</span>
    <img class="modal-content" id="modal-img">
    <div id="caption"></div>
`;
document.body.appendChild(modal);

const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = modal.querySelector('.close');

function openModal(src, alt) {
    modal.style.display = 'block';
    modalImg.src = src;
    captionText.textContent = alt;
}

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        openModal(img.src, img.alt);
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') modal.style.display = 'none';
});
