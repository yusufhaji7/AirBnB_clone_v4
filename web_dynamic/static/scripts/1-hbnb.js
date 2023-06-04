$(document).ready(function () {
  const amenites = {};
  $('input:checkbox').click(function () {
    $(this).each(function () {
      if (this.checked) {
        amenites[$(this).data('id')] = $(this).data('name');
      } else {
        delete amenites[$(this).data('id')];
      }
    });
    if (Object.values(amenites).length > 0) {
      $('.amenities h4').text(Object.values(amenites).join(', '));
    } else {
      $('.amenities h4').html('&nbsp');
    }
  });
});
