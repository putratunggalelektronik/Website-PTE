let slideIndex = 1; // Slide awal
showSlides(slideIndex);

function showSlides(n) {
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  // Jika index melebihi jumlah slide, kembali ke slide pertama
  if (n > slides.length) {
    slideIndex = 1;
  }

  // Jika index kurang dari 1, kembali ke slide terakhir
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Sembunyikan semua slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Nonaktifkan semua dot
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Tampilkan slide aktif
  slides[slideIndex - 1].style.display = "block";

  // Aktifkan dot yang sesuai
  dots[slideIndex - 1].className += " active";
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
