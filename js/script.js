(function ($) {
   $(document).ready(function() {
      
      $('.price .owl-carousel').owlCarousel({
         loop: true,
         margin: 30,
         nav: true,
         items: 3,
         responsive:{
             0:{
                 items:1
             },
             576:{
                 items:2,
                 margin: 20
             },
             768:{
                 items:3
             }
         }
      })

      $('.reviews .owl-carousel').owlCarousel({
         loop: true,
         margin: 30,
         nav: true,
         items: 2,
         responsive:{
             0:{
                 items:1
             },
             576:{
                 items:2
             }
         }
      })

      $('.beforeafter .owl-carousel').owlCarousel({
         loop: true,
         margin: 30,
         nav: true,
         items: 4,
         responsive:{
             0:{
                 items:1
             },
             576:{
                 items:2,
                 margin: 20
             },
             768:{
                 items:3,
             },
             992:{
                 items:4
             }
         }
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

      function autoHeight(el) {
         let maxHeight = 0; 
         el.each(function(){
           if ($(this).height() > maxHeight) {
             maxHeight = $(this).height();
           }
         }); 
         el.height(maxHeight);
       }
   
      //  autoHeight($(".owl-item"));
   
      $('.map').click(function() {
         $(this).find('iframe').addClass('active');
       }).mouseleave(function() {
         $(this).find('iframe').removeClass('active');
       });
   

   });
})(jQuery);