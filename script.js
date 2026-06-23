const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');

let currentIndex = 0;

// Función para mover el carrusel a la diapositiva correcta
const moveToSlide = (index) => {
    track.style.transform = `translateX(-${index * 100}%)`;
};

// Evento botón derecho (Siguiente)
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
});

// Evento botón izquierdo (Anterior)
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(currentIndex);
});