// load file passed into data-include attr
// example  <!-- <div data-include="index-bottom"></div> -->
$(function(){
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    $.get('html/' + $(this).data('include') + '.html', function (res) {
      $(this).after(res);
      $(this).remove();
    }.bind(this));
  });
});
// bind this