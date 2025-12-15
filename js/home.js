document.addEventListener('DOMContentLoaded', function () {
    const sliderImages = document.querySelectorAll('.slider-img');
    if (sliderImages.length > 0) {
        let current = 0;
        function showSlide(idx) {
            sliderImages.forEach(img => img.classList.remove('active'));
            sliderImages[idx].classList.add('active');
        }
        function nextSlide() {
            current = (current + 1) % sliderImages.length;
            showSlide(current);
        }
        showSlide(current);
        setInterval(nextSlide, 3000);
    }
});
