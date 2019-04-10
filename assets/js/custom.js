 "use strict";
 $(document).ready(function () {
  $('.learning').click(function() {
      $('.colom-layout').find('.active').removeClass('active');
      $('.colom-layout').find('.learning').addClass('active');

    });
    $('.technology').click(function() {
      $('.colom-layout').find('.active').removeClass('active');
      $('.colom-layout').find('.technology').addClass('active');

    });
    $('.communication').click(function() {
      $('.colom-layout').find('.active').removeClass('active');
      $('.colom-layout').find('.communication').addClass('active');

    });




});

 $(window).on('load', function() {
  $(".loaderdiv").removeClass("spinner");
}); 
