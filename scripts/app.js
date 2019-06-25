let imgArr = ["./images/hero-image-0.jpg", "./images/hero-image-1.jpg", "./images/hero-image-2.jpg", "./images/hero-image-3.jpg"]
let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = imgArr
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }
let i = 0;

function showSlides() {
    
    console.log(i)
    i = i + 1

    if (i > 3) {
        i = 0
    } else if (i < 0) {
        i = 0
    } else {
        let slide = document.getElementById("bkimg")
        slide.style.backgroundImage = `url(${imgArr[i]})`
    }

  }
    // function toTheLeft() {
    //     i = i - 2
    //     showSlides()
    // }
    // function toTheRight() {
    //     i = i + 1
    //     showSlides()
    // }
    // document.getElementById("left").addEventListener('click', toTheLeft)
    // document.getElementById("right").addEventListener('click', toTheRight)
  
//   showSlides();
  setInterval(showSlides, 2000); 

