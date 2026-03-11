// Update footer year automatically
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

document.querySelectorAll('.clinic-slider-wrapper').forEach(wrapper => {
  const slider = wrapper.querySelector('.clinic-slider');
  const next = wrapper.querySelector('.next');
  const prev = wrapper.querySelector('.prev');

  next.addEventListener('click', () => {
    slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    slider.scrollBy({ left: -slider.offsetWidth, behavior: 'smooth' });
  });
});

document.querySelectorAll('.card-slider-wrapper').forEach(wrapper => {
  const slider = wrapper.querySelector('.card-slider');
  const next = wrapper.querySelector('.next');
  const prev = wrapper.querySelector('.prev');

  next.addEventListener('click', () => {
    slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    slider.scrollBy({ left: -slider.offsetWidth, behavior: 'smooth' });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');
  const nextBtn = document.querySelector('.lightbox-nav.next');
  const prevBtn = document.querySelector('.lightbox-nav.prev');

  const images = Array.from(document.querySelectorAll('.lightbox-img'));
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightbox.style.display = 'flex';
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
  }

  images.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
  });

  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  document.addEventListener('keydown', e => {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') lightbox.style.display = 'none';
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {

  lucide.createIcons();

  document.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });

});

const img = document.querySelector(".clickable-image");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close-modal");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

modal.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};