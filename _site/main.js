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

});
