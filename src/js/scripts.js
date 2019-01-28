(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    $('li.button-mobil').on('click', function() {
      $('nav.mobil').slideToggle();
    });

    $('ul li').click(function() {
      $('ul ul').slideUp();
      $(this).find('ul').slideToggle();
    });

  });

})(jQuery, window, document);
