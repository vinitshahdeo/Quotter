var assert = require('assert');
var Quotes = require('inspirational-quotes');
var hashtags = require('../utils/hashtags');

describe('Quotes', function() {
  describe('getRandomQuote', function() {
    it('should return a random quote', function() {
      assert.equal(Quotes.getRandomQuote().length>0, true);
    });
  });
  describe('getQuote', function() {
    it('should return a JSON object with two fields', function() {
      assert.equal(Object.keys(Quotes.getQuote()).length, 2);
    });
  });
});

describe('Hashtags', function() {
  it('should return a hashtag',function(){
    assert.equal(hashtags.length, 36);
  });
});