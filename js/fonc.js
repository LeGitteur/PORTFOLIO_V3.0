
// Slide show//
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}  

// début flipper la carte du site web//
function changeClass(){
  var elements = document.querySelectorAll("div[class^='card']");
  for (var i = 0; i < elements.length; i++) {
      if (elements[i].className == "card-single") {
      elements[i].className += " rotated";
      }
      else if (elements[i].className == "card-group") {
      elements[i].className += " rotated";
      }
      else {
          elements[i].className = "card-single";
      }
      }
}

// fin flipper la carte du site web//