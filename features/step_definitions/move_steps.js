var should = require('should')
  , Board = require('./../../lib/board')
  , Players = require('./../../lib/players')
  , Comparer = require('./../../lib/arraycompare');
  //, FindsWinner = require('./../../lib/finds_winner.js');

var myStepDefinitionsWrapper = function () {
  this.Given(/^there are no moves$/, function(callback) {
    this.players = new Players('John', 'Kate');
    this.board = new Board(this.players);

    callback();
  });

  this.When(/^I move to slot "([^"]*)"$/, function(slot, callback) {
    var that = this;
    this.board.pick(this.players, slot, function(snapshot) {
      that.moves = snapshot.moves();
    });

    callback();
  });

  this.When(/^the other player moves to "([^"]*)"$/, function(slot, callback) {
    var that = this;
    this.board.pick(this.players,slot,function(snapshot) {
      that.moves = snapshot.moves();
    }); 
    callback();
  });

  this.Then(/^there are (\d+) moves registered$/, function(number_of_moves, callback) {
    this.moves.length.should.equal(parseInt(number_of_moves));

    callback();
  });

  this.Then(/^this is the board \["([^"]*)","([^"]*)","([^"]*)"\]$/, function(arg1, arg2, arg3, callback) {
    var actual = [arg1,arg2,arg3];
    actual.compare(this.moves).should.be.true;
    callback();
  });

  this.Then(/^there is (\d+) move registered$/, function(number_of_moves, callback) {
    this.moves.length.should.equal(parseInt(number_of_moves));

    callback();
  });
};

module.exports = myStepDefinitionsWrapper;
