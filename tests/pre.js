var assert = require('assert');
var package = require('../package.json');


describe('Twit Bot', function() {
  describe('Author Verification', function() {
    it('should return name of author', function() {
      assert.equal(package.author, "Vinit Shahdeo <vinitshahdeo@gmail.com>");
    });
  });
  describe('Git URL Verification', function() {
    it('should return GitHub repository link', function() {
      assert.equal(package.repository.url, "git+https://github.com/vinitshahdeo/Quotter.git");
    });
  });
  describe('Homepage URL Verification', function() {
    it('should return link to homepage', function() {
      assert.equal(package.homepage, "https://vinitshahdeo.github.io/Quotter/");
    });
  });
  describe('License Verification', function() {
    it('should return license contained', function() {
      assert.equal(package.license, "MIT");
    });
  });
});
