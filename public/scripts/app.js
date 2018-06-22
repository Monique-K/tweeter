$(document).ready(function() {
var newTweet;
loadTweets();

function createTweetElement(tweet) {
  // let tweetDate = moment().startOf('day').fromNow()
  let $tweet = $('#template-tweet article').clone();
    $tweet.find(".avatar").attr("src", tweet.user.avatars.small);
    $tweet.find('h1').text(tweet.user.name);
    $tweet.find('.handle').text(tweet.user.handle);
    $tweet.find(".tweet-content").text(tweet.content.text);
    $tweet.find(".tweet-date").text(moment().fromNow());
    return $tweet;
}

function renderTweets(data) {
  if (Array.isArray(data)) {
    data.forEach(function(tweet) {
      $('#tweet-container').prepend(createTweetElement(tweet));
    })
  } else {
    $('#tweet-container').prepend(createTweetElement(data));
  }
}

//fetching tweets from the web page
function loadTweets(){
  $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'GET',
      success: function(data) {
        $("#tweet-container").empty();
        renderTweets(data)
      }
  });
}

//Posting a tweet
$(".new-tweet-form").on("submit", function(event) {
   event.preventDefault();
   var textAreaInput = $(this).find("textarea").val()
   if (textAreaInput === "" || textAreaInput === null) {
    $('.error-message').prepend("You can't post an empty tweet, silly!")
   } else if (textAreaInput.length > 140) {
    $('.error-message').prepend("Woah, calm down! That's too many characters!")
   } else {
     var newTweet = $(this).serialize();
     $.ajax({
        url: 'http://localhost:8080/tweets',
        method: 'POST',
        data: newTweet,
        success: function(response) {
          loadTweets();
        }
      })
     $(this).find("textarea").val("");
     $('.error-message').text("");
  }
})


// Toggle new tweet section on "compose" click
$(".compose").click(function(){
  $(".new-tweet").slideToggle();
  $(".new-tweet-form textarea").focus().select();
});


})


/*
----------------To fix:
fix date format

*/