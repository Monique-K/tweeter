$(document).ready(function() {

$(".tweet").hover(
  function() {
    $(this).css('opacity', '1');
    $(this).find(".icons").css('display', 'inline-block')
  },
  function() {
    $(this).css('opacity', '0.6');
    $(this).find(".icons").css('display', 'none')

 })

})

