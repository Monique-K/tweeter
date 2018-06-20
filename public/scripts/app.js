/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

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


var newTweet;

function createTweetElement(tweet) {
  let $tweet = $('#template-tweet article').clone().addClass(".tweet");
    $tweet.find(".avatar").text(tweet.user.avatars.regular);
    $tweet.find('h1').text(tweet.user.name);
    $tweet.find('.handle').text(tweet.user.handle);
    $tweet.find(".tweet-content").text(tweet.content.text);
    $tweet.find(".tweet-date").text(tweet.created_at);
    return $tweet;
}

function renderTweets(data) {
  data.forEach(function(tweet) {
    $('#tweet-container').append(createTweetElement(tweet));
  })
}

//Posting a tweet
$("form.new-tweet-form").on("submit", function(event) {
   event.preventDefault();
   return $(this).serialize();
});

//fetching tweets from the web page
function loadTweets(){
  $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'GET',
      success: function(data){
        renderTweets(data)
      }
  });
}

loadTweets();

});

