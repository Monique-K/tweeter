$(document).ready(function() {

//hover effects for tweets
$("body").on("mouseenter", ".tweet", function() {
    $(this).css('opacity', '1');
    $(this).find(".icons").css('display', 'inline-block')
  })

$("body").on("mouseleave", ".tweet", function() {
  $(this).css('opacity', '0.7');
  $(this).find(".icons").css('display', 'none')
  })

//hover effects for compose button
$("body").on("mouseenter", ".compose", function() {
    $(this).css('background-color', '#ffffff');
  })

$("body").on("mouseleave", ".compose", function() {
  $(this).css('background-color', '#fbfdfdbd');
  })

})
