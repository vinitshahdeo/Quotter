//@author : vinitshahdeo
const Twit = require('twit');
const base64 = require('node-base64-image');
const config = require('./config');
const hashtags = require('../utils/hashtags');
const quote = require('inspirational-quotes');
const today = require('../utils/today');

/**
 * @description Used to create a twitter client
 */
var client = new Twit({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token: config.access_token,
    access_token_secret: config.access_token_secret
});

/**
 *
 * @param {string} imageURL URL of a random image fetched using Unspalsh API
 * @description encodes the image to base64
 */
function encodeImage(imageURL) {

    base64.encode(imageURL, {
        string: true
    }, postImage);
}


/**
 *
 * @param {object} error represents the error while posting the image to the twitter
 * @param {object} image represents the encoded image
 * @description this function uploads the image to the twitter.
 */
function postImage(error, image) {
    if (error) {
        console.log(error);
    }

    client.post('media/upload', {
        media_data: image
    }, getTweet);
}


/**
 *
 * @param {object} error error occured if any
 * @param {object} media contains the media file i.e image to be tweeted
 * @param {object} result final outcome
 * @description this function fetches the random quotes along with greetings and hashtags to tweet
 */
function getTweet(error, media, result) {
    var quoteToTweet = quote.getRandomQuote();
    var hashtag = hashtags[Math.floor(Math.random() * hashtags.length)];
    var greetings = '\nHappy ' + today.getDay() + '!\n';

    if (!error) {
        var messageToTweet = quoteToTweet +' '+ greetings +'#' +hashtag;
        console.log(messageToTweet); //quote to be tweeted
        var status = {
            status: messageToTweet,
            media_ids: media.media_id_string // Pass the media id string
        }
        // post the tweet
        tweetNow(status);

    }
}

/**
 *
 * @param {object} status tweet to be posted
 * @description it posts the tweet to the timeline
 */
function tweetNow(status){
    // Lets tweet it
    client.post('statuses/update', status, function(error, result) {
        if (error) {
            console.log(error)
        } else {
            console.log('\nBoom! You have just tweeted :)\n')
        }

    });
}

/**
 *
 * @description Sends dms to all followers
 */
function dmFollowers(){
    // Get a list of our followers ID's
    client.get('followers/ids',function(error, results) {
        if(error) {
            console.log(error);
        } else {
            var followers = results.ids;
            var quoteToTweet = quote.getRandomQuote();

            // Send a DM for each follower
            followers.forEach(function(f){
                var obj = {type: "message_create",
                           message_create: {
                               target: {
                                   recipient_id: f },
                                   message_data: {
                                       text: quoteToTweet }
                                   }
                               };

                client.post('direct_messages/events/new', {event: obj}, function(error, result){
                    if(error) {
                        console.log(error);
                    }
                });
            })
        }
    })
}

/**
 * @description API to fetch random images
 */
var imageURL = 'https://source.unsplash.com/featured/?motivation';

// encode the image to base64
encodeImage(imageURL);
