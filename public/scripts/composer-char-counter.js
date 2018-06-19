$(document).ready(function() {
  console.log("ready")



  let listener = $("textarea").on("keypress", function() {
    let value = $(this).val()
    $(".counter").text(charCounter(value.length))
  })

  function charCounter(chars) {
    $charsLeft = 140 - chars;
    return $charsLeft;
  }

});
