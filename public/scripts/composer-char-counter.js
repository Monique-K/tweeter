$(document).ready(function() {
  console.log("ready")

  $("textarea").on("keyup", function() {
    const value = $(this).val()
    $("#counter").text(charCounter(value.length))
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
