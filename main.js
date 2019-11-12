$(document).ready(function() {
// BURGER menu

   $(".burger-button").click(function(){
     $(".burger-button").toggleClass("active");
     $(".burger-menu").slideToggle();
   });


   $(".burger-menu").click(function(){
     $(".burger-button").toggleClass("active");
     $(".burger-menu").slideToggle();
   });


   $( document ).ready(function() {
   $(".dropdown-nav").click(function(){
       $(this).children(".dropdown-content").slideToggle("200");
     });
   });


var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 4000); // Change image every 2 seconds
  }

});
