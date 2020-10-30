
(function($) {

    $(document).ready(function() {

        $('.hamburger__container').click(function() {
            $('.nav').toggleClass('open');
            $(this).children().first().toggleClass('open');
            $('html, body').toggleClass('noscroll');
        });

        // Bacon Ipsum
        $.ajax({
            url: 'https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1&format=html',
            success: function(data) {
                $('#content').html(data);
            }
        });

    });

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    //SLIDES
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
          setTimeout(showSlides, 6000);
      }

      $(".dropdown-nav").click(function(){
      $(this).children(".dropdown-content").slideToggle("200");
    });


})(jQuery);
