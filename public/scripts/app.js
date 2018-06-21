/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

$(document).ready(function() {
var newTweet;
loadTweets();

function createTweetElement(tweet) {
  let $tweet = $('#template-tweet article').clone();
    $tweet.find(".avatar").attr("src", tweet.user.avatars.small);
    $tweet.find('h1').text(tweet.user.name);
    $tweet.find('.handle').text(tweet.user.handle);
    $tweet.find(".tweet-content").text(tweet.content.text);
    $tweet.find(".tweet-date").text(tweet.created_at);
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
        renderTweets(data)
      }
  });
}

function loadLatestTweets(){
  $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'GET',
      success: function(data) {
        renderTweets(data.pop())
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
    $('error-message').prepend("Woah, calm down! That's too many characters!")
   } else {
     var newTweet = $(this).serialize();
     $.ajax({
        url: 'http://localhost:8080/tweets',
        method: 'POST',
        data: newTweet,
        success: function(response) {
          loadLatestTweets();
        }
      })
  }
  $(this).find("textarea").val("");
})

// Toggle new tweet section on "compose" click
$(".compose").click(function(){
  $(".new-tweet").slideToggle();
  $(".new-tweet-form textarea").focus().select();
});


})


