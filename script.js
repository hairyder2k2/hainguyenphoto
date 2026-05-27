// Xử lý Slider đánh giá khách hàng đơn giản mượt mà
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

// Tự động chuyển slide sau mỗi 6 giây
setInterval(() => showSlide(currentSlide + 1), 6000);