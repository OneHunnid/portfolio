import $ from 'jquery'

const toggleHandler = function(e) {
  e.preventDefault;

  const label = $(this).text() == 'Close' ? 'Menu' : 'Close';

  $(this).text(label);
  $('#header').toggleClass('showtime');
  $('#nav').toggleClass('showtime');
}

var header = {
  toggleMenu: function() {
    $('#navLabel').on('click', toggleHandler)
  },
  closeOnClick: function() {
    $('#nav').on('click', () => {
      $('#header').removeClass('showtime');
      $('.nav').removeClass('showtime');
    })
  },
  closeOnResize: function() {
    $(window).on('resize', function() {
      var width = $(window).width();

      if (width > 10) {
        $('.nav').removeClass('showtime');
        $('#header').removeClass('showtime');
        $('#navLabel').text('MENU');
      }
    });
  }
}

export default header;
