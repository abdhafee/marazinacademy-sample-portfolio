const cards = document.querySelectorAll(".testimonial-cards");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
let slideInterval;

function showTestimonial(index) {
  cards.forEach((card) => {
    card.classList.remove("active");
  });

  cards[index].classList.add("active");
}

function nextTestimonial() {
  currentIndex++;

  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }

  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = cards.length - 1;
  }

  showTestimonial(currentIndex);
}

// AUTO SLIDE

function startAutoSlide() {
  slideInterval = setInterval(() => {
    nextTestimonial();
  }, 4000);
}

// RESET AUTO SLIDE

function resetAutoSlide() {
  clearInterval(slideInterval);

  startAutoSlide();
}

// BUTTON EVENTS

nextBtn.addEventListener("click", () => {
  nextTestimonial();

  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevTestimonial();

  resetAutoSlide();
});

// INITIALIZE

if (cards.length > 0) {
  showTestimonial(currentIndex);

  startAutoSlide();
}
