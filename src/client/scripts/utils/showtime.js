import $ from 'jquery';

var showtime = {
  Intro: function() {
    $(document).ready(function() {
      const nodeList = document.querySelectorAll('.js-showtime')
      $.each(nodeList, (i, k) => { k.classList.add('showtime')})
    });
  }
}

export default showtime;
