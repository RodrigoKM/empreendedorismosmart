(function ($) {
  $(function () {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({
      scrollOffset: 80
    });

    var options = [
      {
        selector: '#image-test', offset: 250, callback: function (el) {
          fadeInTag('#image-test');
        }
      },
      {
        selector: '#palestrantes', offset: 250, callback: function (el) {
          fadeInTag('#palestrantes');
        }
      },
      {
        selector: '#local', offset: 250, callback: function (el) {
          fadeInTag('#local');
        }
      }
    ];

    function fadeInTag(id) {
      $(id).animate({ 'opacity': 1 }, 1500);
    }

    Materialize.scrollFire(options);
  }); // end of document ready
})(jQuery); // end of jQuery name space