$(document).ready(function() {


$("body").on("mouseenter", ".tweet", function() {
    $(this).css('opacity', '1');
    $(this).find(".icons").css('display', 'inline-block')
  })

$("body").on("mouseleave", ".tweet", function() {
  $(this).css('opacity', '0.7');
  $(this).find(".icons").css('display', 'none')
  })

})