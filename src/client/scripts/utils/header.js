import $ from 'jquery'

const toggleHandler = function(e) {
  e.preventDefault;

  const label = $(this).text() == 'Close' ? 'Menu' : 'Close';

  $(this).text(label);
  $('#header').toggleClass('show-nav');
  $('#nav').toggleClass('show-nav');
}

var header = {
  toggleMenu: function() {
    $('#navLabel').on('click', toggleHandler)
  },
  closeOnClick: function() {
    $('#nav').on('click', () => {
      $('#header').removeClass('show-nav');
      $('.nav').removeClass('show-nav');
    })
  },
  closeOnResize: function() {
    $(window).on('resize', function() {
      var width = $(window).width();

      if (width > 10) {
        $('.nav').removeClass('show-nav');
        $('#header').removeClass('show-nav');
        $('#navLabel').text('MENU');
      }
    });
  }
}

export default header;
