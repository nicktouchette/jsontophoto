$(function() {
    $.ajax({
      url: "./pokemon.json"
    })
    .done(function(data) {
      data.forEach(function(image) {
        $("#image-container").append("<img src=" + image.img + ">");
      });
    });
});
