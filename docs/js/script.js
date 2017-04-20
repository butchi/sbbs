$(function() {
  var ENDPOINT = window.ENDPOINT;

  var $form = $('[data-js-id="form"]');
  $form.attr('action', ENDPOINT);

  $form.on('submit', function(evt) {
    evt.preventDefault();

    var data = {
      name: $form.find('[name="name"]').val(),
      email: $form.find('[name="email"]').val(),
      body: $form.find('[name="body"]').val(),
    };

    console.log(data);

    $.ajax({
      url: ENDPOINT,
      method: 'GET',
      dataType: 'jsonp',
      data: data,
      success: function(res) {
        console.log(res);
      }
    });
  });
});
