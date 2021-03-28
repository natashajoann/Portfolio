
(function($) {

    $(document).ready(function() {

      // Slick Slider

      $('.single-item').slick({
        autoplay: true,
        autoplaySpeed: 10000,
      });

      $('.center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

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




      $(".dropdown-nav").click(function(){
      $(this).children(".dropdown-content").slideToggle("200");
    });


})(jQuery);
