$(function() {
  var ENDPOINT = window.ENDPOINT;

  var $form = $('[data-js-id="form"]');
  $form.attr('action', ENDPOINT);

  var $dispName = $('.disp-name');
  var $dispImage = $('.disp-image');

  var file;

  var $image = $form.find('[name="image"]');
  $image.on('change', (evt) => {
    file = evt.target.files[0];
  });

  $form.on('submit', function(evt) {
    evt.preventDefault();

    var reader = new FileReader();
    reader.addEventListener('load', (evt) => {
      var data = {
        name: $form.find('[name="name"]').val(),
        email: $form.find('[name="email"]').val(),
        body: $form.find('[name="body"]').val(),
        image: reader.result,
      };

      console.log(data);

      $.ajax({
        url: ENDPOINT,
        method: 'GET',
        dataType: 'jsonp',
        data: data,
        success: function(res) {
          console.log(res);

          $dispName.html(res.name);
          $dispImage.html(`<p><img src="${res.image}"</p>`);
        }
      });
    });

    reader.readAsDataURL(file);
  });
});





  // function handleFileSelect(evt) {
  //   var files = evt.target.files; // FileList object

  //   // files is a FileList of File objects. List some properties.
  //   var output = [];
  //   for (var i = 0, f; f = files[i]; i++) {
  //     output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
  //                 f.size, ' bytes, last modified: ',
  //                 f.lastModifiedDate.toLocaleDateString(), '</li>');
  //   }
  //   document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  // }

  // document.getElementById('files').addEventListener('change', handleFileSelect, false);
