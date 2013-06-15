// Generated by CoffeeScript 1.4.0
(function() {

  $(function() {
    $('.gridly').gridly({
      columns: 12
    });
    $('.gridly').gridly('draggable');
    return $('.gridly .brick').click(function(event) {
      var size;
      event.preventDefault();
      event.stopPropagation();
      $(this).toggleClass('small');
      $(this).toggleClass('large');
      if ($(this).hasClass('small')) {
        size = 140;
      }
      if ($(this).hasClass('large')) {
        size = 300;
      }
      $(this).data('width', size);
      $(this).data('height', size);
      return $('.gridly').gridly('layout');
    });
  });

}).call(this);
