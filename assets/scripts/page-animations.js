'use strict';



$(document).ready(function() {
  $(function(){
      $('#default-page-header').data('size','big');
  });



  $(window).scroll(function(){
      if($(document).scrollTop() > 0)
      {
          if($('#default-page-header').data('size') === 'big')
          {
              $('#default-page-header').data('size','small');
              $('#default-page-header').stop().animate({
                  height:'40px',
              },600);
              $('#tt-title').css('margin-top','-1em');
                $('#main-content').stop().animate({
                  'margin-top': '60px',
                },600);
          }
      }
      else
      {
          if($('#default-page-header').data('size') === 'small')
          {
              $('#default-page-header').data('size','big');
              $('#default-page-header').stop().animate({
                  height:'300px'
              },600);
              $('#tt-title').css('margin-top','inherit');
              $('#main-content').stop().animate({
                'margin-top': '320px',
              },600);
          }
      }
  });
  
});
