$(document).ready(function() {

  $(".new-tweet-form textarea").on("keyup", function() {
    const input = $(this).val()
    $("#counter").text(charCounter(input.length))
  })

  function charCounter(chars) {
    const charsLeft = 140 - chars;
    if (charsLeft < 1) {
      $(".counter").css("color", "red")
    } else {
      $(".counter").css("color", "black")
    }
    return charsLeft;
  }


});
