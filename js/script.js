(function ($) {
   $(document).ready(function() {
	 
      $('.price .owl-carousel').owlCarousel({
         loop: true,
         margin: 30,
         nav: true,
         items: 3
      })

      $('.reviews .owl-carousel').owlCarousel({
         loop: true,
         margin: 30,
         nav: true,
         items: 2
      })

      $('.beforeafter .owl-carousel').owlCarousel({
         loop: true,
         margin: 30,
         nav: true,
         items: 4
      })

            
      $('a.btn').click(function(e) {
         e.preventDefault();
         $('.modal-wrapper').toggleClass('active');
      });

      $('.close').click(function(e) {
         e.preventDefault();
         $(this).closest('.modal-wrapper').toggleClass('active');
      })

      $('input[type="tel"').mask('+7(999)-999-99-99');

      $('.menu__link').click(function(e) {
         e.preventDefault();
         let id  = $(this).attr('href');
         let top = $(id).offset().top;
         $('body, html').animate({scrollTop: top - 50}, 800);
      });

   });
})(jQuery);